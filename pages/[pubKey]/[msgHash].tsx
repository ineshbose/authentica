import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useVerifyQuery } from '../../graphql';

type URLQuery = {
  pubKey: string;
  msgHash: string;
};

const Verify: NextPage = () => {
  const router = useRouter();
  const result = useVerifyQuery({ variables: router.query as URLQuery }).data
    ?.verify;

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '4rem 0',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        alt={result ? 'Verified' : 'Invalid'}
        width="100px"
        height="20px"
        src={
          result
            ? 'https://img.shields.io/badge/signature-verified-success'
            : 'https://img.shields.io/badge/signature-invalid-critical'
        }
      />
    </div>
  );
};

export default Verify;
