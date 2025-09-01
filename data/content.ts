
import type { MenuSection, RecipeItem, GalleryImage, TestimonialItem, MenuItem, BusinessInfo, SiteTexts, ThemeColors, SiteStyles } from '../types';

// --- Menu Data ---
const atunItems: MenuItem[] = [
  { id: 'atun-0', category: 'Conserva', name: 'Filetes en aceite', description: 'Santa Catarina Gourmet', price: '3,90€', imageUrl: '' },
  { id: 'atun-1', category: 'Conserva', name: 'Filetes en aceite', description: 'Rural', price: '4,50€', imageUrl: '' },
  { id: 'atun-2', category: 'Conserva', name: 'Filetes en aceite con batata', description: 'Santa Catarina Gourmet', price: '3,90€', imageUrl: '' },
  { id: 'atun-3', category: 'Conserva', name: 'Filetes en aceite con hinojo', description: 'Santa Catarina Gourmet', price: '3,90€', imageUrl: '' },
  { id: 'atun-4', category: 'Conserva', name: 'Filetes en aceite con orégano', description: 'Santa Catarina Gourmet', price: '3,90€', imageUrl: '' },
  { id: 'atun-5', category: 'Conserva', name: 'Filetes en aceite con tomillo', description: 'Santa Catarina Gourmet', price: '3,90€', imageUrl: '' },
  { id: 'atun-6', category: 'Conserva', name: 'Filetes en aceite con pimiento', description: 'Santa Catarina Gourmet', price: '3,90€', imageUrl: '' },
  { id: 'atun-7', category: 'Conserva', name: 'Filetes en aceite con romero', description: 'Rural', price: '4,00€', imageUrl: '' },
  { id: 'atun-8', category: 'Conserva', name: 'Filetes en aceite con algas', description: 'Naval', price: '4,00€', imageUrl: '' },
];

const jurelItems: MenuItem[] = [
  { id: 'jurel-0', category: 'Conserva', name: 'En aceite', description: 'Pishale', price: '3,90€', imageUrl: '' },
  { id: 'jurel-1', category: 'Conserva', name: 'En aceite (picante)', description: 'Pishale', price: '4,20€', imageUrl: '' },
  { id: 'jurel-2', category: 'Conserva', name: 'En aceite con tomate', description: 'Pishale', price: '4,20€', imageUrl: '' },
  { id: 'jurel-3', category: 'Conserva', name: 'En aceite con tomate (picante)', description: 'Pishale', price: '4,20€', imageUrl: '' },
];

const caballaItems: MenuItem[] = [
  { id: 'caballa-0', category: 'Conserva', name: 'Entera en aceite', description: 'Pishale', price: '4,00€', imageUrl: '' },
  { id: 'caballa-1', category: 'Conserva', name: 'Entera en aceite (picante)', description: 'Pishale', price: '4,20€', imageUrl: '' },
  { id: 'caballa-2', category: 'Conserva', name: 'Filetes en aceite', description: 'Pishale', price: '4,00€', imageUrl: '' },
  { id: 'caballa-3', category: 'Conserva', name: 'Filetes en aceite (picante)', description: 'Pishale', price: '4,20€', imageUrl: '' },
  { id: 'caballa-4', category: 'Conserva', name: 'Entera con tomate', description: 'Pishale', price: '4,00€', imageUrl: '' },
  { id: 'caballa-5', category: 'Conserva', name: 'Entera con tomate (picante)', description: 'Pishale', price: '4,20€', imageUrl: '' },
  { id: 'caballa-6', category: 'Conserva', name: 'Filetes ahumados en aceite', description: 'Comar', price: '5,00€', imageUrl: '' },
];

const pateItems: MenuItem[] = [
  { id: 'pate-0', category: 'Conserva', name: 'Paté de Sardina', description: 'La Gondola', price: '2,70€', imageUrl: '' },
  { id: 'pate-1', category: 'Conserva', name: 'Paté de Sardina (picante)', description: 'La Gondola', price: '2,80€', imageUrl: '' },
  { id: 'pate-2', category: 'Conserva', name: 'Paté de Atún', description: 'La Gondola', price: '2,70€', imageUrl: '' },
  { id: 'pate-3', category: 'Conserva', name: 'Paté de Atún (picante)', description: 'La Gondola', price: '2,80€', imageUrl: '' },
  { id: 'pate-4', category: 'Conserva', name: 'Paté de Caballa', description: 'La Gondola', price: '2,70€', imageUrl: '' },
  { id: 'pate-5', category: 'Conserva', name: 'Paté de Caballa (picante)', description: 'La Gondola', price: '2,80€', imageUrl: '' },
  { id: 'pate-6', category: 'Conserva', name: 'Huevas de merluza', description: 'La Gondola', price: '3,00€', imageUrl: '' },
];

const sardinaItems: MenuItem[] = [
  { id: 'sardina-0', category: 'Conserva', name: 'En aceite', description: 'Pishale', price: '4,00€', imageUrl: '' },
  { id: 'sardina-1', category: 'Conserva', name: 'En aceite (picante)', description: 'Pishale', price: '4,20€', imageUrl: '' },
  { id: 'sardina-2', category: 'Conserva', name: 'En aceite con tomate', description: 'Pishale', price: '4,00€', imageUrl: '' },
  { id: 'sardina-3', category: 'Conserva', name: 'En aceite con tomate (picante)', description: 'Pishale', price: '4,20€', imageUrl: '' },
  { id: 'sardina-4', category: 'Conserva', name: 'Al limón', description: 'La Gondola', price: '3,90€', imageUrl: '' },
  { id: 'sardina-5', category: 'Conserva', name: 'Petingas en aceite', description: 'Pishale', price: '4,20€', imageUrl: '' },
  { id: 'sardina-6', category: 'Conserva', name: 'Huevas en aceite', description: 'Naval', price: '14,00€', imageUrl: '' },
];

const anguilaItems: MenuItem[] = [
  { id: 'anguila-0', category: 'Conserva', name: 'En escabeche', description: 'Comar', price: '4,70€', imageUrl: '' },
  { id: 'anguila-1', category: 'Conserva', name: 'En escabeche (picante)', description: 'Comar', price: '4,80€', imageUrl: '' },
  { id: 'anguila-2', category: 'Conserva', name: 'Filetes ahumados en aceite', description: 'Comar', price: '5,80€', imageUrl: '' },
];

const truchaItems: MenuItem[] = [
  { id: 'trucha-0', category: 'Conserva', name: 'Al vino blanco', description: 'Comar', price: '4,50€', imageUrl: '' },
  { id: 'trucha-1', category: 'Conserva', name: 'Ahumada en aceite', description: 'Comar', price: '4,80€', imageUrl: '' },
];

export const initialMenuSections: MenuSection[] = [
    { title: 'Atún', items: atunItems },
    { title: 'Jurel', items: jurelItems },
    { title: 'Caballa', items: caballaItems },
    { title: 'Patés', items: pateItems },
    { title: 'Sardina', items: sardinaItems },
    { title: 'Anguila', items: anguilaItems },
    { title: 'Trucha', items: truchaItems },
];


// --- Recipes Data ---
export const initialRecipeItems: RecipeItem[] = [
  { 
    id: 'recipe-0',
    name: 'Tosta de Sardinas y Tomate Confitado', 
    description: 'Una combinación clásica y deliciosa. La intensidad de la sardina se equilibra con el dulzor del tomate confitado sobre un pan rústico.', 
    mainIngredient: 'Con Sardinas', 
    imageUrl: 'https://images.unsplash.com/photo-1594212699903-8613659f58f7?q=80&w=600&auto=format&fit=crop&ar=1:1',
    ingredients: [
      '1 lata de Sardinas en Aceite de Oliva',
      '2 rebanadas de pan rústico',
      '1 tomate maduro',
      'Aceite de oliva virgen extra',
      'Ajo y hierbas aromáticas al gusto',
      'Sal en escamas',
    ],
    instructions: [
      'Tostar las rebanadas de pan.',
      'Frotar un diente de ajo sobre el pan tostado.',
      'Rallar el tomate y aliñar con aceite y sal.',
      'Extender el tomate sobre las tostas.',
      'Colocar las sardinas escurridas por encima.',
      'Añadir un hilo de aceite y hierbas frescas.',
    ],
  },
  { 
    id: 'recipe-1',
    name: 'Ensalada de Lentejas con Ventresca', 
    description: 'Un plato completo y nutritivo. La ventresca de bonito aporta una jugosidad y sabor únicos a esta ensalada de legumbres.', 
    mainIngredient: 'Con Ventresca', 
    imageUrl: 'https://images.unsplash.com/photo-1592499423822-50b380fca245?q=80&w=600&auto=format&fit=crop&ar=1:1',
    ingredients: [
      '1 lata de Ventresca de Bonito',
      '1 bote de lentejas cocidas',
      '1/2 cebolla morada',
      '1 pimiento verde',
      'Vinagre de Jerez',
      'Aceite de oliva virgen extra',
    ],
    instructions: [
      'Escurrir y enjuagar las lentejas.',
      'Picar la cebolla y el pimiento en brunoise.',
      'Mezclar las lentejas con las verduras.',
      'Aliñar con aceite, vinagre y sal.',
      'Desmigar la ventresca de bonito y añadirla por encima.',
      'Dejar reposar 10 minutos en la nevera antes de servir.',
    ],
  },
  { 
    id: 'recipe-2',
    name: 'Montadito de Mejillones y Alioli de Piquillo', 
    description: 'Un bocado lleno de sabor a mar. El escabeche de los mejillones se realza con un cremoso alioli de pimientos del piquillo.', 
    mainIngredient: 'Con Mejillones', 
    imageUrl: 'https://images.unsplash.com/photo-1605557731934-458b68a52994?q=80&w=600&auto=format&fit=crop&ar=1:1',
    ingredients: [
      '1 lata de Mejillones en Escabeche',
      'Pan de baguette',
      '1 diente de ajo',
      '1 huevo',
      'Aceite de girasol',
      '2 pimientos del piquillo',
      'Sal',
    ],
    instructions: [
      'Preparar un alioli casero con el huevo, ajo, y aceite.',
      'Añadir los pimientos del piquillo al alioli y triturar.',
      'Cortar el pan en rebanadas y tostarlo.',
      'Untar cada rebanada con el alioli de piquillo.',
      'Colocar uno o dos mejillones sobre cada montadito.',
      'Servir inmediatamente.',
    ],
  },
   { 
    id: 'recipe-3',
    name: 'Patatas Aliñadas con Melva', 
    description: 'Un clásico del sur en nuestra versión. Patata cocida en su punto con una melva canutera de calidad excepcional.', 
    mainIngredient: 'Con Melva', 
    imageUrl: 'https://images.unsplash.com/photo-1519620421834-15a02e64b73b?q=80&w=600&auto=format&fit=crop&ar=1:1',
    ingredients: [
      '1 lata de Melva Canutera',
      '2 patatas medianas',
      '1/4 cebolleta fresca',
      'Perejil fresco picado',
      'Vinagre de Jerez',
      'Aceite de oliva virgen extra',
      'Sal',
    ],
    instructions: [
      'Cocer las patatas con piel hasta que estén tiernas.',
      'Pelar y cortar las patatas en rodajas o dados.',
      'Picar finamente la cebolleta y el perejil.',
      'Mezclar las patatas (aún tibias) con la cebolleta y el perejil.',
      'Desmenuzar la melva y añadirla.',
      'Aliñar generosamente con sal, vinagre y aceite. Mezclar con cuidado.',
    ],
  },
];


// --- Essence Images Data ---
export const initialEssenceImages: GalleryImage[] = [
    { id: 'essence-0', src: 'https://images.unsplash.com/photo-1611270453365-5c6d30f33215?q=80&w=800&auto=format&fit=crop', alt: 'Estanterías con latas de conservas coloridas' },
    { id: 'essence-1', src: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=800&auto=format&fit=crop', alt: 'Detalle de una mesa con tapas y vino' },
];

// --- Gallery Data ---
export const initialGalleryImages: GalleryImage[] = [
    { id: 'gallery-0', src: 'https://images.unsplash.com/photo-1552526881-727272b53428?q=80&w=800&auto=format&fit=crop', alt: 'Ambiente del bar con clientes disfrutando' },
    { id: 'gallery-1', src: 'https://images.unsplash.com/photo-1565895405137-3ca0cc509033?q=80&w=800&auto=format&fit=crop', alt: 'Primer plano de una lata de conservas abierta' },
    { id: 'gallery-2', src: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop', alt: 'Tosta gourmet servida en una tabla' },
    { id: 'gallery-3', src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop', alt: 'Copa de vermut con una rodaja de naranja' },
    { id: 'gallery-4', src: 'https://images.unsplash.com/photo-1611270453365-5c6d30f33215?q=80&w=800&auto=format&fit=crop', alt: 'Varias latas de conservas coloridas en una estantería' },
    { id: 'gallery-5', src: 'https://images.unsplash.com/photo-1555949258-a2aa4d4e1303?q=80&w=800&auto=format&fit=crop', alt: 'Manos sirviendo vino en una copa' },
    { id: 'gallery-6', src: 'https://images.unsplash.com/photo-1588681949154-2a6c1a1f0a21?q=80&w=800&auto=format&fit=crop', alt: 'Mesa con diferentes tapas y conservas' },
    { id: 'gallery-7', src: 'https://images.unsplash.com/photo-1600891964951-c11592e3a45c?q=80&w=800&auto=format&fit=crop', alt: 'Detalle del mostrador del local' },
    { id: 'gallery-8', src: 'https://images.unsplash.com/photo-1574484284001-7c5b9e7a6b62?q=80&w=800&auto=format&fit=crop', alt: 'Una selección de vinos portugueses' },
    { id: 'gallery-9', src: 'https://images.unsplash.com/photo-1559487963-95b22a1f4965?q=80&w=800&auto=format&fit=crop', alt: 'Dos personas brindando con copas de vino' },
    { id: 'gallery-10', src: 'https://images.unsplash.com/photo-1541544388142-29a8888057b5?q=80&w=800&auto=format&fit=crop', alt: 'Detalle de una mesa con varias tapas y bebidas' },
];

// --- Testimonials Data ---
export const initialTestimonials: TestimonialItem[] = [
  {
    id: 'testimonial-0',
    text: 'Un sitio con un encanto especial. Las conservas son de una calidad increíble y el trato es inmejorable. ¡Volveremos seguro!',
    author: 'Laura Pérez',
    location: 'Cliente de Valencia',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop&ar=1:1',
  },
  {
    id: 'testimonial-1',
    text: 'Nos ha transportado a Portugal sin salir de Ruzafa. El vermut casero y las tostas son una maravilla. Muy recomendable.',
    author: 'Carlos Giménez',
    location: 'Visitante de Madrid',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop&ar=1:1',
  },
  {
    id: 'testimonial-2',
    text: 'La Cooperativa del Mar es mi sitio favorito para el aperitivo del fin de semana. El ambiente es relajado y el producto es excelente.',
    author: 'Anaïs Dubois',
    location: 'Residente en Ruzafa',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop&ar=1:1',
  },
];


// --- Hero Image Data ---
export const initialHeroImage: string = 'https://images.unsplash.com/photo-1554998171-89445e31c52b?q=80&w=2070&auto=format&fit=crop';

// --- Menu PDF Data ---
export const initialMenuPdfUrl: string | null = null;

// --- Theme Color Data ---
export const initialThemeColors: ThemeColors = {
  primary: '#1100FF',
  background: '#FAFAF9',
  surface: '#FFFFFF',
  accent: '#FF0000',
  textHeading: '#1100FF',
  textBody: '#333333',
  buttonBg: '#1100FF',
  buttonBgHover: '#FF0000',
  buttonText: '#FFFFFF',
};

// --- Site Styles Data ---
export const initialSiteStyles: SiteStyles = {
  heroOverlayOpacity: 0.6,
  fontDisplay: 'Playfair Display',
  fontSans: 'Inter',
};

// --- Business & Site Content Data ---
export const initialBusinessInfo: BusinessInfo = {
  name: "La Cooperativa del Mar",
  address: "Carrer Literato Azorín, 18, 46006 València",
  phone: "963 224 442",
  email: "reservas@coopdelmar.com",
  schedule: "Mar-Jue: 18:00 - 00:00\nVie-Sáb: 12:00 - 01:00\nDomingo: 12:00 - 18:00",
  mapImageUrl: "https://images.unsplash.com/photo-1594399329993-9c88287a9b9a?q=80&w=1200&auto=format&fit=crop",
  mapLinkUrl: "https://www.google.com/maps/search/?api=1&query=Carrer+Literato+Azor%C3%ADn,+18,+46006+Val%C3%A8ncia",
  reservationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfl9b-nJpY6_9YdIq1X5X_doYj8WX8Z_8Z9-8Z_8Z9-8Z9-8Z9/viewform", // Placeholder URL
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  legal: {
    companyName: "La Cooperativa del Mar S.L.",
    nif: "B-12345678",
    legalEmail: "legal@coopdelmar.com",
  },
  privacy: {
    privacyEmail: "privacidad@coopdelmar.com",
  },
};

export const initialSiteTexts: SiteTexts = {
  heroTitle: "Un pedacito de Portugal en Ruzafa.",
  heroSubtitle: "Conservas gourmet, tapas con historia\ny vinos para recordar.",
  essenceTitle: "Nuestra Esencia",
  essenceP1: 'En el local de la antigua pescadería "Pepe", conservando su mostrador y letrero originales, nace La Cooperativa del Mar. Nuestra decoración, inspirada en los ultramarinos de antaño, te transportará a un rincón de Portugal en pleno Ruzafa.',
  essenceP2: "Nuestra propuesta es honesta y diferente: aquí no hay cocina. Todo se basa en abrir y servir latas de conservas de altísima calidad, acompañadas de un pan excelente, tomates de la huerta y aperitivos que realzan su sabor.",
  essenceP3: "Somos un refugio para los amantes de los sabores auténticos, donde un buen vermut, un vino verde fresco o una cerveza con agua de mar son el maridaje perfecto para una experiencia informal, con estilo e inolvidable.",
  testimonialsTitle: "Qué dicen de nosotros",
  reservationsTitle: "Tu rincón atlántico te espera.",
  reservationsSubtitle: "Asegura tu mesa y ven a disfrutar de una experiencia única.",
  ctaBannerText: "¡Tu rincón de latas favorito te espera!",
  footerTagline: "Tu rincón de conservas y tapas.\nUn pedacito de Portugal en Ruzafa."
};