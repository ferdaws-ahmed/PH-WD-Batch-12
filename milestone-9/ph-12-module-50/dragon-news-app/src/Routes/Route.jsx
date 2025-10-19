import { createBrowserRouter } from "react-router";

import HomeLayout from "../Layouts/Home/HomeLayout";
import Home from "../Components/home/home";



const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children:[
            {
                path:'',
                Component: Home
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

