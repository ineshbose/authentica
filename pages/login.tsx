import React, { useEffect, useState } from 'react';
import { Button, Input, Spacer } from '@geist-ui/core';
import { NextPage } from 'next';
import Router from 'next/router';
import useAppContext from '../lib/AppContext';

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    user,
    helpers: { login },
  } = useAppContext();

  useEffect(() => {
    if (user) {
      Router.push('/dashboard');
    }
  }, [user]);

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
      <Button
        auto
        type="success"
        onClick={() =>
          login({
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

export default Login;
