import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Trending from "./pages/Trending";
import Saved from "./pages/Saved";
import NewsCategory from "./pages/NewsCategory";
import News from "./pages/News";
import { DarkModeContext } from "./context/darkmodeContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "darkModeApp" : "lightModeApp"}>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/category/:category" element={<NewsCategory />} />
        <Route path="/news/:id" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
