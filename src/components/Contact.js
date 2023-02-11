import "../styles/Contact.css";
import orangeBG from "../Pics/gradientOrange1.png";
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

function Contact(){
    const form = useRef();

    const sendMail = (evt) => {
        evt.preventDefault();

        emailjs.sendForm('service_9loei4a','template_am04fec', form.current, 'MY-PUBLIC-KEY')
            .then((result) => {
                console.log("Successfully sent email. " + result.text);
            }, (err) => {
                console.log("An error occurred while sending email." + err.text);
            });
    };

    return(
        <div id={"Contact"}>
            <div id={"orangeDiv2"}><img id={"orangeBG2"} src={orangeBG} alt={"Orange background"}/></div>
            <div id={"ContactForm"}>
                <form ref={form} onSubmit={sendMail}>
                    <h2>Get in touch with me</h2>
                    <input type={"text"} name={"from_name"} id={"contactName"} placeholder={"Your Name"}/>
                    <input type={"email"} name={"sent_by_email"} id={"contactEmail"} placeholder={"Your Email Address"}/>
                    <input type={"text"} name={"mail_subject"} id={"contactEmailSubject"} placeholder={"Subject"}/>
                    <textarea id={"contactEmailContent"} name={"message"} placeholder={"Your message goes here..."}></textarea>
                    <input type={"submit"} id={"submitContactForm"} value={"Send message"}/>
                </form>
            </div>
        </div>
    );
}

export default Contact;