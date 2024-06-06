import React, { useState } from "react";
import styles from "./Login.module.css";
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
  const logo =
    "https://firebasestorage.googleapis.com/v0/b/news-22cea.appspot.com/o/logo%2FNews%20Today%20Logo.png?alt=media&token=d79b5373-045a-4d25-bbad-04c95ee3157f";

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" className={styles.logo} />
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
