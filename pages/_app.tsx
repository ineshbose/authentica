import '../styles/globals.css';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { CssBaseline, GeistProvider } from '@geist-ui/core';
import client from '../graphql/apollo-client';
import { ContextProvider } from '../lib/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ContextProvider>
        <GeistProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </GeistProvider>
      </ContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
