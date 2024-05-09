import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SaveContext = createContext();

export const SaveContextProvider = ({ children }) => {
  const [savedNews, setSavedNews] = useState([]);
  useEffect(() => {
    const saved = localStorage.getItem("savedNews");
    if (saved) {
      setSavedNews(JSON.parse(saved));
    }
  }, []);

  const handleSave = (item) => {
    const isAlreadySaved = savedNews.some((saved) => saved.id === item.id);
    let updatedSavedNews;
    if (isAlreadySaved) {
      updatedSavedNews = savedNews.filter((saved) => saved.id !== item.id);
    } else {
      updatedSavedNews = [...savedNews, item];
    }

    // useEffect(() => {
    //   axios
    //     .patch(`http://localhost:8000/${item.section}`, item)
    //     .then((response) => {
    //       console.log(response.data);
    //     });
    // });
    setSavedNews(updatedSavedNews);

    localStorage.setItem("savedNews", JSON.stringify(updatedSavedNews));
  };

  return (
    <SaveContext.Provider value={{ handleSave, savedNews }}>
      {children}
    </SaveContext.Provider>
  );
};
