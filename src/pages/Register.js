import React, { useState } from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import useHandleRegister from "../hooks/useHandleRegister";
import SignInWithGoogle from "./SignInWithGoogle";

function Register() {
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = useHandleRegister();

  const logo =
    "https://firebasestorage.googleapis.com/v0/b/news-22cea.appspot.com/o/logo%2FNews%20Today%20Logo.png?alt=media&token=d79b5373-045a-4d25-bbad-04c95ee3157f";

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleRegister(email, password, fName, lname);
  };

  return (
    <div className={styles.registerPageContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" className={styles.logo} />
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
      <SignInWithGoogle />
    </div>
  );
}

export default Register;
