import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layouts/root/root.jsx';
import Home from './components/Home/home.jsx';
import Login from './components/Login/login.jsx';
import Register from './components/Register/register.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component:Root,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path: 'login',
        Component:Login
      },
      {
        path: 'register',
        Component:Register
      }
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
