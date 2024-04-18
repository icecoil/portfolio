import React from "react";
import "./NavBar.css";

export interface NavBarItem {
  label: string;
  onClick: () => void;
}

interface NavBarProps {
  items: NavBarItem[];
  isDarkMode: boolean;
}

const NavBar = ({ items, isDarkMode }: NavBarProps) => {
  return (
    <nav className={`navigation ${isDarkMode ? "darkMode" : "lightMode"}`}>
      {items.map((item, indx) => {
        return (
          <button key={indx} onClick={item.onClick}>
            {item.label}
          </button>
        );
      })}
    </nav>
  );
};

export default NavBar;
