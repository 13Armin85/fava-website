import React from "react";
import Image from "next/image";
import styles from "./Main.module.css";
const Main = () => {
  return (
    <div class="container">
      <div className={styles.card}>
        <div class="icon">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
            alt="icon"
          />
        </div>
        <div class="divider"></div>
        <div class="title">امکان سنجی سیستم های یکپارچه</div>
        <div class="desc">تجزیه و تحلیل ساختار سازمان و منابع جهت پشتیبانی</div>
      </div>

      <div class="card">
        <div class="icon">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
            alt="icon"
          />
        </div>
        <div class="divider"></div>
        <div class="title">پیاده سازی و استقرار سیستم های یکپارچه</div>
        <div class="desc">
          پیاده سازی تمامی ماژول های سیستم های یکپارچه در حوزه های مختلف
        </div>
      </div>

      <div class="card">
        <div class="icon">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
            alt="icon"
          />
        </div>
        <div class="divider"></div>
        <div class="title">پشتیبانی از سیستم های یکپارچه</div>
        <div class="desc">ارائه خدمات پشتیبانی و رفع نارسایی وضعیت موجود</div>
      </div>

      <div class="card">
        <div class="icon">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
            alt="icon"
          />
        </div>
        <div class="divider"></div>
        <div class="title">انتخاب سیستم های یکپارچه</div>
        <div class="desc">فرآیند انتخاب سیستم های یکپارچه مناسب با سازمان</div>
      </div>

      <div class="card">
        <div class="icon">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
            alt="icon"
          />
        </div>
        <div class="divider"></div>
        <div class="title">نظارت بر اجرا و مشاوره</div>
        <div class="desc">
          نظارت بر نحوه مدیریت، کنترل پروژه، مشاوره و ارزیابی سیستم های موجود
        </div>
      </div>
    </div>
  );
};

export default Main;
