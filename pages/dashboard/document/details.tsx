import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import useAppContext from '../../../lib/AppContext';

const DocDetails: NextPage = () => {
  const { user } = useAppContext();
  const router = useRouter();

  if (!user) {
    router.push('/login');
  }

  return <div></div>;
};

export default DocDetails;
