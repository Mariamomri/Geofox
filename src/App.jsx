// import { useState } from 'react'
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Resultats from "./pages/Resultats";
import ModeDeJeu from "./pages/ModeDeJeu";
import Music from "./components/Music";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/resultats" element={<Resultats />} />
        <Route path="/modeDeJeu" element={<ModeDeJeu />} />
      </Routes>
      <Footer />
      <Music />
    </>
  );
}

export default App;
