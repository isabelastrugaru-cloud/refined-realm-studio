import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { site } from '@/config/sites';

interface SEOProps {
  title?: string;
  description?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
}

const SITE_URL = site.url;
const SITE_NAME = site.name;

const SEO = ({ title, description, jsonLd }: SEOProps) => {
  const { language } = useLanguage();
  const location = useLocation();
  const canonical = `${SITE_URL}${location.pathname}`;

  const fullTitle = title
    ? `${title} — ${SITE_NAME}`
    : `${SITE_NAME} — Design Interior București`;

  const jsonLdArray = jsonLd
    ? Array.isArray(jsonLd) ? jsonLd : [jsonLd]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />
      {site.languages.map(lang => (
        <link key={lang} rel="alternate" hrefLang={lang} href={canonical} />
      ))}
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
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressCountry: site.countryCode
  },
  image: `${SITE_URL}${site.ogImage}`,
  priceRange: '€€€',
  description: `Studio de design interior de lux în ${site.city} cu peste 13 ani de experiență.`
};
