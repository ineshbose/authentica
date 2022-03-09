import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import useAppContext from '../../../lib/AppContext';

const DocDetails: NextPage = () => {
  const { user } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  return <div></div>;
};

export default DocDetails;
