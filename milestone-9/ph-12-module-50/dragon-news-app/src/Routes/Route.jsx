import { createBrowserRouter } from "react-router";

import HomeLayout from "../Layouts/Home/HomeLayout";
import Home from "../Components/home/home";
import CategoriesNews from "../Components/categories/categories";
import LeftAside from "../Components/LeftAside/LeftAside";
import CategoryNews from "../Components/categoryNews/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";







const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children:[
            {
                path:'',
                Component: Home
            },
            {
                path:'/category/:id',
                loader: ()=> fetch('/news.json'),
                Component: CategoryNews
            }
        ]
    },
    {
        path:'/auth',
        Component: AuthLayout,
        children: [
            {
                path:'/auth/login',
                Component: Login
            },
            {
                path:'/auth/register',
                Component: Register
            }
        ]
    },
    {
        path: '/news',
        element: <h2>News</h2>
    },
    
    {
        path: '/*',
        element: <h2>Error 404</h2>
    }
])

export default router;

