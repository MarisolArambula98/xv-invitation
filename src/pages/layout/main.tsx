import React, { useState, useEffect } from 'react';
import './main.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    //window.scrollTo(0, 0);
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
    <div className="fancy-layout">
      <header className={`transparent-menu ${scrolled ? 'scrolled' : ''}`}>
        <div className="menu-container">
          <div className="logo">XV</div>
          <nav className="menu-items">
            <a href="#home">Home</a>
            <a href="#invitation">Invitation</a>
            <a href="#gallery">Gallery</a>
            <a href="#location">Location</a>
            <a href="#rsvp">RSVP</a>
          </nav>
          <div className="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      
      <main className="content-area">
        {children}
      </main>
      
      {/* <footer className="fancy-footer">
        <p>© {new Date().getFullYear()} - XV Invitation</p>
      </footer> */}
    </div>
  );
};

export default Layout;
