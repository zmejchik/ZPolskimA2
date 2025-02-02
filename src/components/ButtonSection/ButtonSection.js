import React, { useState } from "react";
import styles from "./ButtonSection.module.scss";

const tracks = [
  { title: "Track a 1.1", src: "./assets/audio/a1.1.mp3" },
  { title: "Track a 1.2", src: "./assets/audio/a1.2.mp3" },
  { title: "Track a 1.3", src: "./assets/audio/a1.3.mp3" },
  { title: "Track a 1.4", src: "./assets/audio/a1.4.mp3" },
  { title: "Track a 1.5", src: "./assets/audio/a1.5.mp3" },
  { title: "Track a 2.1", src: "./assets/audio/a2.1.mp3" },
  { title: "Track a 2.2", src: "./assets/audio/a2.2.mp3" },
  { title: "Track a 2.3", src: "./assets/audio/a2.3.mp3" },
  { title: "Track a 2.4", src: "./assets/audio/a2.4.mp3" },
  { title: "Track a 3.1", src: "./assets/audio/a3.1.mp3" },
  { title: "Track a 3.2", src: "./assets/audio/a3.2.mp3" },
  { title: "Track a 3.3", src: "./assets/audio/a3.3.mp3" },
  { title: "Track a 4.1", src: "./assets/audio/a4.1.mp3" },
  { title: "Track a 4.2", src: "./assets/audio/a4.2.mp3" },
  { title: "Track a 4.3", src: "./assets/audio/a4.3.mp3" },
  { title: "Track a 5.1", src: "./assets/audio/a5.1.mp3" },
  { title: "Track a 5.2", src: "./assets/audio/a5.2.mp3" },
  { title: "Track a 5.3", src: "./assets/audio/a5.3.mp3" },
  { title: "Track a 6.1", src: "./assets/audio/a6.1.mp3" },
  { title: "Track a 6.2", src: "./assets/audio/a6.2.mp3" },
  { title: "Track a 6.3", src: "./assets/audio/a6.3.mp3" },
  { title: "Track a 7.1", src: "./assets/audio/a7.1.mp3" },
  { title: "Track a 7.2", src: "./assets/audio/a7.2.mp3" },
  { title: "Track a 7.3", src: "./assets/audio/a7.3.mp3" },
  { title: "Track a 8.1", src: "./assets/audio/a8.1.mp3" },
  { title: "Track a 8.2", src: "./assets/audio/a8.2.mp3" },
  { title: "Track a 8.3", src: "./assets/audio/a8.3.mp3" },
  { title: "Track a 9.1", src: "./assets/audio/a9.1.mp3" },
  { title: "Track a 9.2", src: "./assets/audio/a9.2.mp3" },
  { title: "Track a 9.3", src: "./assets/audio/a9.3.mp3" },
  { title: "Track a 10.1", src: "./assets/audio/a10.1.mp3" },
  { title: "Track a 10.2", src: "./assets/audio/a10.2.mp3" },
  { title: "Track a 10.3", src: "./assets/audio/a10.3.mp3" },
];

function ButtonSection() {
  const [currentAudio, setCurrentAudio] = useState(null);

  const playAudio = (src) => {
    if (currentAudio) {
      currentAudio.pause();
    }
    const audio = new Audio(src);
    setCurrentAudio(audio);
    audio.play();
  };

  return (
    <div className={styles.mbrSectionBtn}>
      {tracks.map((track, index) => (
        <button
          key={index}
          className={styles.btn}
          onClick={() => playAudio(track.src)}
        >
          {track.title} - Posłuchaj Teraz
        </button>
      ))}
    </div>
  );
}

export default ButtonSection;
