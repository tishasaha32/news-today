import React, { useContext, useState } from "react";
import { VscCircleFilled } from "react-icons/vsc";
import styles from "./Header.module.css";
import { DarkModeContext } from "../context/darkmodeContext";

function Header() {
  const { handleDarkMode } = useContext(DarkModeContext);
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
      <button onClick={() => handleDarkMode()}>Dark Mode</button>
    </div>
  );
}

export default Header;
