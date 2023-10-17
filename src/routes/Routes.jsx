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

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/brands/:brandName',
        element:<PrivateRoute><BrandPage></BrandPage></PrivateRoute>
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
        element:<MyCart></MyCart>,
      },
      
      

    ]
  },
]);

export default routes;