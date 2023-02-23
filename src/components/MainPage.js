import '../styles/MainPage.css';
import LandingPart from "./LandingPart";
import AboutMe from "./AboutMe";
import NavBar from "./NavBar";
import {Fade} from "react-awesome-reveal";
import Creativity from "./Creativity";
import Programming from "./Programming";
import Contact from "./Contact";
import PreFooter from "./PreFooter";

// FIXME: To finish desktop version: Fix the font sizes

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
