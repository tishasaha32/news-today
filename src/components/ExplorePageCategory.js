import React from "react";
import business from "../assets/category/business.jpg";
import entertainment from "../assets/category/entertainment.jpg";
import sports from "../assets/category/sports.jpg";
import technology from "../assets/category/technology.jpg";
import styles from "./ExplorePageCategory.module.css";

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
  return (
    <div>
      <h3 className={styles.header}>Explore by Category</h3>
      <div className={styles.categoriesContainer}>
        {categories.map((category) => (
          <div className={styles.categoryContainer} key={category.id}>
            <img src={category.image} className={styles.categoryImg} />
            <div className={styles.categoryAndExploreButton}>
              <p className={styles.category}>{category.name}</p>
              <button className={styles.exploreButton}>Explore</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExplorePageCategory;
