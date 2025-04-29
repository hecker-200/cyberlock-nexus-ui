
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-cyber-black relative overflow-hidden py-12">
      <div className="circuit-bg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-md bg-cyber-blue/10 border border-cyber-blue/30 flex items-center justify-center mr-3">
                <div className="w-4 h-4 relative">
                  <span className="absolute inset-0 border-2 border-cyber-blue rounded-sm animate-pulse"></span>
                  <span className="absolute inset-[2px] bg-cyber-green/20"></span>
                </div>
              </div>
              <h2 className="text-xl font-orbitron text-white">
                <span className="text-cyber-blue">CYBER</span>
                <span>LOCK</span>
              </h2>
            </div>
            
            <p className="mt-4 text-sm text-white/50 max-w-md">
              Next-generation smart lock technology with advanced IoT connectivity. 
              Secure your home with state-of-the-art encryption and seamless access control.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8">
            <div>
              <h3 className="text-sm font-orbitron text-cyber-blue mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs text-white/50 hover:text-cyber-blue transition-colors">Features</a></li>
                <li><a href="#" className="text-xs text-white/50 hover:text-cyber-blue transition-colors">Security</a></li>
                <li><a href="#" className="text-xs text-white/50 hover:text-cyber-blue transition-colors">Specifications</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-orbitron text-cyber-green mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs text-white/50 hover:text-cyber-green transition-colors">Documentation</a></li>
                <li><a href="#" className="text-xs text-white/50 hover:text-cyber-green transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-xs text-white/50 hover:text-cyber-green transition-colors">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-orbitron text-cyber-silver mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs text-white/50 hover:text-cyber-silver transition-colors">About Us</a></li>
                <li><a href="#" className="text-xs text-white/50 hover:text-cyber-silver transition-colors">Contact</a></li>
                <li><a href="#" className="text-xs text-white/50 hover:text-cyber-silver transition-colors">Press Kit</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-white/30">&copy; 2025 CyberLock Technologies. All rights reserved.</p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 cyber-button text-xs px-3 py-1.5"
          >
            <ArrowUp size={12} className="mr-2 inline" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
