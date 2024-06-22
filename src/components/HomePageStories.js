import React, { useEffect, useState } from "react";
import styles from "./HomePageStories.module.css";
import StoryModal from "./StoryModal";
import useGetStories from "../hooks/useGetStories";

function HomePageStories() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(null); // Add a timer state

  const { stories } = useGetStories(); // Removed setStories as it is not used

  const handleStoryClick = (index) => {
    setSelectedStory(stories[index]);
    setIndex(index);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      const newTimer = setTimeout(() => {
        setSelectedStory(stories[index + 1]);
        if (stories.length - 1 === index) {
          setIsModalOpen(false);
        } else {
          setIndex(index + 1);
        }
      }, 10000);

      setTimer(newTimer); // Store the timer ID
    }

    return () => clearTimeout(timer); // Clear the timer on cleanup
  }, [selectedStory, isModalOpen]); // Added isModalOpen to the dependency array

  const handleCloseModal = () => {
    setIsModalOpen(false);
    clearTimeout(timer); // Clear the timer when the modal is closed
  };

  return (
    <div className={styles.storiesContainer}>
      <div className={styles.discoverStory}>
        <p className={styles.discoverText}> Discover </p>
      </div>
      {stories.map((story, index) => (
        <div className={styles.person} key={story.id}>
          <img
            src={story.image}
            className={styles.personImg}
            onClick={() => handleStoryClick(index)}
          />
        </div>
      ))}
      {isModalOpen && (
        <StoryModal
          isModalOpen={isModalOpen}
          onClose={handleCloseModal}
          story={selectedStory}
          index={index}
          setIndex={setIndex}
          stories={stories}
        />
      )}
    </div>
  );
}

export default HomePageStories;
