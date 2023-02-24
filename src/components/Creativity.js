import "../styles/Creativity.css";
import NB_compressed from "../Pics/NB_Front.webp";
import reading1 from "../Pics/readingBook1.webp";
import reading2 from "../Pics/readingBook2.webp";
import orangeBG from "../Pics/gradientOrange1.webp";
import {Fade, Slide} from "react-awesome-reveal";

function Creativity(){
    return(
        <div id={"Creativity"}>
            <div id={"orangeDiv"}><img id={"orangeBG"} src={orangeBG} alt={"Orange background"}/></div>
            <Fade triggerOnce={true} delay={350} duration={3000}>
                <Slide direction={"up"} triggerOnce={true} cascade damping={0.1}>
                    <h2 className={"sectionTitle"}>My Creative Side</h2>
                    <p className={"sectionText"}>I started travelling when I was 8 and it completely changed my life. I met many different people with many different beliefs and that inspired me to write everything I learnt down, so that I could pass my knowledge onto everyone else.</p>
                    <p className={"sectionText"}>That is how my first book was born. I was 17 when I finished and published Narrow Boundary in my mother tongue. Now, it’s translated and waiting to be published in English as well.</p>
                    <div id={"imgGallery"}>
                        <img id={"CreativityPic1"} src={reading2} alt={"Me, reading my book - 2"}/>
                        <img id={"CreativityPic2"} src={reading1} alt={"Me, reading my book - 1"}/>
                        <img id={"CreativityPic3"} src={NB_compressed} alt={"My book - Narrow Boundary"}/>
                    </div>
                </Slide>
            </Fade>
        </div>
    );
}

export default Creativity;