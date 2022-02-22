import { useState } from 'react';
import { Button, Input, Spacer } from '@geist-ui/core';
import { NextPage } from 'next';
import Image from 'next/image';
import { useLoginMutation } from '../graphql';
import styles from '../styles/Home.module.css';

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3 className={styles.title}>Authentica</h3>
        <Spacer h={1}></Spacer>
        <Input
          value={email}
          placeholder="Email"
          style={{ height: '160px', width: '200px' }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{' '}
        <Spacer h={1} />
        <Input.Password
          value={password}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{' '}
        <Spacer h={1} />
        <Button
          auto
          type="success"
          onClick={async () => {
            const response = await login({
              variables: {
                email,
                password,
              },
            });
            console.log(response.data);
          }}
        >
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

export default Login;
