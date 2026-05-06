import React from "react";
import Alieno from "../components/Alieno";
import { Link } from "react-router-dom";

function Home() {
  const videoSole = `${import.meta.env.BASE_URL}videos/sole.mp4`;

  return (
    <>
      <div className="absolute inset-0 w-full h-full object-cover -z-2">
        <Alieno />

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-2"
        >
          <source
            src={videoSole}
            type="video/mp4"
            className="hidden hover:hidden-none"
          />
          Ton navigateur ne supporte pas la vidéo HTML5.
        </video>

        <div className=" divtext text-left px-20">
          <h1 className="titolo">GEOFOX</h1>
          <p className="text-home">Quiz Démographique Mondial</p> <br />
          <p className="text-sm md:text-base text-white mb-10 max-w-xl mx-auto leading-relaxed">
            Teste tes connaissances sur les capitales, drapeaux, populations et
            continents du monde entier. Es-tu prêt à devenir le maître de la
            géographie ?
          </p>
          {/* Bouton Commencer */}
          <Link to="/modeDeJeu" className="commencer">
            Commencer
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
