import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const Root = () => {
    return (
        <div className="">
            <div className="max-w-6xl mx-auto mb-32">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;