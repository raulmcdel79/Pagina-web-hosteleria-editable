
import React, { useState } from 'react';
import type { MenuItem } from '../types';
import { useContent } from '../context/ContentContext';

const MenuItemRow: React.FC<{ item: MenuItem }> = ({ item }) => (
    <div className="py-4 border-b border-text-heading/10">
        <div className="flex justify-between items-start">
            <div>
                <h4 className="text-lg font-display text-text-heading">{item.name}</h4>
                <p className="text-sm text-text-body/80 mt-1 max-w-xl">{item.description}</p>
            </div>
            <div className="flex-shrink-0 ml-4">
                 <p className="text-lg font-bold text-text-heading mt-1">{item.price}</p>
            </div>
        </div>
    </div>
);

const Menu: React.FC = () => {
  const { menuSections, menuPdfUrl } = useContent();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="carta" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex flex-col items-center justify-center w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
            aria-expanded={isOpen}
            aria-controls="menu-content"
          >
            <div className="flex items-center">
              <h2 className="text-h2 font-display text-text-heading">Nuestra Carta</h2>
              <svg 
                  className={`w-8 h-8 ml-4 text-text-heading transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
              >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
          </button>
        </div>
        
        <div
          id="menu-content"
          className={`transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? 'max-h-[3000px] opacity-100 mt-12' : 'max-h-0 opacity-0'}`}
        >
          <div className="max-w-4xl mx-auto">
              {menuSections.map(section => (
                   <div key={section.title} className="mb-10">
                      <h3 className="text-h3 font-display text-text-heading mb-4 border-b-2 border-accent pb-2" style={{ textTransform: 'capitalize' }}>
                          {section.title.toLowerCase()}
                      </h3>
                      {section.items.map((item) => (
                          <MenuItemRow key={item.id} item={item} />
                      ))}
                  </div>
              ))}
          </div>
          {menuPdfUrl && (
            <div className="text-center mt-12">
                <a
                  href={menuPdfUrl}
                  download="carta-la-cooperativa-del-mar.pdf"
                  className="no-print border-2 border-text-heading text-text-heading font-bold px-8 py-3 rounded-md hover:bg-text-heading hover:text-background transition-all duration-300"
                >
                    Descargar Carta (PDF)
                </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;
