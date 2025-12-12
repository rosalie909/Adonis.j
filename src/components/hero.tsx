// src/components/Hero.tsx
import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen pt-20 flex items-center overflow-hidden bg-[#F5F5F5]"
    >
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-0">
          
          {/* --- TEXTE GAUCHE --- */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 md:space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#1F1F1F] leading-tight">
              Salut, je suis <br />
              MOFOTO <span className="text-[#E03BF2]">Rosalie</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#555555]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E03BF2] to-[#A8D2DF]">
                Développeuse web
              </span>
            </h2>
            <p className="font-semibold max-w-md text-[#555555] text-base md:text-lg">
              Je conçois des interfaces numériques intuitives et performantes, alliant esthétique soignée et expérience utilisateur fluide.
            </p>
            
            {/* --- ZONE DES BOUTONS FLEXIBLES --- */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
              
              {/* Bouton Mon CV */}
              <a 
                href="/CV public de Rosalie Mofoto (0).pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="btn bg-white text-[#E03BF2] border-2 border-[#E03BF2] hover:bg-[#E03BF2] hover:text-white rounded-full px-8 py-3 md:px-10 md:py-4 text-lg md:text-xl shadow-lg transition-all hover:scale-105 flex items-center justify-center"
              >
                Mon CV
              </a>

            </div>

            {/* Icônes réseaux */}
            <div className="flex gap-6 mt-6">
              <SocialIcon
                icon={<FaFacebookF />}
                color="#1877F2" // Bleu Facebook
                href="https://www.facebook.com/MofotoMolekela"
              />
  
              <SocialIcon 
                icon={<FaGithub />} 
                color="#000000" 
                href="https://github.com/rosalie909"
              />

              <SocialIcon 
                icon={<FaLinkedinIn />} 
                color="#0A66C2" // Bleu LinkedIn
                href="https://www.linkedin.com/in/rosalie-mofoto/"
              />
            </div>
          </div>

          {/* --- IMAGE + BLOB DROITE --- */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
            <div className="relative w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]">
              
              {/* Blob uni animé */}
              <div className="absolute inset-0 bg-[#A8D2DF] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-blob-slow opacity-80 z-0"></div>
              
              {/* Image centrée */}
              <img
                src="/Gemini.png"
                alt="Rosalie"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[80%] h-[80%] object-cover rounded-full border-4 border-white shadow-2xl transition-transform duration-500 hover:scale-105"
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
    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white 
      hover:opacity-80 hover:scale-110 transition-all duration-300 shadow-md text-lg md:text-xl"
  >
    {icon}
  </a>
);

export default Hero;