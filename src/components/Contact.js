import "../styles/Contact.css";
import orangeBG from "../Pics/gradientOrange1.png";
import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {Slide} from "react-awesome-reveal";

function Contact(){
    const form = useRef();
    const successAlert = useRef();
    const failureAlert = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");

    const sendMail = (evt) => {
        evt.preventDefault();

        emailjs.sendForm('service_9loei4a','template_am04fec', form.current, 'Cjm95SNxMRRKyDCKS')
            .then((result) => { // if we're successful, I remove all fields' contents
                setName("");
                setEmail("");
                setSubject("");
                setContent("");

                // and display a success alert
                successAlert.current.show();

                setTimeout(() => {
                    successAlert.current.setAttribute("closing", "");
                    successAlert.addEventListener("animationend", () => {
                        successAlert.current.removeAttribute("closing");
                        successAlert.current.close();
                    }, {once: true});
                }, 5000);

                console.log("Successfully sent email.");

            }, (err) => { // if we have an error, we show the failed alert.
                failureAlert.current.show();

                setTimeout(() => {
                    failureAlert.current.setAttribute("closing", "");

                    failureAlert.addEventListener("animationend", () => {
                        failureAlert.current.removeAttribute("closing");
                        failureAlert.current.close();
                    }, {once: true});
                }, 5000);

                console.log("An error occurred while sending email.");
            })
            .catch(problem => {
                console.log(problem);
            });
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
        </div>
    );
}

export default Contact;