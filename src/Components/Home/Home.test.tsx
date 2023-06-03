import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('Renders elements in Home', () => {
    render(<Home />);
    const titleElement = screen.getByText(/Welcome to monsters-db/i);
    expect(titleElement).toBeInTheDocument();
    const pElement = screen.getByText(/This app allows users to search for fictional monsters/i);
    expect(pElement).toBeInTheDocument();
  });
  