"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import styles from "./Slider.module.css";

const slides = [
  {
    title: "سامانه ارائه و پرداخت الکترونیکی قبوض",
    image: "/images/Group 48095536.png",
  },
  {
    title: "مدیریت آنلاین قبوض آب و برق",
    image: "/images/Group 48095537.png",
  },
  {
    title: "سامانه گزارش‌گیری مالی",
    image: "/images/Group 48095539.png",
  },
  {
    title: "نرم‌افزار مالیاتی سازمانی",
    image: "/images/Group 48095540.png",
  },
  {
    title: "راهکار هوشمند صدور فاکتور",
    image: "/images/Group 48095541.png",
  },
];

export default function Slider() {
  return (
    <div id="products">
      <h1 className={styles.h1}>محصولات</h1>
      <div className={styles.wrapper}>
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          navigation
          centeredSlides
          slidesPerView={1.5}
          spaceBetween={30}
          loop={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          className={styles.swiper}
          breakpoints={{
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={styles.image}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
