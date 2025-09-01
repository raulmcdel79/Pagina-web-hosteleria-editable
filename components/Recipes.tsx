
import React, { useState } from 'react';
import type { RecipeItem } from '../types';
import RecipeModal from './RecipeModal';
import { useContent } from '../context/ContentContext';

const RecipeCard: React.FC<{ item: RecipeItem; onClick: () => void }> = ({ item, onClick }) => (
    <button onClick={onClick} className="group bg-surface rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col text-left">
        <div className="relative overflow-hidden h-60">
            <img 
                src={item.imageUrl}
                alt={`Imagen de ${item.name}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm font-bold text-accent uppercase tracking-wider">{item.mainIngredient}</p>
            <h4 className="text-xl font-display text-text-heading mt-2">{item.name}</h4>
            <p className="text-sm text-text-body/80 mt-2 flex-grow">{item.description}</p>
        </div>
    </button>
);

const Recipes: React.FC = () => {
  const { recipeItems } = useContent();
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeItem | null>(null);

  return (
    <>
      <section id="recetas" className="py-24 bg-surface/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-display text-text-heading">Nuestras Recetas</h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
            <p className="text-lg text-text-body mt-6 max-w-2xl mx-auto">
              Inspírate con estas ideas para disfrutar al máximo <br /> de nuestras conservas en casa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {recipeItems.map((item) => (
              <RecipeCard key={item.id} item={item} onClick={() => setSelectedRecipe(item)} />
            ))}
          </div>
        </div>
      </section>
      
      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      )}
    </>
  );
};

export default Recipes;