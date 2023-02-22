import "../styles/NavBar.css";
import vp from "../Pics/VP.webp";
import creativity from "../Pics/creativity.webp";
import tech from "../Pics/technology.webp";
import user from "../Pics/user.webp";

function NavBar(){
    return(
        <div id={"navbar"}>
            <ul>
                <li><a href={"#About"}><img src={vp} alt={"Home"} id={"homeButton"}/></a></li>
                <li><a href={"#Creativity"}><img src={creativity} alt={"Art"} id={"artButton"}/></a></li>
                <li><a href={"#Programming"}><img src={tech} alt={"Science"} id={"techButton"}/></a></li>
                <li><a href={"#Contact"}><img src={user} alt={"Contact"} id={"contactButton"}/></a></li>
            </ul>
            <hr/>
        </div>
    );
}

export default NavBar;