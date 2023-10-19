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

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://digital-dynamo-j.vercel.app/brands')
      },
      {
        path: '/brands/:brandName',
        element: <PrivateRoute><BrandPage></BrandPage></PrivateRoute>,
        loader: ({ params }) => fetch(` https://digital-dynamo-j.vercel.app/brands/${params.brand}`)
      },
      {
        path: '/updatecart/:id',
        element: <UpdateCart></UpdateCart>,
        loader: ({ params }) => fetch(` https://digital-dynamo-j.vercel.app/product/${params.id}`)
      },
      {
        path: "/productdetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/addtocart',
        element: <AddToCart></AddToCart>,
      },
      {
        path: "/cart",
        element: <MyCart></MyCart>,
        loader: () => fetch('https://digital-dynamo-j.vercel.app/mycart')
      },
      {
        path: "*",
        element: <ErrorPage />
      }



    ]
  },
]);

export default routes;