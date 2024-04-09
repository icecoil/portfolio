import React from "react";
import Logo from "../../logo.svg";
import "./Sidebar.css";
import NavBar, { NavBarItem } from "../NavBar/NavBar";

interface SidebarProps {
  selectContent: (
    contentName: "about" | "mySkills" | "work" | "contact"
  ) => void;
}

const Sidebar = ({ selectContent }: SidebarProps) => {
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
    <div className="sidebar">
      <img src={Logo} alt="logo" className="logo" />
      <h3>Rok Krajnc</h3>
      <p>Web Developer</p>
      <NavBar items={navItems} />
    </div>
  );
};

export default Sidebar;
