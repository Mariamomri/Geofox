// import React, { useState } from "react";
import yoga from "../assets/img/yoga.gif";
import orologio from "../assets/img/orologio.gif";
import { Link } from "react-router-dom";
import { useQuiz } from "../context/QuizContext.jsx"; //ho tolto usetate per utilizzare il cotext

function ModeDeJeu() {
  const videoLune = `${import.meta.env.BASE_URL}videos/due2.mp4`;
  const { mode, setMode } = useQuiz();

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

      <section className="flex  justify-around items-center ">
        <div className="flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">Choisis ton mode de jeu</h1>
          <p className="text-white/80 mb-8">Quel défi veux-tu relever ?</p>

          <div className="flex gap-6 mb-10">
            {/* Bouton Mode Normal */}
            <button
              onClick={() => setMode("Normal")}
              className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                mode === "Normal"
                  ? "border-white bg-white/20"
                  : "border-white/30 bg-white/5"
              }`}
            >
              <div className="text-4xl mb-2">
                <img src={yoga} alt="Yoga" className="w-50 " />
              </div>
              <p className="font-bold">Mode normal</p>
              <p className="text-sm text-white/80">Sans limite de temps</p>
            </button>

            {/* Bouton Contre la montre */}
            <button
              onClick={() => setMode("Contre la montre")}
              className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                mode === "Contre la montre"
                  ? "border-white bg-white/20"
                  : "border-white/30 bg-white/5"
              }`}
            >
              <div className="text-4xl mb-2">
                <img
                  src={orologio}
                  alt="Orologio"
                  className="w-20 ml-10 mb-5 mt-5"
                />
              </div>
              <p className="font-bold">Contre la montre</p>
              <p className="text-sm text-white/80">10 secondes par question</p>
            </button>
          </div>
        </div>

        <div>
          {/* Affiche le mode choisi */}
          <p className="mb-6 text-white/70">
            Mode sélectionné :{" "}
            <span className="font-bold text-white">{mode}</span>
          </p>

          {/* Bouton pour lancer le quiz */}
          <Link
            to="/quiz"
            className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase hover:scale-105 transition-all"
          >
            PLAY
          </Link>
        </div>
      </section>
    </>
  );
}

export default ModeDeJeu;
