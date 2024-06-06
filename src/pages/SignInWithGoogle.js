import React from "react";
import styles from "./SignInWithGoogle.module.css";
import { FcGoogle } from "react-icons/fc";
import useGoogleLogin from "../hooks/useGoogleLogin";

function SignInWithGoogle() {
  const { googleLogin } = useGoogleLogin();
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
