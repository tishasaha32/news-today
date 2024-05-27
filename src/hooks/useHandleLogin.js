import { useCallback } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";
import { toast } from "react-toastify";
import useCheckEmailExists from "./useCheckEmailExists";

const useHandleLogin = () => {
  const checkEmailExists = useCheckEmailExists();

  const handleLogin = useCallback(
    async (email, password) => {
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
    },
    [checkEmailExists]
  );

  return handleLogin;
};

export default useHandleLogin;
