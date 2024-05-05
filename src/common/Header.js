import React, { useContext, useState } from "react";
import { VscCircleFilled } from "react-icons/vsc";
import styles from "./Header.module.css";
import { DarkModeContext } from "../context/darkmodeContext";
import { IoMoon } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";

function Header() {
  const { handleDarkMode, darkMode } = useContext(DarkModeContext);
  return (
    <div className={styles.header}>
      <div className={styles.headlineContainer}>
        <VscCircleFilled className={styles.circle} />
        <div className={styles.headlineText}>
          <p>
            NEWS<br></br>TODAY
          </p>
        </div>
      </div>
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
