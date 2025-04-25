import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-teal-800 shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Terminal className="text-orange-500 h-8 w-8" />
          <span className="text-white text-xl font-bold">Penguru</span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {['Home', 'Commands', 'Learn', 'About'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-white hover:text-orange-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <a 
          href="#learn" 
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors"
        >
          Start Learning
        </a>
      </div>
    </header>
  );
};

export default Header;