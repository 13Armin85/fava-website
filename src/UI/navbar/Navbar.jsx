"use client";
import React, { useState } from "react";
import style from "./Navbar.module.css";
import Image from "next/image";
import logo from "../../../public/images/iranfava-logo.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(id);
    }
  };

  return (
    <nav className={style.navbar}>
      <a
        href="#"
        className={`${style.button} ${
          activeLink === "cooperation" ? style.active : ""
        }`}
      >
        همکاری با ما
      </a>
      <div className={style.menu}>
        <a href="#" className={activeLink === "contact" ? style.active : ""}>
          تماس با ما
        </a>
        <a href="#" className={activeLink === "news" ? style.active : ""}>
          اخبار و رویدادها
        </a>
        <a href="#" className={activeLink === "tenders" ? style.active : ""}>
          مناقصات
        </a>
        <a href="#" className={activeLink === "academy" ? style.active : ""}>
          آکادمی
        </a>
        <a
          href="#"
          className={activeLink === "products" ? style.active : ""}
          onClick={() => scrollToSection("products")}
        >
          محصولات
        </a>
        <a
          href="#"
          className={activeLink === "services" ? style.active : ""}
          onClick={() => scrollToSection("services")}
        >
          خدمات
        </a>
        <a
          href="#"
          className={activeLink === "about" ? style.active : ""}
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
