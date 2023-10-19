import Banner from "./Banner";
import Brands from "./Brands";
import ContactUs from "./ContactUs";
import Websites from "./Websites";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {

    const [loadedProducts, setLoadedProducts] = useState([]);

    useEffect(() => {
        fetch('https://digital-dynamo-j.vercel.app/brands')
            .then(res => res.json())
            .then(data => {
                setLoadedProducts(data);
            })
            .catch(error => {
            console.log(error.message);
        })
    },[])


    return (
        <div>
            <div className="mb-28 ">
                <Banner></Banner>
            </div>
            <div >
                <h1 className="text-4xl font-semibold pb-10  text-center" >Our Brands</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
                    {
                        loadedProducts?.map(product => <Brands
                            product={product}
                            key={product._id}>

                        </Brands>)
                    }
                </div>
            </div>
            <div className="my-20">
                <div className="mb-20">
                    <ContactUs></ContactUs>
                </div>
                <div>
                    <h1 className="font-extrabold text-5xl text-center pb-14">Find us on the <span className="text-[#263077] italic">Business Listing Websites</span>
                        <br />
                        <span className="border-b-8 border-[#263077] pt-6  w-20 h-2 absolute"></span></h1>
                    <p className="font-normal text-[#3F3F3F] text-center text-xl">We are committed to making it as convenient as possible for you to find and engage with our brand. Our presence on these business listing websites will help you connect with us in a variety of ways. Here are some of the platforms where you can find us:</p>
                    <div>
                        <Websites></Websites>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;