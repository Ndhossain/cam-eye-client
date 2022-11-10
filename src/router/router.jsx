import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Errorroute from "../components/pages/404/Errorroute";
import AddService from "../components/pages/add-service/AddService";
import Blogs from "../components/pages/blogs/Blogs";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/login/Login";
import MyReviews from "../components/pages/myreviews/MyReviews";
import PrivateRoute from "../components/pages/private/PrivateRoute";
import PublicOnly from "../components/pages/public/PublicOnly";
import Register from "../components/pages/register/Register";
import ServiceDetails from "../components/pages/Service-details/ServiceDetails";
import Service from "../components/pages/service/Service";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Errorroute />,
        element: <Layout />,
        children: [
            {path: '/', element: <Home />},
            {path: '/services', element: <Service />},
            {
                path: '/login',
                element: (
                    <PublicOnly>
                        <Login />
                    </PublicOnly>
                )
            },
            {
                path: '/register',
                element: (
                    <PublicOnly>
                        <Register />
                    </PublicOnly>
                )
            },
            {
                path: '/blogs',
                loader: () => fetch('https://cam-eye-server-side.vercel.app/blogs'),
                element: <Blogs />
            },
            {
                path: '/service-details/:id',
                loader: ({params}) => fetch(`https://cam-eye-server-side.vercel.app/service-details/${params.id}`),
                element: <ServiceDetails />,
            },
            {
                path: '/my-reviews',
                element: (
                    <PrivateRoute><MyReviews /></PrivateRoute>
                )
            },
            {
                path: '/add-service',
                element: (
                    <PrivateRoute><AddService /></PrivateRoute>
                )
            }
        ],
    }
]);
export default router;