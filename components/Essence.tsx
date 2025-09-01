
import React from 'react';
import { useContent } from '../context/ContentContext';

const Essence: React.FC = () => {
  const { siteTexts, essenceImages } = useContent();
  return (
    <section id="esencia" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-display text-text-heading">{siteTexts.essenceTitle}</h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-lg text-text-body leading-relaxed space-y-6 whitespace-pre-wrap">
             <p>
              {siteTexts.essenceP1}
            </p>
            <p>
             {siteTexts.essenceP2}
            </p>
            <p>
             {siteTexts.essenceP3}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
              {essenceImages && essenceImages.length >= 2 ? (
                <>
                  <img src={essenceImages[0].src} alt={essenceImages[0].alt} className="rounded-lg shadow-xl object-cover w-full h-64" />
                  <img src={essenceImages[1].src} alt={essenceImages[1].alt} className="rounded-lg shadow-xl object-cover w-full h-64" />
                </>
              ) : (
                <p>Cargando imágenes...</p>
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Essence;
