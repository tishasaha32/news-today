import React from "react";
import { VscCircleFilled } from "react-icons/vsc";
import styles from "./HeaderTitle.module.css";

function HeaderTitle() {
  return (
    <div className={styles.headlineContainer}>
      <VscCircleFilled className={styles.circle} />
      <div className={styles.headlineText}>
        <p>
          NEWS<br></br>TODAY
        </p>
      </div>
    </div>
  );
}

export default HeaderTitle;
