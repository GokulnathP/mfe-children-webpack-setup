import React from 'react';
import ApolloClientProvider from './ApolloClientProvider';
import TranslationProvider from './TranslationProvider';

function Providers({ children }) {
  return (
    <TranslationProvider>
      <ApolloClientProvider>{children}</ApolloClientProvider>
    </TranslationProvider>
  );
}

export default Providers;
