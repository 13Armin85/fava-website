import styles from "./page.module.css";
import Image from "next/image";
import logo from "../../public/images/iranfava-logo.png";
import pic1 from "../../public/images/453947b0708ae4df61be86a99ab4c89d.png";

export default function Home() {
  return (
    <>
      <nav className={styles.navbar}>
        <a href="#" className={styles.button}>
          همکاری با ما
        </a>
        <div className={styles.menu}>
          <a href="#">درباره ایران فاوا</a>
          <a href="#">خدمات</a>
          <a href="#">محصولات</a>
          <a href="#">مناقصات</a>
          <a href="#">اخبار و رویدادها</a>
          <a href="#">تماس با ما</a>
        </div>
        <div className={styles.logo}>
          <Image src={logo} alt="لوگو" width={100} height={100} />
        </div>
      </nav>

      <section className={styles.newSection}>
        <div className={`${styles.halfSection} ${styles.first}`}>
          <h1>شرکت ایران فاوا گسترش</h1>
          <p>
            شرکـــت ایران فـاوا گسترش به عنــــوان یک شرکت دانش بنیـان، با هدف
            ارائه خدمات و راهکارهـای تخصصی در زمینـه فناوری اطلاعات و پیاده سازی
            مدیریت منابع سازمانی در سال 1384 تاسیس گردید. ایران فـاوا برای نیل
            به اهداف خود همواره از مشــــاوران و کارشناسان مجرب و خلاق، بهره
            یافته و به واسطه انجام پروژه‌هــــــای کلان، در سازمان های بزرگ و
            معتبر به تجارب و دانش سودمندی دست یافته است و اکنــــون می‌تواند
            دیگر سازمان ها را در زمینه‌های تخصصـی مربوطه یاری نماید.
          </p>
          <button>مزیت های رقابتی</button>
          <button>گواهی نامه ها </button>
          <button>ارزش ها</button>
          <button>چشم انداز و ماموریت</button>
        </div>
        <div className={`${styles.halfSection} ${styles.second}`}>
          <Image src={pic1} alt="picture" width={766} height={548} />
        </div>
      </section>
    </>
  );
}
