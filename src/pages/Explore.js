import React from "react";
import BottomNavbar from "../common/BottomNavbar";
import Header from "../common/Header";
import ExplorePageCategory from "../components/ExplorePageCategory";

function Explore() {
  return (
    <div>
      <Header />
      <ExplorePageCategory />
      <BottomNavbar activePage="Explore" />
    </div>
  );
}

export default Explore;
