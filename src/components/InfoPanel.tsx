
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Smartphone } from 'lucide-react';

const InfoPanel = () => {
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

  const features = [
    {
      title: "Mobile Control",
      description: "Control your door lock from anywhere using the secure mobile application with biometric authentication.",
      icon: <Smartphone size={24} className="text-cyber-green" />,
      delay: "100ms"
    },
    {
      title: "Encrypted Communication",
      description: "All data transmissions are secured with AES-256 encryption, ensuring maximum security of access controls.",
      icon: <LockIcon size={24} className="text-cyber-blue" />,
      delay: "300ms"
    },
    {
      title: "Activity Logging",
      description: "Comprehensive logs of all access attempts, complete with timestamps and user identification.",
      icon: <ClockIcon size={24} className="text-cyber-silver" />,
      delay: "500ms"
    },
    {
      title: "Multiple Access Methods",
      description: "Support for PIN codes, RFID cards, fingerprint, and mobile app authentication.",
      icon: <KeyIcon size={24} className="text-cyber-blue" />,
      delay: "700ms"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="scroll-section bg-cyber-black" 
      id="features"
    >
      <div className="circuit-bg"></div>
      
      <div className="container mx-auto relative z-10 px-4">
        <h2 className="text-center text-3xl md:text-4xl font-orbitron font-bold mb-16 text-cyber-blue animate-glow">
          System Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cyber-panel p-6 rounded-lg border border-cyber-blue/30 h-[500px] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-12 bg-cyber-darkblue/50 border-b border-cyber-blue/30 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-cyber-blue/50"></div>
                <div className="w-3 h-3 rounded-full bg-cyber-green/50"></div>
                <div className="w-3 h-3 rounded-full bg-cyber-silver/30"></div>
              </div>
              <div className="mx-auto text-xs font-orbitron text-cyber-blue/80">SYSTEM MONITOR</div>
            </div>
            
            <div className="pt-16 pb-4 px-2 h-full overflow-y-auto scrollbar-hide">
              {Array.from({ length: 15 }).map((_, idx) => (
                <div 
                  key={idx} 
                  className={cn(
                    "text-[10px] font-mono mb-2 opacity-0",
                    visible && "animate-fade-in opacity-100"
                  )}
                  style={{ 
                    animationDelay: `${idx * 200}ms`,
                    color: idx % 3 === 0 ? '#39FF14' : (idx % 3 === 1 ? '#00A6ED' : '#C0C0C0') 
                  }}
                >
                  {`[${String(idx).padStart(2, '0')}] > ${getRandomLogMessage()}`}
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-8 bg-cyber-darkblue/50 border-t border-cyber-blue/30 flex items-center px-4">
              <div className="text-[10px] font-mono text-cyber-blue animate-pulse">&gt; _</div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-6">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className={cn(
                  "glass-card transform transition-all duration-700 ease-out",
                  visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                )}
                style={{ transitionDelay: feature.delay }}
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-orbitron mb-2 text-white">{feature.title}</h3>
                    <p className="text-sm text-white/70">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to generate random log messages
const getRandomLogMessage = () => {
  const messages = [
    "System initializing... OK",
    "WiFi connection established",
    "Authenticating user credentials...",
    "Encryption handshake complete",
    "Servo motor position calibrated",
    "Motion sensor activated",
    "Remote access granted to user #4872",
    "Battery status: 98%",
    "Security protocol updated",
    "Firmware version 2.1.4 running",
    "Temperature sensor reading: 74°F",
    "Memory usage: 46%",
    "Biometric data processed",
    "Door successfully unlocked",
    "Access attempt rejected: Invalid PIN"
  ];
  
  return messages[Math.floor(Math.random() * messages.length)];
};

// Custom icons
const LockIcon: React.FC<{ size: number; className?: string }> = ({ size, className }) => {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
};

const KeyIcon: React.FC<{ size: number; className?: string }> = ({ size, className }) => {
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
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15.5 7.5 3 3L22 7l-3-3" />
    </svg>
  );
};

const ClockIcon: React.FC<{ size: number; className?: string }> = ({ size, className }) => {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
};

export default InfoPanel;
