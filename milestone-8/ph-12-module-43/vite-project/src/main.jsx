import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/root/root.jsx';
import Header from './components/header/header.jsx';
import Mobiles from './components/mobiles/mobiles.jsx';
import Laptop from './components/laptops/laptops.jsx';
import Home from './components/home/home.jsx';
import Users from './components/users/users.jsx';
import User2 from './components/user2/user2.jsx';




const userPromise = fetch('https://jsonplaceholder.typicode.com/posts').then( res=>res.json());


const router = createBrowserRouter([
  
  {
    path: '/',
    Component: Root,
    children:[
      {index: true, Component: Home},
      {path:'mobiles', Component:Mobiles},
      {path:'laptop', Component:Laptop},
      {
        path: 'users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        Component:Users
      },
      {
        path: 'users2',
        element: <Suspense fallback={<span>Loading....</span>}>
          <User2 userPromise={userPromise}></User2>
        </Suspense>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
