import React from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../context/QuizContext.jsx";

function Resultats() {
  const { score, mode, setScore } = useQuiz(); // On lit le score depuis le Context
  const videoTerra = `${import.meta.env.BASE_URL}videos/due.mp4`;

  function rejouer() {
    setScore(0);
  }

  return (
    <div className="flex flex-col items-center justify-center pt-2 text-white px-4 bg-black/50 ml-100 mr-100 rounded-3xl  ">
      <h1 className="text-3xl md:text-5xl font-black mb-1">Résultats</h1>

      <p className="text-white/50 mb-5">
        Mode : <span className="text-white font-bold">{mode}</span>
      </p>

      <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center mb-4">
        <p className="text-white/60 text-sm uppercase tracking-wider mb-2">
          Score final
        </p>

        {/* Nombre de bonnes réponses */}
        <p className="text-7xl font-black text-white mb-1">{score}</p>

        <p className="text-white/50">
          bonne{score > 1 ? "s" : ""} réponse{score > 1 ? "s" : ""}
        </p>
      </div>

      <p className="text-lg mb-4 text-white/70">
        {score === 0 && "Ne lâche pas, tu vas y arriver ! "}
        {score >= 1 && score <= 3 && "Pas mal, continue ! "}
        {score >= 4 && score <= 7 && "Bien joué ! "}
        {score >= 8 && "Excellent, tu es un génie ! "}
      </p>

      {/* Boutons */}
      <div className="flex gap-4 mb-8">
        <Link
          to="/modeDeJeu"
          onClick={rejouer}
          className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase hover:scale-105 transition-all"
        >
          Rejouer
        </Link>

        <Link
          to="/"
          onClick={rejouer}
          className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-bold uppercase hover:border-white transition-all"
        >
          HOME
        </Link>
      </div>

      <video
        autoPlay
        muted
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
    </div>
  );
}

export default Resultats;
