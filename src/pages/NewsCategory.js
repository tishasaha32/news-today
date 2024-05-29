import React from "react";
import CategoryWiseNews from "../common/CategoryWiseNews";
import HeaderWithBackButton from "../common/HeaderWithBackButton";

function NewsCategory() {
  const pathname = window.location.pathname;
  const category = pathname.split("/")[2];
  return (
    <div>
      <HeaderWithBackButton />
      <CategoryWiseNews category={category} />
    </div>
  );
}

export default NewsCategory;
