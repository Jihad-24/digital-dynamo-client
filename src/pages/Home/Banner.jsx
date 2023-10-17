/* eslint-disable no-unused-vars */
import React from 'react';

const Banner = () => {
    return (
        <div className=''>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img data-aos="fade-down-right" className="h-[90vh] w-full rounded-2xl" src="https://i.ibb.co/BrcCJjr/brooke-cagle-g1-Kr4-Ozfoac-unsplash.jpg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full" >
                    <img  src="https://i.ibb.co/gyqqkT6/scott-graham-5f-Nm-Wej4t-AA-unsplash.jpg" className="h-[90vh] w-full rounded-2xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/H2RM3yW/nick-morrison-FHnnjk1-Yj7-Y-unsplash.jpg" className="h-[90vh] w-full rounded-2xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/DRvBg2j/austin-distel-rxp-Th-Owu-Vg-E-unsplash.jpg" className="h-[90vh] w-full rounded-2xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;