import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import styles from "./HeaderWithBackButton.module.css";
import Header from "./Header";

function HeaderWithBackButton() {
  return (
    <div className={styles.headerContainer}>
      <MdOutlineArrowBackIosNew
        className={styles.backIcon}
        onClick={() => window.history.back()}
      />
      <Header />
    </div>
  );
}

export default HeaderWithBackButton;
