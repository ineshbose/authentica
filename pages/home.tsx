import { Button, Card, Grid, Spacer } from '@geist-ui/core';
import { FilePlus, Key, Plus } from '@geist-ui/icons';
import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3 className={styles.title}>Authentica</h3>
        <Spacer h={1}></Spacer>

        <Grid.Container gap={2} justify="center" height="100px">
          <Grid xs={6}>
            <Card shadow width="200px" height="200px">
              <Key size={100} style={{ textAlign: 'center' }} />
              <Spacer h={1}></Spacer>
              <Button icon={<Plus />} type="success">
                Add Key
              </Button>
            </Card>
          </Grid>
          <Grid xs={6}>
            <Card shadow width="200px" height="200px">
              <FilePlus size={100} />
              <Spacer h={1}></Spacer>
              <Button icon={<Plus />} type="success">
                Sign Document
              </Button>
            </Card>
          </Grid>
        </Grid.Container>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
