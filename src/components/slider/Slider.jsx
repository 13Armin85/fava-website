"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import style from "./Slider.module.css";
import { EffectCoverflow, Navigation } from "swiper/modules";

// تصاویر
import Image1 from "../../../public/images/Group 48095536.png";
import Image2 from "../../../public/images/Group 48095537.png";
import Image3 from "../../../public/images/Group 48095539.png";
import Image4 from "../../../public/images/Group 48095540.png";
import Image5 from "../../../public/images/Group 48095541.png";
import Image6 from "../../../public/images/Group 48095542.png";
import Image7 from "../../../public/images/Group 48095543.png";

const Slider = () => {
  return (
    <section>
      <h1 className={style.header}>محصولات</h1>
      <div className={style.first}>
        <div className={style.wrapper}>
          <div className={`custom-swiper-button-prev ${style.navButton1}`}>
            ‹
          </div>

          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={-500}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            modules={[EffectCoverflow, Navigation]}
            className={style.swiper}
          >
            {[Image1, Image2, Image3, Image4, Image5, Image6, Image7].map(
              (img, index) => (
                <SwiperSlide key={index} className={style.swiperslide}>
                  <div className={style.slideWrapper}>
                    <Image src={img} alt={`Slide ${index + 1}`} />
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
          <div className={`custom-swiper-button-next ${style.navButton2}`}>
            ›
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
