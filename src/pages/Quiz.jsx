import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext.jsx";
import { fetchQuiz } from "../services/api.js";
import img from "../assets/img/volpe.png";
import clesidra from "../assets/img/clesidra.gif";

const TIME_PER_QUESTION = 10;

function Quiz() {
  const { mode, setScore, pseudo } = useQuiz();
  const navigate = useNavigate();
  const videoLune = `${import.meta.env.BASE_URL}videos/due3.mp4`;

  const [questions, setQuestions] = useState([]); // tutte le domande
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0); // domanda attuale
  const [scoreLocale, setScoreLocale] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState(null); // 'good' | 'bad' | null
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);

  // Carica TUTTE le domande una sola volta
  useEffect(() => {
    fetchQuiz(10)
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Erreur : ", error);
        setLoading(false);
      });
  }, []);

  const current = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;

  // Passa alla domanda successiva (o vai ai risultati)
  const goNext = useCallback(() => {
    if (isLast) {
      setScore(scoreLocale);
      navigate("/resultats");
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setFeedback(null);
      setTimeLeft(TIME_PER_QUESTION);
    }
  }, [isLast, scoreLocale, setScore, navigate]);

  // Gestisce la risposta dell'utente
  function handleSelect(option) {
    if (selected !== null) return; // blocca doppio click

    setSelected(option);
    if (option === current.answer) {
      setScoreLocale((s) => s + 1);
      setFeedback("good");
    } else {
      setFeedback("bad");
    }

    // Passa automaticamente dopo 1.2s
    setTimeout(goNext, 1200);
  }

  // Timer — solo in modalità "time"
  useEffect(() => {
    if (mode !== "Contre la montre" || loading || !current || selected !== null)
      return;

    if (timeLeft <= 0) {
      setSelected("__TIMEOUT__");
      setFeedback("bad");
      setTimeout(goNext, 1000);
      return;
    }

    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [mode, timeLeft, loading, current, selected, goNext]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <p>Chargement...</p>
      </div>
    );
  }

  if (!current) return null;

  return (
    <>
      <div className="flex flex-col items-center justify-center text-white px-3 max-w-2xl mx-auto w-full bg-black/70 rounded-lg  mt-0 ml-100">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src={videoLune} type="video/mp4" />
        </video>

        <img
          src={img}
          alt="Volpe"
          className=" w-80 float-left absolute ml-210 mt-53 z-10"
        />

        {/* Progression */}
        <div className="flex justify-between w-full max-w-xl mb-4 mt-2 text-sm">
          <span>
            Question <b>{currentIndex + 1}</b> / {questions.length}
          </span>
          <span>
            Score : <b>{scoreLocale}</b>
          </span>
        </div>

        {/* Barre de progression */}
        <div className="w-full max-w-xl h-2 bg-white/20 rounded-full mb-3 relative">
          <div
            className="h-full bg-white rounded-full transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
            }}
          />
        </div>

        {/* Pseudo du joueur */}
        {pseudo && (
          <p className="text-white/60 text-sm mb-2 w-full max-w-xl">
            Joueur : <span className="text-orange-400 font-bold">{pseudo}</span>
          </p>
        )}

        {/* Timer */}
        {mode === "Contre la montre" && selected === null && (
          <div
            className={`text-5xl float-right mr-240 mb-100 absolute z-10 flex flex-col items-center justify-center font-black mb-4 ${timeLeft <= 3 ? "text-red-400 animate-pulse" : "text-orange-400 p-0 m-0"}`}
          >
            <img src={clesidra} alt="Clesidra" className="w-30" /> {timeLeft}s
          </div>
        )}

        {current.flag && (
          <img
            src={current.flag}
            alt="drapeau"
            className="w-32 h-20 object-cover rounded mb-6 border-2 border-white/20"
          />
        )}

        {/* Question */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          {current.statement}
        </h2>

        {/* Les 4 options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl mb-6">
          {current.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              disabled={selected !== null}
              className={`p-4 rounded-xl border-2 font-semibold transition-all ${
                selected === null
                  ? "border-white/30 hover:border-white cursor-pointer"
                  : option === current.answer
                    ? "border-green-400 bg-green-400/20 text-green-300"
                    : option === selected
                      ? "border-red-400 bg-red-400/20 text-red-300"
                      : "border-white/20 text-white/40"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="flex flex-col absolute z-20  mr-230 mb-80 items-center justify-center text-white px-3 max-w-2xl mx-auto">
          {/* Feedback — automatique après 1.2s */}
          {feedback && (
            <p
              className={`mt-6 text-xl font-bold ${feedback === "good" ? "text-green-400" : "text-red-400"}`}
            >
              {feedback === "good"
                ? " Bonne réponse !"
                : selected === "__TIMEOUT__"
                  ? " Temps écoulé !"
                  : " Mauvaise réponse !"}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Quiz;

/*
  Quando l'utente arriva sulla pagina Quiz, useEffect carica tutte le domande
  una sola volta da PHP tramite fetchQuiz() in services/api.js.
  handleSelect gestisce la risposta e passa automaticamente alla domanda 
  successiva dopo 1.2s. Il timer useEffect si attiva solo in modalità "time".
*/
