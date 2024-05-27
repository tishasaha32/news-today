import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
import Profile from "./pages/Profile";
import { auth } from "./components/firebase";
import ProtectedRoute from "./ProtectedRoute"; // Import the ProtectedRoute component

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false); // Stop loading when auth state is determined
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    // Optionally, show a loading spinner or similar while checking auth status
    return <div>Loading...</div>;
  }

  return (
    <div className={darkMode ? "darkModeApp" : "lightModeApp"}>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <ProtectedRoute user={user}>
              <Explore />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trending"
          element={
            <ProtectedRoute user={user}>
              <Trending />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved"
          element={
            <ProtectedRoute user={user}>
              <Saved />
            </ProtectedRoute>
          }
        />
        <Route
          path="/category/:category"
          element={
            <ProtectedRoute user={user}>
              <NewsCategory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/news/:id"
          element={
            <ProtectedRoute user={user}>
              <News />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
