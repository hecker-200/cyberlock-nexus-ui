
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="scroll-section bg-gradient-to-b from-cyber-black to-cyber-darkblue" 
      id="tech"
    >
      <div className="circuit-bg"></div>
      
      <div className="container mx-auto relative z-10 px-4">
        <h2 className="text-center text-3xl md:text-4xl font-orbitron font-bold mb-16 text-cyber-blue animate-glow">
          Hardware Components
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* NodeMCU Component */}
          <div 
            className={cn(
              "glass-card w-full md:w-80 transform transition-all duration-1000 ease-out",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            )}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative h-52 mb-4 overflow-hidden rounded-md cyber-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-28 bg-cyber-silver/20 rounded-sm relative p-1">
                  <div className="absolute top-2 left-2 w-3 h-3 bg-cyber-blue rounded-full animate-pulse-glow"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-cyber-green rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
                  
                  {/* Simulated circuit lines */}
                  <div className="absolute h-[1px] bg-cyber-blue/50 w-1/3 top-3 left-4"></div>
                  <div className="absolute h-[1px] bg-cyber-blue/50 w-1/3 top-3 right-4"></div>
                  <div className="absolute w-[1px] bg-cyber-blue/50 h-1/2 top-3 left-4"></div>
                  <div className="absolute w-[1px] bg-cyber-blue/50 h-1/3 top-3 right-4"></div>
                  
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                    <div className="w-10 h-3 bg-cyber-black/50 border border-cyber-silver/40 rounded-sm"></div>
                  </div>
                  
                  <div className="absolute bottom-1 left-1 text-[8px] text-cyber-blue/80 font-mono">NodeMCU</div>
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-full bg-gradient-radial from-cyber-blue/5 to-transparent"></div>
              </div>
            </div>
            
            <h3 className="text-xl font-orbitron mb-2 text-white">NodeMCU ESP8266</h3>
            <p className="text-sm text-white/70 mb-4">
              Wi-Fi enabled microcontroller providing secure connectivity to your home network and cloud services.
            </p>
            
            <div className="flex items-center space-x-2 text-xs text-cyber-green">
              <Wifi size={16} className="text-cyber-blue" />
              <span>802.11 b/g/n Wi-Fi</span>
            </div>
          </div>
          
          {/* Arduino Component */}
          <div 
            className={cn(
              "glass-card w-full md:w-80 transform transition-all duration-1000 ease-out",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            )}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="relative h-52 mb-4 overflow-hidden rounded-md cyber-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-32 bg-cyber-blue/10 rounded-md relative p-1 border border-cyber-blue/30">
                  <div className="absolute top-3 left-3 w-4 h-4 bg-cyber-black rounded-full border border-cyber-silver/40"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 bg-cyber-black rounded-full border border-cyber-silver/40"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 bg-cyber-black rounded-full border border-cyber-silver/40"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 bg-cyber-black rounded-full border border-cyber-silver/40"></div>
                  
                  {/* Arduino components */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-14 bg-cyber-silver/20 border border-cyber-silver/40 rounded-sm">
                    <div className="absolute top-1 left-1 w-2 h-2 bg-cyber-green rounded-full animate-pulse-glow"></div>
                    <div className="absolute top-1 left-4 w-2 h-2 bg-cyber-blue rounded-full animate-pulse-glow" style={{ animationDelay: '0.8s' }}></div>
                    <div className="grid grid-cols-6 gap-[2px] absolute bottom-1 left-1 right-1">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="bg-cyber-silver/50 w-[3px] h-2"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-1 right-1 text-[8px] text-cyber-green/80 font-mono">Arduino</div>
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-full bg-gradient-radial from-cyber-green/5 to-transparent"></div>
              </div>
            </div>
            
            <h3 className="text-xl font-orbitron mb-2 text-white">Arduino Uno</h3>
            <p className="text-sm text-white/70 mb-4">
              The control center for lock operations, servo management, and sensor processing with low latency response.
            </p>
            
            <div className="flex items-center space-x-2 text-xs text-cyber-green">
              <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse-glow"></div>
              <span>16Mhz Processing</span>
            </div>
          </div>
          
          {/* Lock Mechanism */}
          <div 
            className={cn(
              "glass-card w-full md:w-80 transform transition-all duration-1000 ease-out",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            )}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="relative h-52 mb-4 overflow-hidden rounded-md cyber-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-cyber-black/50 border border-cyber-silver/30 relative flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border-4 border-cyber-blue/30 flex items-center justify-center relative">
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-cyber-blue/20 animate-spin" style={{ animationDuration: '10s' }}></div>
                    
                    <div className="absolute w-full h-full rounded-full">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-cyber-blue/10 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-cyber-blue animate-pulse-glow rounded-sm"></div>
                      </div>
                    </div>
                    
                    <div className="absolute w-full h-full">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyber-green rounded-full"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-cyber-green rounded-full"></div>
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-cyber-green rounded-full"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-cyber-green rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 right-0 w-8 h-8 flex items-center justify-center">
                    <div className="w-6 h-6 bg-cyber-silver/20 rounded-sm relative">
                      <div className="absolute inset-[2px] bg-cyber-green/20 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-full bg-gradient-radial from-cyber-silver/10 to-transparent"></div>
              </div>
            </div>
            
            <h3 className="text-xl font-orbitron mb-2 text-white">Servo Lock Mechanism</h3>
            <p className="text-sm text-white/70 mb-4">
              High-torque precision servo motor with reinforced deadbolt mechanism and anti-tamper sensors.
            </p>
            
            <div className="flex items-center space-x-2 text-xs text-cyber-blue">
              <div className="w-3 h-3 border border-cyber-blue rounded-full animate-pulse-glow"></div>
              <span>180° Rotation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Import at the top of the file
const Wifi: React.FC<{ size: number; className?: string }> = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12" y2="20" />
    </svg>
  );
};

export default ThreeScene;
