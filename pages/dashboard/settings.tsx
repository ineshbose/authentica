import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import useAppContext from '../../lib/AppContext';

const Settings: NextPage = () => {
  const { user } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  return (
    <div>
      <div className="border-b border-accent2">
        <div className="mx-auto max-w-5xl my-12">
          <p className="text-3xl font-medium">Settings</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto my-12 md:px-2 px-4"></div>
    </div>
  );
};

export default Settings;
