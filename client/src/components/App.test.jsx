/**
 * @jest-environment jsdom
 */


import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App.jsx';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    screen.debug();
  });
});


