import React, { useContext, useState } from "react";
import styles from "./Header.module.css";
import { DarkModeContext } from "../context/darkmodeContext";
import { IoMoon } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import HeaderTitle from "./HeaderTitle";

function Header() {
  const { handleDarkMode, darkMode } = useContext(DarkModeContext);
  return (
    <div className={styles.header}>
      <HeaderTitle />
      {darkMode ? (
        <LuSunMoon
          onClick={() => handleDarkMode()}
          className={styles.modeIcon}
        />
      ) : (
        <IoMoon onClick={() => handleDarkMode()} className={styles.modeIcon} />
      )}
    </div>
  );
}

export default Header;
