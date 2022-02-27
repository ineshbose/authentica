import { Button, Grid, Spacer } from '@geist-ui/core';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3 className={styles.title}>Authentica</h3>
        <p>
          Authentica is a service that allows signing online public documents
          using a key system.
        </p>
        <p>If you have an account please Login , if not please register.</p>
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
