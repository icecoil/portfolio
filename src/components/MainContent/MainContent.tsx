import React from "react";
import About from "../About/About";
import MySkills from "../MySkills/MySkills";
import Contact from "../Contact/Contact";
import Work from "../Work/Work";
import "./MainContent.css";

interface MainContentProps {
  selectedContent: "about" | "mySkills" | "work" | "contact";
}

const MainContent = ({ selectedContent }: MainContentProps) => {
  return (
    <div className="mainContent">
      {selectedContent === "about" && <About />}
      {selectedContent === "mySkills" && <MySkills />}
      {selectedContent === "work" && <Work />}
      {selectedContent === "contact" && <Contact />}
    </div>
  );
};

export default MainContent;
