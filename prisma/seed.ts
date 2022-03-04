import { PrismaClient, Prisma } from '@prisma/client';
import { getKeyPair } from '../lib/keygen';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    email: 'alice@authentica.io',
    password: 'password123',
    ...getKeyPair(),
  },
  {
    email: 'bob@authentica.io',
    password: 'password123',
    ...getKeyPair(),
  },
];

export default async function seed() {
  try {
    console.log(`Start seeding ...`);
    userData.forEach(async (u) => {
      const user = await prisma.user.create({
        data: u,
      });
      console.log(`Created user with id: ${user.id}`);
    });
    console.log(`Seeding finished.`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
