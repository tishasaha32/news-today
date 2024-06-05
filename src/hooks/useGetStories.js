import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../components/firebase";
function useGetStories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const getStories = async () => {
      try {
        const storiesCollection = collection(db, "stories");
        const storiesSnapshot = await getDocs(storiesCollection);
        const storiesList = storiesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStories(storiesList);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };
    getStories();
  }, []);

  return { stories, setStories };
}

export default useGetStories;
