import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import roots from './layouts/roots/roots.jsx';
import home from './components/home.jsx';
import Login from './components/login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: roots,
    children: [
      {
        index: true,
        Component: home
      },
      {
        path:'/login',
        Component: Login
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
