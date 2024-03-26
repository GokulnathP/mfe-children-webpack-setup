import React from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Providers from './providers';

function App() {
  return (
    <Providers>
      <Header titleKey="greet" />
      <Button />
    </Providers>
  );
}

export default App;
