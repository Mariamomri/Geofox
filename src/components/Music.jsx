import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import musicaHome from "../assets/audio/home.mp3";
import musicaQuiz from "../assets/audio/quiz.mp3";
import musicaResultats from "../assets/audio/resultat.mp3";

function Musica() {
  const location = useLocation();
  const audioRef = useRef(null);
  const tracciaAttuale = useRef("home");

  useEffect(() => {
    function lanciaMusica() {
      if (audioRef.current) {
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch(() => {});
        document.removeEventListener("click", lanciaMusica);
      }
    }
    document.addEventListener("click", lanciaMusica);
    return () => document.removeEventListener("click", lanciaMusica);
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    const pathname = location.pathname;

    // Home e ModeDeJeu → stessa musica, NON riavviare
    if (pathname === "/" || pathname === "/modeDeJeu") {
      if (tracciaAttuale.current === "home") return; // già in play, non toccare
      tracciaAttuale.current = "home";
      audioRef.current.src = musicaHome;
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
      return;
    }

    if (pathname === "/quiz") {
      if (tracciaAttuale.current === "quiz") return;
      tracciaAttuale.current = "quiz";
      audioRef.current.src = musicaQuiz;
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
      return;
    }

    if (pathname === "/resultats") {
      if (tracciaAttuale.current === "resultats") return;
      tracciaAttuale.current = "resultats";
      audioRef.current.src = musicaResultats;
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
      return;
    }
  }, [location.pathname]);

  return <audio ref={audioRef} src={musicaHome} loop preload="auto" />;
}

export default Musica;
