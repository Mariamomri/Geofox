import React from "react";

function ModeDeJeu() {
  const videoLune = `${import.meta.env.BASE_URL}videos/terra2.mp4`;
  return (
    <>
      {/* video colori */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full object-cover -z-2"
      >
        <source
          src={videoLune}
          type="video/mp4"
          className="hidden hover:hidden-none"
        />
        Ton navigateur ne supporte pas la vidéo HTML5.
      </video>

      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-4xl font-bold mb-4">Choisis ton mode de jeu</h1>
        <p className="text-white/60 mb-8">Quel défi veux-tu relever ?</p>
      </div>
    </>
  );
}

export default ModeDeJeu;
