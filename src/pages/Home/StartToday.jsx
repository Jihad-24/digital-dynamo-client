/* eslint-disable no-unused-vars */
import React from 'react';

const StartToday = () => {
    return (
        <div>
            <div className="hero ">
                <div className="hero-content gap-5 flex-col md:flex-row-reverse">
                    <div className="" data-aos="fade-down">
                        <img src="https://i.ibb.co/fGfTMZB/monitor-1307227-1280.jpg" className="md:max-w-md lg:max-w-xl h-full md:h-[530px] rounded-lg shadow-2xl " />
                    </div>
                    <div className="flex-col " data-aos="fade-right">
                        <div className='flex gap-3 mb-10 md:mb-3 lg:mb-11'>
                            <img className='w-16 h-16' src="https://i.ibb.co/vq308fn/bill-mobile-payment.png" alt="" />
                            <div className="">
                                <h1 className="text-2xl font-bold">Billing starts after buying</h1>
                                <p className="">On buying, you get the to cheak the product and  You need to pay after your cheak is done.</p>
                            </div>
                        </div>
                        <div className='flex gap-3  mb-10 md:mb-3 lg:mb-11'>
                            <img className='w-16 h-16' src="https://i.ibb.co/JxMXQzd/last-icn-2.jpg" alt="" />
                            <div className="">
                                <h1 className="text-2xl font-bold">No upfront Credit Card needed</h1>
                                <p className="">In order to register, we don’t collect your credit card information upfront. You pay us after you are satisfied with our platform</p>
                            </div>
                        </div>
                        <div className='flex gap-3  mb-10 md:mb-3 lg:mb-11'>
                            <img className='w-16 h-16' src="https://i.ibb.co/pWYYvLN/last-icn-3.jpg" alt="" />
                            <div className="">
                                <h1 className="text-2xl font-bold">Free Cancellation within 24 hours</h1>
                                <p className="">You can cancel your order within 24 hours and you won’t be charged anything.</p>
                            </div>
                        </div>
                        <div className='flex gap-3 mb-10 md:mb-3 lg:mb-11'>
                            <img className='w-16 h-16' src="https://i.ibb.co/3CbnvX8/last-icn-4.jpg" alt="" />
                            <div className="">
                                <h1 className="text-2xl font-bold">Secure & HIPAA Compliant</h1>
                                <p className="">DigitalDynamo follows the industry’s best security standards and we are HIPAA compliant. Rest assured, your data is safe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartToday;