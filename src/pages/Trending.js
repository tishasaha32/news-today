import React from "react";
import useNews from "../hooks/useNews";
import Header from "../common/Header";
import BottomNavbar from "../common/BottomNavbar";
import TrendingSlider from "../components/TrendingSlider";

function Trending() {
  const { news } = useNews({ category: "trending" });
  return (
    <div>
      <Header />
      <TrendingSlider news={news} />
      <BottomNavbar activePage="Trending" />
    </div>
  );
}

export default Trending;
