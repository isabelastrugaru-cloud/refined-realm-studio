import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { site } from '@/config/sites';
import { ro } from '@/translations/ro';
import { en } from '@/translations/en';
import { es } from '@/translations/es';
import { blogRo } from '@/translations/blog/ro';
import { blogEn } from '@/translations/blog/en';
import { blogEs } from '@/translations/blog/es';

export type Language = 'ro' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

function deepMerge(target: any, source: any): any {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key]) &&
        result[key] && typeof result[key] === 'object' && !Array.isArray(result[key])) {
      result[key] = deepMerge(result[key], source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

const translations: Record<Language, Record<string, any>> = {
  ro: deepMerge(ro, blogRo),
  en: deepMerge(en, blogEn),
  es: deepMerge(es, blogEs),
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved && site.languages.includes(saved) ? saved : site.defaultLanguage;
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }

    if (typeof value === 'string') {
      return value
        .replace(/\{\{city\}\}/g, site.city)
        .replace(/\{\{phone\}\}/g, site.phoneDisplay)
        .replace(/\{\{email\}\}/g, site.email)
        .replace(/\{\{address\}\}/g, site.address.full)
        .replace(/\{\{domain\}\}/g, site.domain)
        .replace(/\{\{country\}\}/g, site.countryLocalized[language] || site.country);
    }

    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
