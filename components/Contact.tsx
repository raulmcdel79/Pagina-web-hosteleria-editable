
import React from 'react';
import { useContent } from '../context/ContentContext';

const Contact: React.FC = () => {
  const { businessInfo, siteTexts } = useContent();
  
  return (
    <section id="contacto" className="py-24 bg-surface/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-display text-text-heading">Contacto y Reservas</h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info Section */}
          <div>
            <h3 className="text-h3 font-display text-text-heading mb-4">Visítanos</h3>
            <p className="text-text-body mb-6">Estamos en el corazón de Ruzafa, listos para recibirte.</p>
            <div className="space-y-4 text-text-body">
              <p><strong>Dirección:</strong> {businessInfo.address}</p>
              <p><strong>Teléfono:</strong> <a href={`tel:${businessInfo.phone.replace(/\s/g, '')}`} className="hover:text-accent">{businessInfo.phone}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${businessInfo.email}`} className="hover:text-accent">{businessInfo.email}</a></p>
              <p><strong>Horario:</strong><br/>
                <span className="whitespace-pre-wrap">{businessInfo.schedule}</span>
              </p>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                <a href={businessInfo.mapLinkUrl} target="_blank" rel="noopener noreferrer">
                    <img src={businessInfo.mapImageUrl} alt={`Mapa de ubicación de ${businessInfo.name}`} className="w-full h-64 object-cover" />
                </a>
            </div>
          </div>

          {/* Form Section */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md">
              <div>
                <h3 className="text-h3 font-display text-text-heading mb-4">Reserva tu mesa</h3>
                <p className="text-text-body mb-6">
                  Para asegurar tu sitio, te invitamos a rellenar nuestro formulario de reservas online. Es la forma más rápida y sencilla de planificar tu visita.
                </p>
                <a
                  href={businessInfo.reservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-button-bg text-button-text font-bold py-4 px-6 rounded-md hover:bg-button-bg-hover transition-all duration-300 text-lg"
                >
                    Ir al Formulario de Reservas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;