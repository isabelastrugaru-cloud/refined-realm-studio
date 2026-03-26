import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO, { localBusinessJsonLd } from '@/components/SEO';
import heroInterior from '@/assets/hero-interior.webp';
import luxuryBedroom from '@/assets/luxury-bedroom.webp';
import luxuryKitchen from '@/assets/luxury-kitchen.webp';

const Home = () => {
  const { t } = useLanguage();

  const projects = [{
    id: 1,
    slug: 'penthouse-herastrau',
    image: luxuryBedroom,
    title: t('home.penthouse'),
    category: t('home.residential')
  }, {
    id: 2,
    slug: 'villa-pipera',
    image: luxuryKitchen,
    title: t('home.villa'),
    category: t('home.residential')
  }, {
    id: 3,
    slug: 'apartament-primaverii',
    image: heroInterior,
    title: t('home.showroom'),
    category: t('home.commercial')
  }];

  return (
    <div className="min-h-screen">
      <SEO
        title={t('seo.homeTitle')}
        description={t('seo.homeDesc')}
        jsonLd={localBusinessJsonLd}
      />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroInterior})`
      }}>
        <div className="absolute inset-0 bg-primary/40"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in-up leading-tight px-4">
            {t('home.heroTitle')}
          </h1>
          <p className="font-inter text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/90 animate-fade-in-up px-4 max-w-2xl mx-auto" style={{
            animationDelay: '0.2s'
          }}>
            {t('home.heroSubtitle')}
          </p>
          <div className="flex justify-center animate-fade-in-up" style={{
            animationDelay: '0.4s'
          }}>
            <Link to="/contact">
              <Button variant="luxury" size="xl" className="group">
                {t('home.heroCta')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                {t('home.aboutTitle')}<br />
                <span className="text-luxury">{t('home.aboutHighlight')}</span>
              </h2>
              <p className="font-inter text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                {t('home.aboutDescription')}
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-luxury rounded-full mr-4"></div>
                  <span className="font-inter text-foreground">{t('home.feature1')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-luxury rounded-full mr-4"></div>
                  <span className="font-inter text-foreground">{t('home.feature2')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-luxury rounded-full mr-4"></div>
                  <span className="font-inter text-foreground">{t('home.feature3')}</span>
                </div>
              </div>
              <Link to="/despre">
                <Button variant="outline" size="lg">
                  {t('home.readStory')}
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4 animate-scale-in">
              <div className="space-y-3 md:space-y-4">
                <img src={luxuryBedroom} alt={t('home.altBedroom')} loading="lazy" className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-subtle hover:shadow-luxury transition-all duration-500" />
                <img src={luxuryKitchen} alt={t('home.altKitchen')} loading="lazy" className="w-full h-36 sm:h-40 md:h-48 object-cover rounded-lg shadow-subtle hover:shadow-luxury transition-all duration-500" />
              </div>
              <div className="mt-6 sm:mt-8">
                <img src={heroInterior} alt={t('home.altLiving')} loading="lazy" className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-lg shadow-subtle hover:shadow-luxury transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-premium">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 animate-fade-in">
              {t('home.projectsTitle')} <span className="text-luxury">{t('home.projectsHighlight')}</span>
            </h2>
            <p className="font-inter text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in px-4">
              {t('home.projectsDescription')}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Link key={project.id} to={`/proiecte/${project.slug}`} className="group block animate-fade-in" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <div className="relative overflow-hidden rounded-lg shadow-subtle group-hover:shadow-luxury transition-all duration-500">
                  <img src={project.image} alt={project.title} loading="lazy" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <p className="font-inter text-sm text-luxury mb-1">{project.category}</p>
                    <h3 className="font-playfair text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/portofoliu">
              <Button variant="luxury" size="lg">
                {t('home.viewPortfolio')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <img src="/isabela-3.webp" alt="Isabela — Designer Jubilee Luxury Design" loading="lazy" className="w-96 h-96 sm:w-[28rem] sm:h-[28rem] md:w-[34rem] md:h-[34rem] object-cover object-[center_20%] rounded-full mx-auto mb-10 shadow-luxury animate-scale-in" />
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 animate-fade-in px-2">
            {t('home.ctaTitle')}
          </h2>

          <Link to="/contact">
            <Button variant="luxury" size="lg" className="animate-luxury-glow text-sm sm:text-base">
              {t('home.heroCta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
