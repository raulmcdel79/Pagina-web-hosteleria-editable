
import React, { createContext, useState, useEffect, useContext, ReactNode, Dispatch, SetStateAction, useMemo } from 'react';
import { 
  initialMenuSections, 
  initialRecipeItems, 
  initialGalleryImages,
  initialEssenceImages,
  initialTestimonials,
  initialHeroImage, 
  initialMenuPdfUrl, 
  initialBusinessInfo,
  initialSiteTexts,
  initialThemeColors,
  initialSiteStyles
} from '../data/content';
import type { MenuSection, RecipeItem, GalleryImage, TestimonialItem, BusinessInfo, SiteTexts, ThemeColors, SiteStyles } from '../types';

interface ContentContextType {
  menuSections: MenuSection[];
  setMenuSections: Dispatch<SetStateAction<MenuSection[]>>;
  recipeItems: RecipeItem[];
  setRecipeItems: Dispatch<SetStateAction<RecipeItem[]>>;
  galleryImages: GalleryImage[];
  setGalleryImages: Dispatch<SetStateAction<GalleryImage[]>>;
  essenceImages: GalleryImage[];
  setEssenceImages: Dispatch<SetStateAction<GalleryImage[]>>;
  testimonials: TestimonialItem[];
  setTestimonials: Dispatch<SetStateAction<TestimonialItem[]>>;
  heroImage: string;
  setHeroImage: Dispatch<SetStateAction<string>>;
  menuPdfUrl: string | null;
  setMenuPdfUrl: Dispatch<SetStateAction<string | null>>;
  businessInfo: BusinessInfo;
  setBusinessInfo: Dispatch<SetStateAction<BusinessInfo>>;
  siteTexts: SiteTexts;
  setSiteTexts: Dispatch<SetStateAction<SiteTexts>>;
  themeColors: ThemeColors;
  setThemeColors: Dispatch<SetStateAction<ThemeColors>>;
  siteStyles: SiteStyles;
  setSiteStyles: Dispatch<SetStateAction<SiteStyles>>;
  adminPassword: string;
  setAdminPassword: Dispatch<SetStateAction<string>>;
}

const ContentContext = createContext<ContentContextType | null>(null);

const usePersistedState = <T,>(key: string, initialState: T): [T, Dispatch<SetStateAction<T>>] => {
  const [state, setState] = useState<T>(() => {
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    } catch (error) {
      console.error(`Error reading localStorage key “${key}”:`, error);
      return initialState;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(`Error setting localStorage key “${key}”:`, error);
    }
  }, [key, state]);

  return [state, setState];
};

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menuSections, setMenuSections] = usePersistedState<MenuSection[]>('content_menu', initialMenuSections);
  const [recipeItems, setRecipeItems] = usePersistedState<RecipeItem[]>('content_recipes', initialRecipeItems);
  const [galleryImages, setGalleryImages] = usePersistedState<GalleryImage[]>('content_gallery', initialGalleryImages);
  const [essenceImages, setEssenceImages] = usePersistedState<GalleryImage[]>('content_essence_images', initialEssenceImages);
  const [testimonials, setTestimonials] = usePersistedState<TestimonialItem[]>('content_testimonials', initialTestimonials);
  const [heroImage, setHeroImage] = usePersistedState<string>('content_hero_image', initialHeroImage);
  const [menuPdfUrl, setMenuPdfUrl] = usePersistedState<string | null>('content_menu_pdf', initialMenuPdfUrl);
  const [businessInfo, setBusinessInfo] = usePersistedState<BusinessInfo>('content_business_info', initialBusinessInfo);
  const [siteTexts, setSiteTexts] = usePersistedState<SiteTexts>('content_site_texts', initialSiteTexts);
  const [themeColors, setThemeColors] = usePersistedState<ThemeColors>('content_theme', initialThemeColors);
  const [siteStyles, setSiteStyles] = usePersistedState<SiteStyles>('content_site_styles', initialSiteStyles);
  const [adminPassword, setAdminPassword] = usePersistedState<string>('admin_password', '1234567');


  const value = useMemo(() => ({
    menuSections,
    setMenuSections,
    recipeItems,
    setRecipeItems,
    galleryImages,
    setGalleryImages,
    essenceImages,
    setEssenceImages,
    testimonials,
    setTestimonials,
    heroImage,
    setHeroImage,
    menuPdfUrl,
    setMenuPdfUrl,
    businessInfo,
    setBusinessInfo,
    siteTexts,
    setSiteTexts,
    themeColors,
    setThemeColors,
    siteStyles,
    setSiteStyles,
    adminPassword,
    setAdminPassword,
  }), [menuSections, setMenuSections, recipeItems, setRecipeItems, galleryImages, setGalleryImages, essenceImages, setEssenceImages, testimonials, setTestimonials, heroImage, setHeroImage, menuPdfUrl, setMenuPdfUrl, businessInfo, setBusinessInfo, siteTexts, setSiteTexts, themeColors, setThemeColors, siteStyles, setSiteStyles, adminPassword, setAdminPassword]);

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = (): ContentContextType => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};