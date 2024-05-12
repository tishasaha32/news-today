import React, { useEffect, useState } from "react";
import axios from "axios";

function useGetCategoryNews({ category }) {
  const [categoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/news`).then((response) => {
      const filteredNews = response.data.filter(
        (item) => item.section === category
      );
      setCategoryNews(filteredNews);
    });
  }, [category]);
  return { categoryNews, setCategoryNews };
}

export default useGetCategoryNews;
