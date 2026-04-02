import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';

import tendinte2024 from '@/assets/blog/tendinte-2024.webp';
import minimalism from '@/assets/blog/minimalismul-scandinav.webp';
import biofil from '@/assets/blog/design-biofil.webp';
import buget from '@/assets/blog/buget-limitat.webp';
import spatii from '@/assets/blog/spatii-mici.webp';
import culori from '@/assets/blog/psihologia-culorilor.webp';
import iluminat from '@/assets/blog/iluminat-perfect.webp';
import openspace from '@/assets/blog/open-space.webp';
import artdeco from '@/assets/blog/art-deco.webp';
import materiale from '@/assets/blog/materiale-naturale.webp';
import finisaje from '@/assets/blog/finisaje-premium.webp';
import ecologic from '@/assets/blog/materiale-ecologice.webp';

const Blog = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = [
    { id: 1, translationKey: 'tendinte2025', category: 'trends', image: tendinte2024, readTime: `10 ${t('blog.readTime')}`, link: '/blog/tendinte-2025' },
    { id: 2, translationKey: 'casaInteligenta2025', category: 'trends', image: iluminat, readTime: `8 ${t('blog.readTime')}`, link: '/blog/casa-inteligenta-2025' },
    { id: 3, translationKey: 'culoriTexturi2025', category: 'trends', image: culori, readTime: `7 ${t('blog.readTime')}`, link: '/blog/culori-texturi-2025' },
    { id: 4, translationKey: 'bugetLimitat', category: 'tips', image: buget, readTime: `9 ${t('blog.readTime')}`, link: '/blog/buget-limitat' },
    { id: 5, translationKey: 'spatiiMici', category: 'tips', image: spatii, readTime: `7 ${t('blog.readTime')}`, link: '/blog/spatii-mici' },
    { id: 6, translationKey: 'psihologiaCulorilor', category: 'tips', image: culori, readTime: `8 ${t('blog.readTime')}`, link: '/blog/psihologia-culorilor' },
    { id: 7, translationKey: 'iluminatPerfect', category: 'design', image: iluminat, readTime: `7 ${t('blog.readTime')}`, link: '/blog/iluminat-perfect' },
    { id: 8, translationKey: 'openSpace', category: 'design', image: openspace, readTime: `6 ${t('blog.readTime')}`, link: '/blog/open-space' },
    { id: 9, translationKey: 'artDeco', category: 'design', image: artdeco, readTime: `8 ${t('blog.readTime')}`, link: '/blog/art-deco' },
    { id: 10, translationKey: 'materialeNaturale', category: 'materials', image: materiale, readTime: `7 ${t('blog.readTime')}`, link: '/blog/materiale-naturale' },
    { id: 11, translationKey: 'finisajePremium', category: 'materials', image: finisaje, readTime: `6 ${t('blog.readTime')}`, link: '/blog/finisaje-premium' },
    { id: 12, translationKey: 'materialeEcologice', category: 'materials', image: ecologic, readTime: `7 ${t('blog.readTime')}`, link: '/blog/materiale-ecologice' },
  ].map(a => ({
    ...a,
    title: t(`blog.articles.${a.translationKey}.title`),
    excerpt: t(`blog.articles.${a.translationKey}.excerpt`),
    date: t(`blog.articles.${a.translationKey}.date`),
  }));

  const categoryKeys = ['all', 'trends', 'tips', 'design', 'materials'];

  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="pt-20">
      <SEO title={t('seo.blogTitle')} description={t('seo.blogDesc')} />
      {/* Hero Section */}
      <section className="py-24 bg-gradient-beige">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 animate-fade-in leading-tight">
            {t('blog.heroTitle')} <span className="text-luxury">{t('blog.heroHighlight')}</span>
          </h1>
          <p className="font-inter text-base sm:text-lg md:text-xl text-muted-foreground animate-fade-in-up max-w-2xl mx-auto">
            {t('blog.heroDescription')}
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 md:py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {categoryKeys.map((key, index) => (
              <Button
                key={key}
                variant={selectedCategory === key ? "luxury" : "outline"}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedCategory(key)}
              >
                {t(`blog.${key}`)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredArticles.map((article, index) => (
              <Link
                key={article.id}
                to={article.link}
                className="block bg-card rounded-2xl shadow-subtle hover:shadow-luxury transition-all duration-500 overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <article>
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center bg-luxury/90 text-luxury-foreground px-3 py-1 rounded-full text-sm font-medium">
                        <Tag className="w-3 h-3 mr-1" />
                        {t(`blog.${article.category}`)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-playfair text-xl font-bold text-foreground mb-3 group-hover:text-luxury transition-colors">
                      {article.title}
                    </h3>

                    <p className="font-inter text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <Button variant="ghost" size="sm" className="group-hover:text-foreground" tabIndex={-1}>
                      {t('blog.readMore')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 animate-fade-in leading-tight">
            {t('blog.newsletterTitle')}
          </h2>
          <p className="font-inter text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 animate-fade-in-up max-w-2xl mx-auto">
            {t('blog.newsletterDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('blog.emailPlaceholder')}
              aria-label="Email newsletter"
              className="flex-1 px-4 py-3 text-sm sm:text-base rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button variant="luxury" size="lg" className="text-sm sm:text-base">
              {t('blog.subscribe')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
