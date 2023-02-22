import '../styles/LandingPart.css';
import {useState, useEffect} from "react";
import {Fade, Slide} from "react-awesome-reveal";
import orange1 from "../Pics/gradientOrange1.webp";

function LandingPart(){
    const [scrollOffset, setScrollOffset] = useState(0);
    const handleScrolling = () => {
        let vilian = document.getElementById("myName");
        let hr = document.getElementById("initSep");
        let descr = document.getElementById("descr");
        if(window.pageYOffset <= 310){
            vilian.style.display = "flex";
            hr.style.display = "flex";
            descr.style.display = "flex";
            setScrollOffset(window.pageYOffset);
        }
        else{
            vilian.style.display = "none";
            hr.style.display = "none";
            descr.style.display = "none";
        }


    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrolling);
        return () => window.removeEventListener('scroll', handleScrolling);
    }, []);

    return(
    <div id={"initialBlock"}>
        <div id={"landingBG"}>
            <img src={orange1} alt={"Orange Background"}/>
        </div>
        <div className={"content"}>
            <Fade delay={250} triggerOnce={true}>
                <Slide cascade damping={0.1} triggerOnce={true}>
                    <h1 id={"myName"} style={{transform: `translateX(${scrollOffset * 0.08}vw) translateY(${scrollOffset * 0.05}vw)`,
                        opacity: `${ (scrollOffset === 0) ? 1 : 1-(scrollOffset/300)}`}}>Vilian Popov</h1>
                    <hr id={"initSep"} style={{transform: `translateX(${scrollOffset * 0.07}vw) translateY(${scrollOffset * 0.05}vw)`,
                        opacity: `${ (scrollOffset === 0) ? 1 : 1-(scrollOffset/300)}`} } />
                    <h2 id={"descr"} style={{transform: `translateX(${scrollOffset * 0.06}vw) translateY(${scrollOffset * 0.05}vw)`,
                        opacity: `${ (scrollOffset === 0) ? 1 : 1-(scrollOffset/300)}`} }>Full-stack developer, AI enthusiast, novel writer</h2>
                </Slide>
            </Fade>
        </div>
    </div>

    );
}

export default LandingPart;