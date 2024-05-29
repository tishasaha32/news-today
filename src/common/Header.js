import React, { useContext, useState } from "react";
import styles from "./Header.module.css";
import { DarkModeContext } from "../context/darkmodeContext";
import { IoMoon } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { BiSolidCommentEdit } from "react-icons/bi";

import HeaderTitle from "./HeaderTitle";
import { Link } from "react-router-dom";

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
        <Link
          to="/profile"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {darkMode ? (
            <FaUserCircle className={styles.icon} />
          ) : (
            <FaRegUserCircle className={styles.icon} />
          )}
        </Link>

        <Link
          to="/addNews"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {darkMode ? (
            <BiSolidCommentEdit className={styles.addNewsIcon} />
          ) : (
            <BiEdit className={styles.addNewsIcon} />
          )}
        </Link>
      </div>
    </div>
  );
}

export default Header;
