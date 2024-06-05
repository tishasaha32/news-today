import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import useGetCategoryNews from "../hooks/useGetCategoryNews";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { categoryNews } = useGetCategoryNews();

  useEffect(() => {
    if (searchTerm === "") {
      setSearchResults([]);
      return;
    }
    const filteredNews = categoryNews.filter((item) =>
      item.headline.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredNews);
  }, [searchTerm, categoryNews]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Search News"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <CiSearch className={styles.searchIcon} />
      {searchResults.length > 0 && (
        <div className={styles.searchResults}>
          {searchResults.map((item, index) => (
            <Link
              to={`/news/${item.id}`}
              key={item.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className={styles.resultItem}>
                <img src={item.imageUrl} className={styles.newsImage} />
                <p className={styles.newsTitle}>
                  {item.headline.slice(0, 30)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
