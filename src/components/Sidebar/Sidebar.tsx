import React, { useContext } from "react";
import "./Sidebar.css";
import NavBar, { NavBarItem } from "../NavBar/NavBar";
import ThemeContext from "../../context/ThemeContext/ThemeContext";

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
    <div className={`sidebar ${theme === "dark" ? "darkMode" : "lightMode"}`}>
      <p className="capitalR">R</p>
      <h3>Rok Krajnc</h3>
      <p>Web Developer</p>
      <NavBar items={navItems} isDarkMode={theme === "dark"} />
      <button onClick={toggleTheme}>Toggle Dark/Light Mode</button>
    </div>
  );
};

export default Sidebar;
