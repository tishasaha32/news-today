import React, { useEffect, useState } from "react";
import axios from "axios";

function useGetCategoryNews() {
  const [trendingNews, setTrendingNews] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/trending`).then((response) => {
      setTrendingNews(response.data);
    });
  }, []);
  return { trendingNews, setTrendingNews };
}

export default useGetCategoryNews;
