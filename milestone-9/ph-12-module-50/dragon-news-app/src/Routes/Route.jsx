import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home/Home";



const router = createBrowserRouter([
    {
        path: '/',
        Component: Home
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

