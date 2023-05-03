import React from 'react';
import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-black text-white grid grid-cols-1 md:grid-cols-3 items-center px-20 py-6'>
            <div className='text-4xl'>
                <p>Food BuZz</p>
            </div>
            <div>
                <p>&copy; 2023 Food BuZz Interactive , All Rights Reserved</p>
            </div>
            <div className='flex gap-4 md:text-2xl items-center md:ml-48'>
                <p className=''>FOLLOW US </p>
               <FaTwitter></FaTwitter>
               <FaFacebook></FaFacebook>
               <FaYoutube></FaYoutube>
            </div>
        </div>
    );
};

export default Footer;