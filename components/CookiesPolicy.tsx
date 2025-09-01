import React from 'react';

const CookiesPolicy: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl text-text-body">
        <h1 className="text-h2 font-display text-text-heading mb-8">Política de Cookies</h1>

        <div className="space-y-6 text-body">
           <p><strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2 className="text-h3 font-display text-text-heading pt-6 border-t border-text-heading/10">1. ¿Qué son las cookies?</h2>
          <p>
            Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página. Las cookies suelen almacenar información de carácter técnico, preferencias personales, personalización de contenidos, estadísticas de uso, enlaces a redes sociales, acceso a cuentas de usuario, etc.
          </p>

          <h2 className="text-h3 font-display text-text-heading pt-6 border-t border-text-heading/10">2. Cookies utilizadas en este sitio web</h2>
          <p>
            Siguiendo las directrices de la Agencia Española de Protección de Datos procedemos a detallar el uso de cookies que hace esta web con el fin de informarle con la máxima exactitud posible.
          </p>
          <p>Este sitio web utiliza las siguientes <strong>cookies propias</strong>:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Cookies de sesión, para garantizar que los usuarios que escriban comentarios en el blog sean humanos y no aplicaciones automatizadas. De esta forma se combate el spam.</li>
          </ul>
          <p>Este sitio web utiliza las siguientes <strong>cookies de terceros</strong>:</p>
           <ul className="list-disc list-inside ml-4">
            <li>Google Analytics: Almacena cookies para poder elaborar estadísticas sobre el tráfico y volumen de visitas de esta web. Al utilizar este sitio web está consintiendo el tratamiento de información acerca de usted por Google. Por tanto, el ejercicio de cualquier derecho en este sentido deberá hacerlo comunicando directamente con Google.</li>
            <li>Redes sociales: Cada red social utiliza sus propias cookies para que usted pueda pinchar en botones del tipo Me gusta o Compartir.</li>
          </ul>

          <h2 className="text-h3 font-display text-text-heading pt-6 border-t border-text-heading/10">3. Desactivación o eliminación de cookies</h2>
          <p>
            En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando. Le recomendamos consultar la documentación de ayuda de su navegador para aprender a gestionar las cookies.
          </p>
          <p>
            Ni esta web ni sus representantes legales se hacen responsables ni del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta política de cookies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CookiesPolicy;