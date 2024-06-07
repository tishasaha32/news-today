import React from "react";
import CategoryWiseNews from "../components/CategoryWiseNews";
import Header from "../common/Header";

function NewsCategory() {
  const pathname = window.location.pathname;
  const category = pathname.split("/")[2];
  return (
    <div>
      <Header />
      <CategoryWiseNews category={category} />
    </div>
  );
}

export default NewsCategory;
