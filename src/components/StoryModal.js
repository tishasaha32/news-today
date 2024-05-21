import React, { useEffect, useState } from "react";
import styles from "./StoryModal.module.css";
import { RxCross2 } from "react-icons/rx";

function StoryModal({
  isModalOpen,
  selectedStory,
  onClose,
  story,
  setSelectedStory,
  index,
  setIndex,
  stories,
  setIsModalOpen,
}) {
  const [animationTime, setAnimationTime] = useState(10);
  const [timerKey, setTimerKey] = useState(0); // State to control the key of the timer element

  const handleStorySwipe = () => {
    setIsModalOpen(true);
    const newIndex = index + 1;
    if (newIndex < stories.length) {
      setSelectedStory(stories[newIndex]);
      setIndex(newIndex);
      // Toggle the timer key to reset the animation
      setTimerKey((prevKey) => prevKey + 1);
    } else {
      setIsModalOpen(false);
    }
  };

  const handleClose = (event) => {
    setIsModalOpen(false);
    event.stopPropagation();
  };

  return (
    <div className={styles.storyContainer} onClick={() => handleStorySwipe()}>
      <div className={styles.storyModal}>
        <div
          key={timerKey}
          className={styles.timer}
          style={{ animationDuration: `${animationTime}s` }}
        >
          <hr className={styles.line}></hr>
        </div>
        <img src={story.img} className={styles.storyImage} />
        <div className={styles.overlay}></div>
        <RxCross2
          className={styles.closeIcon}
          onClick={(event) => handleClose(event)}
        />
        <p className={styles.storyBody}>{story.body}</p>
      </div>
    </div>
  );
}

export default StoryModal;
