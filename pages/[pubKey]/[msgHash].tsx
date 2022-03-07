import { NextPage } from 'next';
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
      <h1>{`${result}`}</h1>
    </div>
  );
};

export default Verify;
