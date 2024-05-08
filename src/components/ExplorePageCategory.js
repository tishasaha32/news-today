import React, { useContext } from "react";
import business from "../assets/category/business.png";
import entertainment from "../assets/category/entertainment.png";
import sports from "../assets/category/sports.png";
import technology from "../assets/category/technology.png";
import styles from "./ExplorePageCategory.module.css";
import { DarkModeContext } from "../context/darkmodeContext";
import { Link } from "react-router-dom";

function ExplorePageCategory() {
  const categories = [
    {
      id: 1,
      name: "Business",
      image: business,
    },
    {
      id: 2,
      name: "Entertainment",
      image: entertainment,
    },
    {
      id: 3,
      name: "Sports",
      image: sports,
    },
    {
      id: 4,
      name: "Technology",
      image: technology,
    },
  ];

  const { darkMode } = useContext(DarkModeContext);
  return (
    <div>
      <h3 className={styles.header}>Explore by Category</h3>
      <div className={styles.categoriesContainer}>
        {categories.map((category) => (
          <Link
            to={`/news/${category.name.toLowerCase()}`}
            key={category.id}
            style={{ textDecoration: "none" }}
          >
            <div
              className={
                darkMode
                  ? styles.darkmodeCategoryContainer
                  : styles.categoryContainer
              }
              key={category.id}
            >
              <img src={category.image} className={styles.categoryImg} />
              <div className={styles.categoryAndExploreButton}>
                <p className={styles.category}>{category.name}</p>
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
