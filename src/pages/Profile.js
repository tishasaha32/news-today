import React, { useContext } from "react";
import useLogout from "../hooks/useLogout";
import useFetchUserData from "../hooks/useFetchUserData";
import Header from "../common/Header";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import styles from "./Profile.module.css";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { DarkModeContext } from "../context/darkmodeContext";

function Profile() {
  const userDetails = useFetchUserData();

  const logout = useLogout();

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div>
      <div className={styles.headerContainer}>
        <MdOutlineArrowBackIosNew
          className={styles.backIcon}
          onClick={() => window.history.back()}
        />
        <Header />
      </div>
      {userDetails ? (
        <div className={styles.userDetailsContainer}>
          {userDetails?.fname && (
            <div>
              <div className={styles.userImageContainer}>
                {darkMode ? (
                  <FaUserCircle className={styles.userImage} />
                ) : (
                  <FaRegUserCircle className={styles.userImage} />
                )}
              </div>
              <div>
                <p className={styles.userDetailsHeader}>First name</p>
                <p className={styles.userDetails}>{userDetails.fname}</p>
              </div>
              <div>
                <p className={styles.userDetailsHeader}>Last name</p>
                <p className={styles.userDetails}>{userDetails.lname}</p>
              </div>
            </div>
          )}
          {userDetails?.displayName && (
            <div>
              <div className={styles.userImageContainer}>
                <img
                  src={userDetails.photoURL}
                  alt="profile"
                  className={styles.userImage}
                />
              </div>
              <div>
                <p className={styles.userDetailsHeader}>Username</p>
                <p className={styles.userDetails}>{userDetails.displayName}</p>
              </div>
            </div>
          )}
          <div>
            <p className={styles.userDetailsHeader}>Email</p>
            <p className={styles.userDetails}>{userDetails.email}</p>
          </div>
          <div className={styles.logoutContainer}>
            <button onClick={logout} className={styles.logoutButton}>
              LOGOUT
            </button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Profile;
