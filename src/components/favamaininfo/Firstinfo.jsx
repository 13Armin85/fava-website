import React from "react";
import style from "./Firstinfo.module.css";
import pic1 from "../../../public/images/453947b0708ae4df61be86a99ab4c89d.png";
import Image from "next/image";

const Firstinfo = () => {
  return (
    <section className={style.newSection}>
      <div className={`${style.halfSection} ${style.first}`}>
        <h1>شرکت ایران فاوا گسترش</h1>
        <p>
          شرکـــت ایران فـاوا گسترش به عنــــوان یک شرکت دانش بنیـان، با هدف
          ارائه خدمات و راهکارهـای تخصصی در زمینـه فناوری اطلاعات و پیاده سازی
          مدیریت منابع سازمانی در سال 1384 تاسیس گردید. ایران فـاوا برای نیل به
          اهداف خود همواره از مشــــاوران و کارشناسان مجرب و خلاق، بهره یافته و
          به واسطه انجام پروژه‌هـــای کلان، در سازمان های بزرگ و معتبر به تجارب
          و دانش سودمندی دست یافته است و اکنــــون می‌تواند دیگر سازمان ها را در
          زمینه‌های تخصصـی مربوطه یاری نماید.
        </p>
        <div className={style.wrappbtn}>
          <button>مزیت های رقابتی</button>
          <button>گواهی نامه ها </button>
          <button>ارزش ها</button>
          <button>چشم انداز و ماموریت</button>
        </div>
      </div>
      <div className={`${style.halfSection} ${style.second}`}>
        <Image src={pic1} alt="picture" width={766} height={548} />
      </div>
    </section>
  );
};

export default Firstinfo;
