import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent/MainContent";
import "./Layout.css";

const Layout = () => {
  const [content, setContent] = useState<
    "about" | "mySkills" | "work" | "contact"
  >("about");

  return (
    <div className="layout">
      <Sidebar selectContent={setContent} />
      <MainContent selectedContent={content} />
    </div>
  );
};

export default Layout;
