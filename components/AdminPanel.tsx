
import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { initialThemeColors, initialSiteStyles } from '../data/content';
import type { MenuItem, MenuSection, RecipeItem, GalleryImage, TestimonialItem, BusinessInfo, SiteTexts } from '../types';

type AdminTab = 'general' | 'carta' | 'recetas' | 'galeria' | 'opiniones';

// --- Reusable Confirmation Modal ---
interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/70 backdrop-blur-sm" 
      onClick={onClose} 
      aria-modal="true" 
      role="dialog"
    >
      <div className="bg-surface p-8 rounded-lg shadow-2xl w-full max-w-md mx-4" onClick={e => e.stopPropagation()}>
        <h3 className="text-2xl font-display text-text-heading mb-4">{title}</h3>
        <p className="text-text-body mb-8">{message}</p>
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="px-6 py-2 bg-neutral-300 text-neutral-800 rounded-md font-semibold hover:bg-neutral-400 transition-colors">
            Cancelar
          </button>
          <button onClick={onConfirm} className="px-6 py-2 bg-red-600 text-white rounded-md font-bold hover:bg-red-700 transition-colors">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};


const AdminPanel: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<AdminTab>('general');
  const { adminPassword } = useContent();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === adminPassword) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Contraseña incorrecta.');
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <section className="py-24 bg-background flex items-center justify-center" style={{ minHeight: 'calc(100vh - 200px)'}}>
        <div className="max-w-sm w-full bg-surface p-8 rounded-xl shadow-lg mx-4">
          <h1 className="text-2xl font-bold text-center text-text-heading font-display mb-6">Acceso de Administrador</h1>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
                className="w-full p-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Contraseña"
                aria-describedby="password-error"
              />
            </div>
            {error && <p id="password-error" className="text-red-600 text-sm text-center">{error}</p>}
            <div>
              <button
                type="submit"
                className="w-full bg-button-bg text-button-text font-bold py-3 px-6 rounded-md hover:bg-button-bg-hover transition-all duration-300 text-lg"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-surface/50 py-12">
        <div className="container mx-auto px-6">
            <h1 className="text-h2 font-display text-text-heading mb-8">Panel de Administración</h1>
            
            <div className="border-b border-text-heading/20 mb-8">
                <nav className="flex space-x-4 overflow-x-auto pb-2" role="tablist" aria-label="Administración de contenido">
                    {(['general', 'carta', 'recetas', 'galeria', 'opiniones'] as AdminTab[]).map(tab => (
                        <button
                            key={tab}
                            id={`admin-tab-${tab}`}
                            role="tab"
                            aria-selected={activeTab === tab}
                            aria-controls={`admin-panel-${tab}`}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 font-semibold text-sm rounded-t-md transition-colors focus:outline-none focus:ring-2 focus:ring-accent flex-shrink-0 ${
                                activeTab === tab 
                                ? 'bg-primary text-secondary' 
                                : 'text-text-body hover:bg-primary/10'
                            }`}
                        >
                           {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </nav>
            </div>

            <div>
                <div role="tabpanel" id="admin-panel-general" aria-labelledby="admin-tab-general" hidden={activeTab !== 'general'}>
                    <GeneralEditor />
                </div>
                <div role="tabpanel" id="admin-panel-carta" aria-labelledby="admin-tab-carta" hidden={activeTab !== 'carta'}>
                    <MenuEditor />
                </div>
                <div role="tabpanel" id="admin-panel-recetas" aria-labelledby="admin-tab-recetas" hidden={activeTab !== 'recetas'}>
                    <RecipesEditor />
                </div>
                <div role="tabpanel" id="admin-panel-galeria" aria-labelledby="admin-tab-galeria" hidden={activeTab !== 'galeria'}>
                    <GalleryEditor />
                </div>
                 <div role="tabpanel" id="admin-panel-opiniones" aria-labelledby="admin-tab-opiniones" hidden={activeTab !== 'opiniones'}>
                    <TestimonialsEditor />
                </div>
            </div>
        </div>
    </div>
  );
};

const EditorSection: React.FC<{title: string; children: React.ReactNode}> = ({title, children}) => (
    <div className="p-4 bg-background rounded-md shadow-sm">
        <h3 className="text-xl font-bold mb-4 text-text-heading">{title}</h3>
        <div className="space-y-4">
            {children}
        </div>
    </div>
);

const FormInput: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; name: string; placeholder?: string; helpText?: string; type?: string }> = ({ label, helpText, type = 'text', ...props }) => (
    <label className="block">
        <span className="text-sm font-semibold text-text-body">{label}</span>
        <input type={type} {...props} className="w-full p-2 border rounded mt-1" />
        {helpText && <p className="text-xs text-text-body/70 mt-1">{helpText}</p>}
    </label>
);

const FormTextarea: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; name: string; rows?: number }> = ({ label, ...props }) => (
    <label className="block">
        <span className="text-sm font-semibold text-text-body">{label}</span>
        <textarea {...props} className="w-full p-2 border rounded mt-1 whitespace-pre-wrap" />
    </label>
);

const ColorInput: React.FC<{ label: string, name: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, helpText: string }> = ({ label, name, value, onChange, helpText }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-semibold mb-2 text-text-body">{label}</label>
        <div className="flex items-center gap-4 p-2 bg-surface rounded-md border">
            <input 
                id={name}
                type="color" 
                name={name}
                value={value}
                onChange={onChange}
                className="w-10 h-10 p-0 border-none rounded-md cursor-pointer"
                style={{'backgroundColor': 'transparent'}}
                aria-label={`Selector de color para ${label}`}
            />
            <input 
                type="text" 
                value={value.toUpperCase()}
                onChange={onChange}
                name={name}
                className="w-full p-2 border-0 focus:ring-0"
                aria-label={`${label} código hexadecimal`}
            />
        </div>
        <p className="text-xs text-text-body/70 mt-2">{helpText}</p>
    </div>
);

const PasswordEditor: React.FC = () => {
    const { adminPassword, setAdminPassword } = useContent();
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);

        if (currentPassword !== adminPassword) {
            setMessage({ text: 'La contraseña actual es incorrecta.', type: 'error' });
            return;
        }

        if (!newPassword || newPassword.length < 6) {
             setMessage({ text: 'La nueva contraseña debe tener al menos 6 caracteres.', type: 'error' });
            return;
        }

        if (newPassword !== confirmPassword) {
            setMessage({ text: 'Las nuevas contraseñas no coinciden.', type: 'error' });
            return;
        }

        setAdminPassword(newPassword);
        setMessage({ text: '¡Contraseña actualizada con éxito!', type: 'success' });
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };

    return (
        <EditorSection title="Seguridad y Contraseña">
            <form onSubmit={handleSubmit} className="space-y-4">
                <FormInput 
                    label="Contraseña Actual" 
                    name="currentPassword" 
                    type="password"
                    value={currentPassword} 
                    onChange={(e) => setCurrentPassword(e.target.value)} 
                    placeholder="Introduce tu contraseña actual"
                />
                <FormInput 
                    label="Nueva Contraseña" 
                    name="newPassword" 
                    type="password"
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                />
                <FormInput 
                    label="Confirmar Nueva Contraseña" 
                    name="confirmPassword" 
                    type="password"
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Vuelve a escribir la nueva contraseña"
                />

                {message && (
                    <p className={`text-sm font-semibold ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                        {message.text}
                    </p>
                )}
                
                <div>
                    <button
                        type="submit"
                        className="bg-button-bg text-button-text font-bold py-2 px-6 rounded-md hover:bg-button-bg-hover transition-all duration-300"
                    >
                        Cambiar Contraseña
                    </button>
                </div>
            </form>
        </EditorSection>
    );
};

// --- Editor for General Settings ---
const GeneralEditor: React.FC = () => {
    const content = useContent();
    const displayFonts = ['Playfair Display', 'Lora', 'Cormorant Garamond', 'EB Garamond'];
    const sansFonts = ['Inter', 'Lato', 'Montserrat', 'Roboto'];


    const handleHeroImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                const base64 = loadEvent.target?.result;
                if (typeof base64 === 'string') {
                    content.setHeroImage(base64);
                }
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleBusinessInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const keys = name.split('.');
        content.setBusinessInfo(prev => {
            const newState = JSON.parse(JSON.stringify(prev)); // Deep copy
            let current = newState;
            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]];
            }
            current[keys[keys.length - 1]] = value;
            return newState;
        });
    };

    const handleSiteTextsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        content.setSiteTexts(prev => ({ ...prev, [name]: value }));
    };

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        content.setThemeColors(prev => ({ ...prev, [name]: value }));
    };

    const handleExport = () => {
        const allContent = {
            heroImage: content.heroImage,
            businessInfo: content.businessInfo,
            siteTexts: content.siteTexts,
            menuSections: content.menuSections,
            recipeItems: content.recipeItems,
            galleryImages: content.galleryImages,
            essenceImages: content.essenceImages,
            testimonials: content.testimonials,
            menuPdfUrl: content.menuPdfUrl,
            themeColors: content.themeColors,
            siteStyles: content.siteStyles,
        };
        const dataStr = JSON.stringify(allContent, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        const date = new Date().toISOString().split('T')[0];
        link.download = `backup-${content.businessInfo.name.toLowerCase().replace(/\s/g, '-')}-${date}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const importedData = JSON.parse(event.target?.result as string);
                    
                    if (!importedData.businessInfo || !importedData.siteTexts) {
                        throw new Error('Archivo de backup no válido o corrupto.');
                    }
                    
                    content.setHeroImage(importedData.heroImage || '');
                    content.setBusinessInfo(importedData.businessInfo);
                    content.setSiteTexts(importedData.siteTexts);
                    content.setMenuSections(importedData.menuSections || []);
                    content.setRecipeItems(importedData.recipeItems || []);
                    content.setGalleryImages(importedData.galleryImages || []);
                    content.setEssenceImages(importedData.essenceImages || []);
                    content.setTestimonials(importedData.testimonials || []);
                    content.setMenuPdfUrl(importedData.menuPdfUrl || null);
                    content.setThemeColors(importedData.themeColors || initialThemeColors);
                    content.setSiteStyles(importedData.siteStyles || initialSiteStyles);
                    
                    alert('¡Contenido importado con éxito!');
                } catch (error) {
                    console.error("Error al importar el archivo:", error);
                    alert('Hubo un error al importar el archivo. Asegúrate de que es un backup válido.');
                }
            };
            reader.readAsText(file);
        }
    };


    return (
        <div className="space-y-8">
            <EditorSection title="Imagen de Portada (Hero)">
                <div>
                    <p className="text-sm font-semibold mb-2">Vista Previa Actual:</p>
                    <img src={content.heroImage} alt="Imagen de portada actual" className="w-full h-48 object-cover rounded-md mb-2" />
                </div>
                <div>
                    <label htmlFor="hero-image-upload" className="block text-sm font-semibold mb-1">Subir nueva imagen</label>
                    <input 
                        id="hero-image-upload"
                        type="file" 
                        accept="image/*"
                        onChange={handleHeroImageUpload} 
                        className="w-full p-2 border rounded mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                    />
                </div>
                 <div className="mt-4">
                    <label htmlFor="hero-opacity-slider" className="block text-sm font-semibold mb-1">
                        Opacidad de la capa de color ({Math.round(content.siteStyles.heroOverlayOpacity * 100)}%)
                    </label>
                    <input
                        id="hero-opacity-slider"
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={content.siteStyles.heroOverlayOpacity}
                        onChange={(e) => content.setSiteStyles(prev => ({ ...prev, heroOverlayOpacity: parseFloat(e.target.value) }))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <p className="text-xs text-text-body/70 mt-1">Controla la transparencia del color superpuesto en la imagen de portada.</p>
                </div>
            </EditorSection>

             <EditorSection title="Tipografía del Sitio">
                <p className="text-sm text-text-body">
                    Selecciona las fuentes para los títulos y el texto general. Los cambios se aplicarán en toda la web.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="font-display" className="block text-sm font-semibold mb-2">Fuente para Títulos</label>
                        <select
                            id="font-display"
                            name="fontDisplay"
                            value={content.siteStyles.fontDisplay}
                            onChange={(e) => content.setSiteStyles(prev => ({...prev, fontDisplay: e.target.value}))}
                            className="w-full p-2 border rounded"
                            style={{ fontFamily: content.siteStyles.fontDisplay }}
                        >
                            {displayFonts.map(font => (
                                <option key={font} value={font} style={{ fontFamily: font }}>{font}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="font-sans" className="block text-sm font-semibold mb-2">Fuente para Textos</label>
                        <select
                            id="font-sans"
                            name="fontSans"
                            value={content.siteStyles.fontSans}
                            onChange={(e) => content.setSiteStyles(prev => ({...prev, fontSans: e.target.value}))}
                            className="w-full p-2 border rounded"
                            style={{ fontFamily: content.siteStyles.fontSans }}
                        >
                            {sansFonts.map(font => (
                                <option key={font} value={font} style={{ fontFamily: font }}>{font}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </EditorSection>
            
            <EditorSection title="Paleta de Colores de la Marca">
                <p className="text-sm text-text-body">
                    Modifica los colores para adaptar la web a tu identidad de marca. Los cambios se aplicarán en tiempo real.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ColorInput label="Primario" name="primary" value={content.themeColors.primary} onChange={handleColorChange} helpText="Fondos oscuros, pie de página." />
                    <ColorInput label="Fondo de Página" name="background" value={content.themeColors.background} onChange={handleColorChange} helpText="Color principal del fondo de la web." />
                    <ColorInput label="Fondo de Superficies" name="surface" value={content.themeColors.surface} onChange={handleColorChange} helpText="Tarjetas, modales y fondos secundarios." />
                    <ColorInput label="Acento" name="accent" value={content.themeColors.accent} onChange={handleColorChange} helpText="Llamadas a la acción, enlaces, destacados." />
                    <ColorInput label="Títulos (Heading)" name="textHeading" value={content.themeColors.textHeading} onChange={handleColorChange} helpText="Color para títulos H1, H2, H3." />
                    <ColorInput label="Cuerpo de Texto (Body)" name="textBody" value={content.themeColors.textBody} onChange={handleColorChange} helpText="Color para párrafos y texto general." />
                    <ColorInput label="Botón (Fondo)" name="buttonBg" value={content.themeColors.buttonBg} onChange={handleColorChange} helpText="Fondo de los botones estándar." />
                    <ColorInput label="Botón (Hover)" name="buttonBgHover" value={content.themeColors.buttonBgHover} onChange={handleColorChange} helpText="Fondo de los botones al pasar el ratón." />
                    <ColorInput label="Botón (Texto)" name="buttonText" value={content.themeColors.buttonText} onChange={handleColorChange} helpText="Texto de los botones estándar." />
                </div>
            </EditorSection>

            <EditorSection title="Información del Negocio">
                <FormInput label="Nombre del Negocio" name="name" value={content.businessInfo.name} onChange={handleBusinessInfoChange} />
                <FormInput label="Dirección" name="address" value={content.businessInfo.address} onChange={handleBusinessInfoChange} />
                <FormInput label="Teléfono" name="phone" value={content.businessInfo.phone} onChange={handleBusinessInfoChange} />
                <FormInput label="Email de Contacto" name="email" value={content.businessInfo.email} onChange={handleBusinessInfoChange} />
                <FormTextarea label="Horario" name="schedule" value={content.businessInfo.schedule} onChange={handleBusinessInfoChange} rows={4} />
                <FormInput label="URL de la imagen del mapa" name="mapImageUrl" value={content.businessInfo.mapImageUrl} onChange={handleBusinessInfoChange} helpText="Enlace a una imagen estática del mapa."/>
                <FormInput label="URL del enlace del mapa" name="mapLinkUrl" value={content.businessInfo.mapLinkUrl} onChange={handleBusinessInfoChange} helpText="Enlace a Google Maps para la dirección." />
                <FormInput label="URL de Reservas" name="reservationUrl" value={content.businessInfo.reservationUrl} onChange={handleBusinessInfoChange} helpText="Enlace al formulario de reservas (ej. Google Forms)." />
            </EditorSection>

            <EditorSection title="Redes Sociales">
                <FormInput label="Instagram URL" name="socials.instagram" value={content.businessInfo.socials.instagram} onChange={handleBusinessInfoChange} />
                <FormInput label="Facebook URL" name="socials.facebook" value={content.businessInfo.socials.facebook} onChange={handleBusinessInfoChange} />
            </EditorSection>

            <EditorSection title="Textos del Sitio Web">
                <FormInput label="Título de Portada" name="heroTitle" value={content.siteTexts.heroTitle} onChange={handleSiteTextsChange} />
                <FormTextarea label="Subtítulo de Portada" name="heroSubtitle" value={content.siteTexts.heroSubtitle} onChange={handleSiteTextsChange} rows={3} />
                <FormInput label="Título Sección 'Nuestra Esencia'" name="essenceTitle" value={content.siteTexts.essenceTitle} onChange={handleSiteTextsChange} />
                <FormTextarea label="Párrafo 1 'Nuestra Esencia'" name="essenceP1" value={content.siteTexts.essenceP1} onChange={handleSiteTextsChange} rows={4} />
                <FormTextarea label="Párrafo 2 'Nuestra Esencia'" name="essenceP2" value={content.siteTexts.essenceP2} onChange={handleSiteTextsChange} rows={4} />
                <FormTextarea label="Párrafo 3 'Nuestra Esencia'" name="essenceP3" value={content.siteTexts.essenceP3} onChange={handleSiteTextsChange} rows={4} />
                <FormInput label="Título Sección 'Qué dicen de nosotros'" name="testimonialsTitle" value={content.siteTexts.testimonialsTitle} onChange={handleSiteTextsChange} />
                <FormInput label="Título Sección 'Reservas'" name="reservationsTitle" value={content.siteTexts.reservationsTitle} onChange={handleSiteTextsChange} />
                <FormInput label="Subtítulo Sección 'Reservas'" name="reservationsSubtitle" value={content.siteTexts.reservationsSubtitle} onChange={handleSiteTextsChange} />
                <FormInput label="Texto del Banner Superior (CTA)" name="ctaBannerText" value={content.siteTexts.ctaBannerText} onChange={handleSiteTextsChange} />
                <FormTextarea label="Frase del Pie de Página" name="footerTagline" value={content.siteTexts.footerTagline} onChange={handleSiteTextsChange} rows={2} />
            </EditorSection>
            
            <EditorSection title="Información Legal y de Privacidad">
                <FormInput label="Nombre de la Empresa (Legal)" name="legal.companyName" value={content.businessInfo.legal.companyName} onChange={handleBusinessInfoChange} />
                <FormInput label="NIF" name="legal.nif" value={content.businessInfo.legal.nif} onChange={handleBusinessInfoChange} />
                <FormInput label="Email Legal" name="legal.legalEmail" value={content.businessInfo.legal.legalEmail} onChange={handleBusinessInfoChange} />
                <FormInput label="Email para Privacidad" name="privacy.privacyEmail" value={content.businessInfo.privacy.privacyEmail} onChange={handleBusinessInfoChange} />
            </EditorSection>

            <PasswordEditor />

            <EditorSection title="Gestión de Datos">
                <p className="text-sm text-text-body mb-4">
                    Guarda una copia de seguridad de todo el contenido de tu web o restaura la web a partir de un archivo de backup.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button
                        onClick={handleExport}
                        className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 transition-all duration-300"
                    >
                        Exportar Contenido
                    </button>
                    <div>
                        <label htmlFor="import-file" className="cursor-pointer bg-green-600 text-white font-bold py-2 px-6 rounded-md hover:bg-green-700 transition-all duration-300 inline-block">
                            Importar Contenido
                        </label>
                        <input
                            id="import-file"
                            type="file"
                            accept=".json"
                            onChange={handleImport}
                            className="hidden"
                        />
                    </div>
                </div>
            </EditorSection>
        </div>
    );
};

// --- Editor for Menu ---
const MenuEditor: React.FC = () => {
    const { menuSections, setMenuSections, menuPdfUrl, setMenuPdfUrl } = useContent();

    const handleSectionChange = (sectionIndex: number, newTitle: string) => {
        const newSections = [...menuSections];
        newSections[sectionIndex].title = newTitle;
        setMenuSections(newSections);
    };

    const addSection = () => {
        setMenuSections([...menuSections, { title: 'Nueva Sección', items: [] }]);
    };

    const removeSection = (sectionIndex: number) => {
        const newSections = menuSections.filter((_, i) => i !== sectionIndex);
        setMenuSections(newSections);
    };

    const handleItemChange = (sectionIndex: number, itemIndex: number, field: keyof MenuItem, value: string) => {
        const newSections = JSON.parse(JSON.stringify(menuSections));
        newSections[sectionIndex].items[itemIndex][field] = value;
        setMenuSections(newSections);
    };

    const addItem = (sectionIndex: number) => {
        const newSections = [...menuSections];
        newSections[sectionIndex].items.push({
            id: `new-${Date.now()}`,
            category: 'Conserva',
            name: 'Nuevo Plato',
            description: 'Descripción',
            price: '0.00€',
            imageUrl: ''
        });
        setMenuSections(newSections);
    };

    const removeItem = (sectionIndex: number, itemIndex: number) => {
        const newSections = [...menuSections];
        newSections[sectionIndex].items = newSections[sectionIndex].items.filter((_, i) => i !== itemIndex);
        setMenuSections(newSections);
    };
    
    const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if(file.type !== 'application/pdf') {
                alert('Por favor, sube solo archivos PDF.');
                return;
            }
            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                const base64 = loadEvent.target?.result;
                if (typeof base64 === 'string') {
                    setMenuPdfUrl(base64);
                }
            };
            reader.readAsDataURL(file);
        }
    };
    
    return (
        <div className="space-y-8">
            <EditorSection title="Carta en PDF">
                <p className="text-sm">Sube una versión en PDF de la carta para que los clientes puedan descargarla.</p>
                {menuPdfUrl && (
                    <div className="my-2">
                        <a href={menuPdfUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Ver PDF actual</a>
                    </div>
                )}
                <input type="file" accept="application/pdf" onChange={handlePdfUpload} className="w-full p-2 border rounded mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
                {menuPdfUrl && <button onClick={() => setMenuPdfUrl(null)} className="mt-2 text-sm text-red-600 hover:underline">Eliminar PDF</button>}
            </EditorSection>
            
            {menuSections.map((section, sectionIndex) => (
                <EditorSection key={`section-${sectionIndex}`} title={`Sección: ${section.title}`}>
                    <div className="flex justify-between items-center mb-4">
                        <input
                            type="text"
                            value={section.title}
                            onChange={(e) => handleSectionChange(sectionIndex, e.target.value)}
                            className="text-lg font-bold p-2 border rounded w-full"
                        />
                        <button onClick={() => removeSection(sectionIndex)} className="ml-4 text-red-500 hover:text-red-700 font-bold flex-shrink-0">Eliminar Sección</button>
                    </div>
                    {section.items.map((item, itemIndex) => (
                        <div key={item.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t pt-4">
                            <FormInput label="Nombre" name="name" value={item.name} onChange={(e) => handleItemChange(sectionIndex, itemIndex, 'name', e.target.value)} />
                            <FormInput label="Descripción" name="description" value={item.description} onChange={(e) => handleItemChange(sectionIndex, itemIndex, 'description', e.target.value)} />
                            <div className="flex items-end gap-2">
                                <FormInput label="Precio" name="price" value={item.price} onChange={(e) => handleItemChange(sectionIndex, itemIndex, 'price', e.target.value)} />
                                <button onClick={() => removeItem(sectionIndex, itemIndex)} className="bg-red-200 text-red-800 p-2 rounded h-10 mb-px flex-shrink-0">Eliminar</button>
                            </div>
                        </div>
                    ))}
                    <button onClick={() => addItem(sectionIndex)} className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">Añadir Plato</button>
                </EditorSection>
            ))}
            <button onClick={addSection} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">Añadir Nueva Sección</button>
        </div>
    );
};

// --- Editor for Recipes ---
const RecipesEditor: React.FC = () => {
    const { recipeItems, setRecipeItems } = useContent();

    const handleRecipeChange = (index: number, field: keyof RecipeItem, value: string | string[]) => {
        const newItems = [...recipeItems];
        (newItems[index] as any)[field] = value;
        setRecipeItems(newItems);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                if (typeof loadEvent.target?.result === 'string') {
                    handleRecipeChange(index, 'imageUrl', loadEvent.target.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };
    
    const addRecipe = () => {
        setRecipeItems([...recipeItems, {
            id: `new-${Date.now()}`,
            name: 'Nueva Receta',
            description: 'Descripción de la receta.',
            mainIngredient: 'Ingrediente Principal',
            imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
            ingredients: ['1 ingrediente'],
            instructions: ['1 paso de preparación']
        }]);
    };
    
    const removeRecipe = (index: number) => {
        setRecipeItems(recipeItems.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-8">
            {recipeItems.map((recipe, index) => (
                <EditorSection key={recipe.id} title={`Receta: ${recipe.name}`}>
                    <div className="flex justify-end">
                        <button onClick={() => removeRecipe(index)} className="text-red-500 hover:text-red-700 font-bold">Eliminar Receta</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                           <FormInput label="Nombre" name="name" value={recipe.name} onChange={(e) => handleRecipeChange(index, 'name', e.target.value)} />
                           <FormInput label="Ingrediente Principal" name="mainIngredient" value={recipe.mainIngredient} onChange={(e) => handleRecipeChange(index, 'mainIngredient', e.target.value)} />
                           <FormTextarea label="Descripción" name="description" value={recipe.description} onChange={(e) => handleRecipeChange(index, 'description', e.target.value)} rows={4} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold mb-2">Imagen</p>
                            <img src={recipe.imageUrl} alt={recipe.name} className="w-full h-40 object-cover rounded mb-2" />
                            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, index)} className="w-full p-2 border rounded mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <FormTextarea label="Ingredientes (uno por línea)" name="ingredients" value={recipe.ingredients.join('\n')} onChange={(e) => handleRecipeChange(index, 'ingredients', e.target.value.split('\n'))} rows={6} />
                        <FormTextarea label="Instrucciones (una por línea)" name="instructions" value={recipe.instructions.join('\n')} onChange={(e) => handleRecipeChange(index, 'instructions', e.target.value.split('\n'))} rows={6} />
                    </div>
                </EditorSection>
            ))}
            <button onClick={addRecipe} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">Añadir Nueva Receta</button>
        </div>
    );
};

// --- Editor for Gallery ---
const GalleryEditor: React.FC = () => {
    const { galleryImages, setGalleryImages, essenceImages, setEssenceImages } = useContent();

    const handleImageChange = (
        e: React.ChangeEvent<HTMLInputElement>, 
        index: number,
        imageType: 'gallery' | 'essence'
    ) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                if (typeof loadEvent.target?.result === 'string') {
                    const setter = imageType === 'gallery' ? setGalleryImages : setEssenceImages;
                    setter(prev => {
                        const newImages = [...prev];
                        newImages[index].src = loadEvent.target?.result as string;
                        return newImages;
                    });
                }
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleAltChange = (
        e: React.ChangeEvent<HTMLInputElement>, 
        index: number,
        imageType: 'gallery' | 'essence'
    ) => {
        const setter = imageType === 'gallery' ? setGalleryImages : setEssenceImages;
        setter(prev => {
            const newImages = [...prev];
            newImages[index].alt = e.target.value;
            return newImages;
        });
    };

    return (
        <div className="space-y-8">
            <EditorSection title="Imágenes de Presentación (Sección 'Nuestra Esencia')">
                <p className="text-sm">Estas son las dos imágenes principales que aparecen junto al texto de "Nuestra Esencia".</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {essenceImages.slice(0, 2).map((image, index) => (
                        <div key={image.id} className="p-4 border rounded">
                             <img src={image.src} alt={image.alt} className="w-full h-40 object-cover rounded mb-2" />
                             <FormInput label="Texto alternativo" name={`essence-alt-${index}`} value={image.alt} onChange={(e) => handleAltChange(e, index, 'essence')} />
                             <label className="block mt-2">
                                <span className="text-sm font-semibold text-text-body">Reemplazar imagen</span>
                                <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, index, 'essence')} className="w-full p-2 border rounded mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
                             </label>
                        </div>
                    ))}
                </div>
            </EditorSection>
            
            <EditorSection title="Galería Principal (11 Imágenes Fijas)">
                 <p className="text-sm">La galería principal tiene un diseño fijo para 11 imágenes. Puedes reemplazar cada imagen y editar su descripción, pero no añadir o eliminar para mantener el diseño.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.slice(0, 11).map((image, index) => (
                        <div key={image.id} className="p-4 border rounded">
                             <img src={image.src} alt={image.alt} className="w-full h-40 object-cover rounded mb-2" />
                             <FormInput label="Descripción (texto alternativo)" name={`gallery-alt-${index}`} value={image.alt} onChange={(e) => handleAltChange(e, index, 'gallery')} />
                             <label className="block mt-2">
                                <span className="text-sm font-semibold text-text-body">Reemplazar imagen</span>
                                <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, index, 'gallery')} className="w-full p-2 border rounded mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
                             </label>
                        </div>
                    ))}
                </div>
            </EditorSection>
        </div>
    );
};

// --- Editor for Testimonials ---
const TestimonialsEditor: React.FC = () => {
    const { testimonials, setTestimonials } = useContent();

    const handleTestimonialChange = (index: number, field: keyof TestimonialItem, value: string) => {
        const newItems = [...testimonials];
        (newItems[index] as any)[field] = value;
        setTestimonials(newItems);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                if (typeof loadEvent.target?.result === 'string') {
                    handleTestimonialChange(index, 'imageUrl', loadEvent.target.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };
    
    const addTestimonial = () => {
        setTestimonials([...testimonials, {
            id: `new-${Date.now()}`,
            text: 'Escribe aquí la reseña del cliente.',
            author: 'Nombre del Cliente',
            location: 'Ciudad o procedencia',
            imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop&ar=1:1',
        }]);
    };
    
    const removeTestimonial = (index: number) => {
        setTestimonials(testimonials.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
                <EditorSection key={testimonial.id} title={`Opinión de: ${testimonial.author}`}>
                    <div className="flex justify-end">
                        <button onClick={() => removeTestimonial(index)} className="text-red-500 hover:text-red-700 font-bold">Eliminar Opinión</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                           <FormTextarea label="Texto de la opinión" name="text" value={testimonial.text} onChange={(e) => handleTestimonialChange(index, 'text', e.target.value)} rows={4} />
                           <FormInput label="Autor" name="author" value={testimonial.author} onChange={(e) => handleTestimonialChange(index, 'author', e.target.value)} />
                           <FormInput label="Ubicación" name="location" value={testimonial.location} onChange={(e) => handleTestimonialChange(index, 'location', e.target.value)} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold mb-2">Imagen del cliente</p>
                            <img src={testimonial.imageUrl} alt={testimonial.author} className="w-32 h-32 object-cover rounded-full mx-auto mb-2" />
                            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, index)} className="w-full p-2 border rounded mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
                        </div>
                    </div>
                </EditorSection>
            ))}
            <button onClick={addTestimonial} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">Añadir Nueva Opinión</button>
        </div>
    );
};


export default AdminPanel;