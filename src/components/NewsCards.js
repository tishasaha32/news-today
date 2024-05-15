import React, { useContext, useEffect } from "react";
import useGetCategoryNews from "../hooks/useGetCategoryNews";
import styles from "./NewsCards.module.css";
import { SaveContext } from "../context/saveContext";
import HeaderTitle from "../common/HeaderTitle";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";

function NewsCards() {
  const { categoryNews } = useGetCategoryNews({ category: "worldNews" });
  const { handleSave } = useContext(SaveContext);
  const handleSaveClick = (event, item) => {
    event.preventDefault();
    event.stopPropagation();
    handleSave(item);
  };
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
                <img src={item.image} className={styles.newsImage} />
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
                <div className={styles.newsAuthorAndDateContainer}>
                  <p className={styles.newsAuthor}>By {item.author}</p>
                  <p className={styles.newsDate}>
                    {item.date.split("T")[0].split("-").reverse().join("-")}
                  </p>
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
