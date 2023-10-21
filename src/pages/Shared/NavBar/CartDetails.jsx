/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";


const CartDetails = ({ product, productData, setProductData }) => {
    const { isDark } = useContext(AuthContext);
    const { _id, details, name, photo, price, rating, type, brand } = product;
    // console.log(_id);

    const handleDelete = (id) => {
        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result?.isConfirmed) {
                fetch(`https://digital-dynamo-jihad-24.vercel.app/mycart/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data?.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            const remaining = productData?.filter(prod => prod._id !== id)
                            setProductData(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className={`card shadow-xl ${isDark ? "bg-black text-white border" : "bg-base-100 text-black"}`} data-aos="fade-up">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="h-48" data-aos="fade-down" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title" data-aos="fade-left">Name : {name}</h2>
                    <p className="font-bold text-orange-500" data-aos="fade-right">Brand : {brand}</p>
                    <p className="font-medium" data-aos="fade-left">Type : {type}</p>
                    <p className="font-medium text-orange-400" data-aos="fade-right">Rating : {rating}</p>
                    <p className="font-bold btn" data-aos="fade-left">Price : ${price}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary" data-aos="fade-up">Delete Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;