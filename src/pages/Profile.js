import React from "react";
import useLogout from "../hooks/useLogout";
import useFetchUserData from "../hooks/useFetchUserData";

function Profile() {
  const userDetails = useFetchUserData();
  const logout = useLogout();

  return (
    <div>
      {userDetails ? (
        <div>
          <p>{userDetails.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Profile;
