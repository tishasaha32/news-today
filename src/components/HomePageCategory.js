import React, { useState } from "react";
import styles from "./HomePageCategory.module.css";

function HomePageCategory() {
  const categories = [
    "Trending",
    "Business",
    "Local News",
    "Good News",
    "Fact Check",
    "India News",
    "USA News",
  ];
  const [selectedCategory, setSelectedCategory] = useState("Trending");
  return (
    <div className={styles.categoryContainer}>
      {categories.map((category) => (
        <p
          key={category}
          className={
            selectedCategory === category
              ? styles.activeCategoryText
              : styles.categoryText
          }
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </p>
      ))}
    </div>
  );
}

export default HomePageCategory;
