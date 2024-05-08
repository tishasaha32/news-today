import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Trending from "./pages/Trending";
import Saved from "./pages/Saved";
import NewsCategory from "./pages/NewsCategory";

import { DarkModeContext } from "./context/darkmodeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "darkModeApp" : "lightModeApp"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/news/:category" element={<NewsCategory />} />
      </Routes>
    </div>
  );
}

export default App;
