import { useEffect, useRef, useState } from 'react';
import './ParallaxSection.css';
import Parallax from '../../assets/parallex.jpg';

const ParallaxSection = () => {
  const [offset, setOffset] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrollPosition = window.scrollY;
      const elementPosition = parallaxRef.current.offsetTop;
      const distance = scrollPosition - elementPosition;
      
      // Only update when the section is in view
      if (distance > -window.innerHeight && distance < window.innerHeight) {
        setOffset(distance * 0.3); // Adjust the multiplier for parallax intensity
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      
      // Calculate mouse position relative to the center of the container
      const rect = parallaxRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Normalize values between -1 and 1
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      
      setMousePosition({ x, y });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="parallax-wrapper" ref={parallaxRef}>
      <div className="parallax-paper">
        <div className="parallax-container">
          {/* Photo corners */}
          <div className="photo-corner top-left"></div>
          <div className="photo-corner top-right"></div>
          <div className="photo-corner bottom-left"></div>
          <div className="photo-corner bottom-right"></div>
          
          {/* Background image with parallax effect */}
          <div 
            className="parallax-background" 
            style={{ 
              backgroundImage: `url(${Parallax})`,
              transform: `translateY(${offset * 0.5}px) scale(1.1) 
                          translateX(${mousePosition.x * -10}px) 
                          translateY(${mousePosition.y * -10}px)`
            }}
          ></div>
          
          {/* Overlay gradient */}
          <div className="parallax-overlay"></div>
          
          {/* Decorative elements */}
          <div className="parallax-decorations">
            <div className="parallax-rose left" style={{ transform: `translateY(${offset * 0.2}px) rotate(${mousePosition.x * 5}deg)` }}></div>
            <div className="parallax-rose right" style={{ transform: `translateY(${offset * -0.2}px) rotate(${mousePosition.x * -5}deg)` }}></div>
            <div className="parallax-frame" style={{ transform: `scale(${1 + Math.abs(offset) * 0.0005})` }}></div>
          </div>
          
          {/* Content */}
          <div className="parallax-content">
            <div 
              className="parallax-title" 
              // style={{ 
              //   transform: `translateY(${-offset * 0.2}px) 
              //               translateX(${mousePosition.x * 15}px) 
              //               translateY(${mousePosition.y * 15}px)` 
              // }}
            >
              <div className="title-inner">
                <h2>Un Cuento de Hadas</h2>
                <div className="title-divider"></div>
                <p>Sé nuestro invitado en esta celebración mágica</p>
                <div className="parallax-quote">
                  <p>"Tale as old as time, song as old as rhyme..."</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating particles */}
          <div className="parallax-particles">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="particle" 
                style={{ 
                  left: `${Math.random() * 100}%`, 
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  transform: `translateY(${offset * (0.1 + Math.random() * 0.3)}px)`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Optional: Add a handwritten caption below the photo */}
        <div className="photo-caption">
          "Nuestra historia de amor..."
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
