import '../styles/globals.css';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { CssBaseline, GeistProvider } from '@geist-ui/core';
import client from '../graphql/apollo-client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <GeistProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </GeistProvider>
    </ApolloProvider>
  );
}

export default MyApp;
