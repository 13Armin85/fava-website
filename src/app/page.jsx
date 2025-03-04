import styles from "./page.module.css";
import Image from "next/image";
import logo from "../../public/images/iranfava-logo.png";
import Firstinfo from "../components/favamaininfo/Firstinfo";
import Favacounter from "../components/favacounter/Favacounter";

export default function Home() {
  return (
    <>
      {/* navbar */}
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
      {/* home page first ingo */}
      <div>
        <Firstinfo />
      </div>

      {/* fava counter */}
      <div>
        <Favacounter />
      </div>
    </>
  );
}
