import React from "react";
import abtImg1 from "../../images/abt1.jpg";
import abtImg2 from "../../images/abt2.jpg";
import abtImg3 from "../../images/abt3.jpg";
import "./About.css";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        My name is Rok. I am a Combat Lifesaver and IT Specialist in the
        Slovenian Army. Apart from that, I am a Software Engineer and an
        enthusiastic Angler and Barbecuer.
      </p>
      <div className="aboutImages">
        <img src={abtImg1} alt="Sobra presentation for civilians" />
        <img src={abtImg2} alt="Dentex caught on Korcula" />
        <img src={abtImg3} alt="Grilling own prey for the inlaws" />
      </div>
    </div>
  );
};

export default About;
