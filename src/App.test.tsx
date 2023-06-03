import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders title element', () => {
  render(<App />);
  const titleElement = screen.getByText(/Monsters DB/i);
  expect(titleElement).toBeInTheDocument();
});
