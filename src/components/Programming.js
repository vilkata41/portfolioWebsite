import "../styles/Programming.css";
import Project from "./Project";
import {Slide} from "react-awesome-reveal";
import tweetImage from "../Pics/TweetFilteredPIC.png";
import networkSimulatorImage from "../Pics/NetSimPIC.png";
import carasImage from "../Pics/carasPIC.png";
import cryptogramsImage from "../Pics/cryptogramsPIC.png";
import simpleShellImage from "../Pics/simpleShellPIC.png";
import thisWebsiteImage from "../Pics/thisWebsitePIC.png";

function Programming(){
    let tweetFilteredContent = "In Java, I built an application that would access the twitter API and download specific tweets my " +
        "account was mentioned in, alongside their information (author, text, media). Then, with Spring Boot, I " +
        "created my own API and hosted it on GCP with AppEngine. The final part of the project included a " +
        "Python script accessing the API made by me and applying filters to pictures that had faces on them.";

    let netSimSysContent = "I made an application which simulated the Transmission Control Protocol (TCP) methods of " +
        "operation. The system had to transmit different packets of information and simulate packet " +
        "loss/corruption. I had to come up with ways to recover/resend that information. All the checks had to " +
        "be written without any help of sockets - all of it had to be re-implemented using my own classes. This " +
        "project really helped me get a good understanding of how networking protocols work overall.";

    let ecomContent = "During the third year of my university studies, I had to build an entire full-stack project on my own. " +
        "The task was to create a website for a person selling pictures online. I had to build the website using " +
        "both vanilla web development tools and certain frameworks. The project consisted of creating an entire " +
        "website’s responsive front end and a fully functional back end that fulfilled orders, sent emails, and " +
        "stored the data in a database.";

    let cryptogramsContent = "During the second year of my university studies, I worked on a group project, aimed at simulating real " +
        "work with clients. Programmed in Java, the project’s main idea was to generate cryptograms that can " +
        "be solved by different users. The programming part of the project was conducted according to user " +
        "stories given by the client (a professor in our case) and a couple of acceptance tests that had to be " +
        "written for each user story in order to automatize the entire process of work evaluation.";

    let simpleShellContent = "This was a group project, the aim of which was to create a command shell for Linux. The main " +
        "functions included in the project are as follows: access to PATH of the system for all commands stored " +
        "there; successful change of directories with the \"cd\" command (deliberately programmed by us); saving " +
        "previous commands in a history file; successful aliasing and saving of the aliased commands to a file.";

    let thisWebsiteContent= "I designed this website all on my own using Figma and coded it using ReactJS and ordinary " +
        " CSS. I practiced the already learnt features of React, such as hooks, states, params, transitions and " +
        " animations. I hardened my knowledge about component-based web development and learnt some additional " +
        " useful practices for the reusing of code that makes the development process much faster.";

    return(
        <div id={"Programming"}>
            <Slide direction={"up"} duration={900} triggerOnce={true}>
                <h2>My Programming Side</h2>
            </Slide>
            <div id={"Projects"}>
                <Project title={"TweetFiltered App"} imgURL={tweetImage} content={tweetFilteredContent}
                         used={"Java, Python, GCP, MediaPipe (Python), Spring boot"}/>

                <Project title={"Network Simulation System"} imgURL={networkSimulatorImage} content={netSimSysContent}
                         used={"Java"}/>

                <Project title={"Full-stack Website"} imgURL={carasImage} content={ecomContent}
                         used={"HTML, SCSS, JS, PHP, MySQL, jQuery"}/>

                <Project title={"Simple Shell"} imgURL={simpleShellImage} content={simpleShellContent}
                         used={"C"}/>

                <Project title={"This Website"} imgURL={thisWebsiteImage} content={thisWebsiteContent}
                         used={"Figma, JavaScript, ReactJS, CSS"}/>

                <Project title={"Cryptograms Project"} imgURL={cryptogramsImage} content={cryptogramsContent}
                         used={"Java"}/>

            </div>
            <h2>More projects await...</h2>
        </div>
    );
}

export default Programming;