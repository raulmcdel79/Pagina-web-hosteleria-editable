
import React from 'react';
import { useContent } from '../context/ContentContext';

const LegalNotice: React.FC = () => {
  const { businessInfo } = useContent();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl text-text-body">
        <h1 className="text-h2 font-display text-text-heading mb-8">Aviso Legal</h1>

        <div className="space-y-6 text-body">
          <h2 className="text-h3 font-display text-text-heading pt-6 border-t border-text-heading/10">1. Datos Identificativos del Titular</h2>
          <p>
            En cumplimiento del deber de información estipulado en el artículo 10 de la Ley 34/2002 de 11 de julio de Servicios de la Sociedad de la Información y de Comercio Electrónico, se comunican los siguientes datos:
          </p>
          <ul className="list-none ml-4 space-y-2">
            <li><strong>Titular:</strong> {businessInfo.legal.companyName}</li>
            <li><strong>NIF:</strong> {businessInfo.legal.nif}</li>
            <li><strong>Dirección:</strong> {businessInfo.address}</li>
            <li><strong>Email:</strong> <a href={`mailto:${businessInfo.legal.legalEmail}`} className="text-accent hover:underline">{businessInfo.legal.legalEmail}</a></li>
          </ul>

          <h2 className="text-h3 font-display text-text-heading pt-6 border-t border-text-heading/10">2. Objeto y Aceptación</h2>
          <p>
            El presente aviso legal regula el uso del sitio web (en adelante, EL SITIO WEB). La navegación por el sitio web le atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, que pueden sufrir modificaciones.
          </p>
          <p>
            El usuario se obliga a hacer un uso correcto del sitio web de conformidad con las leyes, la buena fe, el orden público, los usos del tráfico y el presente Aviso Legal.
          </p>

          <h2 className="text-h3 font-display text-text-heading pt-6 border-t border-text-heading/10">3. Propiedad Intelectual e Industrial</h2>
          <p>
            Todos los contenidos del sitio web, como textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a {businessInfo.legal.companyName}, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso de la web.
          </p>

          <h2 className="text-h3 font-display text-text-heading pt-6 border-t border-text-heading/10">4. Exclusión de Responsabilidad</h2>
          <p>
            El contenido del presente sitio web es de carácter general y tiene una finalidad meramente informativa, sin que se garantice plenamente el acceso a todos los contenidos, ni su exhaustividad, corrección, vigencia o actualidad, ni su idoneidad o utilidad para un objetivo específico.
          </p>
          <p>
            {businessInfo.legal.companyName} excluye, hasta donde permite el ordenamiento jurídico, cualquier responsabilidad por los daños y perjuicios de toda naturaleza derivados de la imposibilidad de acceso al sitio web o la falta de veracidad, exactitud, exhaustividad y/o actualidad de los contenidos.
          </p>
          
          <h2 className="text-h3 font-display text-text-heading pt-6 border-t border-text-heading/10">5. Legislación Aplicable</h2>
          <p>
            Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalNotice;