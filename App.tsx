
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Essence from './components/Essence';
import Menu from './components/Menu';
import Recipes from './components/Recipes';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Reservations from './components/Reservations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import LegalNotice from './components/LegalNotice';
import CookiesPolicy from './components/CookiesPolicy';
import CtaBanner from './components/CtaBanner';
import AdminPanel from './components/AdminPanel';
import { useContent } from './context/ContentContext';

const ThemeApplicator: React.FC = () => {
  const { themeColors, siteStyles } = useContent();

  useEffect(() => {
    const root = document.documentElement;
    if (themeColors) {
      root.style.setProperty('--color-primary', themeColors.primary);
      root.style.setProperty('--color-background', themeColors.background);
      root.style.setProperty('--color-surface', themeColors.surface);
      root.style.setProperty('--color-accent', themeColors.accent);
      root.style.setProperty('--color-text-heading', themeColors.textHeading);
      root.style.setProperty('--color-text-body', themeColors.textBody);
      root.style.setProperty('--color-button-bg', themeColors.buttonBg);
      root.style.setProperty('--color-button-bg-hover', themeColors.buttonBgHover);
      root.style.setProperty('--color-button-text', themeColors.buttonText);
    }
    if (siteStyles) {
      root.style.setProperty('--hero-overlay-opacity', String(siteStyles.heroOverlayOpacity));
      root.style.setProperty('--font-display', siteStyles.fontDisplay);
      root.style.setProperty('--font-sans', siteStyles.fontSans);
    }
  }, [themeColors, siteStyles]);

  return null;
};


const App: React.FC = () => {
  const [page, setPage] = useState('home');

  const navigate = (targetPage: string, sectionId?: string) => {
    setPage(targetPage);
    
    if (targetPage === 'home') {
      // Pequeño retraso para permitir que los componentes de la página de inicio se rendericen antes de desplazarse
      setTimeout(() => {
        if (sectionId) {
          const targetElement = document.getElementById(sectionId);
          if (targetElement) {
            const headerOffset = 80; // Altura aproximada del encabezado fijo
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const renderPage = () => {
    switch (page) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'legal':
        return <LegalNotice />;
      case 'cookies':
        return <CookiesPolicy />;
      case 'admin':
        return <AdminPanel />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Essence />
            <Menu />
            <Recipes />
            <Gallery />
            <Testimonials />
            <Reservations />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="bg-background">
      <ThemeApplicator />
      {page !== 'admin' && <CtaBanner />}
      <Header page={page} navigate={navigate} />
      <main>
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;