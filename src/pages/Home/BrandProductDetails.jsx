/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BrandProductDetails = ({ product }) => {

    const { _id, details, name, photo, price, rating, type, brand } = product;

    return (
        <div>
            <div className="card md:h-[550px]  bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" className="h-48" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p className="font-medium text-orange-500">Brand: {brand}</p>
                    <p>Type: {type}</p>
                    <p className="font-medium text-orange-400">Rating: {rating}</p>
                    <p className="font-semibold ">Price: ${price}</p>
                    <p>Description: {details}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Details</button>
                       <Link to={`/updatecart/${_id}`}> <button className="btn btn-primary">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandProductDetails;