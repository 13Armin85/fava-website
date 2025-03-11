import React from "react";
import style from "./Footer.module.css";
import Img from "../../../public/icons/sms-tracking.png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footercontainer}>
        <div className={style.newsletter}>
          <Image width={56} height={56} src={Img} alt="ایمیل" />
          <div className={style.sendmail}>
            <input type="email" placeholder="ایمیل شما" />
            <button>ارسال</button>
          </div>
        </div>

        <div className={style.contacts}>
          <p className={style.text}>
            <strong>آدرس:</strong> تهران - توحید آباد - میدان گلشری
          </p>
          <p className={style.text}>خیابان ابن سینا - کوچه یاسمن - پلاک 18</p>
          <p className={style.text}>شماره تماس: 021-42596000</p>
          <p className={style.text}>
            <strong>شماره فکس:</strong> 021-88616308
          </p>
          <p className={style.text}>
            <strong>ایمیل:</strong> info@iranfava.com
          </p>
        </div>

        <div className={style.links}>
          <h4>سامانه ارزیابی کارکنان</h4>
          <ul>
            <li>سامانه جذب منابع انسانی</li>
            <li>سیستم ارزیابی ریسک آزمایش</li>
            <li>سامانه الکترونیک فروش خودرو</li>
            <li>سامانه ارائه و پرداخت الکترونیکی فروش</li>
            <li>سامانه مدیریت درخواست خدمات فنی</li>
          </ul>
        </div>

        <div className={style.links}>
          <ul>
            <li>معرفی</li>
            <li>سفارشات</li>
            <li>ارتباط ما</li>
            <li>گواهینامه‌ها</li>
            <li>هزینه مشاوره</li>
            <li>مزیت‌های رقابتی</li>
          </ul>
        </div>
      </div>

      <div className={style.footerbottom}>
        تمام حقوق مادی و معنوی این سایت متعلق به شرکت ایران فاوا گسترش می‌باشد.
      </div>
    </footer>
  );
};

export default Footer;
