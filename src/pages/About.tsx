import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Clock, Star, Sparkles, Home, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';

const About = () => {
  const { t } = useLanguage();

  const stats = [{
    icon: Sparkles,
    label: t('about.yearsExperience'),
    value: '13+'
  }, {
    icon: Home,
    label: t('about.completedProjects'),
    value: '100+'
  }, {
    icon: Heart,
    label: t('about.happyClients'),
    value: '150+'
  }];

  return (
    <div className="pt-20">
      <SEO title={t('seo.aboutTitle')} description={t('seo.aboutDesc')} />
      {/* Hero Section */}
      <section className="py-24 bg-gradient-beige">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 animate-fade-in leading-tight">
            {t('about.heroTitle')} <span className="text-luxury">{t('about.heroHighlight')}</span>
          </h1>
          <p className="font-inter text-base sm:text-lg md:text-xl text-muted-foreground animate-fade-in-up max-w-2xl mx-auto">
            {t('about.heroDescription')}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-8 leading-tight">
                {t('about.storyTitle')}
              </h2>
              <div className="space-y-4 md:space-y-6 font-inter text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>{t('about.storyP1')}</p>
                <p>{t('about.storyP2')}</p>
                <p>{t('about.storyP3')}</p>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square bg-premium rounded-lg shadow-luxury p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-12 h-12 text-luxury-foreground" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                    Excellence Award
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    Best Luxury Interior Design Studio 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <div className="w-16 h-16 bg-luxury/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-luxury" />
                </div>
                <div className="font-playfair text-4xl font-bold mb-2">{stat.value}</div>
                <div className="font-inter text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-premium">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 md:mb-8 animate-fade-in">
            {t('about.philosophyTitle')}
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="animate-fade-in">
              <div className="w-16 h-16 bg-luxury/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-luxury" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">{t('about.excellence')}</h3>
              <p className="font-inter text-muted-foreground">
                {t('about.excellenceDesc')}
              </p>
            </div>
            <div className="animate-fade-in" style={{
              animationDelay: '0.1s'
            }}>
              <div className="w-16 h-16 bg-luxury/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-luxury" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">{t('about.personalization')}</h3>
              <p className="font-inter text-muted-foreground">
                {t('about.personalizationDesc')}
              </p>
            </div>
            <div className="animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              <div className="w-16 h-16 bg-luxury/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-luxury" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">{t('about.exclusivity')}</h3>
              <p className="font-inter text-muted-foreground">
                {t('about.exclusivityDesc')}
              </p>
            </div>
          </div>
          <Link to="/contact">
            <Button variant="luxury" size="lg">
              {t('about.startProject')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
