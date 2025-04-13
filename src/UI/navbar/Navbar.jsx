"use client";
import React from "react";
import style from "./Navbar.module.css";
import Image from "next/image";
import logo from "../../../public/images/iranfava-logo.png";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={style.navbar}>
      <a href="#" className={style.button}>
        همکاری با ما
      </a>
      <div className={style.menu}>
        <a href="#">تماس با ما</a>
        <a href="#">اخبار و رویدادها</a>
        <a href="#">مناقصات</a>
        <a href="#">آکادمی</a>
        <a href="#" onClick={() => scrollToSection("products")}>
          محصولات
        </a>
        <a href="#" onClick={() => scrollToSection("services")}>
          خدمات
        </a>
        <a
          className={style.active}
          href="#"
          onClick={() => scrollToSection("about")}
        >
          درباره ایران فاوا
        </a>
      </div>
      <div className={style.logo}>
        <Image src={logo} alt="لوگو" width={100} height={100} />
      </div>
    </nav>
  );
};

export default Navbar;
