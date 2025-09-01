
import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';

interface HeaderProps {
  page: string;
  navigate: (page: string, sectionId?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ page, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { businessInfo } = useContent();

  const navLinks = [
    { label: 'Nuestra Esencia', href: '#esencia' },
    { label: 'Carta', href: '#carta' },
    { label: 'Recetas', href: '#recetas' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Opiniones', href: '#opiniones' },
    { label: 'Contacto', href: '#contacto' },
  ];
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    navigate('home', sectionId);
    if(isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" onClick={(e) => handleNavClick(e, '')} className="text-xl font-display font-bold text-text-heading">
          La Cooperativa del Mar
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => 
            <a key={link.label} href={link.href} onClick={(e) => handleNavClick(e, link.href.substring(1))} className="text-text-body hover:text-accent transition-colors duration-300 font-semibold tracking-wide">
              {link.label}
            </a>
          )}
        </nav>
        <a 
          href={businessInfo.reservationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-button-bg text-button-text px-6 py-2 rounded-md hover:bg-button-bg-hover transition-all duration-300 transform hover:scale-105 text-sm font-bold shadow-md"
        >
          Reservar Mesa
        </a>

        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-text-heading focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-background shadow-lg absolute w-full">
          <nav className="flex flex-col items-center py-4 space-y-4">
             {navLinks.map(link => 
                <a key={link.label} href={link.href} onClick={(e) => handleNavClick(e, link.href.substring(1))} className="text-text-body hover:text-accent transition-colors duration-300 font-semibold tracking-wide">
                  {link.label}
                </a>
              )}
             <a 
              href={businessInfo.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-button-bg text-button-text px-6 py-2 rounded-md hover:bg-button-bg-hover transition-all duration-300 text-sm font-bold mt-2"
            >
              Reservar Mesa
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;