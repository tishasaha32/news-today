import React, { useContext } from "react";
import { CiHome } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RiSearchFill } from "react-icons/ri";
import { PiFireSimpleThin } from "react-icons/pi";
import { FaFire } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

import styles from "./BottomNavbar.module.css";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/darkmodeContext";

function BottomNavbar({ activePage }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? styles.darkmodeNavbar : styles.navbar}>
      <Link to="/" style={{ textDecoration: "none" }}>
        {activePage === "Home" ? (
          <div className={styles.activeNavbarElements}>
            <IoMdHome className={styles.icon} />
            <p className={styles.navbarText}>Home</p>
          </div>
        ) : (
          <div className={styles.navbarElements}>
            <CiHome className={styles.icon} />
            <p className={styles.navbarText}>Home</p>
          </div>
        )}
      </Link>

      <Link to="/explore" style={{ textDecoration: "none" }}>
        {activePage === "Explore" ? (
          <div className={styles.activeNavbarElements}>
            <RiSearchFill className={styles.icon} />
            <p className={styles.navbarText}>Explore</p>
          </div>
        ) : (
          <div className={styles.navbarElements}>
            <CiSearch className={styles.icon} />
            <p className={styles.navbarText}>Explore</p>
          </div>
        )}
      </Link>

      <Link to="/trending" style={{ textDecoration: "none" }}>
        {activePage === "Trending" ? (
          <div className={styles.activeNavbarElements}>
            <FaFire className={styles.icon} />
            <p className={styles.navbarText}>Trending</p>
          </div>
        ) : (
          <div className={styles.navbarElements}>
            <PiFireSimpleThin className={styles.icon} />
            <p className={styles.navbarText}>Trending</p>
          </div>
        )}
      </Link>

      <Link to="/saved" style={{ textDecoration: "none" }}>
        {activePage === "Saved" ? (
          <div className={styles.activeNavbarElements}>
            <FaBookmark className={styles.icon} />
            <p className={styles.navbarText}>Saved</p>
          </div>
        ) : (
          <div className={styles.navbarElements}>
            <CiBookmark className={styles.icon} />
            <p className={styles.navbarText}>Saved</p>
          </div>
        )}
      </Link>
    </div>
  );
}

export default BottomNavbar;
