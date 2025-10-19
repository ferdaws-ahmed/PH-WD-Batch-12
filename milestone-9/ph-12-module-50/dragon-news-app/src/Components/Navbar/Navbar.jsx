

import userIcon from '../../assets/user.png'
import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='flex gap-3 font-semibold text-accent nav-item'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex gap-3'>
                <img src={userIcon} alt="" />
                <button className='btn btn-primary px-8 text-base-100'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;
