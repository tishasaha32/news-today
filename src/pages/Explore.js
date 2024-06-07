import React from "react";
import BottomNavbar from "../common/BottomNavbar";
import Header from "../common/Header";
import ExplorePageCategory from "../components/ExplorePageCategory";
import SearchBar from "../components/SearchBar";

function Explore() {
  return (
    <div style={{ overflowX: "hidden", height: "100vh" }}>
      <Header />
      <SearchBar />
      <ExplorePageCategory />
      <BottomNavbar activePage="Explore" />
    </div>
  );
}

export default Explore;
