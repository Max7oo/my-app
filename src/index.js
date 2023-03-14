import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js';
import Maatje from './pages/maatje.js';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "maatje",
    element: <Maatje />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <RouterProvider router={router} />
);