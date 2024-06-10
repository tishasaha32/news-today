import React from "react";
import { Link } from "react-router-dom";
import styles from "./SavedNews.module.css";
import useGetCategoryNews from "../hooks/useGetCategoryNews";

function SavedNews({ savedNews }) {
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
                <p
                  className={styles.newsTitle}
                  dangerouslySetInnerHTML={{
                    __html: item.body.slice(0, 50) + "...",
                  }}
                />
                <p
                  className={styles.newsTitleLong}
                  dangerouslySetInnerHTML={{
                    __html: item.body.slice(0, 150) + "...",
                  }}
                />
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
