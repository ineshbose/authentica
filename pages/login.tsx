import React, { useEffect, useState } from 'react';
import { Button, Input, Spacer } from '@geist-ui/core';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { UserCheck } from '@geist-ui/icons';
import useAppContext from '../lib/AppContext';

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    user,
    helpers: { login },
  } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  return (
    <div className="pt-24 text-center">
      <div className="mx-auto max-w-5xl pt-8">
        <UserCheck className="h-20 w-20 align-center block mx-auto mb-6" />
        <h1
          className="
            text-2xl
            leading-tighter
            tracking-tighter
            mb-4
          "
        >
          Login
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-4 my-12">
        <Input
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />{' '}
        <Spacer h={1} />
        <Input.Password
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
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
          Login
        </Button>
        <p className="text-md mt-8">Dont have an account?</p>
        <div className="flex flex-wrap justify-center">
          <Button auto type="warning" onClick={() => router.push('/register')}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
