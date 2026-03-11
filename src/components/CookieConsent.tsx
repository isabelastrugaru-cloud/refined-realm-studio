import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';


const CookieConsent = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Small delay so it doesn't flash on page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleReset = () => setIsVisible(true);
    window.addEventListener('resetCookieConsent', handleReset);
    return () => window.removeEventListener('resetCookieConsent', handleReset);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const text = {
    ro: {
      message: 'Acest site folosește cookie-uri pentru a îmbunătăți experiența dumneavoastră. Prin continuarea navigării, sunteți de acord cu utilizarea cookie-urilor.',
      accept: 'Accept',
      decline: 'Refuz',
      learnMore: 'Detalii'
    },
    en: {
      message: 'This site uses cookies to improve your experience. By continuing to browse, you agree to the use of cookies.',
      accept: 'Accept',
      decline: 'Decline',
      learnMore: 'Learn more'
    },
    es: {
      message: 'Este sitio utiliza cookies para mejorar su experiencia. Al continuar navegando, acepta el uso de cookies.',
      accept: 'Aceptar',
      decline: 'Rechazar',
      learnMore: 'Más información'
    }
  };

  const t = text[language];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in-up">
      <div className="bg-primary/95 backdrop-blur-md border-t border-white/10 px-4 py-4 sm:py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <p className="font-inter text-sm text-white/90 flex-1 text-center sm:text-left">
            {t.message}{' '}
            <Link to="/cookies" className="text-luxury hover:underline">
              {t.learnMore}
            </Link>
          </p>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
              className="border-luxury/40 text-luxury bg-transparent hover:bg-luxury/10 hover:border-luxury hover:text-white text-sm"
            >
              {t.decline}
            </Button>
            <Button
              variant="luxury"
              size="sm"
              onClick={handleAccept}
              className="text-sm"
            >
              {t.accept}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
