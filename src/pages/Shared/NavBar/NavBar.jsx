import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import userDefaultPic from '../../../assets/user.png'
import { AuthContext } from "../../../providers/AuthProvider";
import icon from "../../../assets/react.svg"
import Swal from "sweetalert2";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user.displayName);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const loggedOut = () => {
        // success alert
        Swal.fire({
            icon: 'success',
            title: 'User LogOut Successfull'
        })
    }

    const navLinks = <>
        <li className="font-semibold"><NavLink to={"/"}>Home</NavLink></li>

        {
            !user && <li className="font-semibold"><NavLink to={"/login"}>Login</NavLink></li>
        }
        {
            !user && <li className="font-semibold"><NavLink to={"/register"}>Register</NavLink></li>
        }
        {user && <>
            <li className="font-semibold"><NavLink to="/addtocart">Add Cart</NavLink></li>
            <li className="font-semibold"><NavLink to="/cart">My Cart</NavLink></li>
            <li className="font-semibold"><NavLink to="/dashboard">Dashboard</NavLink></li>
        </>}
    </>
    return (
        <div>
            <div className="navbar bg-base-100 py-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to={"/"}>
                        <div className="hidden md:flex md:items-center md:gap-2">
                            <img src={icon} alt="" />
                            <p className=" md:font-semibold md:text-2xl">DigitalDynamo</p>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                          
                                {
                                    !user ? <img src={userDefaultPic} alt="" />
                                        :
                                        <img src={user?.photoURL} alt="" />
                                }
                           
                        </div>

                    </label>
                    <div>
                        <Link to={"/profile"}>
                            <p className="px-1 font-medium">{user && user?.displayName}</p>
                        </Link>
                    </div>
                    {
                        user ?
                            <button onClick={() => { handleSignOut(); loggedOut(); }} className="btn bg-[#403F3F] text-white" >Sign Out</button>
                            :
                            <Link to={"/login"}>
                                <button className="btn bg-[#403F3F] text-white">Login</button>
                            </Link>
                    }
                </div>
            </div>

        </div>
    );
};

export default NavBar;