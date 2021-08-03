import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
});

export const apolloClient = new ApolloClient({
  link: from([httpLink]),
  cache: new InMemoryCache(),
});
