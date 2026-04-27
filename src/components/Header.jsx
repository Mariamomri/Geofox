import React from "react";
import logo from "../assets/img/logo.png";

function Header() {
  return (
    <header className="bg-transparent text-white p-4 flex items-center justify-between">
      <img src={logo} alt="Logo" className="h-40" />
      <nav className="mt-4">
        <ul className="flex space-x-4 text-lg">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button href="#" className="mr-15 text-lg">
        Login
      </button>
    </header>
  );
}

export default Header;
