
import React from 'react';
import { useContent } from '../context/ContentContext';

const Testimonials: React.FC = () => {
  const { siteTexts, testimonials } = useContent();

  if (!testimonials || testimonials.length === 0) {
    return null; // Don't render the section if there are no testimonials
  }

  return (
    <section id="opiniones" className="py-24 bg-surface/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-display text-text-heading">{siteTexts.testimonialsTitle}</h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-surface p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              <img
                src={item.imageUrl}
                alt={`Foto de ${item.author}`}
                className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-accent/50"
              />
              <p className="text-text-body/80 italic mb-6 flex-grow">
                "{item.text}"
              </p>
              <div>
                <p className="font-display text-lg font-bold text-text-heading">{item.author}</p>
                <p className="text-sm text-text-body/70">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;