import React from 'react';
import { SiDaisyui, SiAdonisjs, SiNodedotjs } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaDatabase, FaCalculator } from 'react-icons/fa';

const Skills: React.FC = () => {
  const skills: { name: string; icon: React.ReactNode; color: string; border: string; details?: string[] }[] = [
    { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500', border: 'hover:border-orange-500' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500', border: 'hover:border-blue-500' },
    { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400', border: 'hover:border-yellow-400' },
    { name: 'React', icon: <FaReact />, color: 'text-cyan-400', border: 'hover:border-cyan-400' },
    { name: 'Git', icon: <FaGitAlt />, color: 'text-red-500', border: 'hover:border-red-500' },
    { name: 'GitHub', icon: <FaGithub />, color: 'text-gray-800', border: 'hover:border-gray-800' },
    { name: 'TypeScript', icon: <FaJs />, color: 'text-blue-600', border: 'hover:border-blue-600' },
    { name: 'Tailwind CSS', icon: <FaCss3Alt />, color: 'text-teal-400', border: 'hover:border-teal-400' },
    { name: 'DaisyUI', icon: <SiDaisyui />, color: 'text-yellow-500', border: 'hover:border-yellow-500' },
    { name: 'AdonisJS', icon: <SiAdonisjs />, color: 'text-violet-700', border: 'hover:border-violet-700' },
    { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-600', border: 'hover:border-green-600' },
    { name: 'SQL', icon: <FaDatabase />, color: 'text-gray-600', border: 'hover:border-gray-600' },

    // Bloc Comptabilité & Finance
    { 
      name: 'Comptabilité & Finance', 
      icon: <FaCalculator />, 
      color: 'text-green-500', 
      border: 'hover:border-green-500',
     
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-6 md:px-10">
        <div className="space-y-12 max-w-5xl mx-auto text-center">
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            <span className='text-[#E03BF2]'>skills🎓</span>
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center group cursor-default"
              >
                {/* CERCLE */}
                <div className={`
                  w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center 
                  text-5xl ${skill.color} 
                  border-4  ${skill.border}
                  transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-xl
                `}>
                  {skill.icon}
                </div>
                
                {/* TEXTE */}
                <span className="mt-4 font-bold text-gray-700 text-lg group-hover:text-gray-900 transition-colors text-center">
                  {skill.name}
                </span>

                {/* Détails pour Comptabilité & Finance */}
                {skill.details && (
                  <ul className="mt-2 text-gray-600 text-sm list-disc list-inside space-y-1 text-left">
                    {skill.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {/* Ligne décorative */}
                <div className="w-8 h-1 bg-gray-200 mt-2 rounded-full group-hover:bg-gray-400 transition-colors"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
