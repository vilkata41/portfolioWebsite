import '../styles/AboutMe.css';
import {Fade} from "react-awesome-reveal";

function AboutMe(){
    return(
        <div id={"About"}>
            <Fade triggerOnce={true}>
                <div id={"picAndBriefDescription"}>
                    <p>Vilian Popov. A 22-year-old Computer Science graduate from University of Strathclyde. Born in Bulgaria but always loved travelling around the globe. So far, over 30 countries visited. Mix science and art into one and you get my interests.</p>
                </div>
            </Fade>
        </div>

    );
}

export default AboutMe;