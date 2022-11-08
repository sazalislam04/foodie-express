import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService/AddService";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import MyReviews from "../components/MyReviews/MyReviews";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Services from "../components/Services/Services";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/myreview",
        element: <MyReviews />,
      },
      {
        path: "/addservice",
        element: <AddService />,
      },
    ],
  },
]);
