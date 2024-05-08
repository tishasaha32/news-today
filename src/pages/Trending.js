import React from "react";
import Header from "../common/Header";
import BottomNavbar from "../common/BottomNavbar";

function Trending() {
  return (
    <div>
      <Header />
      <BottomNavbar activePage="Trending" />
    </div>
  );
}

export default Trending;
