import { render, screen } from '@testing-library/react';
import { App } from './App';
import React from 'react';

test('renders base component', () => {
  render(<App />);
  // todo: mock store
  const linkElement = screen.getAllByRole('main-app');
  expect(linkElement).toBeInTheDocument();
});
