import React from "react";
import "./NavBar.css";

export interface NavBarItem {
  label: string;
  onClick: () => void;
}

interface NavBarProps {
  items: NavBarItem[];
}

const NavBar = ({ items }: NavBarProps) => {
  return (
    <nav className="navigation">
      {items.map((item) => {
        return <button onClick={item.onClick}>{item.label}</button>;
      })}
    </nav>
  );
};

export default NavBar;
