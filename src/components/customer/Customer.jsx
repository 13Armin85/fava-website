"use client";
import React, { useRef } from "react";
import Image from "next/image";
import style from "./Customer.module.css";
import icon1 from "../../../public/icons/1 4.svg";
import icon2 from "../../../public/icons/22 1.svg";
import icon3 from "../../../public/icons/33 1.svg";
import icon4 from "../../../public/icons/555 1.svg";
import icon5 from "../../../public/icons/666 1.svg";
import icon6 from "../../../public/icons/Ellipse 29.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Customer = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <div className={style.header}>مشتــــریان</div>
      <div className={style.sliderContainer}>
        <button
          className={style.prev}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          ‹
        </button>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
          className={style.myswiper}
          slidesPerView={4}
          spaceBetween={20}
          centeredSlides={true}
        >
          <SwiperSlide className={style.swiperslide}>
            <Image src={icon1} width={100} height={100} alt="جتکو" />
            <div className={style.text}>
              <p>جتکو</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperslide}>
            <Image src={icon2} width={100} height={100} alt="ساپکو" />
            <div className={style.text}>
              <p>ساپکو</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperslide}>
            <Image src={icon3} width={100} height={100} alt="ایکاپ" />
            <div className={style.text}>
              <p>ایکاپ</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperslide}>
            <Image src={icon4} width={100} height={100} alt="ساوه و ساختمان" />
            <div className={style.text}>
              <p>ساوه و ساختمان</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperslide}>
            <Image src={icon5} width={100} height={100} alt="ایران خودرو" />
            <div className={style.text}>
              <p>ایران خودرو</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperslide}>
            <Image src={icon6} width={100} height={100} alt="تام" />
            <div className={style.text}>
              <p>تام</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          className={style.next}
          onClick={() => swiperRef.current?.slideNext()}
        >
          ›
        </button>
      </div>
    </>
  );
};

export default Customer;
