import React from "react";
import certHtml from "../../images/certHTML.png";
import certCss from "../../images/certCSS.png";
import certJs from "../../images/certJS.png";
import certJsI from "../../images/certJSI.png";
import certReact from "../../images/certReact.png";
import classes from "./MySkills.module.scss";

const MySkills = () => {
  return (
    <div className={classes.mySkills}>
      <h1>My Skills</h1>
      <div className={classes.certImages}>
        <a
          target="_blanc"
          href="https://www.sololearn.com/certificates/CC-GSJLLB62"
        >
          <img src={certHtml} alt="HTML certificate" />
        </a>
        <a
          target="_blanc"
          href="https://www.sololearn.com/certificates/CC-MVLTUBTB"
        >
          <img src={certCss} alt="CSS certificate" />
        </a>
        <a
          target="_blanc"
          href="https://www.sololearn.com/certificates/CC-OT91JPTS"
        >
          <img src={certJs} alt="Javascript certificate" />
        </a>
        <a
          target="_blanc"
          href="https://www.sololearn.com/certificates/CC-YYQUXWSC"
        >
          <img src={certJsI} alt="Javascript intermediate certificate" />
        </a>
        <a
          target="_blanc"
          href="https://www.codecademy.com/profiles/microMaster86146/certificates/af00e5032d0a68cc84879983f5d8333b"
        >
          <img src={certReact} alt="React certificate" />
        </a>
      </div>
      <p>
        Proficient in HTML, CSS and Javascript. Learning ReactJS, TypeScript,
        ECMAScript and Sass.
      </p>
    </div>
  );
};

export default MySkills;
