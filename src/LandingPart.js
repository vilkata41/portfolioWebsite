import './LandingPart.css';
import {Fade, Slide} from "react-awesome-reveal";

function LandingPart(){
    return(
    <div id={"initialBlock"}>
        <div>
            <Fade delay={250} triggerOnce={true}>
                <Slide cascade damping={0.1} triggerOnce={true}>
                    <h1 id={"myName"}>Vilian Popov</h1>
                    <hr id={"initSep"}/>
                    <h2 id={"descr"}>Full-stack developer, AI enthusiast, novel writer</h2>
                </Slide>
            </Fade>
        </div>
    </div>

    );
}

export default LandingPart;