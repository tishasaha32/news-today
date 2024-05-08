import React from "react";
import Header from "../common/Header";
import styles from "./NewsCategory.module.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import CategoryWiseNews from "../common/CategoryWiseNews";

function NewsCategory() {
  const pathname = window.location.pathname;
  const category = pathname.split("/")[2];
  return (
    <div>
      <div className={styles.headerContainer}>
        <MdOutlineArrowBackIosNew
          className={styles.backIcon}
          onClick={() => window.history.back()}
        />
        <Header />
      </div>
      <CategoryWiseNews category={category} />
    </div>
  );
}

export default NewsCategory;
