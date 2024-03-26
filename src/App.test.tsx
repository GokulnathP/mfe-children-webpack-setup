import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
  it('should render header with greeting', () => {
    const { getByText } = render(<App />);

    expect(getByText('Hello User')).toBeInTheDocument();
    expect(getByText('Welcome to React MFE')).toBeInTheDocument();
  });
});
