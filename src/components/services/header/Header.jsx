import React from "react";
import Image from "next/image";
import style from "./Header.module.css";
import image from "../../../../public/images/فیگما.png";

const page = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1 className={style.h1}>خدمات ایران فاوا</h1>
        <div className={style.pic}>
          <Image src={image} alt="icon" width={270} height={280} />
        </div>
      </div>
    </div>
  );
};

export default page;
