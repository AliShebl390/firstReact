import React, { useEffect } from "react";

export default function About() {
    useEffect(() => {
        document.title = "About";
    }, []);
    return (
        <>
            <div className="about">
                <h2 className="fs-1">ABOUT COMPONENT</h2>
                <div className="lines">
                    <div className="line"></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="line"></div>
                </div>
                <div className="container mt-3">
                    <div className="row px-5">
                        <div className="col-md-6">
                            <p>
                                Freelancer is a free bootstrap theme created by
                                Route. The download includes the complete source
                                files including HTML, CSS, and JavaScript as
                                well as optional SASS stylesheets for easy
                                customization.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                Freelancer is a free bootstrap theme created by
                                Route. The download includes the complete source
                                files including HTML, CSS, and JavaScript as
                                well as optional SASS stylesheets for easy
                                customization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
