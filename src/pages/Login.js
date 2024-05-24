import React from "react";
import styles from "./Login.module.css";
import lightmodeLogo from "../assets/logo/lightmodeLogo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.logoContainer}>
        <img src={lightmodeLogo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.loginContainer}>
        <input
          type="text"
          placeholder="Enter Email"
          className={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Enter Password"
          className={styles.input}
          required
        />
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <button className={styles.loginButton}>LOGIN</button>
        </Link>
        <p>
          Don't have an account?
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span className={styles.signUpLink}> SIGN UP</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
