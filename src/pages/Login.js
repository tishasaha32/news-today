import React, { useState } from "react";
import styles from "./Login.module.css";
import lightmodeLogo from "../assets/logo/lightmodeLogo.png";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../components/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkEmailExists = async (email) => {
    try {
      const q = query(collection(db, "users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      console.error("Error checking email existence:", error);
      throw error;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const emailExists = await checkEmailExists(email);
      if (!emailExists) {
        toast.error("Email does not exist");
        return;
      }
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      toast.error("Invalid email or password");
    }
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
    </div>
  );
}

export default Login;
