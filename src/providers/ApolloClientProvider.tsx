import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';

function ApolloClientProvider({ children }) {
  const client = new ApolloClient({
    uri: 'https://api.mocki.io/v2/c4d7a195/graphql',
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ApolloClientProvider;
