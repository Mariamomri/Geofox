import React, { useState, useEffect } from "react";
import yoga from "../assets/img/yoga.gif";
import orologio from "../assets/img/orologio.gif";
import { Link } from "react-router-dom";
import { useQuiz } from "../context/QuizContext.jsx"; //ho tolto usetate per utilizzare il cotext

function ModeDeJeu() {
  const videoTerra = `${import.meta.env.BASE_URL}videos/due5.mp4`;
  const { mode, setMode, pseudo, setPseudo } = useQuiz();

  //per il tempo
  const [mostraDiv, setMostraDiv] = useState(false);

  // Dopo 15 secondi mostra il div
  useEffect(() => {
    const timer = setTimeout(() => {
      setMostraDiv(true);
    }, 14000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <>
      {/* video colori */}
      <video
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-2"
        onLoadedMetadata={(e) => (e.target.playbackRate = 3)}
      >
        <source
          src={videoTerra}
          type="video/mp4"
          className="hidden hover:hidden-none"
        />
        Ton navigateur ne supporte pas la vidéo HTML5.
      </video>

      {mostraDiv && (
        <section className="flex  justify-around items-center ">
          <div className="flex flex-col items-center justify-center text-white ">
            <h1 className="text-4xl font-bold mb-84 p-5 ">
              Choisis ton mode de jeu
            </h1>

            {/* Input pseudo */}
            <div className="mb-8 w-50 max-w-md absolute left-20 top-50">
              <label className="block text-white text-sm font-semibold mb-2">
                Entrez pseudo
              </label>
              <input
                type="text"
                value={pseudo}
                onChange={(e) => setPseudo(e.target.value)}
                placeholder="Ex : Mariam"
                maxLength={10}
                className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* div quadri */}
          <div className="flex flex-col items-center justify-center text-white px-3 max-w-2xl mx-auto bg-black/50 ml-80 rounded-lg mt-0 mb-15 w-120">
            <div className="flex gap-10 mb-14 mt-6 w-100">
              <button
                onClick={() => setMode("Normal")}
                className={` rounded-2xl border-2 transition-all cursor-pointer ${
                  mode === "Normal"
                    ? "border-white bg-white/20"
                    : "border-white/30 bg-white/5"
                }`}
              >
                <div className="text-4xl mb-2 ">
                  <img src={yoga} alt="Yoga" className="w-50 " />
                </div>
                <p className="font-bold text-white">Mode normal</p>
                <p className="text-sm text-white/80">Sans limite de temps</p>
              </button>

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
                    className="w-20 ml-10 mb-2 "
                  />
                </div>
                <p className="font-bold">Contre la montre</p>
                <p className="text-sm text-white/80">
                  10 secondes par question
                </p>
              </button>
            </div>

            <div className="ml-10 flex gap-10 items-center">
              <p className="mb-6 text-white/70">
                Mode sélectionné :{" "}
                <span className="font-bold text-white">{mode}</span>
              </p>

              <Link
                to="/quiz"
                className="bg-white text-black px-8 mb-6 py-3 rounded-full font-bold uppercase hover:scale-105 transition-all"
              >
                PLAY
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ModeDeJeu;
