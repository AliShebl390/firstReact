import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="full-width">
                <div className="footer-upper">
                    <div className="card-group my-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <h3>LOCATION</h3>
                                <p>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="card text-white">
                            <div className="card-body text-center">
                                <h3>AROUND THE WEB</h3>
                                <div className="icons">
                                    <i className="fa-brands fa-facebook mx-1 icon"></i>
                                    <i className="fa-brands fa-twitter mx-1 icon"></i>
                                    <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
                                    <i className="fa-solid fa-globe mx-1 icon"></i>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <h3 className="">ABOUT FREELANCER</h3>
                                <p className="">
                                    {" "}
                                    Freelance is a free to use, licensed
                                    Bootstrap theme created by Route{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="py-4 text-white text-center text-capitalize m-0">
                    Copyright © Your Website 2021
                </p>
            </footer>
        </>
    );
}
