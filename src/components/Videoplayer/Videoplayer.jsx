"use client";

import { useRef, useState } from "react";
import style from "./Videoplayer.module.css";

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
    <div className={style.container}>
      <video ref={videoRef} className={style.element}>
        <source src="/sample.mp4" type="video/mp4" />
      </video>
      <div className={style.contorol}>
        <button onClick={togglePlay} className={style.button}>
          {isPlaying ? "⏸" : "▶"}
        </button>
        <span className={style.time}>0:51</span>
        <div className={style.progress}>
          <div className={style.bar} style={{ width: `${progress}%` }}></div>
        </div>
        <span className={style.time}>2:31</span>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
