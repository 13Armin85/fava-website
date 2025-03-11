import React from "react";
import style from "./Platform.module.css";
import pic1 from "../../../public/images/پلتفرم API.png";
import pic2 from "../../../public/images/پلتفرم خودرو اشتراکی.png";
import Image from "next/image";

const Platform = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.header}>پلتفرم ها</h2>
      <div className={style.content}>
        <div className={style.firstpart}>
          <Image width={418} height={228} alt="pic" src={pic2} />
          <button className={style.btn1}>پلتفرم هوشمند خودروی اشتراکی</button>
        </div>
        <div className={style.secondpart}>
          <Image width={418} height={228} alt="pic" src={pic1} />
          <button className={style.btn2}>پلتفرم متمرکز وب سرویس (API)</button>
        </div>
      </div>
    </div>
  );
};

export default Platform;
