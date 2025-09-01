
import React from 'react';
import { useContent } from '../context/ContentContext';

const InstagramIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current"><title>Instagram</title><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.266.057 2.164.248 2.943.555a4.927 4.927 0 0 1 2.122 1.383c.666.666 1.076 1.344 1.383 2.122.307.779.498 1.677.555 2.943.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.057 1.266-.248 2.164-.555 2.943a4.927 4.927 0 0 1-1.383 2.122c-.666.666-1.344 1.076-2.122 1.383-.779.307-1.677.498-2.943.555-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.266-.057-2.164-.248-2.943-.555a4.927 4.927 0 0 1-2.122-1.383c-.666-.666-1.076-1.344-1.383-2.122-.307-.779-.498-1.677-.555-2.943-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.057 1.266.248 2.164.555 2.943a4.927 4.927 0 0 1 1.383-2.122c.666.666 1.344-1.076 2.122-1.383.779-.307 1.677.498 2.943-.555C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.012 7.053.072 5.775.132 4.905.333 4.14.63c-.784.297-1.459.717-2.123 1.38C1.357 2.67.937 3.345.63 4.14c-.297.765-.498 1.635-.558 2.913C.012 8.333 0 8.74 0 12s.012 3.667.072 4.947c.06 1.278.261 2.148.558 2.913.297.784.717 1.459 1.38 2.123.665.666 1.34 1.086 2.123 1.38.765.297 1.635.498 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.012 4.947-.072c1.278-.06 2.148-.261 2.913-.558.784-.297 1.459-.717 2.123-1.38.666-.665 1.086-1.34 1.38-2.123.297-.765.498-1.635.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.278-.261-2.148-.558-2.913-.297-.784-.717-1.459-1.38-2.123C21.343.937 20.668.517 19.885.22c-.765-.297-1.635-.498-2.913-.558C15.667.012 15.26 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"/></svg>;
const FacebookIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;


const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-secondary/70 hover:text-accent transition-colors duration-300">
        {children}
    </a>
);

interface FooterProps {
  navigate: (page: string, sectionId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
   const { businessInfo, siteTexts } = useContent();

   const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    navigate('home', sectionId);
  };

  const handlePageLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    navigate(page);
  };

  const navLinks = [
      { label: 'Nuestra Esencia', href: '#esencia' },
      { label: 'Carta', href: '#carta' },
      { label: 'Recetas', href: '#recetas' },
      { label: 'Galería', href: '#galeria' },
      { label: 'Opiniones', href: '#opiniones' },
      { label: 'Reservas', href: '#contacto' },
  ];

  return (
    <footer className="bg-primary text-secondary">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left gap-10 md:gap-8 mb-12">
          {/* Brand Info */}
          <div className="flex-1 md:max-w-xs">
            <h5 className="font-display text-xl font-bold mb-4">{businessInfo.name}</h5>
            <p className="text-sm text-secondary/70 whitespace-pre-wrap">{siteTexts.footerTagline}</p>
          </div>
      
          {/* Explora */}
          <div className="flex-1">
            <h5 className="font-bold uppercase tracking-wider mb-4">Explora</h5>
            <nav className="flex flex-col space-y-2 text-sm">
                {navLinks.map(link => (
                  <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href.substring(1))} className="hover:text-accent cursor-pointer">{link.label}</a>
                ))}
            </nav>
          </div>

          {/* Contacto */}
          <div className="flex-1">
            <h5 className="font-bold uppercase tracking-wider mb-4">Contacto</h5>
            <div className="flex flex-col space-y-2 text-sm text-secondary/70">
              <p>{businessInfo.address.split(',')[0]}</p>
              <p>{businessInfo.address.split(',').slice(1).join(',')}</p>
              <p>{businessInfo.phone}</p>
            </div>
          </div>
        
          {/* Síguenos */}
          <div className="flex-1">
            <h5 className="font-bold uppercase tracking-wider mb-4">Síguenos</h5>
            <div className="flex justify-center md:justify-start space-x-6">
                <SocialLink href={businessInfo.socials.instagram}><InstagramIcon /></SocialLink>
                <SocialLink href={businessInfo.socials.facebook}><FacebookIcon /></SocialLink>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/20 pt-6 text-center text-sm text-secondary/50">
          <p>&copy; {new Date().getFullYear()} {businessInfo.name}. Todos los derechos reservados.</p>
          <p className="mt-2">
            <a href="#" onClick={(e) => handlePageLinkClick(e, 'privacy')} className="hover:text-accent cursor-pointer">Política de Privacidad</a> &middot; 
            <a href="#" onClick={(e) => handlePageLinkClick(e, 'legal')} className="hover:text-accent cursor-pointer"> Aviso Legal</a> &middot; 
            <a href="#" onClick={(e) => handlePageLinkClick(e, 'cookies')} className="hover:text-accent cursor-pointer"> Cookies</a> &middot; 
            <a href="#" onClick={(e) => handlePageLinkClick(e, 'admin')} className="hover:text-accent cursor-pointer">Admin</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;