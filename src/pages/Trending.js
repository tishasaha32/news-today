import React from "react";
import useGetCategoryNews from "../hooks/useGetCategoryNews";
import Header from "../common/Header";
import BottomNavbar from "../common/BottomNavbar";
import TrendingSlider from "../components/TrendingSlider";

function Trending() {
  const { categoryNews } = useGetCategoryNews({ category: "trending" });
  return (
    <div>
      <Header />
      <TrendingSlider categoryNews={categoryNews} />
      <BottomNavbar activePage="Trending" />
    </div>
  );
}

export default Trending;
