import { useLoaderData } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Banner from "./Banner";
import Brands from "./Brands";
import StartTrial from "./StartTrial";

const Home = () => {

    const loadedProducts = useLoaderData();


    return (
        <div>
            <NavBar></NavBar>
            <div className="mb-28 ">
                <Banner></Banner>
            </div>
            <div className="mb-24">
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
            <div className="mb-20">
                <div className="" data-aos="fade-left">
                    <h1 className="text-4xl font-bold pb-14">Start Free Trial Today <br /> and <span className="italic text-[#263077]"> Expand Your <br /> Learning</span> <br />
                        <span className="border-b-8 border-[#263077] pt-4  w-16 h-2 absolute"></span>
                    </h1>
                </div>

                <div className="">
                    <StartTrial></StartTrial>
                </div>
            </div>
           
        </div>
    );
};

export default Home;