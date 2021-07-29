/**
 * @jest-environment jsdom
 */

import 'regenerator-runtime/runtime';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import App from './App.jsx';

describe('App', () => {
  test('renders App component', async() => {
    render(<App />);
    await waitFor(() => screen.debug());


    //here's  afunction however long the default has happened
  });
});


// describe('App', () => {
//   test('renders App component', async () => {
//     let testing = await (render(<App />));

//     let v;
//     try {
//       v = await (render(<App />));
//     } catch(e) {
//       console.log(e, 'does this give anything');
//       v = await downloadFallbackData(url)
//     }

//     console.log(typeof(Promise), 'this is something?')
//     return v;

//   });
// });
