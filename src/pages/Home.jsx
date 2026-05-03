import React from "react";
import Alieno from "../components/Alieno";

function Home() {
  const videoTerra = `${import.meta.env.BASE_URL}videos/terra.mp4`;
  const videoSole = `${import.meta.env.BASE_URL}videos/sole.mp4`;
  const videoLune = `${import.meta.env.BASE_URL}videos/terra2.mp4`;

  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-2"
      >
        <source
          src={videoTerra}
          type="video/mp4"
          className="hidden hover:hidden-none"
        />
        Ton navigateur ne supporte pas la vidéo HTML5.
      </video>
      <Alieno />

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-2"
      >
        <source
          src={videoSole}
          type="video/mp4"
          className="hidden hover:hidden-none"
        />
        Ton navigateur ne supporte pas la vidéo HTML5.
      </video>

      {/* video colori */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full  object-cover -z-2"
      >
        <source
          src={videoLune}
          type="video/mp4"
          className="hidden hover:hidden-none"
        />
        Ton navigateur ne supporte pas la vidéo HTML5.
      </video> */}
    </>
  );
}

export default Home;
