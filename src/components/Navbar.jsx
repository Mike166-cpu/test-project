import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Dim background when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Navbar */}
      <nav className="py-4 font-poppins w-full z-50 bg-white shadow-md top-0 left-0">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://beesafesecurity.nl/wp-content/uploads/2024/10/cropped-logo-black-1.png"
              alt="BeeSafe Security Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center font-semibold">
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
              className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Phone Number */}
            <a href="tel:+31652862673" className="text-gray-700 text-sm font-semibold hover:text-blue-600">
              +31 6 5286 2673
            </a>
            
            {/* Social Icons */}
            <a href="https://wa.me/31652862673" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-500 text-xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/beesafe.security/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 text-xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/company/beesafesecurityleiden" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 text-xl hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-800 focus:outline-none"
              aria-label="Open menu"
            >
              <FiMenu className="text-3xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 text-2xl"
            aria-label="Close menu"
          >
            <FiX />
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
            className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition text-center"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Contact Info */}
        <div className="flex flex-col items-center space-y-4 mt-6">
          {/* Clickable Phone Number */}
          <a href="tel:+31652862673" className="text-gray-700 font-semibold text-sm hover:text-blue-600">
              +31 6 5286 2673
          </a>

          {/* Mobile Social Icons */}
          <div className="flex space-x-4">
            <a href="https://wa.me/31652862673" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-500 text-3xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/beesafe.security/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 text-3xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/company/beesafesecurityleiden" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 text-3xl hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
