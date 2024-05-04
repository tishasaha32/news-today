import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Trending from "./pages/Trending";
import Saved from "./pages/Saved";

import { DarkModeContext } from "./context/darkmodeContext";

function App() {
  // const apiUrl =
  //   "https://newsapi.org/v2/everything?q=apple&from=2024-04-29&to=2024-04-29&sortBy=popularity&apiKey=447a047dc9714b7487c71828a41f61d2";

  // const { articles, loading, error } = useNews(apiUrl);

  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "darkModeApp" : "lightModeApp"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </div>
  );
}

export default App;
