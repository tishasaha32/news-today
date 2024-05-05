import React, { useEffect } from "react";
import useNews from "../hooks/useNews";
import styles from "./NewsCards.module.css";

function NewsCards() {
  const { news } = useNews({ category: "worldNews" });
  useEffect(() => {
    console.log(news);
  }, [news]);
  return (
    <div>
      <div className={styles.newsCards}>
        {news.map((item) => {
          return <img src={item.image} className={styles.newsImage} />;
        })}
      </div>
    </div>
  );
}

export default NewsCards;
