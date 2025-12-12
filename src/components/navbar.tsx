
import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    
  ];

  return (
    <nav className="fixed w-full z-50 top-0 bg-[#F5F5F5] backdrop-blur-sm  transition-all duration-300">
      <div className="container mx-auto px-4 md:px-10 py-4 flex justify-between items-center">
        
        {/* --- LOGO --- */}
        <a href="#home" className="text-2xl font-bold text-gray-800">
          MOFOTO <span className="text-[#E03BF2] text-2xl font-bold">Rosalie</span>

        </a>

        {/* --- MENU DESKTOP --- */}
        <div className="hidden lg:flex items-center gap-9  text-gray-800 hover:text-[#A8D2DF]">
          <ul className="flex space-x-8 ">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-lg font-medium text-gray-600 hover:text-violet-600 transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* BOUTON "CONTACT ME" (STYLE MODIFIÉ : Bordure violette, pas de fond) */}
          <a 
            href="#contact"
            className="
              border-2 border-[#A8D2DF] 
              text-violet-600 bg-transparent
              px-6 py-2 rounded-full font-medium 
              hover:bg-violet-600 hover:text-white 
              transition duration-300 shadow-sm transform hover:scale-105
            "
          >
            Contact Me
          </a>
        </div>

        {/* --- BOUTON HAMBURGER (Mobile) --- */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-3xl text-gray-800 focus:outline-none p-2"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* --- MENU MOBILE --- */}
      <div 
        className={`
          lg:hidden 
          absolute top-full left-0 w-full 
          bg-white shadow-lg 
          flex flex-col items-center 
          py-6 space-y-6 
          transition-all duration-300 ease-in-out 
          z-40
          ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'}
        `}
      >
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-xl font-medium text-gray-800 hover:text-violet-600"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        
        {/* Bouton Mobile (Même style que desktop) */}
        <a 
            href="#contact"
            className="
              text-xl font-medium 
              text-violet-600 bg-transparent
              border-2 border-violet-600 
              px-8 py-2 rounded-full 
              hover:bg-violet-600 hover:text-white 
              transition
            "
            onClick={() => setIsOpen(false)}
          >
            Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;