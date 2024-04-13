import React from "react";
import imgCollectionAbt from "../../portfolio_pics/imgCollectionAbt.jpg";
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
      <img
        className="aboutImages"
        src={imgCollectionAbt}
        alt="Roks collection"
      />
    </div>
  );
};

export default About;
