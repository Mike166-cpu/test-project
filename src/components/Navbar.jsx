// src/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Dim background when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <nav className="py-2 font-poppins w-full z-50 bg-transparent backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://beesafesecurity.nl/wp-content/uploads/2024/10/cropped-logo-black-1.png"
                alt="BeeSafe Security Logo"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center font-bold">
              <Link to="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link to="/" className="text-gray-700 hover:text-blue-600">
                Ons Werk
              </Link>
              <Link to="/" className="text-gray-700 hover:text-blue-600">
                Over Ons
              </Link>
              <Link
                to="/"
                className="hover:text-gray-600 transition ease-in-out duration-200 bg-yellow-500 text-white p-2 rounded-full"
              >
                Contact
              </Link>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-gray-800 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-lg font-semibold">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-700">
              ✕
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              Ons Werk
            </Link>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              Over Ons
            </Link>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
