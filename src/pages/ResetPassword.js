import React, { useState } from "react";
import styles from "./ResetPassword.module.css";
import { Link } from "react-router-dom";
import useHandleResetPassword from "../hooks/useHandleResetPassword";

function ResetPassword() {
  const logo =
    "https://firebasestorage.googleapis.com/v0/b/news-22cea.appspot.com/o/logo%2FNews%20Today%20Logo.png?alt=media&token=d79b5373-045a-4d25-bbad-04c95ee3157f";
  const [email, setEmail] = useState("");
  const { handleResetPassword } = useHandleResetPassword(email);
  return (
    <div className={styles.resetPasswordPageContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>

      <form
        className={styles.resetPasswordContainer}
        onSubmit={handleResetPassword}
      >
        <input
          type="text"
          placeholder="Enter Email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className={styles.sendResetLinkButton}>SEND RESET LINK</button>
      </form>

      <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
        <p className={styles.goBack}>GO BACK</p>
      </Link>
    </div>
  );
}

export default ResetPassword;
