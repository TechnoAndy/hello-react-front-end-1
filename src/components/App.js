import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Greeting from './Greeting';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Greeting />} />),
);

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default App;
