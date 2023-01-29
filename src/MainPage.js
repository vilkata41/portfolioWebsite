import './MainPage.css';
import LandingPart from "./LandingPart";
import AboutMe from "./AboutMe";
import {Fade} from "react-awesome-reveal";

function MainPage() {
  return (
  <Fade triggerOnce={true}>
      <div className="MainPage">
          <LandingPart/>
          <AboutMe/>
      </div>
  </Fade>
  );
}

export default MainPage;
