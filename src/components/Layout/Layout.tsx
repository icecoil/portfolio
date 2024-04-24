import React, { useContext, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent/MainContent";
import "./Layout.css";
import ThemeContext from "../../context/ThemeContext/ThemeContext";

const Layout = () => {
  const [content, setContent] = useState<
    "about" | "mySkills" | "work" | "contact"
  >("about");

  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <div className={`layout ${isDarkMode ? "darkMode" : "lightMode"}`}>
      <Sidebar selectContent={setContent} />
      <MainContent selectedContent={content} isDarkMode={isDarkMode} />
    </div>
  );
};

export default Layout;
