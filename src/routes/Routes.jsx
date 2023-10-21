import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddToCart from "../pages/Shared/NavBar/AddToCart";
import MyCart from "../pages/Shared/NavBar/MyCart";
import BrandPage from "../pages/Home/BrandPage";
import UpdateCart from "../pages/Shared/NavBar/UpdateCart";
import ProductDetails from "../pages/Home/ProductDetails";
import BrandProductDetails from "../pages/Home/BrandProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/brands/:brandName',
        element: <PrivateRoute><BrandPage></BrandPage></PrivateRoute>,
        loader: ({ params }) => fetch(` https://digital-dynamo-jihad-24.vercel.app/brands/${params.brand}`)
      },
      {
        path: '/updatecart/:id',
        element: <PrivateRoute><UpdateCart></UpdateCart></PrivateRoute>,
        loader: ({ params }) => fetch(` https://digital-dynamo-jihad-24.vercel.app/product/${params.id}`)
      },
      {
        path: "/productdetails/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
      },
      {
        path: '/addtocart',
        element: <PrivateRoute><AddToCart></AddToCart></PrivateRoute>,
      },
      {
        path: "/cart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default routes;