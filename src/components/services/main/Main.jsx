import React from "react";
import Image from "next/image";
import styles from "./Main.module.css";
import Image1 from "../../../../public/icons/wallet-search.png";
const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <Image src={Image1} alt="icon" />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.title}>امکان سنجی سیستم های یکپارچه</div>
        <div className={styles.desc}>
          تجزیه و تحلیل ساختار سازمان و منابع جهت پشتیبانی
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>
          <Image src={Image1} alt="icon" />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.title}>
          پیاده سازی و استقرار سیستم های یکپارچه
        </div>
        <div className={styles.desc}>
          پیاده سازی تمامی ماژول های سیستم های یکپارچه در حوزه های مختلف
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>
          <Image src={Image1} alt="icon" />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.title}>پشتیبانی از سیستم های یکپارچه</div>
        <div className={styles.desc}>
          ارائه خدمات پشتیبانی و رفع نارسایی وضعیت موجود
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>
          <Image src={Image1} alt="icon" />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.title}>انتخاب سیستم های یکپارچه</div>
        <div className={styles.desc}>
          فرآیند انتخاب سیستم های یکپارچه مناسب با سازمان
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>
          <Image src={Image1} alt="icon" />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.title}>نظارت بر اجرا و مشاوره</div>
        <div className={styles.desc}>
          نظارت بر نحوه مدیریت، کنترل پروژه، مشاوره و ارزیابی سیستم های موجود
        </div>
      </div>
    </div>
  );
};

export default Main;
