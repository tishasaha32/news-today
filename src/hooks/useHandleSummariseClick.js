import React, { useEffect, useState } from "react";
import axios from "axios";

function useHandleSummariseClick(news) {
  const [summary, setSummary] = useState("");

  const summarizeNews = async () => {
    const apiKey = "sk-proj-G5JaNXn8QGvRCKAM18GcT3BlbkFJdlXjfwkXTsBue5N4l5zb"; // Replace with your actual API key

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [
            { role: "system", content: "You are a news summarizer." },
            {
              role: "user",
              content: `Please summarize the following news: ${news.body}`,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      const summary = response.data.choices[0].message.content;
      setSummary(summary);
    } catch (error) {
      console.error("Error summarizing news:", error);
    }
  };

  return { summary, summarizeNews };
}

export default useHandleSummariseClick;