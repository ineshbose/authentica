import '../styles/globals.css';
import { AppProps } from 'next/app';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { CssBaseline, GeistProvider } from '@geist-ui/core';

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:3000' }),
  cache: new InMemoryCache(),
});

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
