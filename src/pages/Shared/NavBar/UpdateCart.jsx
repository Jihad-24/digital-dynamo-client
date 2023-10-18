import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "./NavBar";

const UpdateCart = () => {
    const loadedProduct = useLoaderData();

    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const type = form.type.value;
        const brand = form.brand.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatdProduct = { name, brand, price, type, rating, details, photo }
        console.log(updatdProduct);

        // send data to the server
        fetch(` http://localhost:5001/product/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatdProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className='bg-[#F4F3F0] p-24'>
                <h1 className='text-center font-extrabold mb-10 text-purple-500 text-4xl'>Add Product</h1>
                <form onSubmit={handleUpdateProduct}>
                    {/* form name and quantity row */}
                    <div className='md:flex gap-6 justify-center mb-8'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Product Name</span>
                            </label>
                            <label className="input-group">
                                <span className='font-medium'>Name</span>
                                <input type="text" name='name' placeholder="Enter product name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <span className='font-medium'>Brand</span>
                                <input type="text" name='brand' placeholder="Product Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form supplier and taste row */}
                    <div className='md:flex gap-6 justify-center mb-8'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Product Type</span>
                            </label>
                            <label className="input-group">
                                <span className='font-medium'>Type</span>
                                <input type="text" name='type' placeholder="Enter Product Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Product Rating</span>
                            </label>
                            <label className="input-group">
                                <span className='font-medium'>Rating</span>
                                <input type="text" name='rating' placeholder="How is our product" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Category and details row */}
                    <div className='md:flex gap-6 justify-center mb-8'>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Product Price</span>
                            </label>
                            <label className="input-group">
                                <span className='font-medium'>Price</span>
                                <input type="text" name='price' placeholder="Enter Product Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Product Details</span>
                            </label>
                            <label className="input-group">
                                <span className='font-medium'>Details</span>
                                <input type="text" name='details' placeholder="Enter Short description" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    {/* form photo row */}
                    <div className='mb-8'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Product Photo URL</span>
                            </label>
                            <label className="input-group">
                                <span className='font-medium'>Photo</span>
                                <input type="text" name='photo' placeholder="Enter photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input className='btn btn-block bg-[#D2B48C]' type="submit" value="Add Product" />
                </form>

            </div>
        </div>
    );
};

export default UpdateCart;