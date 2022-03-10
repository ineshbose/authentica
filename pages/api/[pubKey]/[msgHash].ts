import { NextApiRequest, NextApiResponse } from 'next';
import { verifyDoc } from '../../../lib/keygen';
import prisma from '../../../lib/prisma';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { pubKey, msgHash } = req.query;
  const document = await prisma.document.findFirst({
    where: { id: msgHash as string },
  });
  console.log(req.query);
  if (document) {
    const { signature } = document;
    const { name, ...sign } = JSON.parse(signature);
    const result = verifyDoc(pubKey as string, msgHash as string, sign);

    return res.status(result ? 200 : 400).json({
      schemaVersion: 1,
      label: 'signature',
      message: result ? 'verified' : 'invalid',
      color: result ? 'success' : 'red',
      namedLogo: name,
    });
  }
  return res.status(400).json({
    schemaVersion: 1,
    label: 'signature',
    message: 'invalid',
    color: 'red',
  });
};

export default handler;
