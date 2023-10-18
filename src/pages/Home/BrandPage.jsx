import { useParams } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useState } from "react";
import { useEffect } from "react";
import BrandProductDetails from "./BrandProductDetails";

const BrandPage = () => {

    const { brandName } = useParams();
    const [brandProducts, setBrandProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/product')
            .then(res => res.json())
            .then(data => {
                const filterProducts = data.filter((product) => product.brand === brandName);
                setBrandProducts(filterProducts)
            })
    }, [brandName])


    return (
        <div>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    brandProducts.length > 0 ?
                        brandProducts?.map((product) =>
                            <BrandProductDetails product={product} key={product._id} />
                        )
                        :
                        <div className="text-center mx-auto md:w-[700px] lg:w-[1100px]"> 
                            <h1 className="font-bold loading-10  text-3xl">
                                <span className="font-extrabold text-red-600"> Oops, </span> <br />
                           it seems like there are currently no products <br /> available for this brand. Please check back <br /> later for updates or explore our other  <br />  brands and products.
                        </h1>
                        </div>
                }

            </div>
        </div>
    );
};

export default BrandPage;