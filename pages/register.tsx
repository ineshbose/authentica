import React, { useState } from 'react';
import { Button, Input, Spacer } from '@geist-ui/core';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import useAppContext from '../lib/AppContext';

const Register: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {
    user,
    helpers: { register },
  } = useAppContext();
  const router = useRouter();

  if (user) {
    router.push('/dashboard');
  }

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
        onClick={() =>
          register({
            email,
            password,
          })
        }
      >
        Submit
      </Button>
    </div>
  );
};

export default Register;
