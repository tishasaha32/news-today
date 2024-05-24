import React from "react";
import styles from "./Register.module.css";
import { VscCircleFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";
import lightmodeLogo from "../assets/logo/lightmodeLogo.png";

function Register() {
  return (
    <div className={styles.registerPageContainer}>
      <div className={styles.logoContainer}>
        <img src={lightmodeLogo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.registerDetailsContainer}>
        <input
          type="text"
          placeholder="Enter Email"
          className={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Enter Username"
          className={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Enter Password"
          className={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Confirm Password"
          className={styles.input}
          required
        />
        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
          <button className={styles.registerButton}>REGISTER</button>
        </Link>
        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span className={styles.loginLink}>LOGIN</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
