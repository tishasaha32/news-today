import React, { useContext } from "react";
import styles from "./ExplorePageCategory.module.css";
import { DarkModeContext } from "../context/darkmodeContext";
import { Link } from "react-router-dom";
import useGetCategories from "../hooks/useGetCategories";

function ExplorePageCategory() {
  const { categories } = useGetCategories();
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={styles.explorePageCategoryContainer}>
      <h3 className={styles.header}>Explore by Category</h3>
      <div className={styles.categoriesContainer}>
        {categories.map((category) => (
          <Link
            to={`/category/${category.name.toLowerCase()}`}
            key={category.id}
            style={{ textDecoration: "none" }}
          >
            <div
              className={
                darkMode
                  ? styles.darkmodeCategoryContainer
                  : styles.categoryContainer
              }
            >
              <img src={categories.image} className={styles.categoryImg} />
              <div className={styles.categoryAndExploreButton}>
                <p className={styles.category}>{categories.category}</p>
                <button className={styles.exploreButton}>Explore</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ExplorePageCategory;
