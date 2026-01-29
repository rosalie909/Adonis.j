import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Application pédagogique Comptabilité",
      image: "/image.png", 
      description:
        "Développement d’une application pédagogique destinée aux comptables débutants. L’outil permet de consulter facilement la liste complète des comptes et de comprendre la structure des quatre états financiers principaux : bilan, compte de résultat, tableau de flux de trésorerie et état des variations des capitaux propres. Cette application facilite l’apprentissage et la pratique de la comptabilité conformément au SYSCOHADA révisé."
    },
    {
      id: 2,
      title: "Application Gestion d’argent",
      image: "/gestion.png", 
      description:
        "Développement d’une application pratique pour aider les utilisateurs à mieux gérer leur argent. Elle permet de suivre ses dépenses, planifier un budget et obtenir des conseils personnalisés pour optimiser ses finances personnelles. Elle s’adresse à toute personne souhaitant apprendre à gérer son argent de manière efficace et responsable."
    },
    {
      id: 3,
      title: "Portfolio",
      image: "/header.jpg", 
      description:
        "Je crée des interfaces modernes et bien structurées avec React, Vite, Tailwind et DaisyUI. J’accorde une grande importance au design et je reproduis fidèlement mes maquettes pour offrir une expérience utilisateur fluide, propre et responsive."
    },
    {
      id: 4,
      title: "Clone Twitter / X",
      image: "/Welcome page.png", 
      description:
        "J’ai développé une application web dynamique inspirée de Twitter/X. Le projet reproduit plusieurs fonctionnalités essentielles d’un réseau social moderne, en combinant HTML, CSS/Tailwind, JavaScript, AdonisJS 6 et PostgreSQL."
    },
  ];

  return (
    <section id="projet" className="py-20 md:py-28 bg-gray-50 font-poppins">
      <div className="container mx-auto px-6 md:px-10">
        
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            <span className="text-[#E03BF2]">Mes Projets</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Voici une sélection de mes réalisations professionnelles et personnelles.
          </p>
        </div>

        {/* Cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg border border-[#DFA4C7]/20 hover:border-[#E03BF2] transition-all duration-300 overflow-hidden group flex flex-col"
            >
              {/* Image */}
              <div className="aspect-video bg-gray-200 overflow-hidden relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 -z-10">
                  Image du projet
                </div>
              </div>

              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base line-clamp-4 grow">
                  {project.description}
                </p>

                {/* Bouton / lien */}
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-block font-semibold text-[#E03BF2] hover:text-[#DFA4C7] transition border-b border-transparent hover:border-[#E03BF2]"
                  >
                    Voir le projet →
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
