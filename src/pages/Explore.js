import React from "react";
import BottomNavbar from "../common/BottomNavbar";
import Header from "../common/Header";
import styles from "./Explore.module.css";
import ExplorePageCategory from "../components/ExplorePageCategory";

function Explore() {
  return (
    <div>
      <Header />
      <h3 className={styles.header}>Explore by Category</h3>
      <ExplorePageCategory />
      <BottomNavbar activePage="Explore" />
    </div>
  );
}

export default Explore;
