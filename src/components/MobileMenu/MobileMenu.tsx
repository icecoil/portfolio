import classes from "./MobileMenu.module.scss";
import hamburgerIconLight from "../../images/icons/hamburgerMenuLightIcon.svg";
import hamburgerIconDark from "../../images/icons/hamburgerMenuDarkIcon.svg";
import { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext/ThemeContext";
import Sidebar from "../Sidebar/Sidebar";
import classNames from "classnames";

interface MobileMenuProps {
  selectContent: (
    contentName: "about" | "mySkills" | "work" | "contact"
  ) => void;
  className?: string;
}

const MobileMenu = ({ selectContent, className }: MobileMenuProps) => {
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames(classes.container, className)}>
      <button
        className={classes.hamburgerBtn}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          src={theme === "dark" ? hamburgerIconLight : hamburgerIconDark}
          alt="hamburger icon"
        />
      </button>
      {isOpen && <Sidebar selectContent={selectContent} />}
    </div>
  );
};

export default MobileMenu;
