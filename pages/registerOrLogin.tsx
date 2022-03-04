import { Button, Grid, Page, Spacer } from '@geist-ui/core';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Page.Header>
        <Grid.Container gap={1.5} justify="center">
          <Grid>
            <h1>Authentica</h1>
          </Grid>
          <Grid>
            <Link href="/home" passHref>
              <Button type="success">Dashboard</Button>
            </Link>
          </Grid>
        </Grid.Container>
      </Page.Header>
      <main className={styles.main}>
        <h2>
          Authentica is a service that allows signing online public documents
          using a key system.
          <p>If you have an account please Login , if not please register.</p>
        </h2>
        <Spacer h={1}></Spacer>
        <Grid.Container gap={1.5} justify="center">
          <Grid xs={6} md={3}>
            <Link href="/login" passHref>
              <Button type="success">Log in</Button>
            </Link>
          </Grid>
          <Grid xs={6} md={2}>
            <Link href="register" passHref>
              <Button type="success">Register</Button>
            </Link>
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
