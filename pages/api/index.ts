import { ApolloServer } from 'apollo-server-micro';
import { NextApiHandler } from 'next';
import { RequestHandler } from 'micro';
import { makeSchema, nonNull, objectType, stringArg } from 'nexus';
import path from 'path';
import cors from 'micro-cors';
import prisma from '../../lib/prisma';

const User = objectType({
  name: 'User',
  definition(t) {
    t.int('id');
    t.string('name');
    t.string('password');
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
  },
});

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.field('signupUser', {
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
          },
        });
      },
    });
  },
});

export const schema = makeSchema({
  types: [Query, Mutation, User],
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
