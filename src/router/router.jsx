import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/pages/blogs/Blogs";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import Service from "../components/pages/service/Service";
import Layout from "../components/layout/Layout";
import ServiceDetails from "../components/pages/Service-details/ServiceDetails"
import PrivateRoute from "../components/pages/private/PrivateRoute";
import MyReviews from "../components/pages/myreviews/MyReviews";
import AddService from "../components/pages/add-service/AddService";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {path: '/', element: <Home />},
            {path: '/services', element: <Service />},
            {path: '/login', element: <Login />},
            {path: '/register', element: <Register />},
            {
                path: '/blogs',
                loader: () => fetch('http://localhost:5000/blogs'),
                element: <Blogs />
            },
            {
                path: '/service-details/:id',
                loader: ({params}) => fetch(`http://localhost:5000/service-details/${params.id}`),
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