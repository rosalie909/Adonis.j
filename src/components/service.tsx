import React from 'react';
import { FaPalette, FaCode, FaPencilRuler, FaArrowRight } from 'react-icons/fa';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      desc: "Des designs intuitifs centrés sur l'expérience utilisateur.",
      icon: <FaPalette />,
    },
    {
      id: 2,
      title: "Développement Web",
      desc: "Développement de sites web rapides, fluides et entièrement sur-mesure.",
      icon: <FaCode />,
    },
    {
      id: 3,
      title: "Intégration Web",
      desc: "Conversion fidèle de vos maquettes en code propre et optimisé.",
      icon: <FaPencilRuler />,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-[#F5F5F5] font-sans">
      <div className="container mx-auto px-6 md:px-10">

        {/* TITRE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E03BF2] to-violet-600">Services</span>
          </h2>
          <div className="w-20 h-1 bg-[#E03BF2] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-base md:text-lg">
            
          </p>
        </div>

        {/* CARTES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div 
              key={service.id}
              className=" p-10 rounded-3xl border border-gray-100 
                          hover:-translate-y-2 
                         transition-all duration-300 group text-center"
            >

              <div className="
                w-24 h-24 mx-auto rounded-full  
                flex items-center justify-center text-4xl text-[#E03BF2]
                
                border-2 border-[#E03BF2]       /* Cercle Intérieur */
                ring-1 ring-[#E03BF2]           /* Cercle Extérieur (plus fin comme l'image) */
                ring-offset-[6px] ring-offset-white /* L'espace vide entre les deux */

                transition-all duration-500 ease-in-out
                
                /* Effets au survol : on change les deux couleurs */
                group-hover:border-[#A8D2DF]
                group-hover:ring-[#A8D2DF]
                group-hover:scale-110           /* Petit zoom fluide */
              ">
                {service.icon}
              </div>

              {/* TITRE */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-6">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 mt-4 mb-8 leading-relaxed">
                {service.desc}
              </p>

              {/* LIEN */}
              <a 
                href="#contact"
                className="text-violet-600 font-bold hover:text-[#E03BF2] flex items-center gap-2 justify-center transition-colors"
              >
                En savoir plus <FaArrowRight size={14} />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
