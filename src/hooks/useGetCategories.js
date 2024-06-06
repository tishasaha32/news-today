import React, { useState, useEffect } from "react";
import { db } from "../components/firebase";
import { collection, getDocs } from "firebase/firestore";

function useGetCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const categoriesCollection = collection(db, "category");
        const categoriesSnapshot = await getDocs(categoriesCollection);
        const categoriesList = categoriesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(categoriesList);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getCategories();
  }, []);

  return { categories };
}

export default useGetCategories;
