import { useCallback } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "../components/firebase";
import useCheckEmailExists from "./useCheckEmailExists";
import useCheckPassword from "./useCheckPassword";

const useHandleRegister = () => {
  const checkEmailExists = useCheckEmailExists();
  const checkPassword = useCheckPassword();

  const handleRegister = useCallback(
    async (email, password, fName, lName) => {
      try {
        const userExists = await checkEmailExists(email);
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
            lname: lName,
            email: email,
          });
        }
        toast.success("Registration successful");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } catch (error) {
        console.error("Error during registration:", error);
        toast.error("Error during registration");
      }
    },
    [checkEmailExists, checkPassword]
  );
  return handleRegister;
};

export default useHandleRegister;
