import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./AddNews.module.css";
import Header from "../common/Header";
import { useAddNews } from "../hooks/useAddNews";

function AddNews() {
  const {
    headline,
    setHeadline,
    author,
    setAuthor,
    setImage,
    abstract,
    setAbstract,
    section,
    setSection,
    body,
    setBody,
    fileInputRef,
    handleAddNews,
  } = useAddNews();

  return (
    <div>
      <Header />
      <form className={styles.addNewsContainer} onSubmit={handleAddNews}>
        <input
          placeholder="Enter Headline"
          className={styles.input}
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          required
        />
        <input
          placeholder="Enter Author Name"
          className={styles.input}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          placeholder="Choose Image"
          type="file"
          className={styles.input}
          ref={fileInputRef}
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <input
          placeholder="Enter Abstract"
          className={styles.input}
          value={abstract}
          onChange={(e) => setAbstract(e.target.value)}
          required
        />
        <select
          className={styles.selectOption}
          value={section}
          onChange={(e) => setSection(e.target.value)}
          required
        >
          <option hidden>Select section</option>
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
        <ReactQuill
          value={body}
          style={{ height: "30vh" }}
          onChange={setBody}
          className={styles.reactQuill}
          required
        />
        <button className={styles.createButton} type="submit">
          CREATE NEWS
        </button>
      </form>
    </div>
  );
}

export default AddNews;
