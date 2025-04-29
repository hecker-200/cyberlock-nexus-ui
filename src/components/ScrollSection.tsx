
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type ScrollSectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  titleColor?: string;
};

const ScrollSection: React.FC<ScrollSectionProps> = ({
  id,
  title,
  children,
  className,
  titleColor = "text-cyber-blue"
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id}
      ref={sectionRef}
      className={cn(
        "scroll-section",
        className
      )}
    >
      <div className="circuit-bg"></div>
      
      <div className="container mx-auto relative z-10 px-4">
        <div 
          className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          )}
        >
          <h2 className={cn(
            "text-center text-3xl md:text-4xl font-orbitron font-bold mb-16 animate-glow",
            titleColor
          )}>
            {title}
          </h2>
          
          <div className={cn(
            "transition-all duration-1000 delay-300",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
