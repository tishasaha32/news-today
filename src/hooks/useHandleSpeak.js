import React from "react";

function useHandleSpeak({ text }) {
  const handleSpeak = () => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "en-US";
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, your browser does not support text-to-speech.");
    }
  };
  return { handleSpeak };
}

export default useHandleSpeak;
