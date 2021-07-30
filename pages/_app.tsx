import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/api/graphql',
});

const client = new ApolloClient({
  link: from([httpLink]),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp;
