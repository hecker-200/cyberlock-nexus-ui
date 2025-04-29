
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Wifi, Smartphone } from 'lucide-react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled ? "bg-cyber-black/80 backdrop-blur-md py-2 shadow-[0_0_15px_rgba(0,0,0,0.5)]" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-md bg-cyber-blue/10 border border-cyber-blue/30 flex items-center justify-center mr-3">
            <div className="w-6 h-6 relative">
              <span className="absolute inset-0 border-2 border-cyber-blue rounded-sm animate-pulse"></span>
              <span className="absolute inset-[3px] bg-cyber-green/20"></span>
            </div>
          </div>
          <h1 className="text-2xl font-orbitron font-bold text-white">
            <span className="text-cyber-blue animate-glow">CYBER</span>
            <span className="text-white">LOCK</span>
          </h1>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Home', 'Features', 'Tech', 'Security', 'About'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-white/70 hover:text-cyber-blue transition-colors duration-300 text-sm uppercase font-orbitron tracking-wider"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-1">
            <Wifi size={16} className="text-cyber-blue" />
            <span className="text-xs text-cyber-blue">Connected</span>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Smartphone size={16} className="text-cyber-green" />
            <span className="text-xs text-cyber-green">Mobile Ready</span>
          </div>
          <button className="cyber-button text-xs">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
