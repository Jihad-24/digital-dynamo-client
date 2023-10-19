import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Root = () => {
    const { isDark } = useContext(AuthContext);
    return (
        <div className={` ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
             <div className='max-w-6xl my-4 mx-auto'>
                <NavBar />
            </div>
                <div className='max-w-6xl mx-auto  mb-32'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
        </div>
    );
};

export default Root;