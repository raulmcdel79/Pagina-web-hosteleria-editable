import React, { useEffect } from 'react';
import type { RecipeItem } from '../types';

interface RecipeModalProps {
  recipe: RecipeItem;
  onClose: () => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the click from bubbling up to the backdrop's onClose handler
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="recipe-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary bg-opacity-70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-background rounded-lg shadow-2xl max-w-2xl w-[90%] max-h-[90vh] overflow-y-auto relative printable-recipe"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <button
          aria-label="Cerrar"
          onClick={onClose}
          className="no-print absolute top-3 right-3 text-text-body/50 hover:text-text-heading transition-colors z-10 p-2 bg-background/50 rounded-full"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <img src={recipe.imageUrl} alt={`Imagen de ${recipe.name}`} className="w-full h-64 object-cover rounded-t-lg" />

        <div className="p-8">
          <p className="text-sm font-bold text-accent uppercase tracking-wider">{recipe.mainIngredient}</p>
          <h3 id="recipe-title" className="text-h3 font-display text-text-heading mt-2">{recipe.name}</h3>
          <p className="text-body text-text-body mt-4">{recipe.description}</p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h4 className="text-xl font-display text-text-heading mb-3 border-b-2 border-accent pb-2">Ingredientes</h4>
              <ul className="list-disc list-inside space-y-2 text-text-body">
                {recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-display text-text-heading mb-3 border-b-2 border-accent pb-2">Preparación</h4>
              <ol className="list-decimal list-inside space-y-2 text-text-body">
                {recipe.instructions.map((step, index) => <li key={index}>{step}</li>)}
              </ol>
            </div>
          </div>
          
          <div className="mt-10 text-center no-print">
            <button
              onClick={handleDownload}
              className="bg-button-bg text-button-text font-bold px-8 py-3 rounded-md hover:bg-button-bg-hover transition-all duration-300 transform hover:scale-105"
            >
              Descargar Receta (PDF)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;