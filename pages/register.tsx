import { Button, Input, Spacer } from '@geist-ui/core';
import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Register: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3 className={styles.title}>Authentica</h3>
        <Spacer h={1}></Spacer>
        <Input
          placeholder="Email"
          style={{ height: '160px', width: '200px' }}
        />{' '}
        <Spacer h={1} />
        <Input.Password placeholder="Password" /> <Spacer h={1} />
        <Input.Password placeholder="Confirm Password" /> <Spacer h={1} />
        <Button auto type="success">
          Submit
        </Button>
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

export default Register;
