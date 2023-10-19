/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Swal from "sweetalert2";


const CartDetails = ({ product, productData, setProductData }) => {

    const { _id, details, name, photo, price, rating, type, brand } = product;

    console.log(_id);

    const handleDelete = (id) => {
        console.log(id);
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
                fetch(`https://digital-dynamo-j.vercel.app/mycart/${id}`, {
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
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="h-48" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name : {name}</h2>
                    <p className="font-bold text-orange-500">Brand : {brand}</p>
                    <p className="font-medium">Type : {type}</p>
                    <p className="font-medium text-orange-400">Rating : {rating}</p>
                    <p className="font-bold btn">Price : ${price}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;