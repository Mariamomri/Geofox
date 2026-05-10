/* il context è come un corridoio che collega tutte le stanze (componenti) della casa (app)
senza dover passare le chiavi (props) da una stanza all'altra
prima creamo il corridoio (Context), poi la scatola che lo avvolge (Provider) e infine un hook personalizzato per accedere facilmente alle variabili*/

import { createContext, useContext, useState } from "react";

const QuizContext = createContext(null);

export function QuizProvider({ children }) {
  const [mode, setMode] = useState("Contre la montre");
  const [score, setScore] = useState(0);
  const [pseudo, setPseudo] = useState("");

  return (
    <QuizContext.Provider value={{ mode, setMode, score, setScore }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}
