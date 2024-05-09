import React from "react";
import useNews from "../hooks/useNews";
import Header from "../common/Header";
import BottomNavbar from "../common/BottomNavbar";

function Trending() {
  const { news } = useNews({ category: "trending" });
  return (
    <div>
      <Header />
      <BottomNavbar activePage="Trending" />
    </div>
  );
}

export default Trending;
