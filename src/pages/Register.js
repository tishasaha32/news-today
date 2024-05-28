import React, { useState } from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import lightmodeLogo from "../assets/logo/lightmodeLogo.png";
import useHandleRegister from "../hooks/useHandleRegister";
import { FcGoogle } from "react-icons/fc";

function Register() {
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = useHandleRegister();

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleRegister(email, password, fName, lname);
  };

  return (
    <div className={styles.registerPageContainer}>
      <div className={styles.logoContainer}>
        <img src={lightmodeLogo} alt="logo" className={styles.logo} />
      </div>
      <form className={styles.registerDetailsContainer} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter First Name"
          className={styles.input}
          value={fName}
          onChange={(e) => setFName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          className={styles.input}
          value={lname}
          onChange={(e) => setLName(e.target.value)}
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
        <button className={styles.registerButton}>REGISTER</button>
        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span className={styles.loginLink}>LOGIN</span>
          </Link>
        </p>
      </form>
      <div className={styles.continueWithGoogleContainer}>
        <p className={styles.orContainer}>
          <span className={styles.orSpan}>or</span>
        </p>
        <button className={styles.continueWithGoogleButton}>
          <FcGoogle className={styles.googleIcon} />
          <p>Continue with Google</p>
        </button>
      </div>
    </div>
  );
}

export default Register;
