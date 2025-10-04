import React from "react";
import Header from "../header/header";
import { Outlet } from "react-router";
import Footer from "../footer/footer";



const Root = () => {


    return(
        <div>
            <Header></Header>
            <div className="side-bar">
                <div>
                    <h4>side bar</h4>
                    <h4>side bar</h4>
                    <h4>side bar</h4>
                </div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Root;