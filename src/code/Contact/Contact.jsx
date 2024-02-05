import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";

export default function Contact() {
    const [labelClass, setLabelClass] = useState({
        userName: "",
        userAge: "",
        userEmail: "",
        userPass: "",
    });

    function handleLabel(e, inputName) {
        const inputValue = e.target.value;
        setLabelClass((prevLabelClasses) => ({
            ...prevLabelClasses,
            [inputName]: inputValue.length !== 0 ? "top" : "bottom",
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
    }
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
                    <label htmlFor="userName" className={labelClass.userName}>
                        {" "}
                        User name:{" "}
                    </label>
                    <input
                        onChange={(e) => handleLabel(e, "userName")}
                        id="userName"
                        type="text"
                        placeholder="User Name :"
                        name="User name:"
                        className="form-control border-0 border-bottom py-3 position-relative"
                    />
                    <label htmlFor="userAge" className={labelClass.userAge}>
                        {" "}
                        User age:{" "}
                    </label>
                    <input
                        onChange={(e) => handleLabel(e, "userAge")}
                        id="userAge"
                        type="text"
                        placeholder="User age :"
                        name="User age:"
                        className="form-control border-0 border-bottom py-3 position-relative"
                    />
                    <label htmlFor="userEmail" className={labelClass.userEmail}>
                        {" "}
                        User email:{" "}
                    </label>
                    <input
                        onInput={(e) => handleLabel(e, "userEmail")}
                        id="userEmail"
                        type="text"
                        placeholder="User email :"
                        name="User email:"
                        className="form-control border-0 border-bottom py-3 position-relative"
                    />
                    <label htmlFor="userPass" className={labelClass.userPass}>
                        {" "}
                        User password:{" "}
                    </label>
                    <input
                        onInput={(e) => handleLabel(e, "userPass")}
                        id="userPass"
                        type="password"
                        placeholder="User password :"
                        name="User password:"
                        className="form-control border-0 border-bottom py-3 position-relative"
                    />
                    <button className="btn" onClick={(e) => handleSubmit(e)}>
                        Send Message
                    </button>
                </form>
            </div>
        </>
    );
}
