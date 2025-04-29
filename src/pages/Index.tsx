
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ThreeScene from '@/components/ThreeScene';
import InfoPanel from '@/components/InfoPanel';
import ScrollSection from '@/components/ScrollSection';
import ConnectionLines from '@/components/ConnectionLines';
import DeviceModel from '@/components/DeviceModel';
import Footer from '@/components/Footer';

const Index = () => {
  // Simulate loading state
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timeout = setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 1500);
    
    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black overflow-x-hidden">
      {/* Loading overlay */}
      <div 
        id="loading-overlay"
        className="fixed inset-0 bg-cyber-black z-50 flex items-center justify-center transition-opacity duration-700"
        style={{ 
          animation: 'fadeOut 0.7s ease-in-out forwards',
          animationDelay: '1s'
        }}
      >
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <div className="absolute inset-0 border-4 border-cyber-blue/30 rounded-full"></div>
            <div 
              className="absolute inset-0 border-4 border-transparent border-t-cyber-blue rounded-full" 
              style={{ animation: 'spin 1s linear infinite' }}
            ></div>
          </div>
          <h2 className="font-orbitron text-cyber-blue animate-pulse">INITIALIZING SYSTEM</h2>
        </div>
      </div>

      {/* Global connection lines */}
      <ConnectionLines />
      
      {/* Navigation */}
      <NavBar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Hardware Components Section */}
      <ThreeScene />
      
      {/* Features Section */}
      <InfoPanel />
      
      {/* Security Section */}
      <ScrollSection 
        id="security" 
        title="Advanced Security"
        className="bg-gradient-to-b from-cyber-darkblue to-cyber-black"
        titleColor="text-cyber-green"
      >
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className="glass-card">
              <h3 className="text-xl font-orbitron mb-4 text-cyber-green">Military-Grade Protection</h3>
              
              <ul className="space-y-4">
                {[
                  "AES-256 bit encryption for all communications",
                  "Tamper detection with instant alerts",
                  "Anti-picking mechanical design",
                  "Brute force prevention system",
                  "Emergency backup power system"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-5 h-5 rounded-full border border-cyber-green/50 flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-cyber-green"></div>
                    </div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-cyber-green/20">
                <div className="text-xs text-cyber-green/70 mb-2 font-orbitron">PROTECTION RATING</div>
                <div className="w-full bg-cyber-black/50 h-3 rounded-full overflow-hidden">
                  <div className="h-full bg-cyber-green w-[92%] rounded-full relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyber-green/0 via-cyber-green/70 to-cyber-green/0 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-white/50">Standard</span>
                  <span className="text-[10px] text-white/50">Professional</span>
                  <span className="text-[10px] text-white/50">Military</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <DeviceModel />
          </div>
        </div>
      </ScrollSection>
      
      {/* About Section */}
      <ScrollSection 
        id="about" 
        title="About CyberLock"
        className="bg-cyber-black"
      >
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <div className="glass-card h-full">
              <h3 className="text-xl font-orbitron mb-4 text-white">Our Vision</h3>
              <p className="text-white/70 mb-6">
                At CyberLock, we're redefining security for the modern age. Our IoT smart lock system combines cutting-edge hardware with sophisticated software to create a seamless, secure access experience.
              </p>
              <p className="text-white/70">
                Founded by a team of security experts and IoT specialists, we've developed a solution that prioritizes both convenience and impenetrable security, giving you peace of mind wherever you are.
              </p>
              
              <div className="mt-8">
                <button className="cyber-button">Learn More</button>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="glass-card">
              <div className="w-12 h-12 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 flex items-center justify-center mb-4">
                <span className="text-xl text-cyber-blue">01</span>
              </div>
              <h4 className="text-lg font-orbitron mb-2 text-white">Quality Hardware</h4>
              <p className="text-sm text-white/70">Premium components ensuring reliability and durability in all conditions.</p>
            </div>
            
            <div className="glass-card">
              <div className="w-12 h-12 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 flex items-center justify-center mb-4">
                <span className="text-xl text-cyber-blue">02</span>
              </div>
              <h4 className="text-lg font-orbitron mb-2 text-white">Smart Software</h4>
              <p className="text-sm text-white/70">AI-powered security algorithms adapting to your usage patterns.</p>
            </div>
            
            <div className="glass-card">
              <div className="w-12 h-12 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 flex items-center justify-center mb-4">
                <span className="text-xl text-cyber-blue">03</span>
              </div>
              <h4 className="text-lg font-orbitron mb-2 text-white">Open Standards</h4>
              <p className="text-sm text-white/70">Compatible with major smart home ecosystems and protocols.</p>
            </div>
            
            <div className="glass-card">
              <div className="w-12 h-12 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 flex items-center justify-center mb-4">
                <span className="text-xl text-cyber-blue">04</span>
              </div>
              <h4 className="text-lg font-orbitron mb-2 text-white">24/7 Support</h4>
              <p className="text-sm text-white/70">Dedicated technical assistance available whenever you need it.</p>
            </div>
          </div>
        </div>
      </ScrollSection>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="circuit-bg"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-white">
              Ready to <span className="text-cyber-blue animate-glow">Upgrade</span> Your Security?
            </h2>
            
            <p className="text-lg text-white/70 mb-8">
              Join the next generation of home security with our advanced smart lock system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button py-3 px-8">
                Get Started
              </button>
              <button className="cyber-button bg-cyber-blue/10 text-white border-cyber-blue hover:bg-cyber-blue/30 py-3 px-8">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />

      <style jsx global>{`
        @keyframes fadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; visibility: hidden; }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Index;
