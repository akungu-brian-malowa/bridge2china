// src/components/Navbar.tsx
import React, { useState } from 'react';
import Logo from "../../assets/vasha.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
        <img 
            src={Logo} 
            alt="Kite Auto Fix and Spares Logo" 
            className="w-8 h-8 md:w-40 md:h-24 mr-2"
          />
          {/* <span className="text-blue-700">Vasha</span>
          <span className="text-teal-500">ThePlace</span> */}
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#home" className="text-blue-800 font-bold hover:text-blue-700 transition-colors">Home</a></li>
            <li><a href="#services" className="text-blue-800 font-bold hover:text-blue-700 transition-colors">Services</a></li>
            <li><a href="#why-china" className="text-blue-800 font-bold hover:text-blue-700 transition-colors">Why China?</a></li>
            <li><a href="#shopping" className="text-blue-800 font-bold hover:text-blue-700 transition-colors">Shopping Guide</a></li>
            <li><a href="#contact" className="text-blue-800 font-bold hover:text-blue-700 transition-colors">Contact</a></li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col py-2">
            <li><a href="#home" className="block py-2 px-4 text-gray-700 hover:bg-blue-50" onClick={toggleMenu}>Home</a></li>
            <li><a href="#services" className="block py-2 px-4 text-gray-700 hover:bg-blue-50" onClick={toggleMenu}>Services</a></li>
            <li><a href="#why-china" className="block py-2 px-4 text-gray-700 hover:bg-blue-50" onClick={toggleMenu}>Why China?</a></li>
            <li><a href="#shopping" className="block py-2 px-4 text-gray-700 hover:bg-blue-50" onClick={toggleMenu}>Shopping Guide</a></li>
            <li><a href="#contact" className="block py-2 px-4 text-gray-700 hover:bg-blue-50" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

