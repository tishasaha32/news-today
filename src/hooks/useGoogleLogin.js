import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../components/firebase";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";

function useGoogleLogin() {
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      if (result.user) {
        toast.success("Login Successful");
        setTimeout(() => {
          window.location.href = "/home";
        }, 2000);
      }
      await setDoc(doc(db, "users", result.user.uid), {
        displayName: result.user.displayName,
        email: result.user.email,
        admin: false,
        photoURL: result.user.photoURL,
      });
    });
  };
  return { googleLogin };
}

export default useGoogleLogin;
