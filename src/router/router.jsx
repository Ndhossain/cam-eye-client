import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/pages/blogs/Blogs";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import Service from "../components/pages/service/Service";
import Layout from "../components/layout/Layout";
import ServiceDetails from "../components/pages/Service-details/ServiceDetails"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {path: '/', element: <Home />},
            {path: '/services', element: <Service />},
            {path: '/login', element: <Login />},
            {path: '/register', element: <Register />},
            {path: '/blogs', element: <Blogs />},
            {
                path: '/service-details/:id',
                loader: ({params}) => fetch(`http://localhost:5000/service-details/${params.id}`),
                element: <ServiceDetails />,
            }
        ],
    }
]);
export default router;