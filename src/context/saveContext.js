import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useGetCategoryNews from "../hooks/useGetCategoryNews";

export const SaveContext = createContext();

export const SaveContextProvider = ({ children }) => {
  const [savedNews, setSavedNews] = useState([]);
  useEffect(() => {
    const saved = localStorage.getItem("savedNews");
    if (saved) {
      setSavedNews(JSON.parse(saved));
    }
  }, []);
  // console.log(savedNews);
  const handleSave = (item) => {
    axios
      .put(`http://localhost:8000/news/${item.id}`, {
        ...item,
        saved: item.saved === true ? false : true,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    const isAlreadySaved = savedNews.some((saved) => saved.id === item.id);
    let updatedSavedNews;
    if (isAlreadySaved) {
      updatedSavedNews = savedNews.filter((saved) => saved.id !== item.id);
      item.saved = false;
    } else {
      updatedSavedNews = [...savedNews, item];
      item.saved = true;
    }
    setSavedNews(updatedSavedNews);

    localStorage.setItem("savedNews", JSON.stringify(updatedSavedNews));
  };

  return (
    <SaveContext.Provider value={{ handleSave, savedNews }}>
      {children}
    </SaveContext.Provider>
  );
};
