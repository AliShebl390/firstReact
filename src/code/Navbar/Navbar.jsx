import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
    const navRef = useRef(null);
    let lastScrollPosition = 0;
    function handleScroll() {
        lastScrollPosition = window.scrollY;
        if (lastScrollPosition > 20) {
            navRef.current.classList.add("padd");
            navRef.current.classList.remove("py-4");
        } else {
            navRef.current.classList.add("py-4");
            navRef.current.classList.remove("padd");
        }
    }
    useEffect(() => {
        lastScrollPosition = window.scrollY;
        if (lastScrollPosition > 20) {
            navRef.current.classList.add("padd");
            navRef.current.classList.remove("py-4");
        } else {
            navRef.current.classList.add("py-4");
            navRef.current.classList.remove("padd");
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <Navbar
                ref={navRef}
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
