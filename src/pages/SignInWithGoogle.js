import React from "react";
import styles from "./SignInWithGoogle.module.css";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../components/firebase";
import { toast } from "react-toastify";

function SignInWithGoogle() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      if (result.user) {
        toast.success("Login Successful");
        setTimeout(() => {
          window.location.href = "/home";
        }, 2000);
      }
    });
  }
  return (
    <div className={styles.continueWithGoogleContainer}>
      <p className={styles.orContainer}>
        <span className={styles.orSpan}>or</span>
      </p>
      <button className={styles.continueWithGoogleButton} onClick={googleLogin}>
        <FcGoogle className={styles.googleIcon} />
        <p>Continue with Google</p>
      </button>
    </div>
  );
}

export default SignInWithGoogle;
