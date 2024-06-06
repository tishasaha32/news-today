import React from "react";
import { auth } from "../components/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

function useHandleResetPassword(email) {
  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      toast.info("Password reset email sent. Check your inbox.");
    } catch (error) {
      console.log(error);
    }
  };
  return { handleResetPassword };
}

export default useHandleResetPassword;
