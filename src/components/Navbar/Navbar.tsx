// src/components/Navbar.tsx
import React, { useState } from "react";
import Logo from "../../assets/vasha2.png";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-[#e5d3c0] shadow-md z-50 ">
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <img
                src={Logo}
                alt="Vasha The Place"
                className="w-16 h-10 md:w-24 md:h-14 mr-2"
              />
              {/* <span className="text-blue-700">Vasha</span>
           <span className="text-teal-500">ThePlace</span> */}
              <div className="flex-col text-center ">
                <h3 className="text-sm  font-bold uppercase">
                  Bridge
                  <span className="text-red-700">To</span>China
                </h3>
              
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-2">
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <Link
                    to="/why-china"
                    className="text-black font-bold hover:text-gray-500 transition-colors"
                  >
                    Why China?
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-black font-bold hover:text-gray-500 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/frequently-asked-questions"
                    className="text-black font-bold hover:text-gray-500 transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shopping-guide"
                    className="text-black font-bold hover:text-gray-500 transition-colors"
                  >
                    Shopping Guide
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="text-black font-bold hover:text-gray-500 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="/#"
                     className="text-black font-bold hover:text-gray-500 transition-colors mr-2"
                    onClick={toggleMenu}
                  >
                    Our Store
                  </a>
                </li>
              </ul>
            </nav>
            <a
              href="services"
              className="bg-[#8a6725] px-2 py-2 rounded-md uppercase text-sm font-bold  text-white hidden md:block"
            >
              Book Service
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div>
          {isMenuOpen && (
            <>
              <nav className="md:hidden bg-white py-2">
                <ul className="flex flex-col py-2">
                <li>
                  <Link
                    to="/why-china"
                    //className="text-black font-bold hover:text-gray-500 transition-colors"
                    className="px-6 py-3 font-bold text-sm mb-2 text-black hover:text-gray-500 transition-colors duration-200 w-full"
                    onClick={toggleMenu}
                  >
                    Why China?
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                     className="px-6 py-3 font-bold text-sm mb-2 text-black hover:text-gray-500 transition-colors duration-200 w-full"
                    onClick={toggleMenu}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/frequently-asked-questions"
                     className="px-6 py-3 font-bold text-sm mb-2 text-black hover:text-gray-500 transition-colors duration-200 w-full"
                    onClick={toggleMenu}
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shopping-guide"
                     className="px-6 py-3 font-bold text-sm mb-2 text-black hover:text-gray-500 transition-colors duration-200 w-full"
                    onClick={toggleMenu}
                  >
                    Shopping Guide
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                     className="px-6 py-3 font-bold text-sm mb-2 text-black hover:text-gray-500 transition-colors duration-200 w-full"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="/#"
                     className="px-6 py-3 font-bold text-sm mb-2 text-black hover:text-gray-500 transition-colors duration-200 w-full"
                    onClick={toggleMenu}
                  >
                    Our Store
                  </a>
                </li>
                </ul>
              </nav>

              <a
                href="/services"
                className="bg-[#8a6725] p-3 rounded-md uppercase text-sm font-bold  text-white  md:hidden block mt-2 w-[80%] mx-auto mb-2 text-center"
              >
                Book Service
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
