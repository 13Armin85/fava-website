"use client";

import { useRef, useState } from "react";
import style from "./Videoplayer.module.css";
import icon1 from "../../../public/icons/Vector.png";
import icon2 from "../../../public/icons/Group 48095490.png";
import icon3 from "../../../public/icons/next.png";
import icon4 from "../../../public/icons/volume-high.png";
import icon5 from "../../../public/icons/setting-2.png";
import icon6 from "../../../public/icons/maximize-2.png";
import Image from "next/image";

const CustomVideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(20);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className={style.container}>
      <div className={style.video}>
        <video ref={videoRef} className={style.element}>
          <source src="/sample.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={style.contorol}>
        <div className={style.pause}>
          <Image width={24} height={24} alt="pic" src={icon1} />
        </div>
        <div className={style.bar}>
          <Image width={640} height={37} alt="pic" src={icon2} />
        </div>
        <div className={style.next}>
          <Image width={24} height={24} alt="pic" src={icon3} />
        </div>
        <div className={style.volume}>
          <Image width={24} height={24} alt="pic" src={icon4} />
        </div>
        <div className={style.setting}>
          <Image width={24} height={24} alt="pic" src={icon5} />
        </div>
        <div width={24} className={style.maximize}>
          <Image width={24} height={24} alt="pic" src={icon6} />
        </div>
      </div>
    </section>
  );
};

export default CustomVideoPlayer;
