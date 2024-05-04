import React from "react";
import BottomNavbar from "../common/BottomNavbar";
import Header from "../common/Header";

function Home() {
  return (
    <div>
      <Header />
      <BottomNavbar activePage="Home" />
    </div>
  );
}

export default Home;
