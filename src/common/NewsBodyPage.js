import React from "react";
import styles from "./NewsBodyPage.module.css";

function NewsBodyPage({ news }) {
  return (
    <div>
      <h1>{news.headline}</h1>
      <img src={news.image} className={styles.newsImage} />
      <p>{news.body}</p>
      <p>{news.author}</p>
      <p>{news.date}</p>
    </div>
  );
}

export default NewsBodyPage;
