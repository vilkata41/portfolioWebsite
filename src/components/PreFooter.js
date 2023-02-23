import "../styles/PreFooter.css";
import li from "../Pics/LI-In-Bug.png";
import gh from "../Pics/github-mark-white.png";
import fb from "../Pics/facebook.ico";
import ig from "../Pics/instagram.ico";
import tw from "../Pics/twitter.ico";

function PreFooter(){
    return(
        <div id={"preFooter"}>
            <p className={"preFooterP"}>Find me on social media here:</p>
            <div id={"SMLinks"}>
                <a href={"https://www.linkedin.com/in/vilian-popov-835177221/"} target={"_blank"} rel={"noreferrer"}>
                    <img className={"preFooterIcon"} src={li} alt={"linkedin icon"}/>
                </a>
                <a href={"https://github.com/vilkata41"} target={"_blank"} rel={"noreferrer"}>
                    <img className={"preFooterIcon"} src={gh} alt={"github icon"}/>
                </a>
                <a href={"https://www.facebook.com/people/Vilian-Popov/100001935319601/"} target={"_blank"} rel={"noreferrer"}>
                    <img className={"preFooterIcon"} src={fb} alt="facebook icon"/>
                </a>
                <a href={"https://www.instagram.com/vilkata_/"} target={"_blank"} rel={"noreferrer"}>
                    <img className={"preFooterIcon"} src={ig} alt="instagram icon"/>
                </a>
                <a href={"https://twitter.com/vilian_p"} target={"_blank"} rel={"noreferrer"}>
                    <img className={"preFooterIcon"} src={tw} alt="twitter icon"/>
                </a>
            </div>
        </div>
    );
}

export default PreFooter;