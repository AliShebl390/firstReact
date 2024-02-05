import React, { useEffect } from "react";
import portI from "../../assets/imgs/poert1.png";
import portII from "../../assets/imgs/port2.png";
import portIII from "../../assets/imgs/port3.png";

export default function Portfolio() {
    let boxs = document.querySelectorAll(".content");
    let model = document.querySelector(".model");
    const modelImg = document.querySelector(".model img");
    let src = "";
    boxs.forEach((box) => {
        box.addEventListener("click", (e) => {
            src = box.children[0].src;
            model.classList.remove("d-none");
            modelImg.src = src;

            model.addEventListener("click", (e) => {
                if (e.target.localName !== "img") {
                    model.classList.add("d-none");
                }
            });
        });
    });

    useEffect(() => {
        document.title = "Portfolio";
    }, []);
    return (
        <>
            <div className="container portfolio py-5 justify-content-center">
                <h2 className="fs-1">PORTFOLIO COMPONENT</h2>
                <div className="lines">
                    <div className="line"></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="line"></div>
                </div>
                <div className="row gy-4 pt-4">
                    <div className="col-md-6 box col-lg-4">
                        <div className="content">
                            <img
                                className="w-100 rounded-2"
                                src={portI}
                                alt=""
                            />
                            <div className="layer d-flex align-items-center justify-content-center">
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 box col-lg-4">
                        <div className="content">
                            <img
                                className="w-100 rounded-2"
                                src={portII}
                                alt=""
                            />
                            <div className="layer d-flex align-items-center justify-content-center">
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 box col-lg-4">
                        <div className="content">
                            <img
                                className="w-100 rounded-2"
                                src={portIII}
                                alt=""
                            />
                            <div className="layer d-flex align-items-center justify-content-center">
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 box col-lg-4">
                        <div className="content">
                            <img
                                className="w-100 rounded-2"
                                src={portI}
                                alt=""
                            />
                            <div className="layer d-flex align-items-center justify-content-center">
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 box col-lg-4">
                        <div className="content">
                            <img
                                className="w-100 rounded-2"
                                src={portII}
                                alt=""
                            />
                            <div className="layer d-flex align-items-center justify-content-center">
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 box col-lg-4">
                        <div className="content">
                            <img
                                className="w-100 rounded-2"
                                src={portIII}
                                alt=""
                            />
                            <div className="layer d-flex align-items-center justify-content-center">
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="model position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center d-none">
                <img alt="" src={portI} />
            </div>
        </>
    );
}
