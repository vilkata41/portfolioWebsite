import "../styles/Contact.css";
import orangeBG from "../Pics/gradientOrange1.webp";
import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {Slide} from "react-awesome-reveal";

function Contact(){
    const form = useRef();
    const successAlert = useRef();
    const failureAlert = useRef();
    const noFieldsAlert = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");

    const sendMail = (evt) => {
        evt.preventDefault();
        let serviceID = process.env.REACT_APP_SERVICE_ID;
        let templateID = process.env.REACT_APP_TEMPLATE_ID;
        let emailKey = process.env.REACT_APP_EMAIL_KEY;

        let email_from = form.current.sent_by_email.value;
        let message = form.current.message.value;

        if(!(email_from && message)){ // if no name or message, error.
            noFieldsAlert.current.show();

            setTimeout(() => {
                noFieldsAlert.current.setAttribute("closing", "");

                noFieldsAlert.current.addEventListener("animationend", () => {
                    noFieldsAlert.current.removeAttribute("closing");
                    noFieldsAlert.current.close();
                }, {once: true});
            }, 5000);

            console.log("No email and message.");
        }
        else{ // otherwise, we send the email
            emailjs.sendForm(serviceID, templateID, form.current, emailKey)
                .then((result) => { // if we're successful, I remove all fields' contents
                    setName("");
                    setEmail("");
                    setSubject("");
                    setContent("");

                    // and display a success alert
                    successAlert.current.show();

                    setTimeout(() => {
                        successAlert.current.setAttribute("closing", "");
                        successAlert.current.addEventListener("animationend", () => {
                            successAlert.current.removeAttribute("closing");
                            successAlert.current.close();
                        }, {once: true});
                    }, 5000);

                    console.log("Successfully sent email.");

                }, (err) => { // if we have an error, we show the failed alert.
                    failureAlert.current.show();

                    setTimeout(() => {
                        failureAlert.current.setAttribute("closing", "");

                        failureAlert.current.addEventListener("animationend", () => {
                            failureAlert.current.removeAttribute("closing");
                            failureAlert.current.close();
                        }, {once: true});
                    }, 5000);

                    console.log("An error occurred while sending email.");
                })
                .catch(problem => {
                    console.log(problem);
                });
        }
    };

    return(
        <div id={"Contact"}>
            <div id={"orangeDiv2"}><img id={"orangeBG2"} src={orangeBG} alt={"Orange background"}/></div>
            <Slide direction={"up"} duration={1300} triggerOnce={true}>
                <div id={"ContactForm"}>
                    <form ref={form} onSubmit={sendMail}>
                        <h2>Get in touch with me</h2>
                        <input type={"text"} name={"from_name"} id={"contactName"} placeholder={"Your Name"}
                        value={name} onChange={(evt) => {setName(evt.target.value)}}/>
                        <input type={"email"} name={"sent_by_email"} id={"contactEmail"} placeholder={"Your Email Address"}
                        value={email} onChange={(evt) => {setEmail(evt.target.value)}}/>
                        <input type={"text"} name={"mail_subject"} id={"contactEmailSubject"} placeholder={"Subject"}
                        value={subject} onChange={(evt) => {setSubject(evt.target.value)}}/>
                        <textarea id={"contactEmailContent"} name={"message"} placeholder={"Your message goes here..."}
                        value={content} onChange={(evt) => {setContent(evt.target.value)}}></textarea>
                        <input type={"submit"} id={"submitContactForm"} value={"Send message"}/>
                    </form>
                </div>
            </Slide>
            <dialog ref={successAlert} className={"contactAlert"}>Email sent successfully.</dialog>
            <dialog ref={failureAlert} className={"contactAlert"}>We are terribly sorry. Something went wrong while sending the email.</dialog>
            <dialog ref={noFieldsAlert} className={"contactAlert"}>Please, input at least email and a message.</dialog>
        </div>
    );
}

export default Contact;