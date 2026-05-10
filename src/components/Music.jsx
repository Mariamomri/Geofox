import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import musicaHome from "../assets/audio/home.mp3";
import musicaQuiz from "../assets/audio/quiz.mp3";

function Musica() {
  const location = useLocation();
  const audioRef = useRef(null);

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

  // Cambia musica in base alla pagina
  useEffect(() => {
    if (!audioRef.current) return;

    const paginaHome = ["/", "/modeDeJeu"];
    const src = paginaHome.includes(location.pathname)
      ? musicaHome
      : musicaQuiz;

    audioRef.current.src = src;
    audioRef.current.volume = 0.3;
    audioRef.current.play().catch(() => {});
  }, [location.pathname]);

  // invisible
  return <audio ref={audioRef} src={musicaHome} loop preload="auto" />;
}

export default Musica;
