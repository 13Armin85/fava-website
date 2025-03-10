import React from "react";
import Image1 from "../../../public/images/Group 48095522.png";
import Image from "next/image";
import style from "./Bestprojects.module.css";

const Bestprojects = () => {
  return (
    <section className={style.projectsection}>
      <h2 className={style.header}>پروژه های منتخب</h2>
      <div className={style.projectcontainer}>
        <div className={style.projectimage}>
          <Image src={Image1} alt="نمونه تصویر پروژه" />
        </div>

        <div className={style.projectinfo}>
          <p className={style.text1}>
            انتخاب شرکت ایران فاوا گسترش به عنوان مجری سامانه یکپارچه عرضه خودرو
            توسط وزارت صمت
          </p>
          <p className={style.text2}>
            شرکت ایران فاوا گسترش با عنایت به ابلاغیه وزارت صنعت، معدن و تجارت
            به عنوان مجـری طرح سامانه یکپارچه عرضه خودروهای داخلی و وارداتی
            برگزیده شد. پرسنل پویا و جــــوان این شرکت در راستای اجرای طرح مذکور
            در کمترین زمان ممکن موفق به طراحی و پیاده سازی سامانه یکپارچه عرضه
            خودرو با حفظ اصل شفافیت و ایجاد سهولت برای متقاضیان در انجام فرایند
            ثبت نام شدند.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bestprojects;
