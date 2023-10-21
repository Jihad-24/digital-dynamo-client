import CartDetails from "./CartDetails";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const MyCart = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user.email;
    const [productData, setProductData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true)
        fetch(`https://digital-dynamo-jihad-24.vercel.app/mycart`)
            .then(res => res.json())
            .then(data => {
                const myCart = data.filter(item => item.userEmail === userEmail)
                setProductData(myCart);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [userEmail])


    return (
        <div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-10 md:my-6">
                {isLoading ?
                    <div>Loading...</div>
                    :
                    (productData.length ?
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
                        </div>)
                }
            </div>
        </div>
    );
};

export default MyCart;