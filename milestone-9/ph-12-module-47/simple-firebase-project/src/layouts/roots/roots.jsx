import React from 'react';
import Header from '../../components/header';
import { Outlet } from 'react-router';

const roots = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default roots;
