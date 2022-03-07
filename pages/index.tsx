import { Button, Grid, Spacer } from '@geist-ui/core';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

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
      <h1>The Online Signature Authentication System</h1>
      <p>
        Authentica is a service that allows signing online public documents
        using a key system.
      </p>
      <Spacer h={1}></Spacer>
      <Grid.Container gap={1.5} justify="center">
        <Button auto type="secondary" onClick={() => router.push('/dashboard')}>
          Get Started
        </Button>
        <Button auto onClick={() => router.push('/tutorial')}>
          How does it work?
        </Button>
      </Grid.Container>
    </div>
  );
};

export default Home;
