import React from 'react';
import Image from 'next/image';
import { useTheme, Text, Link } from '@geist-ui/core';

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <footer>
        <Text>
          Powered by{' '}
          <Link
            href="https://vercel.com/"
            target="_blank"
            rel="noopener"
            underline
          >
            <Image
              src="https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/180x180.png"
              alt="Vercel Logo"
              width={16}
              height={16}
            />
            Vercel
          </Link>
        </Text>
        <Text>
          Made with{' '}
          <Link
            href="https://geist-ui.dev/"
            target="_blank"
            rel="noopener"
            underline
          >
            <Image
              src="https://geist-ui.dev/images/logo.png"
              alt="Geist Logo"
              width={16}
              height={16}
            />
            Geist
          </Link>
        </Text>
      </footer>
      <style jsx>{`
        footer {
          border-top: 1px solid ${theme.palette.border};
          padding: ${theme.layout.gapQuarter} ${theme.layout.gap};
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Footer;
