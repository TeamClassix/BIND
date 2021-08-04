/**
 * @jest-environment jsdom
 */

import 'regenerator-runtime/runtime';
import React from 'react';
import { render, screen, waitFor, getByText } from '@testing-library/react';

import StyleSelect from './StyleSelect.jsx';

describe('StyleSelect', () => {
  test('renders App component', async () => {
    render(<StyleSelect info={25167} />);

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('inside settimeout');
        screen.debug();
        resolve();
      }, 4500);

    });

    // setTimeout(() => {
    //   console.log('inside settimeout')
    //   screen.debug()
    // }, 5000);

    // await waitFor(() => expect(styl.getByText("styledile")).toBeInTheDocument());



    //here's  afunction however long the default has happened
  });
});

