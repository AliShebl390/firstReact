import React, { useEffect } from "react";

export default function Contact() {
    let inputs = document.querySelectorAll("form input");
    inputs.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.length !== 0) {
                input.previousSibling.classList.add("top");
            } else {
                input.previousSibling.classList.remove("top");
            }
        });
    });
    useEffect(() => {
        document.title = "Contact";
    }, []);
    return (
        <>
            <div className="contact py-2 justify-content-center mb-4">
                <h2 className="fs-1">CONTACT SECTION</h2>
                <div className="lines">
                    <div className="line"></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="line"></div>
                </div>
                <form className="w-50 p-3 mx-auto mt-5">
                    <label htmlFor="userName" className="">
                        {" "}
                        User name:{" "}
                    </label>
                    <input
                        id="userName"
                        type="text"
                        placeholder="User Name :"
                        name="User name:"
                        className="form-control border-0 border-bottom py-3 position-relative"
                    />
                    <label htmlFor="userAge"> User age: </label>
                    <input
                        id="userAge"
                        type="text"
                        placeholder="User age :"
                        name="User age:"
                        className="form-control border-0 border-bottom py-3 position-relative"
                    />
                    <label htmlFor="userEmail"> User email: </label>
                    <input
                        id="userEmail"
                        type="text"
                        placeholder="User email :"
                        name="User email:"
                        className="form-control border-0 border-bottom py-3 position-relative"
                    />
                    <label htmlFor="userPass"> User password: </label>
                    <input
                        id="userPass"
                        type="text"
                        placeholder="User password :"
                        name="User password:"
                        className="form-control border-0 border-bottom py-3 position-relative"
                    />
                    <button className="btn">Send Message</button>
                </form>
            </div>
        </>
    );
}
