import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='text-lg font-bold mb-5'>Login With</h1>
            <div className='space-y-3'>
                <button className='btn btn-outline w-[70%] font-bold '><FcGoogle size={25} />Login with Google</button><br></br>
                <button className='btn btn-outline w-[70%] font-bold '><FaGithub size={25} />Login with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;
