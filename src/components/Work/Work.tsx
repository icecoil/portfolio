import React from "react";
import "./Work.css";
import imgCollectionKfor from "../../portfolio_pics/imgCollectionKfor.jpg";
import natoLogo from "../../portfolio_pics/NATO_logo.svg";
import grbSv from "../../portfolio_pics/Grb_sv.png";

const Work = () => {
  return (
    <div>
      <h1>Work</h1>
      <div className="listLogoSect">
        <div>
          <h2>Slovenian Armed Forces</h2>
          <ol className="workList">
            <li className="upperLvlLi">
              2011 - 2017: Infantry Rifleman
              <ul>
                <li>2015/2016: Peacekeeping mission in Kosovo (KFOR32)</li>
              </ul>
            </li>
            <li className="upperLvlLi">
              2017 - 2022: Infantry Rifleman + Combat Lifesaver
              <ul>
                <li>2017: Combat Lifesaver course</li>
                <li>2018/2019: Peacekeeping mission in Kosovo (KFOR38)</li>
                <li>2021/2022: IT specialist course</li>
              </ul>
            </li>
            <li className="upperLvlLi">
              2022 - present day: Combat Lifesaver + IT Specialist
              <ul>
                <li>
                  2023: NATO's Coalition Warrior Interoperability Exercise
                  (CWIX)
                </li>
                <li>
                  2023: Course for System Administrator level 2 for the
                  Communication and Information System for supporting business
                  processes in the Ministry of Defence and Command and Control
                  in the Slovenian Armed Forces (KIS PINK)
                </li>
                <li>
                  2023: Course for operators of the Radio Relay System Cambium
                  Networks PTP700
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="natoSvLogo">
          <img src={natoLogo} alt="Nato" className="grbNato" />
          <img src={grbSv} alt="Slovenian Armed Forces" className="grbSv" />
        </div>
      </div>
      <div>
        <img
          src={imgCollectionKfor}
          alt="Peacekeeping Missions in Kosovo"
          className="kforCollection"
        />
      </div>
    </div>
  );
};

export default Work;
