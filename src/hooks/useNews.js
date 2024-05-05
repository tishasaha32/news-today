import React, { useEffect, useState } from "react";
import axios from "axios";

function useNews({ category }) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/${category}`).then((response) => {
      console.log(category);
      setNews(response.data);
    });
  }, [category]);
  return { news, setNews };
}

export default useNews;
