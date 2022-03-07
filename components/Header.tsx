import React from 'react';
import NextLink from 'next/link';
import { Button, useTheme } from '@geist-ui/core';
import Router from 'next/router';

const Header: React.FC<unknown> = () => {
  const theme = useTheme();

  return (
    <>
      <div className="menu-wrapper">
        <nav className="menu">
          <div className="content">
            <div className="logo">
              <NextLink href={`/`}>
                <a aria-label="Go Home">Authentica</a>
              </NextLink>
            </div>

            <div className="controls">
              <Button
                auto
                type="secondary"
                onClick={() => Router.push('/dashboard')}
              >
                Dashboard
              </Button>
            </div>
          </div>
        </nav>
      </div>

      <style jsx>{`
        .menu-wrapper {
          height: var(--geist-page-nav-height);
        }
        .menu {
          position: fixed;
          top: 0;
          height: 68px;
          width: 100%;
          backdrop-filter: saturate(180%) blur(5px);
          box-shadow: ${theme.type === 'dark'
            ? '0 0 0 1px #333'
            : '0 0 15px 0 rgba(0, 0, 0, 0.1)'};
          z-index: 999;
        }
        nav .content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1000px;
          height: 100%;
          margin: 0 auto;
          user-select: none;
          padding: 0 ${theme.layout.gap};
        }
        .logo {
          flex: 1 1;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .logo a {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          font-size: 2rem;
          font-weight: 500;
          color: inherit;
          height: 28px;
        }
        .logo :global(.image) {
          border: 1px solid ${theme.palette.border};
          border-radius: 2rem;
        }
        .controls {
          flex: 1 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .controls :global(.menu-toggle) {
          display: flex;
          align-items: center;
          min-width: 40px;
          height: 40px;
          padding: 0;
        }
      `}</style>
    </>
  );
};

export default Header;
