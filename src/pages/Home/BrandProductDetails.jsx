/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BrandProductDetails = ({ product }) => {
    const { isDark } = useContext(AuthContext);


    const { _id, details, name, photo, price, rating, type, brand } = product;

    return (
        <div>
            <div>
                
            </div>
            <div className={`card md:h-[500px]  ${isDark ? "bg-black text-white border":"bg-base-100 text-black "} shadow-xl`} data-aos="fade-up">
                <figure><img src={photo} alt="Shoes" className="h-48" data-aos="fade-down-right" /></figure>
                <div className="card-body">
                    <h2 className="card-title" data-aos="fade-left">Name: {name}</h2>
                    <p className="font-medium text-orange-500" data-aos="fade-right">Brand: {brand}</p>
                    <p data-aos="fade-left">Type: {type}</p>
                    <p className="font-medium text-orange-400" data-aos="fade-right">Rating: {rating}</p>
                    <p className="font-semibold " data-aos="fade-left">Price: ${price}</p>
                    <div className="card-actions justify-center">
                       <Link to={`/productdetails/${_id}`}> <button className="btn btn-primary" data-aos="fade-up">Details</button></Link>
                       <Link to={`/updatecart/${_id}`}> <button className="btn btn-primary" data-aos="fade-up">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandProductDetails;