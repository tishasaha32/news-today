import React from "react";
import useNews from "../hooks/useNews";
import styles from "./NewsCards.module.css";
import HeaderTitle from "../common/HeaderTitle";
import { CiBookmark } from "react-icons/ci";

function NewsCards() {
  const { news } = useNews({ category: "worldNews" });
  return (
    <div>
      <div className={styles.newsCards}>
        {news.map((item) => {
          return (
            <div key={item.id} className={styles.newsCard}>
              <img src={item.image} className={styles.newsImage} />
              <div className={styles.overlay}></div>
              <div className={styles.saveIconContainer}>
                <CiBookmark className={styles.saveIcon} />
              </div>
              <h2 className={styles.newsTitle}>{item.headline}</h2>
              <div className={styles.headerTitle}>
                <HeaderTitle />
              </div>
              <div className={styles.newsAuthorAndDateContainer}>
                <p className={styles.newsAuthor}>By {item.author}</p>
                <p className={styles.newsDate}>
                  {item.date.split("T")[0].split("-").reverse().join("-")}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsCards;
