import React, { useContext } from "react";
import classes from "./Sidebar.module.scss";
import NavBar, { NavBarItem } from "../NavBar/NavBar";
import ThemeContext from "../../context/ThemeContext/ThemeContext";
import classNames from "classnames";
import darkMode from "../../images/icons/darkModeIcon.svg";
import lightMode from "../../images/icons/lightModeIcon.svg";

interface SidebarProps {
  selectContent: (
    contentName: "about" | "mySkills" | "work" | "contact"
  ) => void;
}

const Sidebar = ({ selectContent }: SidebarProps) => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const navItems: NavBarItem[] = [
    {
      label: "About",
      onClick: () => selectContent("about"),
    },
    {
      label: "My Skills",
      onClick: () => selectContent("mySkills"),
    },
    {
      label: "Work",
      onClick: () => selectContent("work"),
    },
    {
      label: "Contact",
      onClick: () => selectContent("contact"),
    },
  ];

  return (
    <div
      className={classNames(classes.sidebar, {
        [classes.darkMode]: theme === "dark",
        [classes.lightMode]: theme === "light",
      })}
    >
      <p className={classes.capitalR}>R</p>
      <h3>Rok Krajnc</h3>
      <p>Web Developer</p>
      <NavBar items={navItems} isDarkMode={theme === "dark"} />
      <button className={classes.themeBtn} onClick={toggleTheme}>
        <img
          src={theme === "dark" ? darkMode : lightMode}
          alt="toggle mode icon"
        />
      </button>
    </div>
  );
};

export default Sidebar;
