import React, { useEffect, useState } from "react";
import { db } from "../components/firebase";
import { collection, getDocs } from "firebase/firestore";

function useGetCategoryNews({ category = null }) {
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsCollection = collection(db, "news");
        const newsSnapshot = await getDocs(newsCollection);
        const newsList = newsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (category) {
          const filteredNews = newsList.filter(
            (item) => item.section === category
          );
          setCategoryNews(filteredNews);
        } else {
          setCategoryNews(newsList);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category]);

  return { categoryNews, setCategoryNews };
}

export default useGetCategoryNews;
