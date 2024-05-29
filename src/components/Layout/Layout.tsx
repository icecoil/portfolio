import React, { useContext, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent/MainContent";
import classes from "./Layout.module.scss";
import ThemeContext from "../../context/ThemeContext/ThemeContext";
import classNames from "classnames";
import MobileMenu from "../MobileMenu/MobileMenu";

const Layout = () => {
  const [content, setContent] = useState<
    "about" | "mySkills" | "work" | "contact"
  >("about");

  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <div
      className={classNames(classes.layout, {
        [classes.darkMode]: isDarkMode,
        [classes.lightMode]: !isDarkMode,
      })}
    >
      <MobileMenu selectContent={setContent} className={classes.mobileMenu} />
      <Sidebar selectContent={setContent} className={classes.sidebar} />
      <MainContent selectedContent={content} isDarkMode={isDarkMode} />
    </div>
  );
};

export default Layout;
