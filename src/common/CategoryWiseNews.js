import React, { useContext } from "react";
import { CiBookmark } from "react-icons/ci";
import styles from "./CategoryWiseNews.module.css";
import useGetCategoryNews from "../hooks/useGetCategoryNews";
import { SaveContext } from "../context/saveContext";
import { Link } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";

function CategoryWiseNews({ category }) {
  const { categoryNews } = useGetCategoryNews({ category });
  const { handleSave } = useContext(SaveContext);

  const handleSaveClick = (event, item) => {
    event.preventDefault();
    event.stopPropagation();
    handleSave(item);
  };

  return (
    <div className={styles.newsCards}>
      {categoryNews.map((item) => {
        return (
          <Link
            to={`/news/${item.id}`}
            style={{ textDecoration: "none" }}
            key={item.id}
          >
            <div className={styles.newsCard}>
              <img
                src={item.imageUrl}
                className={styles.newsImage}
                alt={item.headline}
              />
              <div className={styles.newsDetailsContainer}>
                <div className={styles.newsTitleContainer}>
                  <p className={styles.newsTitle}>{item.headline}</p>
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
                </div>
                <div
                  className={styles.newsbody}
                  dangerouslySetInnerHTML={{
                    __html: item.body.slice(0, 150) + "...",
                  }}
                />
                <span className={styles.readMore}>Read More</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default CategoryWiseNews;
