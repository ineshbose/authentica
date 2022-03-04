import React, { useState } from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { CssBaseline, GeistProvider } from '@geist-ui/core';
import client from '../graphql/apollo-client';
import { ContextProvider } from '../lib/AppContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [themeType, setThemeType] = useState<'light' | 'dark'>('light');

  return (
    <ApolloProvider client={client}>
      <ContextProvider>
        <GeistProvider themeType={themeType}>
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </GeistProvider>
      </ContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
