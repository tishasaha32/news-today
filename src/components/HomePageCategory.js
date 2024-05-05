import React, { useState } from "react";
import styles from "./HomePageCategory.module.css";

function HomePageCategory() {
  const [selectedCategory, setSelectedCategory] = useState("Trending");
  return (
    <div className={styles.categoryContainer}>
      <p
        className={
          selectedCategory === "Trending"
            ? styles.activeCategoryText
            : styles.categoryText
        }
        onClick={() => setSelectedCategory("Trending")}
      >
        Trending
      </p>
      <p
        className={
          selectedCategory === "Business"
            ? styles.activeCategoryText
            : styles.categoryText
        }
        onClick={() => setSelectedCategory("Business")}
      >
        Business
      </p>
      <p
        className={
          selectedCategory === "Local News"
            ? styles.activeCategoryText
            : styles.categoryText
        }
        onClick={() => setSelectedCategory("Local News")}
      >
        Local News
      </p>
      <p
        className={
          selectedCategory === "Good News"
            ? styles.activeCategoryText
            : styles.categoryText
        }
        onClick={() => setSelectedCategory("Good News")}
      >
        Good News
      </p>
      <p
        className={
          selectedCategory === "Fact Check"
            ? styles.activeCategoryText
            : styles.categoryText
        }
        onClick={() => setSelectedCategory("Fact Check")}
      >
        Fact Check
      </p>
      <p
        className={
          selectedCategory === "India News"
            ? styles.activeCategoryText
            : styles.categoryText
        }
        onClick={() => setSelectedCategory("India News")}
      >
        India News
      </p>
      <p
        className={
          selectedCategory === "USA News"
            ? styles.activeCategoryText
            : styles.categoryText
        }
        onClick={() => setSelectedCategory("USA News")}
      >
        USA News
      </p>
    </div>
  );
}

export default HomePageCategory;
