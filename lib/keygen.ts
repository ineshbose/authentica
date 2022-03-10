import elliptic from 'elliptic';
import sha3 from 'js-sha3';

// eslint-disable-next-line new-cap
const ec = new elliptic.ec('secp256k1');

export const getKeyPair = () => {
  const keyPair = ec.genKeyPair();
  return {
    pubkey: keyPair.getPublic().encodeCompressed('hex'),
    privkey: keyPair.getPrivate('hex'),
  };
};

export const hash = (msg: string) => sha3.keccak256(msg);

export const signDoc = (privKey: string, name: string, time: string) =>
  JSON.stringify({
    ...ec.sign(
      sha3.keccak256(`${name}${time}`),
      privKey as unknown as Buffer,
      'hex',
      {
        canonical: true,
      }
    ),
    name,
  });

export const verifyDoc = (
  pubKey: string,
  msgHash: string,
  signature: elliptic.ec.Signature
) => {
  try {
    return ec.verify(msgHash, signature, pubKey as unknown as Buffer, 'hex');
  } catch (e) {
    console.log(e);
    return false;
  }
};
