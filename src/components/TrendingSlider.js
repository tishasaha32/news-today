import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./TrendingSlider.module.css";
import { Link } from "react-router-dom";

const TrendingSlider = ({ trendingNews }) => (
  <Swiper
    direction="vertical"
    pagination={{ clickable: true }}
    className={styles.verticalSwiper}
  >
    {trendingNews.map((item) => (
      <SwiperSlide key={item.id}>
        <div className={styles.newsCotainer}>
          <div className={styles.newsImageContainer}>
            <img src={item.imageUrl} className={styles.newsImage} />
          </div>
          <div className={styles.newsDetailsContainer}>
            <p className={styles.newsTitle}>{item.headline}:</p>
            <p
              className={styles.newsBody}
              dangerouslySetInnerHTML={{
                __html: item.body.slice(0, 250) + "...",
              }}
            />
            <p
              className={styles.newsBodyLong}
              dangerouslySetInnerHTML={{
                __html: item.body.slice(0, 800) + "...",
              }}
            />
            <Link to={`/news/${item.id}`}>
              <span className={styles.readMore}>Read More</span>
            </Link>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default TrendingSlider;
