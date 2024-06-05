import React, { useState } from "react";
import styles from "./HomePageCategory.module.css";
import NewsCards from "./NewsCards";
import useGetCategoryNews from "../hooks/useGetCategoryNews";

function HomePageCategory() {
  const [selectedCategory, setSelectedCategory] = useState("worldNews");
  const { categoryNews, setCategoryNews } =
    useGetCategoryNews(selectedCategory);
  const categories = [
    { name: "World News", param: "worldNews", id: 1 },
    { name: "Economic", param: "economic", id: 2 },
    { name: "Local News", param: "localNews", id: 3 },
    { name: "Good News", param: "goodNews", id: 4 },
    { name: "USA News", param: "usaNews", id: 5 },
    { name: "India News", param: "indiaNews", id: 6 },
  ];
  return (
    <div>
      <div className={styles.categoryContainer}>
        {categories.map((category) => (
          <p
            key={category.id}
            className={
              selectedCategory === category.param
                ? styles.activeCategoryText
                : styles.categoryText
            }
            onClick={() => setSelectedCategory(category.param)}
          >
            {category.name}
          </p>
        ))}
      </div>
      <NewsCards
        categoryNews={categoryNews}
        setCategoryNews={setCategoryNews}
      />
    </div>
  );
}

export default HomePageCategory;
