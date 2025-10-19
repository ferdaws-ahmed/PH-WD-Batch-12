import React from 'react';
import logo from '../../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div>
            
            <div className='flex flex-col justify-center items-center mt-10'>
                <img src={logo} alt="" />
                <p className='font-bold text-accent mt-5'>Journalism Without Fear or Favour</p>
                <p className='text-accent font-semibold'>{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
            </div>
        </div>
    );
};

export default Header;
