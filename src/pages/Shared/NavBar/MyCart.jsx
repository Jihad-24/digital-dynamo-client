import NavBar from "./NavBar";
import CartDetails from "./CartDetails";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const MyCart = () => {
    const loadedProduct = useLoaderData();
    const [productData, setProductData] = useState(loadedProduct)


    return (
        <div>
            <NavBar></NavBar>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-10 md:my-6">
                {
                    productData.length > 0 ?
                        productData?.map(product => <CartDetails
                            key={product._id}
                            product={product}
                            productData={productData}
                            setProductData={setProductData}
                        ></CartDetails>)
                        :
                        <div className="text-center mx-auto md:w-[700px] lg:w-[1100px]">
                            <h1 className="font-bold loading-10  text-3xl">
                                <span className="font-extrabold text-red-600"> Oops, </span> <br />
                                it seems like there are currently no <br /> products has been added. Please <br /> add products to see them.
                            </h1>
                        </div>
                }
            </div>
        </div>
    );
};

export default MyCart;