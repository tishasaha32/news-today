import React from "react";
import styles from "./NewsCards.module.css";
import HeaderTitle from "../common/HeaderTitle";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";
import useHandleSaveClick from "../hooks/useHandleSaveClick";

function NewsCards({ categoryNews, setCategoryNews }) {
  const { handleSaveClick } = useHandleSaveClick({
    categoryNews: categoryNews,
    setCategoryNews: setCategoryNews,
  });
  return (
    <div>
      <div className={styles.newsCards}>
        {categoryNews.map((item) => {
          return (
            <Link
              to={`/news/${item.id}`}
              key={item.id}
              style={{ textDecoration: "none" }}
            >
              <div className={styles.newsCard}>
                <img src={item.imageUrl} className={styles.newsImage} />
                <div className={styles.overlay}></div>
                <div
                  className={
                    item.saved
                      ? styles.savedIconContainer
                      : styles.saveIconContainer
                  }
                >
                  {item.saved ? (
                    <FaBookmark
                      className={styles.savedIcon}
                      onClick={(event) => handleSaveClick(event, item)}
                    />
                  ) : (
                    <CiBookmark
                      className={styles.saveIcon}
                      onClick={(event) => handleSaveClick(event, item)}
                    />
                  )}
                </div>
                <h2 className={styles.newsTitle}>{item.headline}</h2>
                <div className={styles.headerTitle}>
                  <HeaderTitle />
                </div>
                <div className={styles.newsAuthorContainer}>
                  <p className={styles.newsAuthor}>By {item.author}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NewsCards;
