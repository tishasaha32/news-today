import React, { useState, useEffect } from "react";

const AnimatedText = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [index, text, speed]);

  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
  }, [text]);

  return <p style={{ padding: "1rem", paddingTop: "2rem" }}>{displayedText}</p>;
};

export default AnimatedText;
