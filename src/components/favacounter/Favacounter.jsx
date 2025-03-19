import React from "react";
import Image from "next/image";
import styles from "./Favacounter.module.css";
import Icon1 from "../../../public/icons/Group 9.png";
import Icon2 from "../../../public/icons/Vector (1).png";
import Icon3 from "../../../public/icons/Group 9.png";

const Favacounter = () => {
  return (
    <section className={styles.countWrapper}>
      <div className={styles.countIcon}>
        <div className={styles.iconBackground}>
          <Image src={Icon1} alt="icon" width={23} height={26} />
        </div>
        <span>520</span>
        <p>پروژه انجام شده </p>
        <div className={styles.verticalLine}></div>
      </div>
      <div className={styles.countIcon}>
        <div className={styles.iconBackground}>
          <Image src={Icon2} alt="icon" width={23} height={26} />
        </div>
        <span>17</span>
        <p>سال تجربه</p>
        <div className={styles.verticalLine}></div>
      </div>
      <div className={styles.countIcon}>
        <div className={styles.iconBackground}>
          <Image src={Icon3} alt="icon" width={23} height={26} />
        </div>
        <span>219</span>
        <p>نیروی متخصص</p>
      </div>
    </section>
  );
};

export default Favacounter;
