import { useState } from "react";
import axios from "axios";
function useHandleSummariseClick(news) {
  const [summary, setSummary] = useState("");
  const [isSummarizing, setIsSummarizing] = useState(false);

  const summarizeNews = async () => {
    setIsSummarizing(true);
    const apiKey = process.env.REACT_APP_OPENAI_API;

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
      setIsSummarizing(false);
    } catch (error) {
      console.error("Error summarizing news:", error);
    }
  };

  return { summary, summarizeNews, isSummarizing };
}

export default useHandleSummariseClick;
