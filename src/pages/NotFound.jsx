import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-8xl font-black text-orange-400 mb-4">404</h1>
      <p className="text-2xl font-bold mb-2">Page introuvable</p>
      <p className="text-white/60 mb-8">Cette page n'existe pas.</p>
      <Link
        to="/"
        className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase hover:scale-105 transition-all"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default NotFound;
