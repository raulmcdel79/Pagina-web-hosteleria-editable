
export interface MenuItem {
  id: string;
  category: 'Conserva' | 'Tapa' | 'Bebida';
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface RecipeItem {
  id: string;
  name: string;
  description: string;
  mainIngredient: string;
  imageUrl: string;
  ingredients: string[];
  instructions: string[];
}

export interface GalleryImage {
  id:string;
  src: string;
  alt: string;
}

export interface TestimonialItem {
  id: string;
  text: string;
  author: string;
  location: string;
  imageUrl: string;
}

// --- Editable Business & Site Content ---

export interface ThemeColors {
  primary: string;         // Main brand color, used for dark sections like Footer
  background: string;      // Main page background
  surface: string;         // Card, modal, secondary backgrounds
  accent: string;          // CTAs, links, highlights
  textHeading: string;     // Titles H1, H2, H3
  textBody: string;        // Paragraphs and general text
  buttonBg: string;        // Standard button background
  buttonBgHover: string;   // Standard button hover background
  buttonText: string;      // Standard button text
}


export interface SiteStyles {
  heroOverlayOpacity: number;
  fontDisplay: string;
  fontSans: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  schedule: string; // Multiline text for opening hours
  mapImageUrl: string;
  mapLinkUrl: string;
  reservationUrl: string; // URL for the reservations form (e.g., Google Forms)
  socials: {
    instagram: string;
    facebook: string;
  };
  legal: {
    companyName: string;
    nif: string;
    legalEmail: string;
  };
  privacy: {
    privacyEmail: string;
  };
}

export interface SiteTexts {
  heroTitle: string;
  heroSubtitle: string;
  essenceTitle: string;
  essenceP1: string;
  essenceP2: string;
  essenceP3: string;
  testimonialsTitle: string;
  reservationsTitle: string;
  reservationsSubtitle: string;
  ctaBannerText: string;
  footerTagline: string;
}