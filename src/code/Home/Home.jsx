import React, { useEffect } from "react";
import avatar from "../../assets/imgs/avataaars.svg";

export default function Home() {
    useEffect(()=>{
        document.title = "Home"
    },[])
    return (
        <>
            <div className="home">
                <img src={avatar} className="avatar" alt="avatar" />
                <h2 className="pt-4 text-uppercase mb-3 fs-1 fw-bolder">
                    START FRAMEWORK
                </h2>
                <div className="lines">
                    <div className="line"></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="line"></div>
                </div>
                <div className="text-center mt-3">
                    Graphic Artist - Web Designer - Illustrator
                </div>
            </div>
        </>
    );
}
