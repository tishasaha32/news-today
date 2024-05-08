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

  const handleSave = (news) => {
    const isAlreadySaved = savedNews.some((item) => item.id === news.id);
    let updatedSavedNews;
    if (isAlreadySaved) {
      updatedSavedNews = savedNews.filter((item) => item.id !== news.id);
    } else {
      updatedSavedNews = [...savedNews, news];
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
