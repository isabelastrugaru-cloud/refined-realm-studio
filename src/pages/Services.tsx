import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Star, Home, Building, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import { site } from '@/config/sites';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'design-interior-complet',
      icon: Home,
      title: t('services.completeDesignTitle'),
      features: [
        t('services.completeFeature1'),
        t('services.completeFeature2'),
        t('services.completeFeature3'),
        t('services.completeFeature4'),
        t('services.completeFeature5'),
        t('services.completeFeature6')
      ],
      popular: true,
      description: t('services.completeDesignDesc')
    },
    {
      id: 'consultanta-design',
      icon: Building,
      title: t('services.consultancyTitle'),
      features: [
        t('services.consultancyFeature1'),
        t('services.consultancyFeature2'),
        t('services.consultancyFeature3'),
        t('services.consultancyFeature4'),
        t('services.consultancyFeature5'),
        t('services.consultancyFeature6')
      ],
      popular: false,
      description: t('services.consultancyDesc')
    },
    {
      id: 'mobilier-premium',
      icon: ShoppingBag,
      title: t('services.furnitureTitle'),
      features: [
        t('services.furnitureFeature1'),
        t('services.furnitureFeature2'),
        t('services.furnitureFeature3'),
        t('services.furnitureFeature4'),
        t('services.furnitureFeature5'),
        t('services.furnitureFeature6')
      ],
      popular: false,
      description: t('services.furnitureDesc')
    }
  ];

  const process = [
    {
      step: '01',
      title: t('services.step1Title'),
      description: t('services.step1Desc'),
      duration: t('services.duration1'),
    },
    {
      step: '02',
      title: t('services.step2Title'),
      description: t('services.step2Desc'),
      duration: t('services.duration2'),
    },
    {
      step: '03',
      title: t('services.step3Title'),
      description: t('services.step3Desc'),
      duration: t('services.duration3'),
    },
    {
      step: '04',
      title: t('services.step4Title'),
      description: t('services.step4Desc'),
      duration: t('services.duration4'),
    },
  ];

  return (
    <div className="pt-20">
      <SEO
        title={t('seo.servicesTitle')}
        description={t('seo.servicesDesc')}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          provider: { '@id': `${site.url}/#organization` },
          name: 'Design Interior de Lux',
          description: t('seo.servicesDesc'),
          areaServed: { '@type': 'Country', name: 'Romania' }
        }}
      />
      {/* Hero Section */}
      <section className="py-24 bg-gradient-beige">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 animate-fade-in leading-tight">
            {t('services.heroTitle')} <span className="text-luxury">{t('services.heroHighlight')}</span>
          </h1>
          <p className="font-inter text-base sm:text-lg md:text-xl text-muted-foreground animate-fade-in-up max-w-3xl mx-auto leading-relaxed">
            {t('services.heroDescription')}
            <br /><br />
            {t('services.heroDescription2')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className={`relative bg-card rounded-2xl scroll-mt-32 shadow-subtle hover:shadow-luxury transition-all duration-500 p-4 sm:p-6 md:p-8 animate-fade-in ${
                  service.popular ? 'ring-2 ring-luxury lg:transform lg:scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-luxury text-luxury-foreground px-6 py-2 rounded-full font-medium text-sm">
                      {t('services.mostPopular')}
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-luxury/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-luxury" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-luxury mr-3 flex-shrink-0" />
                      <span className="font-inter text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to={`/contact?service=${service.id}`}>
                  <Button
                    variant={service.popular ? "luxury" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    {t('services.requestQuote')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-premium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 animate-fade-in leading-tight">
              {t('services.processTitle')} <span className="text-luxury">{t('services.processHighlight')}</span>
            </h2>
            <p className="font-inter text-base sm:text-lg md:text-xl text-muted-foreground animate-fade-in-up max-w-2xl mx-auto">
              {t('services.processDescription')}
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {process.map((phase, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-luxury/10 rounded-full flex items-center justify-center">
                    <span className="font-playfair text-xl sm:text-2xl font-bold text-luxury-dark">{phase.step}</span>
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-foreground mb-2 md:mb-3">
                    {phase.title}
                  </h3>
                  <p className="font-inter text-base sm:text-lg text-muted-foreground mb-2">
                    {phase.description}
                  </p>
                  <div className="inline-flex items-center bg-white/70 text-foreground px-4 py-2 rounded-full font-medium text-sm">
                    <Star className="w-4 h-4 mr-2" />
                    {t('services.duration')}: {phase.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 animate-fade-in leading-tight">
            {t('services.ctaTitle')}
          </h2>
          <p className="font-inter text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 animate-fade-in-up max-w-2xl mx-auto">
            {t('services.ctaDescription')}
          </p>
          <Link to="/contact">
            <Button variant="luxury" size="lg" className="animate-luxury-glow text-sm sm:text-base">
              {t('services.scheduleFree')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
