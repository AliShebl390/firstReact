import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    {
        document.onreadystatechange = function () {
            let lastScrollPosition = 0;
            const navbar = document.querySelector("nav");

            window.addEventListener("scroll", function () {
                lastScrollPosition = window.scrollY;
                if (lastScrollPosition > 20) {
                    navbar.classList.add("padd");
                    navbar.classList.remove("py-4");
                } else {
                    navbar.classList.add("py-4");
                    navbar.classList.remove("padd");
                }
            });
            window.addEventListener("load", function () {
                lastScrollPosition = window.scrollY;
                if (lastScrollPosition > 20) {
                    navbar.classList.add("padd");
                    navbar.classList.remove("py-4");
                } else {
                    navbar.classList.add("py-4");
                    navbar.classList.remove("padd");
                }
            });
        };
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top py-4">
                <div className="container">
                    <NavLink
                        className="navbar-brand text-white text-uppercase fw-bolder fs-2 m-0"
                        to="/"
                    >
                        React
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-3 ">
                                <NavLink
                                    className="nav-link rounded-3 text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink
                                    className="nav-link rounded-3 text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                                    to="/portfolio"
                                >
                                    Portfolio
                                </NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink
                                    className="nav-link rounded-3 text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
