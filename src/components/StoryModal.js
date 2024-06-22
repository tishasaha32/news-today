import React, { useState, useEffect } from "react";
import styles from "./StoryModal.module.css";
import { RxCross2 } from "react-icons/rx";

function StoryModal({
  story,
  index,
  setIndex,
  stories,
  setIsModalOpen,
  onClose, // Pass the onClose function
}) {
  const [animationTime] = useState(10); // No need to change animationTime
  const [timerKey, setTimerKey] = useState(0); // State to control the key of the timer element

  useEffect(() => {
    setTimerKey((prevKey) => prevKey + 1);
  }, [story]); // Reset the timer key whenever the story changes

  const handleStorySwipe = () => {
    const newIndex = index + 1;
    if (newIndex < stories.length) {
      setIndex(newIndex);
    } else {
      setIsModalOpen(false);
    }
  };

  const handleClose = (event) => {
    onClose(); // Call the onClose function
    event.stopPropagation();
  };

  return (
    <div className={styles.storyContainer} onClick={handleStorySwipe}>
      <div
        key={timerKey}
        className={styles.timer}
        style={{ animationDuration: `${animationTime}s` }}
      >
        <hr className={styles.line} />
      </div>
      <div className={styles.storyModal}>
        <img src={story.image} className={styles.storyImage} />
        <div className={styles.overlay} />
        <RxCross2 className={styles.closeIcon} onClick={handleClose} />
        <p className={styles.storyBody}>{story.story}</p>
      </div>
    </div>
  );
}

export default StoryModal;
