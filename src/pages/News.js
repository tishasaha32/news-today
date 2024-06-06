import React from "react";
import useGetNews from "../hooks/useGetNews";
import NewsBodyPage from "../components/NewsBodyPage";
import HeaderWithBackButton from "../common/HeaderWithBackButton";

function News() {
  const pathname = window.location.pathname;
  const id = pathname.split("/")[2];
  const { news } = useGetNews({ id });
  return (
    <div>
      <HeaderWithBackButton />
      <NewsBodyPage news={news} />
    </div>
  );
}

export default News;
