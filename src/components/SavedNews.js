import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./SavedNews.module.css";
import useHandleSaveClick from "../hooks/useHandleSaveClick";
import useGetCategoryNews from "../hooks/useGetCategoryNews";

function SavedNews() {
  const { savedNews } = useGetCategoryNews();
  return (
    <div className={styles.newsCards}>
      {savedNews.map((item) => {
        return (
          <Link
            to={`/news/${item.id}`}
            key={item.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className={styles.newsCard}>
              <div className={styles.newsImageContainer}>
                <img src={item.imageUrl} className={styles.newsImage} />
              </div>
              <div>
                <p className={styles.newsTitle}>{item.headline}</p>
                <p className={styles.newsAuthor}>by {item.author}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SavedNews;
