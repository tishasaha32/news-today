import React, { useEffect, useState } from "react";
import axios from "axios";

function useNews({ category }) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/news`).then((response) => {
      const filteredNews = response.data.filter(
        (item) => item.section === category
      );
      setNews(filteredNews);
    });
  }, [category]);
  return { news, setNews };
}

export default useNews;
