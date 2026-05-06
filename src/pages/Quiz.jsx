import React from "react";
import { useQuiz } from "../context/QuizContext.jsx";

function Quiz() {
  const { mode } = useQuiz();
  const videoTerra = `${import.meta.env.BASE_URL}videos/terra.mp4`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
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
    </div>
  );
}

export default Quiz;
