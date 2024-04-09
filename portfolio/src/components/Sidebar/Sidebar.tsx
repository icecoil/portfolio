import React from "react";
import Logo from "../../logo.svg";
import "./Sidebar.css";
import NavBar, { NavBarItem } from "../NavBar/NavBar";

const Sidebar = () => {
  const navItems: NavBarItem[] = [
    {
      label: "About",
      onClick: () => null,
    },
    {
      label: "My Skills",
      onClick: () => null,
    },
    {
      label: "Work",
      onClick: () => null,
    },
    {
      label: "Contact",
      onClick: () => null,
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
