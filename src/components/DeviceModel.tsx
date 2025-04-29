
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type DeviceModelProps = {
  isVisible?: boolean;
};

const DeviceModel: React.FC<DeviceModelProps> = ({ isVisible = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(20);
  const [rotateY, setRotateY] = useState(30);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    
    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - prevX;
      const deltaY = e.clientY - prevY;
      
      setRotateY(prev => prev + deltaX * 0.5);
      setRotateX(prev => Math.max(-45, Math.min(45, prev - deltaY * 0.5)));
      
      prevX = e.clientX;
      prevY = e.clientY;
    };
    
    const handleMouseUp = () => {
      isDragging = false;
    };
    
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Auto rotation when not dragging
    const autoRotation = setInterval(() => {
      if (!isDragging) {
        setRotateY(prev => prev + 0.2);
      }
    }, 50);
    
    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      clearInterval(autoRotation);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className={cn(
        "w-full h-72 md:h-96 relative cursor-grab active:cursor-grabbing",
        "transition-opacity duration-1000",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div 
        className="absolute inset-0"
        style={{
          perspective: '1200px',
        }}
      >
        <div
          className="w-full h-full relative transform-style-preserve-3d"
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.1s ease-out',
          }}
        >
          {/* Digital Lock Container */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(20px)',
            }}
          >
            {/* Main Lock Body */}
            <div
              className="w-40 h-64 bg-cyber-black border-2 border-cyber-blue/50 rounded-xl"
              style={{
                boxShadow: '0 0 15px rgba(0, 166, 237, 0.4)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Display Screen */}
              <div
                className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-24 bg-cyber-darkblue/70 border border-cyber-blue/30 rounded-md flex items-center justify-center"
                style={{ transform: 'translateZ(2px)' }}
              >
                <div className="w-28 h-20 flex flex-col items-center justify-center">
                  <div className="text-cyber-blue font-mono text-xs">SYSTEM READY</div>
                  <div className="mt-2 w-8 h-8 rounded-full border-2 border-cyber-green relative flex items-center justify-center">
                    <div className="w-4 h-4 bg-cyber-green rounded-full animate-pulse-glow"></div>
                  </div>
                  <div className="mt-2 text-cyber-green font-mono text-[8px]">SECURE</div>
                </div>
              </div>
              
              {/* Keypad */}
              <div
                className="absolute top-36 left-1/2 transform -translate-x-1/2 w-32 grid grid-cols-3 gap-2"
                style={{ transform: 'translateZ(2px)' }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((key, idx) => (
                  <div
                    key={idx}
                    className="w-9 h-9 bg-cyber-darkblue/60 border border-cyber-blue/20 rounded-md flex items-center justify-center text-cyber-blue hover:bg-cyber-blue/20 transition-colors duration-200 cursor-pointer"
                  >
                    {key}
                  </div>
                ))}
              </div>
              
              {/* Lock Indicator */}
              <div 
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-2 border-cyber-blue flex items-center justify-center"
                style={{ transform: 'translateZ(2px)' }}
              >
                <div className="w-8 h-8 rounded-full bg-cyber-black/80 flex items-center justify-center">
                  <div className="w-4 h-4 bg-cyber-green rounded-sm animate-pulse-glow"></div>
                </div>
              </div>
              
              {/* Side Button */}
              <div
                className="absolute -right-1 top-1/3 w-3 h-8 bg-cyber-silver/60 rounded-r-md"
                style={{ transform: 'translateZ(0)' }}
              ></div>
            </div>
            
            {/* Shadow beneath */}
            <div
              className="absolute -bottom-8 left-0 w-40 h-4 bg-black/40 blur-md rounded-full"
              style={{ transform: 'rotateX(90deg) translateZ(-30px)' }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Glow effect in background */}
      <div className="absolute inset-0 bg-gradient-radial from-cyber-blue/5 to-transparent rounded-full pointer-events-none"></div>
    </div>
  );
};

export default DeviceModel;
