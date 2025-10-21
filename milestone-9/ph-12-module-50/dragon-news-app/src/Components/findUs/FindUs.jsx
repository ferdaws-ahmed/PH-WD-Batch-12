import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const FindUs = () => {
    return (
        <div >
            <h1 className='font-bold text-lg'>Find Us On</h1>
            <div className="join join-vertical w-[70%] bg-base-100 mt-5">
                <button className="btn join-item justify-start bg-base-100"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start bg-base-100"><FaTwitter></FaTwitter> Twitter</button>
                <button className="btn join-item justify-start bg-base-100"><FaInstagram></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;
