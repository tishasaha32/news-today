import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./TrendingSlider.module.css";

const TrendingSlider = ({ news }) => (
  <Swiper
    direction="vertical"
    pagination={{ clickable: true }}
    className={styles.verticalSwiper}
  >
    {news.map((item) => (
      <SwiperSlide key={item.id}>
        <img src={item.image} className={styles.newsImage} />
        <p className={styles.newsTitle}>{item.headline}:</p>
        <p className={styles.newsBody}>
          {item.body.slice(0, 350)}...
          <span className={styles.readMore}>Read More</span>
        </p>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default TrendingSlider;
