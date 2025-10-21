

import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Header/Header';
import LatestNews from '../../Components/LatestNews/LatestNews';
import Navbar from '../../Components/Navbar/Navbar';
import LeftAside from '../../Components/LeftAside/LeftAside';
import RightAside from '../../Components/RightAside/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-10/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
                <section className=' w-10/12 mx-auto mt-3'>
                    <Navbar>

                    </Navbar>
                </section>
            </header>
            <main className='w-10/12 mx-auto grid grid-cols-12 mt-10'>
                <aside className='col-span-3 sticky top-3 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main-section col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-3 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;
