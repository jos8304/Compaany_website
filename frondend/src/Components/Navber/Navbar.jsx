import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

const MenuItem = ({ path, label, onClick }) => (
  <li>
    <Link
      to={path}
      className="hover:text-blue-600 transition duration-200"
      onClick={onClick}
    >
      {label}
    </Link>
  </li>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl font-bold lg:mr-8">
          <a href="/">Company</a>
        </h1>
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <ul className="flex gap-8 text-lg">
            {menuItems.map((item) => (
              <MenuItem key={item.path} {...item} />
            ))}
          </ul>
        </div>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="hidden lg:block px-3 ml-8 border rounded-md bg-white hover:border-blue-600 transition duration-200"
        >
          <option value="en">English</option>
          <option value="ko">한국어</option>
        </select>

        <button
          className="lg:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div>
          <button
            className="text-2xl mb-8 float-right"
            onClick={toggleMenu}
            aria-label="Close"
          >
            <HiX />
          </button>
          <ul className="clear-both space-y-4 pt-8 text-lg">
            {menuItems.map((item) => (
              <MenuItem
                key={item.path}
                {...item}
                onClick={() => {
                  setIsOpen(false);
                  window.screenTop({ top: 0, behavior: "smooth" });
                }}
              />
            ))}
          </ul>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="mt-6 w-full px-3 border rounded-md bg-white hover:border-blue-600 transition duration-200"
          >
            <option value="en">English</option>
            <option value="ko">한국어</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
