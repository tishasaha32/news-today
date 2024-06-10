import React from "react";
import Header from "../common/Header";
import BottomNavbar from "../common/BottomNavbar";
import SavedNews from "../components/SavedNews";
import useGetCategoryNews from "../hooks/useGetCategoryNews";
import styles from "./Saved.module.css";

function Saved() {
  const { savedNews } = useGetCategoryNews();
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      {savedNews?.length === 0 && (
        <div className={styles.nothingSavedImageContainer}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/news-22cea.appspot.com/o/nothingSaved%2Fundraw_undraw_undraw_undraw_undraw_undraw_undraw_undraw_completion_progress_1oxr_gag2_-1-_0h44_-1-_vov5_-1-_wbt2_-1-_fu4s_-1-_tkgx_(3)_h0q2.png?alt=media&token=a22442fa-0fc0-4c0e-a4ae-4aba268d2584"
            alt="no saved news"
            className={styles.nothingSavedImage}
          />
          <h3>Nothing still Saved</h3>
        </div>
      )}
      <SavedNews savedNews={savedNews} />
      <BottomNavbar activePage="Saved" />
    </div>
  );
}

export default Saved;
