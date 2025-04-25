import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-teal-700 text-white overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-teal-700 opacity-90"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 opacity-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 opacity-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between py-20">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            O caminho do Linux <span className="text-orange-500">começa aqui.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-teal-100">
            Aprenda do zero. Domine o terminal. Seja um Penguru.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#learn" 
              className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg transition-colors text-lg font-medium"
            >
              Começar Agora
            </a>
            <a 
              href="#commands" 
              className="border-2 border-white hover:bg-white hover:text-teal-800 text-white py-3 px-6 rounded-lg transition-colors text-lg font-medium"
            >
              Ver Comandos
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
            <img 
              src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Linux Penguin Mascot" 
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#learn" className="text-white opacity-80 hover:opacity-100">
          <ArrowDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;