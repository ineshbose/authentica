import { Button, Input, Spacer } from '@geist-ui/core';
import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { useRegisterMutation } from '../src/generated/graphql';
import styles from '../styles/Home.module.css';

const Register: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [register] = useRegisterMutation();

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
        <Input.Password
          value={confirmPassword}
          placeholder="Confirm Password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />{' '}
        <Spacer h={1} />
        <Button
          auto
          type="success"
          onClick={async (e) => {
            e.preventDefault();
            console.log('form submitted');
            console.log(email, password);
            const response = await register({
              variables: {
                email,
                password,
              },
            });
            console.log(response);
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

export default Register;
