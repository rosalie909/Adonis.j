// src/components/Hero.tsx
import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      // Correction Marges : pt-32 sur mobile pour laisser respirer sous la Navbar, pt-40 sur grand écran
      className="relative w-full min-h-screen pt-32 pb-12 lg:pt-40 lg:pb-20 flex items-center overflow-hidden bg-[#F5F5F5]"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-0">
          
          {/* --- TEXTE GAUCHE --- */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Marges Titre : mb-4 */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-[#1F1F1F] leading-tight mb-4">
              Salut, je suis <br />
              MOFOTO <span className="text-[#E03BF2]">Rosalie</span>
            </h1>

            {/* Marges Sous-titre : mb-6 */}
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-[#555555] mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E03BF2] to-[#A8D2DF]">
                Développeuse web
              </span>
            </h2>

            {/* Marges Paragraphe : mb-10 pour bien séparer des boutons */}
            <p className="font-semibold max-w-md text-[#555555] text-base md:text-lg mb-10 leading-relaxed">
              Je conçois des interfaces numériques intuitives et performantes, alliant esthétique soignée et expérience utilisateur fluide.
            </p>
            
            {/* --- ZONE DES BOUTONS --- */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
              <a 
                href="#contact"
                className="flex-1 whitespace-nowrap bg-[#E03BF2] hover:bg-[#C32ADF] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all transform active:scale-95 hover:scale-105 flex items-center justify-center text-lg md:text-xl"
              >
                Contactez-moi
              </a>

              <a 
                href="/CV_2025-12-18_Rosalie_Mofoto.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 whitespace-nowrap bg-white text-[#E03BF2] border-2 border-[#E03BF2] hover:bg-[#E03BF2] hover:text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all transform active:scale-95 hover:scale-105 flex items-center justify-center text-lg md:text-xl"
              >
                Mon CV
              </a>
            </div>

            {/* Icônes réseaux : Marges adaptées */}
            <div className="flex gap-6">
              <SocialIcon icon={<FaFacebookF />} color="#1877F2" href="https://www.facebook.com/MofotoMolekela" />
              <SocialIcon icon={<FaGithub />} color="#000000" href="https://github.com/rosalie909" />
              <SocialIcon icon={<FaLinkedinIn />} color="#0A66C2" href="https://www.linkedin.com/in/rosalie-mofoto/" />
            </div>
          </div>

          {/* --- IMAGE + BLOB DROITE --- */}
          {/* Marge Image : mb-10 sur mobile pour ne pas coller au texte du dessus */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mb-10 lg:mb-0">
            <div className="relative w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]">
              
              <div className="absolute inset-0 bg-[#A8D2DF] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-blob-slow opacity-80 z-0 shadow-inner"></div>
              
              <img
                src="/Gemini.png"
                alt="Rosalie"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[85%] h-[85%] object-cover rounded-full border-4 border-white shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ icon, color, href }: { icon: React.ReactNode; color: string; href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ backgroundColor: color }}
    className="w-11 h-11 flex items-center justify-center rounded-full text-white 
      hover:opacity-80 hover:scale-110 transition-all duration-300 shadow-md text-xl"
  >
    {icon}
  </a>
);

export default Hero;