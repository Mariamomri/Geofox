import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext.jsx";

function Quiz() {
  const { mode, setScore } = useQuiz();
  const navigate = useNavigate();
  const videoTerra = `${import.meta.env.BASE_URL}videos/terra.mp4`;
  const [question, setQuestion] = useState(null); //  PHP>
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [scoreLocale, setScoreLocale] = useState(0);

  useEffect(() => {
    fetch("http://localhost/Geofox/back_end/api/quiz.php")
      .then((response) => response.json()) // converte la risposta in oggetto JS
      .then((data) => {
        setQuestion(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Erreur : ", error);
        setLoading(false);
      });
  }, []); // [] = esegui solo una volta

  function handleReponse(option) {
    setSelected(option);

    if (option === question.answer) {
      setScoreLocale(scoreLocale + 1); //contare le risposte giuste
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <p>Chargement...</p>
      </div>
    );
  }

  // Sauvegarde le score dans le Context et redirige vers Resultats
  function terminerQuiz() {
    setScore(scoreLocale);
    navigate("/resultats");
  }

  return (
    <div className="flex flex-col items-center justify-center text-white mb-20">
      <h1 className="text-4xl font-bold mb-4">Quiz</h1>
      <p>
        Mode choisi : <span className="font-bold">{mode}</span>
      </p>

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

      {question.flag && (
        <img
          src={question.flag}
          alt="drapeau"
          className="w-32 h-20 object-cover rounded mb-6 border-2 border-white/20"
        />
      )}

      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        {question.statement}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleReponse(option)}
            className={`p-4 rounded-xl border-2 font-semibold transition-all cursor-pointer ${
              selected === null
                ? "border-white/30 hover:border-white"
                : option === question.answer
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

      {selected && (
        <p
          className={`mt-6 text-lg font-bold ${
            selected === question.answer ? "text-green-400" : "text-red-400"
          }`}
        >
          {selected === question.answer
            ? "inserire gif ok Bonne réponse !"
            : "inserire gif err Mauvaise réponse !"}
        </p>
      )}

      {selected && (
        <button
          onClick={terminerQuiz}
          className="mt-4 bg-white text-black px-8 py-3 rounded-full font-bold uppercase hover:scale-105 transition-all cursor-pointer mb-20"
        >
          Terminer le quiz
        </button>
      )}
    </div>
  );
}

export default Quiz;

/*Quando l'utente arriva sulla pagina Quiz, useEffect si esegue automaticamente e fa una chiamata fetch all'endpoint PHP. PHP legge 4 paesi casuali dal database con PDO, crea una domanda con la risposta giusta e 3 distrattori, e risponde in JSON. React riceve il JSON, lo salva con useState e lo mostra. Quando l'utente clicca una risposta, handleReponse salva la scelta e il ternario nel className mostra verde per la risposta giusta e rosso per quella sbagliata.*/
