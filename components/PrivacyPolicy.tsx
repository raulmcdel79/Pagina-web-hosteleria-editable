
import React from 'react';
import { useContent } from '../context/ContentContext';

const PrivacyPolicy: React.FC = () => {
  const { businessInfo } = useContent();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl text-text-body">
        <h1 className="text-h2 font-display text-text-heading mb-8">Política de Privacidad</h1>
        
        <div className="space-y-6 text-body">
          <p><strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2 className="text-h3 font-display text-text-heading pt-6 border-t border-text-heading/10">1. Responsable del Tratamiento</h2>
          <p>
            <strong>{businessInfo.name}</strong> (en adelante, "nosotros", "nuestro"), con domicilio en {businessInfo.address}, es el responsable del tratamiento de sus datos personales.
          </p>

          <h2 className="text-h3 font-display text-text-heading pt-6 border-t border-text-heading/10">2. Datos que Recopilamos</h2>
          <p>
            Recopilamos los datos que nos proporcionas directamente a través de nuestro formulario de contacto y reservas, tales como:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono (opcional)</li>
            <li>Detalles de la reserva (fecha, hora, número de comensales)</li>
            <li>Cualquier otra información que nos proporciones en el campo de peticiones especiales.</li>
          </ul>

          <h2 className="text-h3 font-display text-text-heading pt-6 border-t border-text-heading/10">3. Finalidad del Tratamiento</h2>
          <p>
            Utilizamos tus datos personales para las siguientes finalidades:
          </p>
           <ul className="list-disc list-inside ml-4">
            <li>Gestionar y confirmar tu reserva.</li>
            <li>Comunicarnos contigo en relación a tu reserva o consulta.</li>
            <li>Enviarte comunicaciones comerciales sobre nuestros productos y servicios, siempre que contemos con tu consentimiento explícito.</li>
            <li>Mejorar nuestros servicios y la experiencia del usuario.</li>
          </ul>

          <h2 className="text-h3 font-display text-text-heading pt-6 border-t border-text-heading/10">4. Legitimación</h2>
          <p>
            La base legal para el tratamiento de tus datos es la ejecución de la relación precontractual o contractual (la gestión de tu reserva) y, en el caso de las comunicaciones comerciales, tu consentimiento expreso.
          </p>

          <h2 className="text-h3 font-display text-text-heading pt-6 border-t border-text-heading/10">5. Derechos del Usuario</h2>
          <p>
            Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de tus datos enviando un correo electrónico a <a href={`mailto:${businessInfo.privacy.privacyEmail}`} className="text-accent hover:underline">{businessInfo.privacy.privacyEmail}</a>, indicando el derecho que deseas ejercer y adjuntando una copia de tu DNI o documento identificativo equivalente.
          </p>
          
          <h2 className="text-h3 font-display text-text-heading pt-6 border-t border-text-heading/10">6. Conservación de los Datos</h2>
           <p>
            Conservaremos tus datos personales durante el tiempo necesario para cumplir con la finalidad para la que fueron recopilados y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;