import React, { useContext, useState } from "react";
import styles from "./Header.module.css";
import { DarkModeContext } from "../context/darkmodeContext";
import { IoMoon } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { RiEditCircleFill } from "react-icons/ri";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

import HeaderTitle from "./HeaderTitle";
import { Link } from "react-router-dom";
import useFetchUserData from "../hooks/useFetchUserData";

function Header() {
  const { handleDarkMode, darkMode } = useContext(DarkModeContext);
  const userDetails = useFetchUserData();
  return (
    <div className={darkMode ? styles.headerDark : styles.header}>
      <div className={styles.headerTitleContainer}>
        <MdOutlineArrowBackIosNew
          className={styles.backIcon}
          onClick={() => window.history.back()}
        />
        <HeaderTitle />
      </div>

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
          {userDetails?.photoURL ? (
            <img
              src={userDetails?.photoURL}
              alt="profile"
              className={styles.profilePhoto}
            />
          ) : (
            <div>
              {darkMode ? (
                <FaUserCircle className={styles.icon} />
              ) : (
                <FaRegUserCircle className={styles.icon} />
              )}
            </div>
          )}
        </Link>
        {userDetails?.admin && (
          <Link
            to="/addNews"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {darkMode ? (
              <RiEditCircleFill className={styles.addNewsIcon} />
            ) : (
              <BiEdit className={styles.addNewsIcon} />
            )}
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
