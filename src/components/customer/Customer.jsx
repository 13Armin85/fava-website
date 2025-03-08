import React from "react";
import Image from "next/image";
import style from "./Customer.module.css";
import icon1 from "../../../public/icons/1 4.svg";
import icon2 from "../../../public/icons/22 1.svg";
import icon3 from "../../../public/icons/33 1.svg";
import icon4 from "../../../public/icons/555 1.svg";
import icon5 from "../../../public/icons/666 1.svg";
import icon6 from "../../../public/icons/Ellipse 29.png";
import left from "../../../public/icons/arrow-left.png";
import right from "../../../public/icons/arrow-right.png";

const Customer = () => {
  return (
    <section className={style.clientsec}>
      <h2>مشتریان</h2>

      <div className={style.slider}>
        <div className={style.item}>
          <div className={style.logo}>
            <Image src={icon1} alt="جتکو" />
          </div>
          <p>جتکو</p>
        </div>

        <div className={style.item}>
          <div className={style.logo}>
            <Image src={icon2} alt="ساپکو" />
          </div>
          <p>ساپکو</p>
        </div>

        <div className={style.item}>
          <div className={style.logo}>
            <Image src={icon3} alt="ایکاپ" />
          </div>
          <p>ایکاپ</p>
        </div>

        <div className={style.item}>
          <div className={style.logo}>
            <Image src={icon4} alt="ساوه و ساختمان" />
          </div>
          <p>ساوه و ساختمان</p>
        </div>

        <div className={style.item}>
          <div className={style.logo}>
            <Image src={icon5} alt="ایران خودرو" />
          </div>
          <p>ایران خودرو</p>
        </div>

        <div className={style.item}>
          <div className={style.logo}>
            <Image src={icon6} alt="تام" />
          </div>
          <p>تام</p>
        </div>
      </div>

      <div className={style.arrows}>
        <Image src={left} />
        <Image src={right} />
      </div>
    </section>
  );
};

export default Customer;
