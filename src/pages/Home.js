import React from "react";
import BottomNavbar from "../common/BottomNavbar";
import Header from "../common/Header";
import HomePageCategory from "../components/HomePageCategory";
import HomePageStories from "../components/HomePageStories";
import NewsCards from "../components/NewsCards";

function Home() {
  return (
    <div>
      <Header />
      <HomePageStories />
      <HomePageCategory />
      {/* <NewsCards /> */}
      <BottomNavbar activePage="Home" />
    </div>
  );
}

export default Home;
