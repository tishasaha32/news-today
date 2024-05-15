import React, { useContext } from "react";
import styles from "./NewsBodyPage.module.css";
import { CiBookmark } from "react-icons/ci";
import { SaveContext } from "../context/saveContext";
import { FaBookmark } from "react-icons/fa";

function NewsBodyPage({ news }) {
  const lines = news?.body?.match(/[^.!?]+[.!?]/g);
  const firstFiveLines = lines?.slice(0, 5);
  const NextTenLines = lines?.slice(5, 15);
  const restLines = lines?.slice(15);

  const { handleSave } = useContext(SaveContext);
  return (
    <div>
      <div className={styles.newsHeaderContainer}>
        <img src={news.image} className={styles.newsImage} />
        <div className={styles.overlay}></div>
        <div
          className={
            news.saved ? styles.savedIconContainer : styles.saveIconContainer
          }
        >
          {news.saved ? (
            <FaBookmark
              className={styles.savedIcon}
              onClick={() => handleSave(news)}
            />
          ) : (
            <CiBookmark
              className={styles.saveIcon}
              onClick={() => handleSave(news)}
            />
          )}
        </div>
        <p className={styles.newsAuthor}>By {news.author}</p>
        <h2 className={styles.newsTitle}>{news.headline}</h2>
      </div>
      <p className={styles.newsBodyFirst}>{firstFiveLines}</p>
      <p className={styles.newsBodyNextFive}>"{NextTenLines}"</p>
      <p className={styles.newsBodyRest}>{restLines}</p>
    </div>
  );
}

export default NewsBodyPage;
