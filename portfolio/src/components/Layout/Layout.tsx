import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent/MainContent";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Layout;
