/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';

const ErrorPage = () => {
    return (
        <div className="">
            <NavBar></NavBar>
            <div className=' mx-auto mt-20'>
            <div className="text-center l leading-9 font-medium">
            <h1 className='text-3xl font-semibold'>404 - Page Not Found</h1>
                <p>We're sorry, but it appears that the page you were looking for could not be found. This could be due to several reasons :
            </p>
            <ul>
                <li>The URL you entered may be incorrect.</li>
                <li>The page you are looking for may have been moved or deleted.</li>
                <li>There might be a temporary issue with our website.</li>
            </ul>
                <p>We appreciate your understanding, and we're here to help if you need any further assistance. </p>
                <Link to={"/"}><button className='btn btn-accent mt-4'>Go Back Home</button></Link>
            </div>
        </div>
        </div>
    );
};

export default ErrorPage;