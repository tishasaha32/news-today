import React, { useEffect, useState } from "react";
import axios from "axios";

function useGetCategoryNews({ category = null }) {
  const [categoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/news`).then((response) => {
      if (category) {
        const filteredNews = response.data.filter(
          (item) => item.section === category
        );
        setCategoryNews(filteredNews);
      } else {
        setCategoryNews(response.data);
      }
    });
  }, [categoryNews, category]);
  return { categoryNews, setCategoryNews };
}

export default useGetCategoryNews;
