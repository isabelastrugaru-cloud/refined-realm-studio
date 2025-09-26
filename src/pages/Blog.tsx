import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'Tendințele în Design Interior pentru 2024',
      excerpt: 'Descoperă cele mai noi tendințe în design interior care vor domina în 2024, de la culori și materiale la concepte inovatoare.',
      author: 'Alexandra Popescu',
      date: '15 Martie 2024',
      category: 'Tendințe',
      image: '/src/assets/luxury-bedroom.jpg',
      readTime: '5 min citire'
    },
    {
      id: 2,
      title: 'Cum să Creezi un Spațiu de Lux cu Buget Limitat',
      excerpt: 'Ghid complet pentru transformarea locuinței tale într-un spațiu luxos fără a depăși bugetul planificat.',
      author: 'Alexandra Popescu',
      date: '10 Martie 2024',
      category: 'Sfaturi',
      image: '/src/assets/luxury-kitchen.jpg',
      readTime: '7 min citire'
    },
    {
      id: 3,
      title: 'Importanța Iluminatului în Design Interior',
      excerpt: 'Cum să folosești iluminatul pentru a crea atmosfera perfectă și a evidenția elementele de design din casa ta.',
      author: 'Alexandra Popescu',
      date: '5 Martie 2024',
      category: 'Design',
      image: '/src/assets/hero-interior.jpg',
      readTime: '6 min citire'
    }
  ];

  const categories = ['Toate', 'Tendințe', 'Sfaturi', 'Design', 'Materiale', 'Inspirație'];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-beige">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Blog <span className="text-luxury">Design</span>
          </h1>
          <p className="font-inter text-xl text-muted-foreground animate-fade-in-up">
            Inspirație, sfaturi și tendințe în design interior<br />
            de la experții **Jubilee Luxury Design**
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "luxury" : "outline"}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
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
                    <User className="w-4 h-4 mr-2" />
                    <span>{article.author}</span>
                  </div>
                  
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-3 group-hover:text-luxury transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="font-inter text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    <Button variant="ghost" size="sm" className="group-hover:text-luxury">
                      Citește mai mult
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-16">
            <Button variant="outline" size="lg">
              Încarcă mai multe articole
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Rămâi la curent cu noutățile
          </h2>
          <p className="font-inter text-xl text-white/90 mb-10 animate-fade-in-up">
            Abonează-te la newsletter-ul nostru pentru a primi<br />
            cele mai noi articole și sfaturi de design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Adresa ta de email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button variant="luxury" size="lg">
              Abonează-te
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;