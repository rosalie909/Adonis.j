import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
  
    <footer className="bg-[#1F1F1F] text-white pt-16 pb-8 border-t-4 border-[#E03BF2]">
      <div className="container mx-auto px-5 md:px-10">
        
        {/* GRID FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
          
          {/* Colonne 1 : About */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            {/* UTILISATION DU VIOLET DU HERO POUR LE NOM */}
            <h3 className="text-2xl font-bold tracking-widest text-[#E03BF2]">ROSALIE MOFOTO</h3>
            <p className="text-gray-400 max-w-sm text-sm md:text-base">
              Développeuse Front-End passionnée par la création d'expériences web modernes, élégantes et performantes.
            </p>
            
            {/* RÉSEAUX SOCIAUX (Vraies couleurs au survol) */}
            <div className="flex space-x-4 pt-2">
              <SocialLink 
                href="https://facebook.com" 
                icon={<FaFacebookF />} 
                hoverClass="hover:bg-[#1877F2] hover:text-white" 
              />
              <SocialLink 
                href="https://github.com/rosalie909" 
                icon={<FaGithub />} 
                hoverClass="hover:bg-white hover:text-black" 
              />
              <SocialLink 
                href="https://linkedin.com" 
                icon={<FaLinkedinIn />} 
                hoverClass="hover:bg-[#0A66C2] hover:text-white" 
              />
            </div>
          </div>

          {/* Colonne 2 : Liens */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Liens Rapides</h4>
            <ul className="space-y-2 text-gray-400">
              {/* Survol avec le BLEU du Blob (#A8D2DF) ou le Violet (#E03BF2) */}
              <li><a href="#about" className="hover:text-[#E03BF2] transition duration-300">About</a></li>
              <li><a href="#services" className="hover:text-[#E03BF2] transition duration-300">Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#E03BF2] transition duration-300">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-[#E03BF2] transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-4 text-gray-400 flex flex-col items-center md:items-start">
              
              {/* Téléphone */}
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-full bg-[#2A2A2A] flex items-center justify-center text-[#F2A93B] group-hover:bg-[#F2A93B] group-hover:text-white transition-all duration-300">
                   <FaPhoneAlt size={14} />
                </div>
                <a href="tel:+243839892855" className="hover:text-white transition">+243 83 989 2855</a>
              </li>
              
              {/* WhatsApp */}
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-full bg-[#2A2A2A] flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300">
                   <FaWhatsapp size={18} />
                </div>
                <a href="https://wa.me/243846887239" className="hover:text-white transition">+243 84 688 7239</a>
              </li>
              
              {/* Email */}
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-full bg-[#2A2A2A] flex items-center justify-center text-[#EA4335] group-hover:bg-[#EA4335] group-hover:text-white transition-all duration-300">
                   <FaEnvelope size={14} />
                </div>
                <a href="mailto:mofotorosalie75@gmail.com" className="hover:text-white transition break-all">mofotorosalie75@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-[#333333] pt-8 text-center text-gray-500 text-xs md:text-sm">
          <p>© {new Date().getFullYear()} Rosalie MOFOTO — Tous droits réservés.</p>
        </div>

      </div>
    </footer>
  );
};

// Composant Helper SocialLink
interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  hoverClass: string;
}

const SocialLink = ({ href, icon, hoverClass }: SocialLinkProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center text-gray-400 transition-all duration-300 ${hoverClass}`}
  >
    {icon}
  </a>
);

export default Footer;