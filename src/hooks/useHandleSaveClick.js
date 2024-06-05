import React, { useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../components/firebase";

function useHandleSaveClick({
  categoryNews = null,
  setCategoryNews = null,
  news = null,
  setNewsState = null,
}) {
  const handleSaveClick = async (event, item) => {
    if (categoryNews) {
      event.preventDefault();
      event.stopPropagation();
    }

    // Update in firebase
    try {
      if (categoryNews) {
        const newsDoc = doc(db, "news", item.id);
        const gettingDoc = await getDoc(newsDoc);
        await updateDoc(newsDoc, {
          saved: !gettingDoc.data().saved,
        });
      }
      if (news) {
        const newsDoc = doc(db, "news", news.id);
        const gettingDoc = await getDoc(newsDoc);
        await updateDoc(newsDoc, {
          saved: !gettingDoc.data().saved,
        });
      }
    } catch (error) {
      alert("Something went wrong");
      console.error("Error updating document: ", error);
    }

    // Update in local (id)
    if (categoryNews) {
      const newsList = [...categoryNews];
      const newsBlog = newsList.find((n) => n.id === item.id);
      newsBlog.saved = !newsBlog.saved;
      setCategoryNews(newsList);
    }

    if (news) {
      const updatedNews = { ...news, saved: !news.saved };
      setNewsState(updatedNews);
    }
  };
  return { handleSaveClick };
}

export default useHandleSaveClick;
