'use client';

import React, { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storedTheme = window.localStorage.getItem('theme');
    const prefersLight =
      !storedTheme &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches;

    const useLight = storedTheme === 'light' || prefersLight;
    setIsLightMode(useLight);
    document.body.classList.toggle('light-mode', useLight);
  }, []);

  const toggleTheme = () => {
    setIsLightMode((prev) => {
      const next = !prev;
      document.body.classList.toggle('light-mode', next);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('theme', next ? 'light' : 'dark');
      }
      return next;
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky-nav">
      <div className="nav-container">
        <div className="nav-logo">KD</div>

        {/* Desktop Navigation */}
        <nav className="nav-links desktop-nav">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#why-hire-me" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/Kevin_resume.pdf`} target="_blank" rel="noreferrer" className="resume-btn">
            Resume ↗
          </a>
        </nav>

        {/* Desktop Theme Toggle */}
        <button 
          className={`theme-toggle desktop-theme ${isLightMode ? 'light' : 'dark'}`} 
          aria-label="Toggle Theme" 
          onClick={toggleTheme}
          title={isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        >
          <span className="theme-toggle-track">
            <Sun size={14} className="theme-icon sun" />
            <Moon size={14} className="theme-icon moon" />
            <span className="theme-toggle-thumb" />
          </span>
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu}>
        <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
          <a href="#hero" className="mobile-nav-link" onClick={closeMobileMenu}>Home</a>
          <a href="#experience" className="mobile-nav-link" onClick={closeMobileMenu}>Experience</a>
          <a href="#why-hire-me" className="mobile-nav-link" onClick={closeMobileMenu}>Projects</a>
          <a href="#skills" className="mobile-nav-link" onClick={closeMobileMenu}>Skills</a>
          <a 
            href={`${process.env.NEXT_PUBLIC_BASE_PATH}/Kevin_resume.pdf`}
            target="_blank" 
            rel="noreferrer" 
            className="mobile-nav-link resume"
            onClick={closeMobileMenu}
          >
            Resume ↗
          </a>
          
          {/* Mobile Theme Toggle */}
          <div className="mobile-theme-toggle">
            <span>Theme</span>
            <button 
              className={`theme-toggle ${isLightMode ? 'light' : 'dark'}`} 
              aria-label="Toggle Theme" 
              onClick={toggleTheme}
            >
              <span className="theme-toggle-track">
                <Sun size={14} className="theme-icon sun" />
                <Moon size={14} className="theme-icon moon" />
                <span className="theme-toggle-thumb" />
              </span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
