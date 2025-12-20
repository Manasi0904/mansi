import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1A1F36] shadow-lg z-50">
      <div className="container mx-auto px-6 py-4">
        <ul className="flex items-center justify-center gap-8 text-white font-semibold">
          <li>
            <a href="#home" className="hover:text-blue-400 duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-blue-400 duration-300">
              Education
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-blue-400 duration-300">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
