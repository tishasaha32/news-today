import React, { useEffect, useState } from "react";
import person1 from "../assets/stories/person1.jpg";
import person2 from "../assets/stories/person2.jpg";
import person3 from "../assets/stories/person3.jpg";
import person4 from "../assets/stories/person4.png";
import person5 from "../assets/stories/person5.jpg";
import person6 from "../assets/stories/person6.jpg";
import person7 from "../assets/stories/person7.jpg";

import styles from "./HomePageStories.module.css";
import StoryModal from "./StoryModal";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
function HomePageStories() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [index, setIndex] = useState(0);
  const [stories, setStories] = useState([]);

  //get stories from firebase
  useEffect(() => {
    const getStories = async () => {
      try {
        const storiesCollection = collection(db, "stories");
        const storiesSnapshot = await getDocs(storiesCollection);
        console.log(storiesSnapshot);
        const storiesList = storiesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStories(storiesList);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };
    getStories();
  }, []);

  const handleStoryClick = (index) => {
    setSelectedStory(stories[index]);
    setIndex(index);
    setIsModalOpen(true);
  };

  useEffect(() => {
    let timer;
    if (isModalOpen) {
      timer = setTimeout(() => {
        setIsModalOpen(true);
        setSelectedStory(stories[index + 1]);
        if (stories.length - 1 === index) {
          setIsModalOpen(false);
        }
        setIndex(index + 1);
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [selectedStory]);

  return (
    <div className={styles.storiesContainer}>
      <div className={styles.discoverStory}>
        <p className={styles.discoverText}> Discover </p>
      </div>
      {stories.map((story) => (
        <img
          src={story.image}
          className={styles.person}
          key={story.id}
          onClick={() => handleStoryClick(stories.indexOf(story))}
        />
      ))}
      <div>
        {isModalOpen && (
          <StoryModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            onClose={() => setIsModalOpen(false)}
            story={selectedStory}
            selectedStory={selectedStory}
            setSelectedStory={setSelectedStory}
            index={index}
            setIndex={setIndex}
            stories={stories}
          />
        )}
      </div>
    </div>
  );
}

export default HomePageStories;
