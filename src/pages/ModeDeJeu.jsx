import React, { useState } from "react";
import yoga from "../assets/img/yoga.gif";

function ModeDeJeu() {
  const videoLune = `${import.meta.env.BASE_URL}videos/terra2.mp4`;
  const [mode, setMode] = useState("normal");

  return (
    <>
      {/* video colori */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-2"
      >
        <source
          src={videoLune}
          type="video/mp4"
          className="hidden hover:hidden-none"
        />
        Ton navigateur ne supporte pas la vidéo HTML5.
      </video>

      <div className="flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Choisis ton mode de jeu</h1>
        <p className="text-white/80 mb-8">Quel défi veux-tu relever ?</p>

        <div className="flex gap-6 mb-10">
          {/* Bouton Mode Normal */}
          <button
            onClick={() => setMode("normal")}
            className={`p-6 rounded-2xl border-2 transition-all ${
              mode === "normal"
                ? "border-white bg-white/20"
                : "border-white/30 bg-white/5"
            }`}
          >
            <div className="text-4xl mb-2">
              <img src={yoga} alt="Yoga" className="w-50 " />
            </div>
            <p className="font-bold">Mode Normal</p>
            <p className="text-sm text-white/80">Sans limite de temps</p>
          </button>

          {/* Bouton Contre la montre */}
          <button
            onClick={() => setMode("time")}
            className={`p-6 rounded-2xl border-2 transition-all ${
              mode === "time"
                ? "border-white bg-white/20"
                : "border-white/30 bg-white/5"
            }`}
          >
            <div className="text-4xl mb-2"></div>
            <p className="font-bold">Contre la montre</p>
            <p className="text-sm text-white/80">10 secondes par question</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default ModeDeJeu;
