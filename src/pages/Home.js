import React from "react";
import BottomNavbar from "../common/BottomNavbar";
import Header from "../common/Header";
import HomePageCategory from "../components/HomePageCategory";
import HomePageStories from "../components/HomePageStories";

function Home() {
  return (
    <div style={{ height: "100vh", overflowX: "hidden" }}>
      <Header />
      <HomePageStories />
      <HomePageCategory />
      <BottomNavbar activePage="Home" />
    </div>
  );
}

export default Home;
