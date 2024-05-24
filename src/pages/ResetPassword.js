import React from "react";
import styles from "./ResetPassword.module.css";
import lightmodeLogo from "../assets/logo/lightmodeLogo.png";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <div className={styles.resetPasswordPageContainer}>
      <div className={styles.logoContainer}>
        <img src={lightmodeLogo} alt="logo" className={styles.logo} />
      </div>

      <div className={styles.resetPasswordContainer}>
        <input
          type="text"
          placeholder="Enter Email"
          className={styles.input}
          required
        />
        <button className={styles.sendResetLinkButton}>SEND RESET LINK</button>
      </div>

      <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
        <p className={styles.goBack}>GO BACK</p>
      </Link>
    </div>
  );
}

export default ResetPassword;
