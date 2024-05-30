import { useState, useEffect, useCallback } from "react";
import { auth, db } from "../components/firebase";
import { doc, getDoc } from "firebase/firestore";

const useFetchUserData = () => {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = useCallback(async () => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUserDetails(user);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        }
      } else {
        setUserDetails(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return userDetails;
};

export default useFetchUserData;
