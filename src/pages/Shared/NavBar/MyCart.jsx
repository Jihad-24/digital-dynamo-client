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
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-10 md:my-10">
                    {
                        productData?.map(product => <CartDetails
                            key={product._id}
                            product={product}
                            productData={productData}
                            setProductData={setProductData}
                        ></CartDetails>)
                    }
                </div>
        </div>
    );
};

export default MyCart;