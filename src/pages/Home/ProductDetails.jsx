import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const ProductDetails = () => {
    const { isDark, user } = useContext(AuthContext);
    const userEmail = user.email;


    const [productDetail, setProductDetail] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://digital-dynamo-jihad-24.vercel.app/product')
            .then(res => res.json())
            .then(data => {
                setProductDetail(data.find((item) => item._id === id));
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [setProductDetail, id])

    const handleaddCart = (e) => {
        e.preventDefault();
        const productData = {
            userEmail,
            name: productDetail?.name,
            type: productDetail?.type,
            brand: productDetail?.brand,
            rating: productDetail?.rating,
            price: productDetail?.price,
            details: productDetail?.details,
            photo: productDetail?.photo,
        }

        fetch('https://digital-dynamo-jihad-24.vercel.app/mycart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate(`/brands/${productDetail?.brand}`)
                }

            })
    }


    return (
        <div>
            <div>
                <div className={`card shadow-xl ${isDark ? "bg-black text-white border" : "bg-base-100 text-black"}`}>
                    <figure className="px-10 pt-10">
                        <img src={productDetail?.photo} alt="Shoes" className="rounded-xl h-72" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name : {productDetail?.name}</h2>
                        <p className="font-bold btn text-orange-500">Brand: {productDetail?.brand}</p>
                        <p className="font-medium">Type : {productDetail?.type}</p>
                        <p className="font-semibold text-orange-400">Rating : {productDetail?.rating}</p>
                        <p className="font-bold btn">Price : ${productDetail?.price}</p>
                        <p className="font-medium">Description : {productDetail?.details}</p>
                        <div className="card-actions">
                            <form onSubmit={handleaddCart}>
                                <input className="btn btn-block btn-primary" type="submit" value="Add to Cart" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;