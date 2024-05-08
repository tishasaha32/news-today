import React, { useContext } from "react";
import useNews from "../hooks/useNews";
import Header from "../common/Header";
import styles from "./NewsCategory.module.css";

import { CiBookmark } from "react-icons/ci";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { DarkModeContext } from "../context/darkmodeContext";

function NewsCategory() {
  const pathname = window.location.pathname;
  const category = pathname.split("/")[2];
  const { news } = useNews({ category });
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
      <div className={styles.newsCards}>
        {news.map((item) => {
          return (
            <div key={item.id} className={styles.newsCard}>
              <img src={item.image} className={styles.newsImage} />
              <div className={styles.newsDetailsContainer}>
                <div className={styles.newsTitleContainer}>
                  <p className={styles.newsTitle}>{item.headline}</p>
                  <CiBookmark className={styles.saveIcon} />
                </div>
                <p className={styles.newsAuthorAndDate}>
                  by {item.author} |{" "}
                  {item.date.split("T")[0].split("-").reverse().join("-")}
                </p>
                <p className={styles.newsbody}>{item.body.slice(0, 150)}...</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsCategory;
