/* eslint-disable react/prop-types */
import Swal from "sweetalert2";


const CartDetails = ({ product, productData, setProductData }) => {

    const { _id, details, name, photo, price, rating, type, brand } = product;

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
                fetch(`http://localhost:5001/product/${id}`, {
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
            <div className="card md:h-[600px] bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p className="font-medium text-orange-500">Brand: {brand}</p>
                    <p>Type: {type}</p>
                    <p className="font-medium text-orange-400">Rating: {rating}</p>
                    <p className="font-semibold ">Price: ${price}</p>
                    <p>Description: {details}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;