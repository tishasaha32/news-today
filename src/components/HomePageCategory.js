import React, { useState } from "react";
import styles from "./HomePageCategory.module.css";
import NewsCards from "./NewsCards";
import useGetCategoryNews from "../hooks/useGetCategoryNews";

function HomePageCategory() {
  const [selectedCategory, setSelectedCategory] = useState("World News");
  let category;
  if (selectedCategory === "World News") {
    category = "worldNews";
  }
  if (selectedCategory === "Economic") {
    category = "economic";
  }
  if (selectedCategory === "Local News") {
    category = "localNews";
  }
  if (selectedCategory === "Good News") {
    category = "goodNews";
  }
  if (selectedCategory === "USA News") {
    category = "usaNews";
  }
  if (selectedCategory === "India News") {
    category = "indiaNews";
  }
  const { categoryNews } = useGetCategoryNews({ category: category });
  const categories = [
    "World News",
    "Economic",
    "Local News",
    "Good News",
    "USA News",
    "India News",
  ];
  return (
    <div>
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
      <NewsCards categoryNews={categoryNews} />
    </div>
  );
}

export default HomePageCategory;
