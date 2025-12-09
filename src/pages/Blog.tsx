import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

import tendinte2024 from '@/assets/blog/tendinte-2024.jpg';
import minimalism from '@/assets/blog/minimalismul-scandinav.jpg';
import biofil from '@/assets/blog/design-biofil.jpg';
import buget from '@/assets/blog/buget-limitat.jpg';
import spatii from '@/assets/blog/spatii-mici.jpg';
import culori from '@/assets/blog/psihologia-culorilor.jpg';
import iluminat from '@/assets/blog/iluminat-perfect.jpg';
import openspace from '@/assets/blog/open-space.jpg';
import artdeco from '@/assets/blog/art-deco.jpg';
import materiale from '@/assets/blog/materiale-naturale.jpg';
import finisaje from '@/assets/blog/finisaje-premium.jpg';
import ecologic from '@/assets/blog/materiale-ecologice.jpg';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Toate');

  const articles = [
    {
      id: 1,
      title: 'Tendințele în Design Interior pentru 2025',
      excerpt: 'Descoperă cele mai importante tendințe care vor defini designul interior în 2025 — de la culori îndrăznețe la materiale inovatoare.',
      date: '15 Ianuarie 2025',
      category: 'Tendințe',
      image: tendinte2024,
      readTime: '10 min citire',
      link: '/blog/tendinte-2025'
    },
    {
      id: 2,
      title: 'Casa Inteligentă în 2025: Design și Tehnologie',
      excerpt: 'Cum să integrezi tehnologia smart în designul interior fără a compromite estetica și confortul.',
      date: '22 Ianuarie 2025',
      category: 'Tendințe',
      image: iluminat,
      readTime: '8 min citire',
      link: '/blog/casa-inteligenta-2025'
    },
    {
      id: 3,
      title: 'Culori și Texturi Dominante în 2025',
      excerpt: 'Paleta cromatică și texturile care vor transforma interioarele în 2025 — de la tonuri pământii la accente metalice.',
      date: '5 Februarie 2025',
      category: 'Tendințe',
      image: culori,
      readTime: '7 min citire',
      link: '/blog/culori-texturi-2025'
    },
    {
      id: 4,
      title: 'Cum să Creezi un Spațiu de Lux cu Buget Limitat',
      excerpt: 'Ghid complet pentru transformarea locuinței tale într-un spațiu luxos fără a depăși bugetul planificat.',
      date: '10 Martie 2024',
      category: 'Sfaturi',
      image: buget,
      readTime: '9 min citire',
      link: '/blog/buget-limitat'
    },
    {
      id: 5,
      title: 'Maximizarea Spațiilor Mici: Trucuri și Soluții',
      excerpt: 'Cum să transformi un apartament mic într-un spațiu funcțional, luminos și elegant.',
      date: '6 Martie 2024',
      category: 'Sfaturi',
      image: spatii,
      readTime: '7 min citire',
      link: '/blog/spatii-mici'
    },
    {
      id: 6,
      title: 'Psihologia Culorilor în Design Interior',
      excerpt: 'Cum influențează culorile starea ta de spirit și cum să le folosești strategic în fiecare cameră.',
      date: '2 Martie 2024',
      category: 'Sfaturi',
      image: culori,
      readTime: '8 min citire',
      link: '/blog/psihologia-culorilor'
    },
    {
      id: 7,
      title: 'Ghidul Complet pentru Iluminatul Perfect',
      excerpt: 'Cum să folosești iluminatul pentru a crea atmosfera perfectă și a evidenția elementele de design.',
      date: '28 Februarie 2024',
      category: 'Design',
      image: iluminat,
      readTime: '7 min citire',
      link: '/blog/iluminat-perfect'
    },
    {
      id: 8,
      title: 'Designul Open Space: Spațiu Fluid și Funcțional',
      excerpt: 'Cum să creezi un open space care să fie atât generos, cât și intim, atât social, cât și privat.',
      date: '24 Februarie 2024',
      category: 'Design',
      image: openspace,
      readTime: '6 min citire',
      link: '/blog/open-space'
    },
    {
      id: 9,
      title: 'Art Deco: Glamour-ul Anilor \'20 în Casa Modernă',
      excerpt: 'Cum să integrezi eleganța timeless a Art Deco în designul contemporan.',
      date: '20 Februarie 2024',
      category: 'Design',
      image: artdeco,
      readTime: '8 min citire',
      link: '/blog/art-deco'
    },
    {
      id: 10,
      title: 'Ghidul Materialelor Naturale Premium',
      excerpt: 'Tot ce trebuie să știi despre marmură, lemn masiv, piatră naturală și alte materiale de lux.',
      date: '18 Februarie 2024',
      category: 'Materiale',
      image: materiale,
      readTime: '7 min citire',
      link: '/blog/materiale-naturale'
    },
    {
      id: 11,
      title: 'Finisajele Premium: Investiție în Durabilitate',
      excerpt: 'Cum să alegi finisajele potrivite pentru fiecare cameră și buget.',
      date: '14 Februarie 2024',
      category: 'Materiale',
      image: finisaje,
      readTime: '6 min citire',
      link: '/blog/finisaje-premium'
    },
    {
      id: 12,
      title: 'Materiale Ecologice: Lux Sustenabil',
      excerpt: 'Designul responsabil fără compromisuri estetice sau de calitate.',
      date: '10 Februarie 2024',
      category: 'Materiale',
      image: ecologic,
      readTime: '7 min citire',
      link: '/blog/materiale-ecologice'
    }
  ];

  const categories = ['Toate', 'Tendințe', 'Sfaturi', 'Design', 'Materiale'];

  const filteredArticles = selectedCategory === 'Toate' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-beige">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 animate-fade-in leading-tight">
            Blog <span className="text-luxury">Design</span>
          </h2>
          <p className="font-inter text-base sm:text-lg md:text-xl text-muted-foreground animate-fade-in-up max-w-2xl mx-auto">
            Inspirație, sfaturi și tendințe în design interior de la experții Design Interior București
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 md:py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category ? "luxury" : "outline"}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
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
              <article
                key={article.id}
                className="bg-card rounded-2xl shadow-subtle hover:shadow-luxury transition-all duration-500 overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center bg-luxury/90 text-luxury-foreground px-3 py-1 rounded-full text-sm font-medium">
                      <Tag className="w-3 h-3 mr-1" />
                      {article.category}
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
                  
                  <Link to={article.link}>
                    <Button variant="ghost" size="sm" className="group-hover:text-luxury">
                      Citește mai mult
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 animate-fade-in leading-tight">
            Rămâi la curent cu noutățile
          </h2>
          <p className="font-inter text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 animate-fade-in-up max-w-2xl mx-auto">
            Abonează-te la newsletter-ul nostru pentru a primi cele mai noi articole și sfaturi de design.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Adresa ta de email"
              className="flex-1 px-4 py-3 text-sm sm:text-base rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button variant="luxury" size="lg" className="text-sm sm:text-base">
              Abonează-te
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;