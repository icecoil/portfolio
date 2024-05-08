import React from "react";
import classes from "./NavBar.module.scss";
import classNames from "classnames";

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
    <nav
      className={classNames(classes.navigation, {
        [classes.darkMode]: isDarkMode,
        [classes.lightMode]: !isDarkMode,
      })}
    >
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
