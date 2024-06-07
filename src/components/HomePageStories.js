import React, { useEffect, useState } from "react";
import styles from "./HomePageStories.module.css";
import StoryModal from "./StoryModal";
import useGetStories from "../hooks/useGetStories";

function HomePageStories() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [index, setIndex] = useState(0);

  const { stories, setStories } = useGetStories();
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
        <div className={styles.person} key={story.id}>
          <img
            src={story.image}
            className={styles.personImg}
            key={story.id}
            onClick={() => handleStoryClick(stories.indexOf(story))}
          />
        </div>
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
