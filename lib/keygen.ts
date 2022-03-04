import elliptic from 'elliptic';
import sha3 from 'js-sha3';

// let elliptic = require('elliptic');
// let sha3 = require('js-sha3');
// let ec = new elliptic.ec('secp256k1');
// let keyPair = ec.genKeyPair();
// let privKey = keyPair.getPrivate("hex");
// let pubKey = keyPair.getPublic().encodeCompressed("hex");
// console.log(`Private key: ${privKey}`);
// console.log("Public key :", pubKey);
// let msg = 'Message for signing';
// let msgHash = sha3.keccak256(msg);
// let signature = ec.sign(msgHash, privKey, "hex", {canonical: true});
// console.log(`Msg: ${msg}`);
// console.log(`Msg hash: ${msgHash}`);
// // console.log("Signature:", signature);
// console.log(`Endpoint: https://authentica-io.vercel.app/${pubKey}/${msgHash}`)
// let validSig = ec.verify(msgHash, signature, pubKey, "hex");
// console.log("Signature valid?", validSig);

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