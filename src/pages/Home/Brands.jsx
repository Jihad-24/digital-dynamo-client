/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Brands = ({ product }) => {
    const { isDark } = useContext(AuthContext);

    const { brand, image, } = product;

    return (
        <div>
            <Link to={`/brands/${brand}`} product={product}>
            <div className={`card h-52 bg-base-100 shadow-xl ${isDark && "text-black"}`}>
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl w-1/3" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{brand}</h2>                    
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Brands;