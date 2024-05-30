import React, { useState } from "react";
import styles from "./Login.module.css";
import lightmodeLogo from "../assets/logo/lightmodeLogo.png";
import { Link } from "react-router-dom";
import useHandleLogin from "../hooks/useHandleLogin";
import SignInWithGoogle from "./SignInWithGoogle";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = useHandleLogin();

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.logoContainer}>
        <img src={lightmodeLogo} alt="logo" className={styles.logo} />
      </div>
      <form className={styles.loginContainer} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className={styles.loginButton}>LOGIN</button>
        <div className={styles.forgotPasswordAndSignUpContainer}>
          <Link
            to="/resetPassword"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <p className={styles.forgotPassword}>Forgot Password?</p>
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
      </form>
      <SignInWithGoogle />
    </div>
  );
}

export default Login;
