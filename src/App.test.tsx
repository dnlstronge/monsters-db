import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('Renders title element', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const titleElement = screen.getByText(/Monsters DB/i);
  expect(titleElement).toBeInTheDocument();
});
test("Panel has renderered", () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const panelElement = screen.getByTestId("panel")
  expect(panelElement).toBeInTheDocument()
})
