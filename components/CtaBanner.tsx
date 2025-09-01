
import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';

const CtaBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { siteTexts, businessInfo } = useContent();

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-button-bg text-button-text text-center p-3 relative no-print">
      <div className="container mx-auto flex justify-center items-center">
        <p className="font-semibold text-sm md:text-base">
          {siteTexts.ctaBannerText}&nbsp;
          <a 
            href={businessInfo.reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline hover:text-accent transition-colors duration-300"
          >
            Reserva tu mesa ahora
          </a>.
        </p>
        <button 
          onClick={() => setIsVisible(false)}
          aria-label="Cerrar banner"
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-button-text hover:text-accent transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CtaBanner;
