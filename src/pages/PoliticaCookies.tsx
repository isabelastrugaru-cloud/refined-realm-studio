import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const PoliticaCookies = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const content = {
    ro: {
      title: 'Politica Cookies',
      lastUpdated: 'Ultima actualizare: 10 Martie 2026',
      sections: [
        {
          title: '1. Ce sunt Cookie-urile?',
          text: 'Cookie-urile sunt fișiere text mici stocate pe dispozitivul dumneavoastră atunci când vizitați un site web. Acestea permit site-ului să vă recunoască dispozitivul și să rețină informații despre preferințele dumneavoastră.'
        },
        {
          title: '2. Cookie-uri Utilizate',
          text: 'Utilizăm următoarele tipuri de cookie-uri: Cookie-uri strict necesare — esențiale pentru funcționarea site-ului, inclusiv preferința de limbă și consimțământul pentru cookie-uri. Cookie-uri de performanță — ne ajută să înțelegem cum este utilizat site-ul prin colectarea de date anonime. Cookie-uri funcționale — rețin preferințele dumneavoastră pentru o experiență personalizată.'
        },
        {
          title: '3. Cookie-uri de la Terți',
          text: 'Site-ul poate încorpora conținut de la terți (Google Maps, Google Fonts) care pot seta propriile cookie-uri. Nu avem control asupra acestor cookie-uri și vă recomandăm să consultați politicile de confidențialitate ale terților respectivi.'
        },
        {
          title: '4. Gestionarea Cookie-urilor',
          text: 'Puteți gestiona cookie-urile prin setările browserului dumneavoastră. Puteți șterge cookie-urile existente și configura browserul să blocheze cookie-urile. Rețineți că blocarea cookie-urilor poate afecta funcționalitatea site-ului.'
        },
        {
          title: '5. Consimțământ',
          text: 'La prima vizită pe site, vă vom solicita consimțământul pentru utilizarea cookie-urilor non-esențiale. Puteți modifica oricând preferințele prin banner-ul de cookie-uri sau prin setările browserului.'
        },
        {
          title: '6. Contact',
          text: 'Pentru orice întrebări legate de politica de cookie-uri, ne puteți contacta la: isabela@designinteriorbucuresti.ro.'
        }
      ]
    },
    en: {
      title: 'Cookie Policy',
      lastUpdated: 'Last updated: March 10, 2026',
      sections: [
        {
          title: '1. What are Cookies?',
          text: 'Cookies are small text files stored on your device when you visit a website. They allow the site to recognize your device and remember information about your preferences.'
        },
        {
          title: '2. Cookies Used',
          text: 'We use the following types of cookies: Strictly necessary cookies — essential for the operation of the site, including language preference and cookie consent. Performance cookies — help us understand how the site is used by collecting anonymous data. Functional cookies — remember your preferences for a personalized experience.'
        },
        {
          title: '3. Third-Party Cookies',
          text: 'The site may embed content from third parties (Google Maps, Google Fonts) that may set their own cookies. We have no control over these cookies and recommend consulting the respective third-party privacy policies.'
        },
        {
          title: '4. Managing Cookies',
          text: 'You can manage cookies through your browser settings. You can delete existing cookies and configure your browser to block cookies. Note that blocking cookies may affect site functionality.'
        },
        {
          title: '5. Consent',
          text: 'On your first visit to the site, we will request your consent for non-essential cookies. You can change your preferences at any time through the cookie banner or browser settings.'
        },
        {
          title: '6. Contact',
          text: 'For any questions about the cookie policy, you can contact us at: isabela@designinteriorbucuresti.ro.'
        }
      ]
    },
    es: {
      title: 'Política de Cookies',
      lastUpdated: 'Última actualización: 10 de Marzo de 2026',
      sections: [
        {
          title: '1. ¿Qué son las Cookies?',
          text: 'Las cookies son pequeños archivos de texto almacenados en su dispositivo cuando visita un sitio web. Permiten que el sitio reconozca su dispositivo y recuerde información sobre sus preferencias.'
        },
        {
          title: '2. Cookies Utilizadas',
          text: 'Utilizamos los siguientes tipos de cookies: Cookies estrictamente necesarias — esenciales para el funcionamiento del sitio, incluyendo la preferencia de idioma y el consentimiento de cookies. Cookies de rendimiento — nos ayudan a entender cómo se utiliza el sitio recopilando datos anónimos. Cookies funcionales — recuerdan sus preferencias para una experiencia personalizada.'
        },
        {
          title: '3. Cookies de Terceros',
          text: 'El sitio puede incorporar contenido de terceros (Google Maps, Google Fonts) que pueden establecer sus propias cookies. No tenemos control sobre estas cookies y recomendamos consultar las políticas de privacidad de los terceros respectivos.'
        },
        {
          title: '4. Gestión de Cookies',
          text: 'Puede gestionar las cookies a través de la configuración de su navegador. Puede eliminar las cookies existentes y configurar su navegador para bloquear cookies. Tenga en cuenta que bloquear cookies puede afectar la funcionalidad del sitio.'
        },
        {
          title: '5. Consentimiento',
          text: 'En su primera visita al sitio, le solicitaremos su consentimiento para cookies no esenciales. Puede cambiar sus preferencias en cualquier momento a través del banner de cookies o la configuración del navegador.'
        },
        {
          title: '6. Contacto',
          text: 'Para cualquier pregunta sobre la política de cookies, puede contactarnos en: isabela@designinteriorbucuresti.ro.'
        }
      ]
    }
  };

  const c = content[language];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-beige">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            {c.title}
          </h1>
          <p className="font-inter text-muted-foreground">{c.lastUpdated}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="font-inter text-luxury hover:text-luxury/80 text-sm mb-8 inline-block transition-colors"
          >
            {t('legal.back')}
          </button>

          <div className="space-y-8">
            {c.sections.map((section, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <h2 className="font-playfair text-xl font-bold text-foreground mb-3">{section.title}</h2>
                <p className="font-inter text-muted-foreground leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoliticaCookies;
