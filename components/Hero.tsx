
import React from 'react';
import { useContent } from '../context/ContentContext';

const Hero: React.FC = () => {
  const { heroImage, siteTexts, businessInfo } = useContent();

  return (
    <section 
      className="h-[80vh] bg-cover bg-center flex items-center justify-center text-white relative" 
      style={{ backgroundImage: `url('${heroImage}')` }}
    >
      <div 
        className="absolute inset-0 bg-primary" 
        style={{ opacity: 'var(--hero-overlay-opacity, 0.6)' }}
      ></div>
      <div className="relative z-10 text-center p-4 container mx-auto">
        <h1 className="text-h1 font-display mb-4 text-secondary">{siteTexts.heroTitle}</h1>
        <p className="text-xl md:text-2xl mb-8 font-sans max-w-2xl mx-auto text-secondary/90 whitespace-pre-wrap">
          {siteTexts.heroSubtitle}
        </p>
        <div className="flex items-center justify-center">
          <a 
            href={businessInfo.reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-button-text font-bold px-10 py-4 rounded-md text-lg hover:bg-background hover:text-text-heading transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Reservar Mesa
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;