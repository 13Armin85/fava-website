import React from "react";
import Image from "next/image";
import style from "./Header.module.css";
import image from "../../../../public/images/فیگما.png";
import icon1 from "../../../../public/icons/Group 32.png";
import icon2 from "../../../../public/icons/arrow.png";
import icon3 from "../../../../public/icons/arrow.png";

const page = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headertext}>
          <h1 className={style.h1}>خدمات ایران فاوا</h1>
          <div className={style.address}>
            <Image src={icon1} alt="icon1" width={16} height={16} />
            <Image src={icon2} alt="icon2" width={4} height={8} />
            <div className={style.p}>
              <p>خدمـــات </p>
            </div>
            <Image src={icon3} alt="icon3" width={4} height={8} />
            <div className={style.p}>
              <p>سیستم های یکپارچه</p>
            </div>
          </div>
        </div>
        <div className={style.pic}>
          <Image src={image} alt="icon" width={270} height={280} />
        </div>
      </div>
    </div>
  );
};

export default page;
