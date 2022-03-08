import React from 'react';
import { Button } from '@geist-ui/core';
import { useRouter } from 'next/router';
import { PenTool } from '@geist-ui/icons';

const Header: React.FC<unknown> = () => {
  const router = useRouter();

  return (
    <header
      className="
        fixed
        w-full
        z-30
        transition
        duration-300
        ease-in-out
        bg-geist-background
        md:opacity-90
        border-b border-accent2
      "
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Button
              type="abort"
              icon={<PenTool />}
              className="
                inline-flex
                cursor-pointer
                items-center
                justify-center
                border border-transparent
                rounded
                leading-snug
                transition
                duration-150
                ease-in-out
                text-accent8
              "
              scale={2}
              auto
              onClick={() => router.push('/')}
            >
              Authentica
            </Button>
          </div>

          {router.pathname !== '/dashboard' ? (
            <Button
              type="secondary"
              onClick={() => router.push('/dashboard')}
              auto
            >
              {' '}
              Dashboard{' '}
            </Button>
          ) : (
            <Button auto onClick={() => router.push('/logout')}>
              {' '}
              Logout{' '}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
