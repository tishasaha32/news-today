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
function HomePageStories() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [index, setIndex] = useState(0);
  const stories = [
    {
      id: 1,
      img: person1,
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      img: person2,
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      img: person3,
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 4,
      img: person4,
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 5,
      img: person5,
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 6,
      img: person6,
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 7,
      img: person7,
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

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
          src={story.img}
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
