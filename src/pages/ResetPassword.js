import React from "react";
import styles from "./ResetPassword.module.css";
import { Link } from "react-router-dom";

function ResetPassword() {
  const logo =
    "https://firebasestorage.googleapis.com/v0/b/news-22cea.appspot.com/o/logo%2FNews%20Today%20Logo.png?alt=media&token=d79b5373-045a-4d25-bbad-04c95ee3157f";

  return (
    <div className={styles.resetPasswordPageContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" className={styles.logo} />
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
