import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
}

const SITE_URL = 'https://designinteriorbucuresti.ro';
const SITE_NAME = 'Jubilee Luxury Design';

const SEO = ({ title, description, jsonLd }: SEOProps) => {
  const { language } = useLanguage();
  const location = useLocation();
  const canonical = `${SITE_URL}${location.pathname}`;

  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Design Interior București`;

  const jsonLdArray = jsonLd
    ? Array.isArray(jsonLd) ? jsonLd : [jsonLd]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="ro" href={canonical} />
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="es" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={language === 'ro' ? 'ro_RO' : language === 'es' ? 'es_ES' : 'en_US'} />
      {jsonLdArray.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  telephone: '+40752490173',
  email: 'office@designinteriorbucuresti.ro',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Str. Erou Iancu Nicolae 61',
    addressLocality: 'București',
    addressCountry: 'RO'
  },
  image: `${SITE_URL}/og-image.png`,
  priceRange: '€€€',
  description: 'Studio de design interior de lux în București cu peste 13 ani de experiență.'
};
