import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent/MainContent";
import "./Layout.css";

const Layout = () => {
  const [content, setContent] = useState<
    "about" | "mySkills" | "work" | "contact"
  >("about");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`layout ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Sidebar selectContent={setContent} isDarkMode={isDarkMode} />
      <MainContent selectedContent={content} isDarkMode={isDarkMode} />
      <button
        className={`modeBt ${isDarkMode ? "dark-mode" : "light-mode"}`}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Layout;
