import "../styles/Creativity.css";
import NB_compressed from "../Pics/NB_Front_Compressed.jpg";
import orangeBG from "../Pics/gradientOrange1.png";
import {Slide} from "react-awesome-reveal";

function Creativity(){
    return(
        <div id={"Creativity"}>
            <div id={"orangeDiv"}><img id={"orangeBG"} src={orangeBG} alt={"Orange background"}/></div>
            <Slide direction={"right"} triggerOnce={true} cascade damping={0.2}>
            <h2 className={"sectionTitle"}>My Creative Side</h2>
            <p className={"sectionText"}>I started travelling when I was 8 and it completely changed my life. I met many different people with many different beliefs and that inspired me to write everything I learnt down, so that I could pass my knowledge onto everyone else. That is how my first book was born. I was 17 when I finished and published Narrow Boundary in my mother tongue. Now, it’s translated and waiting to be published in English as well.</p>
            <div id={"imgGallery"}>
                <img id={"NBFront"} src={NB_compressed} alt={"My book - Narrow Boundary"}/>
                <img id={"NBFront2"} src={NB_compressed} alt={"My book - Narrow Boundary"}/>
                <img id={"NBFront3"} src={NB_compressed} alt={"My book - Narrow Boundary"}/>
            </div>
            </Slide>
        </div>
    );
}

export default Creativity;