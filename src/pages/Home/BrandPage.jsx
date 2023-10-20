import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import BrandProductDetails from "./BrandProductDetails";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const BrandPage = () => {
    const { isDark } = useContext(AuthContext);
    const { brandName } = useParams();
    const [brandProducts, setBrandProducts] = useState([]);
    const [slides, setSlides] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch('https://digital-dynamo-j.vercel.app/product')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const filterProducts = data.filter((product) => product.brand === brandName);
                // console.log(filterProducts)
                setBrandProducts(filterProducts);
                setIsLoading(false);
            })
    }, [brandName])


    useEffect(() => {

        fetch('https://digital-dynamo-j.vercel.app/brands')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setSlides(data?.find(item => item.brand === brandName));
            })
    }, [brandName])

    // useEffect(() => {
    //     fetch(`https://digital-dynamo-j.vercel.app/brands/${brandName}`)
    //       .then((res) => {
    //         if (!res.ok) {
    //           throw new Error('Network response was not ok');
    //         }
    //         return res.json();
    //       })
    //       .then((data) => {
    //         console.log(data);
    //       })
    //       .catch((error) => {
    //         console.error('Error:', error);
    //       });
    //   }, [brandName]);
      


    return (
        <div>
            {
                brandProducts.length > 0 && <div className="carousel w-full h-[80vh] mb-20" data-aos="fade-up">
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
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    isLoading ?
                        <div>Loading...</div>
                        :
                        (
                            brandProducts.length > 0 ?
                                brandProducts?.map((product) =>
                                    <BrandProductDetails product={product} key={product._id} />
                                )
                                :
                                <div className={`text-center mx-auto md:w-[700px] lg:w-[1100px] ${isDark && "text-white"}`}>
                                    <h1 className="font-bold loading-10  text-3xl">
                                        <span className="font-extrabold text-red-600"> Oops, </span> <br />
                                        it seems like there are currently no products <br /> available for this brand. Please check back <br /> later for updates or explore our other  <br />  brands and products.
                                    </h1>
                                </div>
                        )
                }

            </div>
        </div>
    );
};

export default BrandPage;