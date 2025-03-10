"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import style from "./Slider.module.css";
import Image1 from "../../../public/images/Group 48095536.png";
import Image2 from "../../../public/images/Group 48095537.png";
import Image3 from "../../../public/images/Group 48095539.png";
import Image4 from "../../../public/images/Group 48095540.png";
import Image5 from "../../../public/images/Group 48095541.png";
import Image6 from "../../../public/images/Group 48095542.png";
import Image7 from "../../../public/images/Group 48095543.png";
import Image8 from "../../../public/images/طب کار 1.png";
const Slider = () => {
  return (
    <section className={style.first}>
      <h1 className={style.header}>محصولات</h1>
      <div className={style.wrapper}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"3"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >
          <SwiperSlide>
            <Image src={Image1} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Image2} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Image3} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Image4} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Image5} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Image6} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Image7} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Image8} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
