import React, { useState, useEffect, useContext } from "react";
import styles from "./NewsBodyPage.module.css";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import useHandleSaveClick from "../hooks/useHandleSaveClick";
import useHandleSummariseClick from "../hooks/useHandleSummariseClick";
import AnimatedText from "./AnimatedText"; // Import the AnimatedText component
import { DarkModeContext } from "../context/darkmodeContext";

function NewsBodyPage({ news }) {
  const id = window.location.pathname.split("/")[2];
  const [newsState, setNewsState] = useState({ ...news, id: id });

  const { handleSaveClick } = useHandleSaveClick({
    news: newsState,
    setNewsState,
  });

  useEffect(() => {
    setNewsState({ ...news, id: id });
  }, [news]);

  const { summary, summarizeNews } = useHandleSummariseClick(news);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={styles.newsContainer}>
      <div className={styles.newsHeaderContainer}>
        <img src={newsState.imageUrl} className={styles.newsImage} />
        <div className={styles.overlay}></div>
        <div
          className={
            newsState.saved
              ? styles.savedIconContainer
              : styles.saveIconContainer
          }
        >
          {newsState.saved ? (
            <FaBookmark
              className={styles.savedIcon}
              onClick={() => handleSaveClick(newsState)}
            />
          ) : (
            <CiBookmark
              className={styles.saveIcon}
              onClick={() => handleSaveClick(newsState)}
            />
          )}
        </div>
        <p className={styles.newsAuthor}>By {newsState.author}</p>
        <h2 className={styles.newsTitle}>{newsState.headline}</h2>
      </div>
      <div className={styles.newsBodyContainer}>
        {summary ? (
          <AnimatedText text={summary} speed={1} />
        ) : (
          <p
            className={styles.newsBody}
            dangerouslySetInnerHTML={{ __html: newsState.body }}
          />
        )}
        <div className={styles.summarizeButtonContainer}>
          <button className={styles.summarizeButton} onClick={summarizeNews}>
            Summarize with GPT
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsBodyPage;
