import React from "react";
import business from "../assets/category/business.jpg";
import entertainment from "../assets/category/entertainment.jpg";
import sports from "../assets/category/sports.jpg";
import technology from "../assets/category/technology.jpg";
import styles from "./ExplorePageCategory.module.css";

function ExplorePageCategory() {
  return (
    <div className={styles.categoriesContainer}>
      <div className={styles.categoryContainer}>
        <img src={business} className={styles.categoryImg} />
        <div className={styles.categoryAndExploreButton}>
          <p className={styles.category}>Business</p>
          <button className={styles.exploreButton}>Explore</button>
        </div>
      </div>
      <div className={styles.categoryContainer}>
        <img src={entertainment} className={styles.categoryImg} />
        <div className={styles.categoryAndExploreButton}>
          <p className={styles.category}>Entertainment</p>
          <button className={styles.exploreButton}>Explore</button>
        </div>
      </div>
      <div className={styles.categoryContainer}>
        <img src={sports} className={styles.categoryImg} />
        <div className={styles.categoryAndExploreButton}>
          <p className={styles.category}>Sports</p>
          <button className={styles.exploreButton}>Explore</button>
        </div>
      </div>
      <div className={styles.categoryContainer}>
        <img src={technology} className={styles.categoryImg} />
        <div className={styles.categoryAndExploreButton}>
          <p className={styles.category}>Technology</p>
          <button className={styles.exploreButton}>Explore</button>
        </div>
      </div>
    </div>
  );
}

export default ExplorePageCategory;
