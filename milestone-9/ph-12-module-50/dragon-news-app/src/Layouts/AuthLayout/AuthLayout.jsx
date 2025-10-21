import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
             <header className='w-10/12 mx-auto py-5'>
                <Navbar></Navbar>
               
             </header>
             <main className='w-10/12 mx-auto py-5'>
                 <Outlet></Outlet>
             </main>
        </div>
    );
};

export default AuthLayout;
