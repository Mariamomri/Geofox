import React from "react";
import logo from "../assets/img/logo.png";

function Header() {
  return (
    <header className="bg-transparent text-white p-4 flex items-center justify-between">
      <img src={logo} alt="Logo" className="h-30" />
      <nav className="mt-4">
        <ul className="flex space-x-15 ">
          <li>
            <a href="#" className="hover:underline text-lg  ">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-lg  ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-lg">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button href="#" className="mr-15 text-lg">
        SAMI
      </button>
    </header>
  );
}

export default Header;
