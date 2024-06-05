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
        <img src={item.imageUrl} className={styles.newsImage} />
        <p className={styles.newsTitle}>{item.headline}:</p>
        <p
          className={styles.newsBody}
          dangerouslySetInnerHTML={{ __html: item.body.slice(0, 250) + "..." }}
        />
        <Link to={`/news/${item.id}`}>
          <span className={styles.readMore}>Read More</span>
        </Link>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default TrendingSlider;
