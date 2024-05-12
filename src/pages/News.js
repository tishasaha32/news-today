import React from "react";
import useGetNews from "../hooks/useGetNews";
import styles from "./News.module.css";
import Header from "../common/Header";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import NewsBodyPage from "../common/NewsBodyPage";

function News() {
  const pathname = window.location.pathname;
  const id = pathname.split("/")[2];
  const { news } = useGetNews({ id });
  return (
    <div>
      <div className={styles.headerContainer}>
        <MdOutlineArrowBackIosNew
          className={styles.backIcon}
          onClick={() => window.history.back()}
        />
        <Header />
      </div>
      <NewsBodyPage news={news} />
    </div>
  );
}

export default News;
