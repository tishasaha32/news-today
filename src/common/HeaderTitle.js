import React from "react";
import { VscCircleFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";
import styles from "./HeaderTitle.module.css";

function HeaderTitle() {
  return (
    <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
      <div className={styles.headlineContainer}>
        <VscCircleFilled className={styles.circle} />
        <div className={styles.headlineText}>
          <p>NEWS TODAY</p>
        </div>
      </div>
    </Link>
  );
}

export default HeaderTitle;
