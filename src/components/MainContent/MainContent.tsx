import React from "react";
import About from "../About/About";
import MySkills from "../MySkills/MySkills";
import Contact from "../Contact/Contact";
import Work from "../Work/Work";
import classes from "./MainContent.module.scss";
import classNames from "classnames";

interface MainContentProps {
  selectedContent: "about" | "mySkills" | "work" | "contact";
  isDarkMode: boolean;
}

const MainContent = ({ selectedContent, isDarkMode }: MainContentProps) => {
  return (
    <div
      className={classNames(classes.mainContent, {
        [classes.darkMode]: isDarkMode,
        [classes.lightMode]: !isDarkMode,
      })}
    >
      {selectedContent === "about" && <About />}
      {selectedContent === "mySkills" && <MySkills />}
      {selectedContent === "work" && <Work />}
      {selectedContent === "contact" && <Contact />}
    </div>
  );
};

export default MainContent;
