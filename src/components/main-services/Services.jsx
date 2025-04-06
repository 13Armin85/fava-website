import React from "react";
import Image from "next/image";
import Icon1 from "../../../public/icons/refresh-2.png";
import Icon2 from "../../../public/icons/monitor.png";
import Icon3 from "../../../public/icons/lock.png";
import Icon4 from "../../../public/icons/mirroring-screen.png";
import Icon5 from "../../../public/icons/cloud-connection.png";
import Icon6 from "../../../public/icons/scan.png";
import Icon7 from "../../../public/icons/shield-tick.png";
import Icon8 from "../../../public/icons/hierarchy-2.png";
import arrow from "../../../public/icons/arrow-square-left.svg";
import style from "./Services.module.css";
const Services = () => {
  return (
    <section class={style.Services}>
      <h2 className={style.h2}>خدمات</h2>
      <div className={style.wrappservices}>
        <div className={style.boxservices}>
          <Image src={Icon8} alt="icon" />
          شبکه و زیر ساخت
        </div>
        <div className={style.boxservices}>
          <Image src={Icon3} alt="icon" />
          امنیت اطلاعات
        </div>
        <div className={style.boxservices}>
          <Image src={Icon2} alt="icon" />
          سیستم های اطلاعاتی
        </div>
        <div className={style.activeboxservices}>
          <Image src={Icon1} alt="icon" />
          سیستم های یکپارچه
          <div className={style.orangebar}></div>
        </div>
        <div className={style.boxservices}>
          <Image src={Icon4} alt="icon" />
          هوشمند سازی
        </div>
        <div className={style.boxservices}>
          <Image src={Icon5} alt="icon" />
          تامین تجهیزات
        </div>
        <div className={style.boxservices}>
          <Image src={Icon6} alt="icon" />
          تحول دیجیتال
        </div>
        <div className={style.boxservices}>
          <Image src={Icon7} alt="icon" />
          مرکز داده و امداد و پشتیبانی
        </div>
      </div>
    </section>
  );
};

export default Services;
