import React from "react";
import "./Contact.css";
import eupass from "../../portfolio_pics/euPassIcon.png";
import linkedIn from "../../portfolio_pics/linkedinIcon.png";
import gitHub from "../../portfolio_pics/gitIcon.png";
import fb from "../../portfolio_pics/fbIcon.png";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div>
        <p>Rok Krajnc</p>
        <p>Knafelčeva ulica 45</p>
        <p>2000 Maribor</p>
        <p>Slovenija</p>
      </div>
      <div>
        <p>
          Email: <a href="mailto: rok.krajnc@mail.com">rok.krajnc@mail.com</a>
        </p>
        <p>
          Tel.: <a href="tel:+38670675385">+38670675385</a>
        </p>
      </div>
      <div className="contactLinks">
        <a
          target="_blanc"
          href="https://europa.eu/europass/eportfolio/screen/profile?lang=en"
          className="euPass"
        >
          <img src={eupass} alt="Europass" />
        </a>
        <a
          target="_blanc"
          href="https://www.linkedin.com/in/rok-krajnc-177a4420b/"
        >
          <img src={linkedIn} alt="Linkedin" />
        </a>
        <a target="_blanc" href="https://github.com/icecoil">
          <img src={gitHub} alt="Github" />
        </a>
        <a target="_blanc" href="https://www.facebook.com/rok.krajnc">
          <img src={fb} alt="Facebook" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
