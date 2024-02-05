import React from "react";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
    {
        document.onreadystatechange = function () {
            let lastScrollPosition = 0;
            const navbar = document.querySelector(".navbar");

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
            <Navbar
                expand="lg"
                className="navbar navbar-expand-lg fixed-top py-4"
            >
                <Container>
                    <NavLink
                        className="navbar-brand text-white text-uppercase fw-bolder fs-2 m-0"
                        to="/"
                    >
                        React
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
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
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
