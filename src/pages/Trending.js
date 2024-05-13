import React from "react";
import Header from "../common/Header";
import BottomNavbar from "../common/BottomNavbar";
import TrendingSlider from "../components/TrendingSlider";
import useGetTrendingNews from "../hooks/useGetTrendingNews";

function Trending() {
  const { trendingNews } = useGetTrendingNews();
  return (
    <div>
      <Header />
      <TrendingSlider trendingNews={trendingNews} />
      <BottomNavbar activePage="Trending" />
    </div>
  );
}

export default Trending;
