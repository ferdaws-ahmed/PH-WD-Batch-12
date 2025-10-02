import React from "react";
import Header from "../header/header";
import { Outlet } from "react-router";



const Root = () => {


    return(
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}

export default Root;