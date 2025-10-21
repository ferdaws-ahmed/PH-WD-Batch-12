

import userIcon from '../../assets/user.png'
import React from 'react';
import { Link, NavLink } from 'react-router';

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
               
                <Link to='/auth/login' className='btn btn-primary px-8 text-base-100'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;
