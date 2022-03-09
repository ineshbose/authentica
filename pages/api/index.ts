import { ApolloServer } from 'apollo-server-micro';
import { NextApiHandler } from 'next';
import { RequestHandler } from 'micro';
import { makeSchema, nonNull, objectType, stringArg, intArg } from 'nexus';
import path from 'path';
import cors from 'micro-cors';
import prisma from '../../lib/prisma';
import { getKeyPair, hash, signDoc, verifyDoc } from '../../lib/keygen';

prisma.user.findMany().then(console.log);

const User = objectType({
  name: 'User',
  definition(t) {
    t.int('id');
    t.string('email');
    t.string('password');
    t.string('pubkey');
  },
});
const Document = objectType({
  name: 'Document',
  definition(t) {
    t.string('id');
    t.int('userId');
    t.string('signature');
  },
});

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.string('hello', {
      resolve: () => {
        return 'hi';
      },
    });
    t.list.field('getDocuments', {
      type: 'Document',
      args: {
        userId: nonNull(intArg()),
      },
      resolve: (_, { userId }) => {
        return prisma.document.findMany({
          where: { userId },
        });
      },
    });
    t.boolean('verify', {
      args: {
        pubKey: nonNull(stringArg()),
        msgHash: nonNull(stringArg()),
      },
      resolve: async (_, { pubKey, msgHash }) => {
        const document = await prisma.document.findFirst({
          where: { id: msgHash },
        });
        if (document) {
          const { signature } = document;
          const { name, ...sign } = JSON.parse(signature);
          try {
            return verifyDoc(pubKey, msgHash, sign);
          } catch (e) {
            console.log(e);
            return false;
          }
        }
        return false;
      },
    });
  },
});

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.field('register', {
      type: 'User',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: (_, { email, password }) => {
        return prisma.user.create({
          data: {
            email,
            password,
            ...getKeyPair(),
          },
        });
      },
    });
    t.field('login', {
      type: 'User',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_, { email, password }) => {
        const user = await prisma.user.findFirst({
          where: {
            email,
            password,
          },
        });

        return user;
      },
    });
    t.field('addDocument', {
      type: 'Document',
      args: {
        userId: nonNull(intArg()),
        name: nonNull(stringArg()),
      },
      resolve: async (_, { userId, name }) => {
        const user = await prisma.user.findUnique({
          where: { id: userId },
        });
        const signature = signDoc(user?.privkey as string, name);
        const document = await prisma.document.create({
          data: {
            id: hash(`${name}${new Date().toISOString()}`),
            userId,
            signature,
          },
        });
        await prisma.user.update({
          where: { id: userId },
          data: {
            documents: {
              connect: {
                id: document.id,
              },
            },
          },
        });
        return document;
      },
    });
    t.field('removeDocument', {
      type: 'Document',
      args: {
        id: nonNull(stringArg()),
        userId: nonNull(intArg()),
      },
      resolve: async (_, { id, userId }) => {
        await prisma.user.update({
          where: { id: userId },
          data: {
            documents: {
              deleteMany: [{ id }],
            },
          },
        });
        return prisma.document.delete({
          where: { id },
        });
      },
    });
  },
});

export const schema = makeSchema({
  types: [Query, Mutation, User, Document],
  outputs: {
    typegen: path.join(process.cwd(), 'graphql/nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'graphql/schema.graphql'),
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({ schema });

let apolloServerHandler: NextApiHandler;

async function getApolloServerHandler() {
  if (!apolloServerHandler) {
    await apolloServer.start();

    apolloServerHandler = apolloServer.createHandler({
      path: '/api',
    });
  }

  return apolloServerHandler;
}

const handler: NextApiHandler = async (req, res) => {
  const apolloHandler = await getApolloServerHandler();

  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }

  // eslint-disable-next-line consistent-return
  return apolloHandler(req, res);
};

export default cors()(<RequestHandler>handler);
