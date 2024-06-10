import React from "react";
import useHandleSummariseClick from "../hooks/useHandleSummariseClick";
import AnimatedText from "./AnimatedText";
import SummarizingLoader from "./SummarizingLoader";
import useHandleSpeak from "../hooks/useHandleSpeak";
import { AiOutlineSound } from "react-icons/ai";
import styles from "./NewsBodyContainer.module.css";

function NewsBodyContainer({ news }) {
  const { summary, summarizeNews, isSummarizing } =
    useHandleSummariseClick(news);

  const { handleSpeak } = useHandleSpeak({ text: summary });
  return (
    <div className={styles.newsBodyContainer}>
      {!summary && !isSummarizing && (
        <p
          className={styles.newsBody}
          dangerouslySetInnerHTML={{ __html: news.body }}
        />
      )}
      {summary && !isSummarizing && (
        <AiOutlineSound
          className={styles.speakButton}
          onClick={(e) => handleSpeak(summary)}
        />
      )}
      {summary && <AnimatedText text={summary} speed={1} />}
      <div className={styles.summarizeButtonContainer}>
        {!summary && isSummarizing && <SummarizingLoader />}
        {!summary && !isSummarizing && (
          <button className={styles.summarizeButton} onClick={summarizeNews}>
            Summarize with GPT
          </button>
        )}
      </div>
    </div>
  );
}

export default NewsBodyContainer;
