import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./TrendingSlider.module.css";
import { Link } from "react-router-dom";

const TrendingSlider = ({ categoryNews }) => (
  <Swiper
    direction="vertical"
    pagination={{ clickable: true }}
    className={styles.verticalSwiper}
  >
    {categoryNews.map((item) => (
      <SwiperSlide key={item.id}>
        <img src={item.image} className={styles.newsImage} />
        <p className={styles.newsTitle}>{item.headline}:</p>
        <p className={styles.newsBody}>
          {item.body.slice(0, 350)}...
          <Link to={`/news/${item.id}`}>
            <span className={styles.readMore}>Read More</span>
          </Link>
        </p>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default TrendingSlider;
