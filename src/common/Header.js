import React, { useContext, useState } from "react";
import styles from "./Header.module.css";
import { DarkModeContext } from "../context/darkmodeContext";
import { IoMoon } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

import HeaderTitle from "./HeaderTitle";

function Header() {
  const { handleDarkMode, darkMode } = useContext(DarkModeContext);
  return (
    <div className={styles.header}>
      <HeaderTitle />
      <div className={styles.headerIconsContainer}>
        {darkMode ? (
          <LuSunMoon onClick={() => handleDarkMode()} className={styles.icon} />
        ) : (
          <IoMoon onClick={() => handleDarkMode()} className={styles.icon} />
        )}

        {darkMode ? (
          <FaUserCircle
            onClick={() => (window.location.href = "/profile")}
            className={styles.icon}
          />
        ) : (
          <FaRegUserCircle
            onClick={() => (window.location.href = "/profile")}
            className={styles.icon}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
