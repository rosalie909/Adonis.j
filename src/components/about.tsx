import React from 'react';
import { FaQuoteLeft, FaDownload } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-36 bg-[#F5F5F5] relative font-sans overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* TITRE */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mt-2 text-gray-900 font-poppins">
              À propos de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E03BF2] to-[#A8D2DF]">
                Moi
              </span>
            </h2>
            <div className="w-28 h-1 bg-[#E03BF2] mx-auto mt-8 rounded-full"></div>
          </div>

          {/* CARTE */}
          <div className="p-10 md:p-16 relative  rounded-3xl border border-gray-100 shadow-sm">

            {/* Icône citation */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#fafafa] border border-gray-100 p-6 rounded-full text-[#E03BF2] text-4xl shadow-md">
              <FaQuoteLeft />
            </div>

            {/* TEXTE */}
            <div className="text-3xl text-gray-800 font-poppins mt-8 text-center leading-relaxed">

              {/* Paragraphe 1 : Identité & Formation */}
              <p className="font-semibold text-2xl md:text-3xl lg:text-3xl mb-8">
                Bonjour 👋, je suis{' '}
                <span className="font-bold text-gray-900 text-3xl lg:text-4xl">
                  Rosalie Mofoto
                </span>.
                <br />
                Développeuse Web, formée au développement{' '}
                <span className="font-bold text-gray-900">Full Stack</span> à la{' '}
                <span className="font-bold text-[#E03BF2] text-2xl lg:text-3xl">
                  KADEA ACADEMY
                </span>.
              </p>

              {/* Paragraphe 2 : Focus Actuel (Front-End) */}
              <p className="font-semibold text-2xl lg:text-3xl max-w-3xl mx-auto mb-8 text-gray-600">
                Aujourd'hui, je me spécialise dans le <span className="text-[#E03BF2] font-bold">Front-End</span>. 
                Je conçois des interfaces modernes, intuitives et parfaitement responsives.
              </p>

              {/* Paragraphe 3 : Projet en cours */}
              <div className="font-medium text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 bg-gray-50 p-6 rounded-2xl">
                🚀 Actuellement, je travaille sur le projet{' '}
                <span className="font-bold text-gray-900 border-b-2 border-[#A8D2DF]">
                  
                </span>.
                <br className="mb-4 block"/>
                J'y applique mes compétences pour créer des expériences utilisateurs fluides, dynamiques et bien structurées.
              </div>

              {/* Note personnelle : Hobby */}
              <div className="font-medium pt-8 mt-10 border-t border-gray-100 text-lg md:text-xl lg:text-2xl text-gray-500 italic">
                <span className="inline-block px-4">
                  🎥 Durant mon temps libre, je partage de bons moments avec ma
                  communauté sur <span className="text-black font-bold not-italic">TikTok</span>, 
                  un espace où je crée, j’échange et je m’exprime librement.
                </span>
              </div>
            </div>
          </div>

          {/* BOUTON DOWNLOAD */}
          <div className="mt-14 text-center">
            <a
              href="/CV_Rosalie_Mofoto.pdf"
              download
              className="inline-flex items-center gap-4 bg-[#E03BF2] hover:bg-[#C32ADF] text-white font-bold rounded-full px-12 py-5 text-xl md:text-2xl transition-all transform hover:scale-105 duration-300 shadow-lg hover:shadow-xl"
            >
              <FaDownload />
              Télécharger mon CV
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;