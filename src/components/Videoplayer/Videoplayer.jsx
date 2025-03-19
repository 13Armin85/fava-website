"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import style from "./Videoplayer.module.css";
import playIcon from "../../../public/icons/Vector.png";
import pauseIcon from "../../../public/icons/icons8-pause-25.png";
import nextIcon from "../../../public/icons/next.png";
import prevIcon from "../../../public/icons/icons8-prev-25.png";
import volumeIcon from "../../../public/icons/volume-high.png";
import settingsIcon from "../../../public/icons/setting-2.png";
import fullscreenIcon from "../../../public/icons/maximize-2.png";
// import video from "../../../public/video/3130284-uhd_3840_2160_30fps.mp4";

const CustomVideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleProgress = () => {
    const progress =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(progress);
  };

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className={style.container}>
      <div className={style.videoWrapper}>
        <video
          ref={videoRef}
          className={style.video}
          onTimeUpdate={handleProgress}
        >
          <source
            src="/video/3130284-uhd_3840_2160_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className={style.controls}>
        <button onClick={togglePlay} className={style.controlBtn}>
          <Image
            width={24}
            height={24}
            alt="Play/Pause"
            src={isPlaying ? pauseIcon : playIcon}
          />
        </button>
        <span className={style.time}>
          {Math.floor(videoRef.current?.currentTime || 0)}:
          {Math.floor(videoRef.current?.duration || 0)}
        </span>
        <input
          type="range"
          className={style.progressBar}
          value={progress}
          min="0"
          max="100"
          step="0.1"
          onChange={handleSeek}
        />
        <button className={style.controlBtn}>
          <Image width={24} height={24} alt="Next" src={nextIcon} />
        </button>
        <input
          type="range"
          className={style.volumeControl}
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
        <button className={style.controlBtn}>
          <Image width={24} height={24} alt="Settings" src={settingsIcon} />
        </button>
        <button onClick={handleFullscreen} className={style.controlBtn}>
          <Image width={24} height={24} alt="Fullscreen" src={fullscreenIcon} />
        </button>
      </div>
    </section>
  );
};

export default CustomVideoPlayer;
