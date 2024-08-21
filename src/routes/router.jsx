import React from 'react';
import { createBrowserRouter, Route } from 'react-router-dom';
import App from '../App';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

export default router;
