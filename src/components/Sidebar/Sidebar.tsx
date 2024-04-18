import React from "react";
import "./Sidebar.css";
import NavBar, { NavBarItem } from "../NavBar/NavBar";

interface SidebarProps {
  selectContent: (
    contentName: "about" | "mySkills" | "work" | "contact"
  ) => void;
  isDarkMode: boolean;
}

const Sidebar = ({ selectContent, isDarkMode }: SidebarProps) => {
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
    <div className={`sidebar ${isDarkMode ? "darkMode" : "lightMode"}`}>
      <p className="capitalR">R</p>
      <h3>Rok Krajnc</h3>
      <p>Web Developer</p>
      <NavBar items={navItems} isDarkMode={isDarkMode} />
    </div>
  );
};

export default Sidebar;
