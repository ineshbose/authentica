import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    email: 'alice@authentica.io',
    password: 'password123',
  },
  {
    email: 'bob@authentica.io',
    password: 'password123',
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
