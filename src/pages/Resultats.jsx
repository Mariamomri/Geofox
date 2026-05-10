import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../context/QuizContext.jsx";

function Resultats() {
  const { score, mode, setScore, pseudo } = useQuiz(); // On lit le score depuis le Context
  const videoTerra = `${import.meta.env.BASE_URL}videos/due.mp4`;

  const [sauvegarde, setSauvegarde] = useState(false);
  const [erreur, setErreur] = useState(null);

  const [topScores, setTopScores] = useState([]);

  // useRef evita che il salvataggio si ripeta
  const giaeSalvato = useRef(false);

  function rejouer() {
    setScore(0);
  }

  useEffect(() => {
    if (!pseudo) return;
    if (giaeSalvato.current) return; // blocca se già salvato
    giaeSalvato.current = true; // segna come salvato

    fetch("http://localhost/Geofox/back_end/api/scores.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pseudo: pseudo,
        score: score,
        total: 10,
        mode: mode,
      }),
    })
      .then((res) => res.json())
      .then(() => setSauvegarde(true))
      .catch(() => setErreur("Erreur de sauvegarde"));
  }, []);

  //top 3
  useEffect(() => {
    fetch("http://localhost/Geofox/back_end/api/scores.php")
      .then((res) => res.json())
      .then((data) => setTopScores(data))
      .catch((err) => console.log("Erreur classement:", err));
  }, [sauvegarde]);

  return (
    <div className="flex flex-col items-center justify-center text-white px-4 bg-black/50 rounded-lg p-6 mr-50 ml-50   w-full max-w-4xl">
      <video
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src={videoTerra} type="video/mp4" />
      </video>

      <h1 className="text-4xl md:text-5xl font-black mb-2">Résultats</h1>
      <p className="text-white/50 mb-6">
        Mode : <span className="text-white font-bold">{mode}</span>
      </p>

      {/* Ligne principale : score à gauche + classement à droite */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl">
        {/* Colonne gauche — Score */}
        <div className="flex flex-col items-center flex-1">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-4 text-center mb-4 w-full">
            <p className="text-white/60 text-sm uppercase tracking-wider mb-2">
              Score final
            </p>
            <p className="text-7xl font-black text-white mb-1">{score}</p>
            <p className="text-white/50">
              bonne{score > 1 ? "s" : ""} réponse{score > 1 ? "s" : ""}
            </p>
          </div>

          <p className="text-lg mb-6 text-white/70 text-center">
            {score === 0 && "Ne lâche pas, tu vas y arriver ! "}
            {score >= 1 && score <= 3 && "Pas mal, continue ! "}
            {score >= 4 && score <= 7 && "Bien joué ! "}
            {score >= 8 && "Excellent, tu es un génie ! "}
          </p>

          {/* Boutons */}
          <div className="flex gap-4">
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
              className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-bold uppercase hover:border-white transition-all "
            >
              HOME
            </Link>
          </div>
        </div>

        {/* Colonne droite — Classement */}
        {topScores.length > 0 && (
          <div className="flex-1">
            {pseudo && (
              <div className="mb-4 text-center">
                {sauvegarde && (
                  <p className="text-green-400 font-bold">
                    Score sauvegardé pour {pseudo} !
                  </p>
                )}
                {erreur && <p className="text-red-400 text-sm">{erreur}</p>}
                {!sauvegarde && !erreur && (
                  <p className="text-white/40 text-sm">
                    Sauvegarde en cours...
                  </p>
                )}
              </div>
            )}

            <h2 className="text-xl font-bold text-center mb-4 text-orange-400">
              🏆 Classement
            </h2>
            <div className="bg-white/10 rounded-2xl overflow-hidden">
              {topScores.map((s, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center px-4 py-3 border-b border-white/10 ${
                    s.pseudo === pseudo ? "bg-orange-400/20" : ""
                  }`}
                >
                  <span className="text-orange-400 font-black w-8">
                    {index + 1}.
                  </span>
                  <span className="flex-1 font-semibold">{s.pseudo}</span>
                  <span className="text-white/60 text-sm mr-2">{s.mode}</span>
                  <span className="font-black">
                    {s.score}/{s.total}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Resultats;
