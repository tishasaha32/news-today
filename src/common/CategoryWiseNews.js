import React from "react";
import { CiBookmark } from "react-icons/ci";
import styles from "./CategoryWiseNews.module.css";
import useNews from "../hooks/useNews";

function CategoryWiseNews({ category }) {
  const { news } = useNews({ category });
  return (
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
              <p className={styles.newsbody}>
                {item.body.slice(0, 150)}...
                <span className={styles.readMore}>Read More</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryWiseNews;
