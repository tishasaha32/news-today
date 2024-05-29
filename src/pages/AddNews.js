import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./AddNews.module.css";
import HeaderWithBackButton from "../common/HeaderWithBackButton";

function AddNews() {
  const [value, setValue] = useState("");
  return (
    <div>
      <HeaderWithBackButton />
      <div className={styles.addNewsContainer}>
        <input placeholder="Enter Headline" className={styles.input} />
        <input placeholder="Enter Author Name" className={styles.input} />
        <input placeholder="Enter Image URL" className={styles.input} />
        <input placeholder="Enter Abstract" className={styles.input} />

        <select className={styles.selectOption}>
          <option hidden>Select Category</option>
          <option value="worldNews" className={styles.option}>
            World News
          </option>
          <option value="economic" className={styles.option}>
            Economic
          </option>
          <option value="localNews" className={styles.option}>
            Local News
          </option>
          <option value="goodNews" className={styles.option}>
            Good News
          </option>
          <option value="usaNews" className={styles.option}>
            USA News
          </option>
          <option value="indiaNews" className={styles.option}>
            India News
          </option>
          <option value="sports" className={styles.option}>
            Sports
          </option>
          <option value="entertainment" className={styles.option}>
            Entertainment
          </option>
          <option value="technology" className={styles.option}>
            Technology
          </option>
          <option value="business" className={styles.option}>
            Business
          </option>
        </select>
        {/* <div className={styles.reactQuillContainer}> */}
        <ReactQuill
          value={value}
          style={{ height: "30vh" }}
          onChange={setValue}
          className={styles.reactQuill}
        />
        {/* </div> */}
        <button className={styles.createButton}>CREATE NEWS</button>
      </div>
    </div>
  );
}

export default AddNews;
