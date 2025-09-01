import React from 'react';
import type { GalleryImage } from '../types';
import { useContent } from '../context/ContentContext';

const GalleryImageCard: React.FC<{ image: GalleryImage, className?: string }> = ({ image, className = '' }) => (
    <div className={`group relative overflow-hidden rounded-lg shadow-lg break-inside-avoid ${className}`}>
        <img 
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover min-h-[300px] transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-neutral-900 bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
        <p className="absolute bottom-4 left-4 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-900/50 px-3 py-1 rounded">{image.alt}</p>
    </div>
);

const Gallery: React.FC = () => {
  const { galleryImages, essenceImages } = useContent();

  const hasGalleryImages = galleryImages && galleryImages.length > 0;
  const hasEssenceImages = essenceImages && essenceImages.length > 0;

  if (!hasGalleryImages && !hasEssenceImages) {
    return (
      <section id="galeria" className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
            <p>No hay imágenes en la galería.</p>
        </div>
      </section>
    );
  }

  // Slice to ensure we only ever display 11 images for the fixed grid
  const displayImages = galleryImages.slice(0, 11);

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-display text-text-heading">Galería</h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        
        {hasEssenceImages && (
            <div className="mb-12">
                <h3 className="text-h3 font-display text-text-heading text-center mb-8">Imágenes de Presentación</h3>
                <div className="md:columns-2 gap-4 space-y-4">
                    {essenceImages.map(image => (
                        <GalleryImageCard image={image} key={image.id} />
                    ))}
                </div>
            </div>
        )}
        
        {hasGalleryImages && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {displayImages.map((image, index) => {
                    let className = '';
                    // Define which images should be wide (span 2 columns) for the new mosaic layout
                    const wideImageIndices = [0, 1, 2, 7, 8];
                    if (wideImageIndices.includes(index)) {
                        className = 'md:col-span-2';
                    }
                    return <GalleryImageCard image={image} className={className} key={image.id} />;
                })}
            </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;