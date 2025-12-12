import Navbar from './components/navbar'; // Attention aux Majuscules si tes fichiers en ont !
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Services from './components/service'; // Vérifie si c'est 'service' ou 'Services'
import Contact from './components/contact';
import Footer from './components/footer';

// 👇 C'EST ICI LA CORRECTION 👇
import Projet from './components/projet'; 
// (Au lieu de : import React from ...)

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projet /> 
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;