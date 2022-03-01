import { PrismaClient } from '@prisma/client';

declare global {
  namespace NodeJS {
    interface Global {
      prisma: any;
    }
  }
  // eslint-disable-next-line vars-on-top, no-var
  var prisma: PrismaClient;
}
