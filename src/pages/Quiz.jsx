import React from "react";
import { useQuiz } from "../context/QuizContext.jsx";

function Quiz() {
  const { mode } = useQuiz();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">Quiz</h1>
      <p>
        Mode choisi : <span className="font-bold">{mode}</span>
      </p>
    </div>
  );
}

export default Quiz;
