
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Animation for the typing effect
  useEffect(() => {
    if (!textRef.current) return;
    
    const text = "Smart Door Lock System";
    const typingSpeed = 100;
    let charIndex = 0;
    
    const typingAnimation = setInterval(() => {
      if (textRef.current && charIndex < text.length) {
        textRef.current.textContent = text.slice(0, charIndex + 1) + "█";
        charIndex++;
      } else {
        if (textRef.current) {
          textRef.current.textContent = text;
        }
        clearInterval(typingAnimation);
        
        // Start cursor blinking after typing
        let blinkVisible = true;
        setInterval(() => {
          if (!textRef.current) return;
          blinkVisible = !blinkVisible;
          textRef.current.textContent = text + (blinkVisible ? "█" : "");
        }, 500);
      }
    }, typingSpeed);
    
    return () => {
      clearInterval(typingAnimation);
    };
  }, []);

  // Circuit background animation
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Circuit node class
    class Node {
      x: number;
      y: number;
      radius: number;
      color: string;
      connections: Node[];
      pulseIntensity: number;
      pulseRate: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5 ? '#00A6ED' : '#39FF14';
        this.connections = [];
        this.pulseIntensity = 0;
        this.pulseRate = Math.random() * 0.02 + 0.005;
      }

      pulse() {
        this.pulseIntensity += this.pulseRate;
        if (this.pulseIntensity > 1 || this.pulseIntensity < 0) {
          this.pulseRate = -this.pulseRate;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * (1 + this.pulseIntensity * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.4 + this.pulseIntensity * 0.6;
        ctx.fill();
        ctx.globalAlpha = 1;
        
        // Draw connections
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 0.5;
        this.connections.forEach(node => {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(node.x, node.y);
          ctx.globalAlpha = 0.1 + this.pulseIntensity * 0.2;
          ctx.stroke();
        });
        ctx.globalAlpha = 1;
      }
    }

    // Create nodes
    const nodes: Node[] = [];
    const nodeCount = Math.floor(window.innerWidth * window.innerHeight / 10000);
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }
    
    // Create connections
    nodes.forEach(node => {
      const connectionCount = Math.floor(Math.random() * 3) + 1;
      const possibleConnections = [...nodes].sort(() => Math.random() - 0.5);
      
      for (let i = 0; i < possibleConnections.length && node.connections.length < connectionCount; i++) {
        const potentialConnection = possibleConnections[i];
        if (potentialConnection !== node && !node.connections.includes(potentialConnection)) {
          node.connections.push(potentialConnection);
        }
      }
    });
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      nodes.forEach(node => {
        node.pulse();
        node.draw(ctx);
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="home">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      <div className="circuit-bg animate-circuit-flow z-0"></div>
      
      <div className="container mx-auto z-10 mt-20 px-4">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4 inline-block">
            <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyber-blue"></span>
            <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyber-blue"></span>
            <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-cyber-blue"></span>
            <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyber-blue"></span>
            <h2 className="text-sm font-orbitron tracking-[0.3em] text-cyber-green px-6 py-1">IOT SECURITY</h2>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6">
            <span className="block text-white" ref={textRef}>Smart Door Lock System</span>
          </h1>
          
          <p className="max-w-2xl mb-8 text-white/70 text-lg">
            A next-generation IoT security solution integrating NodeMCU, Arduino, and secure wireless protocols. 
            Control access from anywhere with military-grade encryption and realtime monitoring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="cyber-button">
              Explore System
            </button>
            <button className="cyber-button bg-cyber-green/10 border-cyber-green text-cyber-green hover:bg-cyber-green/20 shadow-[0_0_5px_#39FF14] hover:shadow-[0_0_15px_#39FF14]">
              Live Demo
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-xs text-cyber-blue/70 font-orbitron tracking-widest mb-2">SCROLL</span>
          <ArrowDown size={20} className="text-cyber-blue" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
