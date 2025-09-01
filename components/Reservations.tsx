
import React from 'react';
import { useContent } from '../context/ContentContext';

const Reservations: React.FC = () => {
   const { siteTexts, businessInfo } = useContent();

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-h2 font-display text-secondary max-w-2xl mx-auto">{siteTexts.reservationsTitle}</h2>
        <p className="text-lg text-secondary/80 mt-4 mb-8">
          {siteTexts.reservationsSubtitle}
        </p>
        <a
          href={businessInfo.reservationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-button-text font-bold px-10 py-4 rounded-md text-lg hover:bg-background hover:text-text-heading transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Reservar Ahora
        </a>
      </div>
    </section>
  );
};

export default Reservations;