import React, { useEffect, useState } from "react";
import { auth, db } from "../components/firebase";
import { doc, getDoc } from "firebase/firestore";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
    }
  }
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      //   setUserDetails(user);
      // find doc in db firebase by email
      if (user) {
        const email = user.email;
        const docRef = doc(db, "users", user.uid);
        console.log(docRef);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log("Document data:", docSnap.data());
        } else {
          console.log("No such document!");
        }
      }
      //   const docRef = doc(db, "Users", "0lcI57QIo5espntPvac0IrSf51z1");
      //   const docRef = doc(db, "Users", "test123@gmail.com");
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div>
      {userDetails ? (
        <div>
          <p> {userDetails.email}</p>
          <button onClick={handleLogout}> Logout</button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Profile;
