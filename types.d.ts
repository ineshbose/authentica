import { Document, PrismaClient } from '@prisma/client';

declare global {
  namespace NodeJS {
    interface Global {
      prisma: any;
    }
  }
  // eslint-disable-next-line vars-on-top, no-var
  var prisma: PrismaClient;
}

type FrontendDocument = Omit<Document, 'signature'> & {
  signature: {
    r: string;
    s: string;
    recoveryParam: number;
    name: string;
  };
};
