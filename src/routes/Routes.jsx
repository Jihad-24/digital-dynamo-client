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

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5001/brands')
      },
      {
        path: '/brands/:brandName',
        element: <PrivateRoute><BrandPage></BrandPage></PrivateRoute>,
        loader:({ params }) => fetch(` http://localhost:5001/brands/${params.brand}`)
      },
      {
        path: '/updatecart/:id',
        element: <UpdateCart></UpdateCart>,
        loader: ({ params }) => fetch(` http://localhost:5001/product/${params.id}`)
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
        element:<AddToCart></AddToCart>,
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart>,
        loader:()=>fetch('http://localhost:5001/product')
      },
      
      

    ]
  },
]);

export default routes;