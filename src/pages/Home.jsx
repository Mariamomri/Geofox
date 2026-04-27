import React from "react";
import audio from "../assets/audio/terra.mp3";

function Home() {
  const videoTerra = `${import.meta.env.BASE_URL}videos/terra.mp4`;

  return (
    <div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-2"
      >
        <source src={videoTerra} type="video/mp4" />
        Ton navigateur ne supporte pas la vidéo HTML5.
      </video>

      <audio controls src={audio} />
    </div>
  );
}

export default Home;
