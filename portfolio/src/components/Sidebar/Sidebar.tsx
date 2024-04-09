import React from "react";
import Logo from "../../logo.svg";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={Logo} alt="logo" className="logo" />
      <h3>Rok Krajnc</h3>
      <p>Web Developer</p>
      {/* To do: nav bar */}
    </div>
  );
};

export default Sidebar;
