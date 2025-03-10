import React from "react";
import style from "./Platform.module.css";
import pic1 from "../../../public/images/پلتفرم API.png";
import pic2 from "../../../public/images/پلتفرم خودرو اشتراکی.png";
import Image from "next/image";
const Platform = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.header}>پلتفرم ها</h2>
      <div className={style.firstpart}>
        <Image src={pic2} />
        <button className={style.btn}>پلتفرم هوشمند خودروی اشتراکی</button>
      </div>
      <div className={style.secondpart}></div>
    </div>
  );
};

export default Platform;
