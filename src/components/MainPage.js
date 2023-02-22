import '../styles/MainPage.css';
import LandingPart from "./LandingPart";
import AboutMe from "./AboutMe";
import NavBar from "./NavBar";
import {Fade} from "react-awesome-reveal";
import Creativity from "./Creativity";
import Programming from "./Programming";
import Contact from "./Contact";
import PreFooter from "./PreFooter";

// FIXME: To finish desktop version:
//        1. Put the actual pictures in "Creativity" tab
//        2. Fix the font sizes
//        3. Add LinkedIn and GitHub to socials
function MainPage() {
  return (
  <Fade triggerOnce={true}>
      <div id="MainPage">
          <LandingPart/>
          <NavBar/>
          <AboutMe/>
          <Creativity/>
          <div id={"lastTwoPagesContainer"}>
              <Programming/>
              <Contact/>
          </div>
          <PreFooter/>
      </div>
  </Fade>
  );
}

export default MainPage;
