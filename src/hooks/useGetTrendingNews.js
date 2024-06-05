import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../components/firebase";

function useGetTendingNews() {
  const [trendingNews, setTrendingNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let isMounted = true;

    const fetchRandomNews = async () => {
      try {
        setLoading(true);
        const newsCollection = collection(db, "news");
        const newsSnapshot = await getDocs(newsCollection);
        const newsList = newsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const shuffledNews = newsList.sort(() => 0.5 - Math.random());
        const selectedNews = shuffledNews.slice(0, 10);

        if (isMounted) {
          setTrendingNews(selectedNews);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      }
    };

    fetchRandomNews();

    return () => {
      isMounted = false;
    };
  }, []);
  return { trendingNews, setTrendingNews };
}

export default useGetTendingNews;
