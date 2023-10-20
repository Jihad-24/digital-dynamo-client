import CartDetails from "./CartDetails";
import { useState } from "react";
import { useEffect } from "react";

const MyCart = () => {
    const [productData, setProductData] = useState([])

    useEffect(() => {
        fetch('https://digital-dynamo-jihad-24.vercel.app/mycart')
            .then(res => res.json())
            .then(data => {
                setProductData(data);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [])


    return (
        <div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-10 md:my-6">
                {
                    productData ?
                        productData?.map(product => <CartDetails
                            key={product._id}
                            product={product}
                            productData={productData}
                            setProductData={setProductData}
                        ></CartDetails>)
                        :
                        <div className="text-center mx-auto md:w-[700px] lg:w-[1100px]">
                            <h1 className="font-bold loading-10  text-3xl">
                                <span className="font-extrabold text-red-600" data-aos="fade-down"> Oops, </span> <br />
                                it seems like there are currently no <br /> products has been added. Please <br /> add products to see them.
                            </h1>
                        </div>
                }
            </div>
        </div>
    );
};

export default MyCart;