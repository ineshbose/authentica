import React from 'react';
import { Github } from '@geist-ui/icons';

const Footer: React.FC = () => {
  return (
    <div className="w-full z-30 bg-accent1 border-t border-accent2">
      <footer className="max-w-5xl mx-auto">
        <div className="border-b border-accent2 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* <CommonTheme /> */}
          </div>
        </div>

        <div
          className="
            flex flex-col
            md:flex-row
            justify-between
            items-center
            py-10
            gap-4
          "
        >
          <div className="text-accent6 text-sm text-center py-2">
            Built with Geist. Powered by Vercel.
          </div>

          <a
            href="https://github.com/ineshbose/authentica"
            className="text-accent8 hover:text-accent4"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
