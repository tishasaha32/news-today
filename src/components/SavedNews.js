import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./SavedNews.module.css";
import { SaveContext } from "../context/saveContext";

function SavedNews() {
  const { savedNews } = useContext(SaveContext);
  return (
    <div className={styles.newsCards}>
      {savedNews.map((item) => {
        return (
          <Link
            to={`/news/${item.id}`}
            key={item.id}
            style={{ textDecoration: "none" }}
          >
            <div className={styles.newsCard}>
              <div className={styles.newsImageContainer}>
                <img src={item.image} className={styles.newsImage} />
              </div>
              <div>
                <p className={styles.newsTitle}>
                  {item.headline} : {item.body.slice(0, 15)}...
                </p>
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
