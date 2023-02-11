import "../styles/PreFooter.css";
import fb from "../Pics/facebook.ico";
import ig from "../Pics/instagram.ico";
import tw from "../Pics/twitter.ico";

function PreFooter(){
    return(
        <div id={"preFooter"}>
            <p className={"preFooterP"}>Find me on social media here:</p>
            <div id={"SMLinks"}>
                <a href={"https://www.facebook.com/people/Vilian-Popov/100001935319601/"}><img className={"preFooterIcon"} src={fb} alt="facebook icon"/></a>
                <a href={"https://www.instagram.com/vilkata_/"}><img className={"preFooterIcon"} src={ig} alt="instagram icon"/></a>
                <a href={"https://twitter.com/vilian_p"}><img className={"preFooterIcon"} src={tw} alt="twitter icon"/></a>
            </div>
        </div>
    );
}

export default PreFooter;