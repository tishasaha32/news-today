import React, { useContext } from "react";
import styles from "./NewsBodyPage.module.css";
import { CiBookmark } from "react-icons/ci";
import { SaveContext } from "../context/saveContext";
import { FaBookmark } from "react-icons/fa";

function NewsBodyPage({ news }) {
  const { handleSave } = useContext(SaveContext);
  return (
    <div>
      <div className={styles.newsHeaderContainer}>
        <img src={news.imageUrl} className={styles.newsImage} />
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
      <p
        className={styles.newsBody}
        dangerouslySetInnerHTML={{ __html: news.body }}
      />
      <div className={styles.summarizeButtonContainer}>
        <button className={styles.summarizeButton}>Summarize with GPT</button>
      </div>
    </div>
  );
}

export default NewsBodyPage;
