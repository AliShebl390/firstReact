import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    const divStyle = {
        marginTop: "83" + "px",
        minHeight: "calc(-107px + 100vh)",
    };
    return (
        <>
            <Navbar />
            <div style={divStyle}>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
