import React from "react";
import useGetNews from "../hooks/useGetNews";
import NewsBodyPage from "../components/NewsBodyPage";
import Header from "../common/Header";

function News() {
  const pathname = window.location.pathname;
  const id = pathname.split("/")[2];
  const { news } = useGetNews({ id });
  return (
    <div>
      <Header />
      <NewsBodyPage news={news} />
    </div>
  );
}

export default News;
