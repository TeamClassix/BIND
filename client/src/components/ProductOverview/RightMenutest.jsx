/**
 * @jest-environment jsdom
 */

 import 'regenerator-runtime/runtime';
 import React from 'react';
 import { render, screen, waitFor } from '@testing-library/react';

 import RightMenu from './RightMenu';

 describe('RightMenu', () => {
   test('renders App component', async() => {
     render(<RightMenu currentZoom={0} />);
     await waitFor(() => screen.debug());


     //here's  afunction however long the default has happened
   });
 });

