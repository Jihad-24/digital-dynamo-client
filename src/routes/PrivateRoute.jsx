/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);
    
    if (loading) {
        return <div className="flex items-center justify-center" style={{height:"60vh"}}>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;