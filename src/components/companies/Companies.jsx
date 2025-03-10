import React from "react";
import style from "./Companies.module.css";
import logo1 from "../../../public/icons/icon-04.svg";
import logo2 from "../../../public/icons/icon-03.svg";
import logo3 from "../../../public/icons/icon-02.svg";
import logo4 from "../../../public/icons/icon-01.svg";
import logo5 from "../../../public/icons/icon-06.svg";
import logo6 from "../../../public/icons/icon-05.png";

import Image from "next/image";
const Companies = () => {
  return (
    <section className={style.partnerssection}>
      <h2 className={style.header}>شرکای تجاری</h2>
      <div className={style.logos}>
        <div className={style.items}>
          <Image src={logo1} alt="لوگو 1" />
        </div>
        <div className={style.items}>
          <Image src={logo2} alt="لوگو 2" />
        </div>
        <div className={style.items}>
          <Image src={logo3} alt="لوگو 3" />
        </div>
        <div className={style.items}>
          <Image src={logo4} alt="لوگو 4" />
        </div>
        <div className={style.items}>
          <Image src={logo5} alt="لوگو 5" />
        </div>
        <div className={style.items}>
          <Image src={logo6} alt="لوگو 6" />
        </div>
      </div>
    </section>
  );
};

export default Companies;
