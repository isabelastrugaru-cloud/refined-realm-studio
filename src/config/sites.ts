type Language = 'ro' | 'en' | 'es';

export interface SiteConfig {
  id: string;
  domain: string;
  url: string;
  name: string;
  defaultLanguage: Language;
  languages: Language[];
  city: string;
  country: string;
  countryLocalized: Record<string, string>;
  countryCode: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: {
    street: string;
    locality: string;
    full: string;
  };
  mapsQuery: string;
  mapsLink: string;
  schedule: string[];
  ogImage: string;
  logo: string;
}

const sites: Record<string, SiteConfig> = {
  bucuresti: {
    id: 'bucuresti',
    domain: 'designinteriorbucuresti.ro',
    url: 'https://designinteriorbucuresti.ro',
    name: 'Jubilee Luxury Design',
    defaultLanguage: 'ro',
    languages: ['ro', 'en', 'es'],
    city: 'București',
    country: 'Romania',
    countryLocalized: { ro: 'România', en: 'Romania', es: 'Rumanía' },
    countryCode: 'RO',
    phone: '+40752490173',
    phoneDisplay: '+40 752 490 173',
    email: 'isabela@designinteriorbucuresti.ro',
    address: {
      street: 'Str. Erou Iancu Nicolae 61',
      locality: 'București',
      full: 'Str. Erou Iancu Nicolae 61, București',
    },
    mapsQuery: 'Str.+Erou+Iancu+Nicolae+61,+Bucuresti',
    mapsLink: 'https://maps.app.goo.gl/rYLqVRsjxr6eKiVRA',
    schedule: ['Lun-Vin: 10:00 - 19:00', 'Sâm: 10:00 - 16:00'],
    ogImage: '/og-image.png',
    logo: '/logo.svg',
  },
  marbella: {
    id: 'marbella',
    domain: 'designinteriormarbella.com',
    url: 'https://designinteriormarbella.com',
    name: 'Jubilee Luxury Design',
    defaultLanguage: 'en',
    languages: ['en', 'es'],
    city: 'Marbella',
    country: 'Spain',
    countryLocalized: { ro: 'Spania', en: 'Spain', es: 'España' },
    countryCode: 'ES',
    // Temporary: using București values until Marbella details are provided
    phone: '+40752490173',
    phoneDisplay: '+40 752 490 173',
    email: 'isabela@designinteriormarbella.com',
    address: {
      street: 'Str. Erou Iancu Nicolae 61',
      locality: 'Marbella',
      full: 'Str. Erou Iancu Nicolae 61, Marbella',
    },
    mapsQuery: 'Str.+Erou+Iancu+Nicolae+61,+Bucuresti',
    mapsLink: 'https://maps.app.goo.gl/rYLqVRsjxr6eKiVRA',
    schedule: ['Mon-Fri: 10:00 - 19:00', 'Sat: 10:00 - 16:00'],
    ogImage: '/og-image.png',
    logo: '/logo.svg',
  },
};

const siteId = import.meta.env.VITE_SITE || 'bucuresti';
export const site: SiteConfig = sites[siteId];
