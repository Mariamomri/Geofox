import React from "react";
import logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-transparent text-white p-4 flex items-center justify-between">
      <img src={logo} alt="Logo" className="h-30" />
      <nav className="mt-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            (isActive ? "active" : "") + " text-lg mr-8"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/modeDeJeu"
          className={({ isActive }) =>
            (isActive ? "active" : "") + " text-lg mr-8"
          }
          >
          Mode de jeu
        </NavLink>

        <NavLink
          to="/quiz"
          className={({ isActive }) =>
            (isActive ? "active" : "") + " text-lg mr-8"
          }
        >
          Quiz
        </NavLink>
        <NavLink
          to="/resultats"
          className={({ isActive }) =>
            (isActive ? "active" : "") + " text-lg mr-8"
          }
        >
          Résultats
        </NavLink>
      </nav>
      <button href="#" className="mr-15 text-lg">
        SAMI
      </button>
    </header>
  );
}

export default Header;
