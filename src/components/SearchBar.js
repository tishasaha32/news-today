import React from "react";
import styles from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <input className={styles.searchBar} type="text" placeholder="Search" />
      <CiSearch className={styles.searchIcon} />
    </div>
  );
}

export default SearchBar;
