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
      <div class={style.wrappservices}>
        <div class={style.boxservices}>
          <Image src={Icon8} alt="" />
          شبکه و زیر ساخت
        </div>
        <div class={style.boxservices}>
          <Image src={Icon3} alt="" />
          امنیت اطلاعات
        </div>
        <div class={style.boxservices}>
          <Image src={Icon2} alt="" />
          سیستم های اطلاعاتی
        </div>
        <div class={style.activeboxservices}>
          <Image src={Icon1} alt="" />
          سیستم های یکپارچه
          <div className={style.orangebar}></div>
        </div>
        <div class={style.boxservices}>
          <Image src={Icon4} alt="" />
          هوشمند سازی
        </div>
        <div class={style.boxservices}>
          <Image src={Icon5} alt="" />
          تامین تجهیزات
        </div>
        <div class={style.boxservices}>
          <Image src={Icon6} alt="" />
          تحول دیجیتال
        </div>
        <div class={style.boxservices}>
          <Image src={Icon7} alt="" />
          مرکز داده و امداد و پشتیبانی
        </div>
      </div>
    </section>
  );
};

export default Services;
