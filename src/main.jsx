import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './Layout/Main';
import Home from './pages/Home/Home';
import AuthProvider from './AuthProvider/AuthProvider';
import About from './pages/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <p>error page</p>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
