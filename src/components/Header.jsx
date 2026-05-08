import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  function fermerMenu() {
    setMenuOuvert(false);
  }

  return (
    <header className="bg-transparent text-white p-4 pb-0 flex items-center justify-between relative z-50">
      <img src={logo} alt="Logo" className="h-16 md:h-20" />

      <nav className="hidden md:flex items-center gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            (isActive ? "active" : "") +
            " text-lg hover:text-orange-400 transition-colors duration-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/modeDeJeu"
          className={({ isActive }) =>
            (isActive ? "active" : "") +
            " text-lg hover:text-orange-400 transition-colors duration-300"
          }
        >
          Mode de jeu
        </NavLink>

        <NavLink
          to="/quiz"
          className={({ isActive }) =>
            (isActive ? "active" : "") +
            " text-lg hover:text-orange-400 transition-colors duration-300"
          }
        >
          Quiz
        </NavLink>

        <NavLink
          to="/resultats"
          className={({ isActive }) =>
            (isActive ? "active" : "") +
            " text-lg hover:text-orange-400 transition-colors duration-300"
          }
        >
          Résultats
        </NavLink>
      </nav>

      {/* Bouton Login — visible sur desktop et mobile */}
      <button className="hidden md:block mr-4 text-lg py-1 rounded-full hover:border-white transition-all">
        Login
      </button>

      {/* menu hamburger*/}
      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setMenuOuvert(!menuOuvert)}
      >
        {menuOuvert ? (
          <span className="text-3xl font-bold">✕</span>
        ) : (
          <>
            <span className="w-7 h-0.5 bg-white block"></span>
            <span className="w-7 h-0.5 bg-white block"></span>
            <span className="w-7 h-0.5 bg-white block"></span>
          </>
        )}
      </button>

      {menuOuvert && (
        <div className="absolute top-full left-0 w-full bg-black/90 flex flex-col items-center gap-6 py-8 md:hidden">
          <NavLink
            to="/"
            onClick={fermerMenu}
            className={({ isActive }) =>
              (isActive ? "active" : "") + " text-xl"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/modeDeJeu"
            onClick={fermerMenu}
            className={({ isActive }) =>
              (isActive ? "active" : "") + " text-xl"
            }
          >
            Mode de jeu
          </NavLink>

          <NavLink
            to="/quiz"
            onClick={fermerMenu}
            className={({ isActive }) =>
              (isActive ? "active" : "") + " text-xl"
            }
          >
            Quiz
          </NavLink>

          <NavLink
            to="/resultats"
            onClick={fermerMenu}
            className={({ isActive }) =>
              (isActive ? "active" : "") + " text-xl"
            }
          >
            Résultats
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;
