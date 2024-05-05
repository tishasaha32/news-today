import React from "react";
import person1 from "../assets/stories/person1.jpg";
import person2 from "../assets/stories/person2.jpg";
import person3 from "../assets/stories/person3.jpg";
import person4 from "../assets/stories/person4.png";
import person5 from "../assets/stories/person5.jpg";
import person6 from "../assets/stories/person6.jpg";
import person7 from "../assets/stories/person7.jpg";

import styles from "./HomePageStories.module.css";
function HomePageStories() {
  return (
    <div className={styles.storiesContainer}>
      <div className={styles.discoverStory}>
        <p className={styles.discoverText}> Discover </p>
      </div>
      <img src={person1} className={styles.person} />
      <img src={person2} className={styles.person} />
      <img src={person3} className={styles.person} />
      <img src={person4} className={styles.person} />
      <img src={person5} className={styles.person} />
      <img src={person6} className={styles.person} />
      <img src={person7} className={styles.person} />
    </div>
  );
}

export default HomePageStories;
