import React from "react";
import emailjs from 'emailjs-com';
import style from './contact.module.scss';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wrc1itr', 'portfolio_template', e.target, process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };

    return (
        <>
            <div id="contact" className={style.contact}>
                <h1 className={style.title}>Contact Me</h1>
                <hr />
                <div className={style.formContainer}>
                    <form onSubmit={sendEmail} >
                        <div className={style.nameEmailContainer}>
                            <div className={style.inputContainer}>
                                <label>Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter Your Name"
                                    autoComplete="off"
                                    required
                                ></input>
                            </div>
                            <div className={style.inputContainer}>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    autoComplete="off"
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className={style.textareaContainer}>
                            <label>Message:</label>
                            <textarea
                                id="message"
                                cols="60"
                                rows="10"
                                placeholder="Enter Your Message"
                                autoComplete="off"
                                name="message"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            value="Submit"
                            className={style.submit}
                        >
                        Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Contact;