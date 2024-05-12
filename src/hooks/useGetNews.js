import axios from "axios";
import React, { useEffect, useState } from "react";

function useGetNews({ id }) {
  const [news, setNews] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8000/news/${id}`).then((response) => {
      setNews(response.data);
    });
  }, [id]);
  return { news, setNews };
}

export default useGetNews;
