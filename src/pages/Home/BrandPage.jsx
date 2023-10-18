import { useParams } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useState } from "react";
import { useEffect } from "react";
import BrandProductDetails from "./BrandProductDetails";

const BrandPage = () => {

    const { brandName } = useParams();
    const [brandProducts, setBrandProducts] = useState([]);
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/product')
            .then(res => res.json())
            .then(data => {
                const filterProducts = data.filter((product) => product.brand === brandName);
                setBrandProducts(filterProducts)
            })
    }, [brandName])

    useEffect(() => {
        fetch('http://localhost:5001/brands')
            .then(res => res.json())
            .then(data => {
            setSlides(data?.find(item=> item.brand === brandName))
        })
    },[brandName])


    return (
        <div>
            <NavBar></NavBar>
                <div className="carousel w-full h-[80vh] mb-20">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={slides?.slide1} className="w-full rounded-lg" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full ">
                        <img src={slides?.slide2} className="w-full rounded-lg" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full ">
                        <img src={slides?.slide3} className="w-full rounded-lg" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
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