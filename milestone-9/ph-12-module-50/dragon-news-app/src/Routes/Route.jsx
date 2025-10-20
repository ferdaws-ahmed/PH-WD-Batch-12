import { createBrowserRouter } from "react-router";

import HomeLayout from "../Layouts/Home/HomeLayout";
import Home from "../Components/home/home";
import CategoriesNews from "../Components/categories/categories";
import LeftAside from "../Components/LeftAside/LeftAside";
import CategoryNews from "../Components/categoryNews/CategoryNews";







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
        element: <h2>Authentication Layouts</h2>
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

