import React from "react";
import style from "./Navbar.module.css";
import Image from "next/image";
import logo from "../../../public/images/iranfava-logo.png";
const Navbar = () => {
  return (
    <>
      {/* navbar */}
      <nav className={style.navbar}>
        <a href="#" className={style.button}>
          همکاری با ما
        </a>
        <div className={style.menu}>
          <a href="#">درباره ایران فاوا</a>
          <a href="#">خدمات</a>
          <a href="#">محصولات</a>
          <a href="#">مناقصات</a>
          <a href="#">اخبار و رویدادها</a>
          <a href="#">تماس با ما</a>
        </div>
        <div className={style.logo}>
          <Image src={logo} alt="لوگو" width={100} height={100} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
