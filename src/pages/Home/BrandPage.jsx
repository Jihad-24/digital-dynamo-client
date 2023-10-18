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
    },[brandName])

    console.log(brandProducts);

    return (
        <div>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                  brandProducts ?  brandProducts?.map(product => <BrandProductDetails
                        product={product}
                        key={product._id}>
                  </BrandProductDetails>)
                        :
                        <h1></h1>
                }
            </div>
        </div>
    );
};

export default BrandPage;