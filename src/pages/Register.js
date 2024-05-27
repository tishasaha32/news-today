import React, { useState } from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import lightmodeLogo from "../assets/logo/lightmodeLogo.png";
import { auth, db } from "../components/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  setDoc,
  doc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [password, setPassword] = useState("");

  const checkUserExists = async (email) => {
    try {
      const q = query(collection(db, "users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      console.error("Error checking user existence:", error);
      throw error;
    }
  };

  const checkPassword = (password) => {
    if (password.length < 6) {
      return false;
    }
    return true;
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const userExists = await checkUserExists(email);
      if (userExists) {
        toast.info("User already exists");
        return;
      }

      if (!checkPassword(password)) {
        toast.warning("Password must be at least 6 characters long");
        return;
      }

      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res?.user) {
        await setDoc(doc(db, "users", res?.user.uid), {
          fname: fName,
          lname: lname,
          email: email,
        });
      }
      console.log("success");
      setEmail("");
      setPassword("");
      setFName("");
      setLName("");
      window.location.href = "/login";
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div className={styles.registerPageContainer}>
      <div className={styles.logoContainer}>
        <img src={lightmodeLogo} alt="logo" className={styles.logo} />
      </div>
      <form
        className={styles.registerDetailsContainer}
        onSubmit={handleRegister}
      >
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
    </div>
  );
}

export default Register;
