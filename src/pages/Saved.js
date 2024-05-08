import React from "react";
import Header from "../common/Header";
import BottomNavbar from "../common/BottomNavbar";
import SavedNews from "../components/SavedNews";

function Saved() {
  return (
    <div>
      <Header />
      <SavedNews />
      <BottomNavbar activePage="Saved" />
    </div>
  );
}

export default Saved;
