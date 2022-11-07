import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Service from "../pages/service/Service"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {path: '/', element: <Home />},
            {path: '/services', element: <Service />},
            {path: '/login', element: <Login />},
            {path: '/register', element: <Register />},
        ],
    }
]);
export default router;