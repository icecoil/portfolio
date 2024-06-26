import React from "react";
import classes from "./Work.module.scss";
import kfor1 from "../../images/kfor1.jpg";
import kfor2 from "../../images/kfor2.jpg";
import kfor3 from "../../images/kfor3.jpg";
import kfor4 from "../../images/kfor4.jpg";
import kfor5 from "../../images/kfor5.png";
import natoLogo from "../../images/NATO_logo.svg";
import grbSv from "../../images/Grb_sv.png";

const Work = () => {
  return (
    <div className={classes.work}>
      <h1>Work</h1>
      <div className={classes.listLogoSect}>
        <div>
          <h2>Slovenian Armed Forces</h2>
          <ol className={classes.workList}>
            <li className={classes.upperLvlLi}>
              2011 - 2017: Infantry Rifleman
              <ul>
                <li>2015/2016: Peacekeeping mission in Kosovo (KFOR32)</li>
              </ul>
            </li>
            <li className={classes.upperLvlLi}>
              2017 - 2022: Infantry Rifleman + Combat Lifesaver
              <ul>
                <li>2017: Combat Lifesaver course</li>
                <li>2018/2019: Peacekeeping mission in Kosovo (KFOR38)</li>
                <li>2021/2022: IT specialist course</li>
              </ul>
            </li>
            <li className={classes.upperLvlLi}>
              2022 - present day: Combat Lifesaver + IT Specialist
              <ul>
                <li>
                  2023: NATO's Coalition Warrior Interoperability Exercise
                  (CWIX)
                </li>
                <li>
                  2023: Course for System Administrator level 2 for the
                  Communication <br></br> and Information System for supporting
                  business processes in the <br></br> Ministry of Defence and
                  Command and Control in the Slovenian<br></br> Armed Forces
                  (KIS PINK)
                </li>
                <li>
                  2023: Course for operators of the Radio Relay System Cambium{" "}
                  <br></br>
                  Networks PTP700
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div className={classes.natoSvLogo}>
          <img src={natoLogo} alt="Nato" className={classes.grbNato} />
          <img
            src={grbSv}
            alt="Slovenian Armed Forces"
            className={classes.grbSv}
          />
        </div>
      </div>
      <div className={classes.workImages}>
        <img src={kfor1} alt="Bonding with US scouts" />
        <img src={kfor2} alt="Pyrophobia exercise" />
        <img src={kfor3} alt="Teaching CLS SOPs" />
        <img src={kfor4} alt="Dancon March" />
        <img src={kfor5} alt="Shooting exercise" />
      </div>
    </div>
  );
};

export default Work;
