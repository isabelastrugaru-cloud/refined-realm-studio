import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Star, Home, Building, ShoppingBag } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Design Interior Complet',
      features: [
        'Concept și planuri detaliate',
        'Mobilier și decorațiuni premium',
        'Supraveghere completă execuție',
        'Garanție 2 ani pentru toate lucrările',
        'Materiale și finisaje de lux',
        'Consultanță post-finalizare'
      ],
      popular: true,
      description: 'Serviciul nostru premium pentru transformarea completă a spațiului, de la concept la cheie în mână.'
    },
    {
      icon: Building,
      title: 'Consultanță Design',
      features: [
        'Analiză detaliată a spațiului',
        'Concept de design personalizat',
        'Lista de materiale și mobilier',
        'Planuri tehnice detaliate',
        'Suport pentru implementare',
        '3 revizii incluse'
      ],
      popular: false,
      description: 'Perfect pentru clienții care doresc să implementeze proiectul prin resurse proprii.'
    },
    {
      icon: ShoppingBag,
      title: 'Achiziție Mobilier Premium',
      features: [
        'Acces la branduri exclusive',
        'Mobilier italian și european',
        'Piese de artă și accesorii',
        'Negociere preturi preferentiale',
        'Livrare și instalare inclusă',
        'Garantie extinsă'
      ],
      popular: false,
      description: 'Serviciu exclusiv de achiziție mobilier și accesorii de lux de la partenerii noștri selectați.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultația Inițială',
      description: 'Întâlnire la domiciliu pentru analiza spațiului și înțelegerea nevoilor tale',
      duration: '2-3 ore',
    },
    {
      step: '02',
      title: 'Dezvoltarea Conceptului',
      description: 'Crearea conceptului de design și prezentarea propunerii detaliate',
      duration: '1-2 săptămâni',
    },
    {
      step: '03',
      title: 'Planificare Detaliată',
      description: 'Planuri tehnice, lista de materiale și cronograma de implementare',
      duration: '1 săptămână',
    },
    {
      step: '04',
      title: 'Implementarea',
      description: 'Execuția proiectului cu supravegherea constantă a echipei noastre',
      duration: '4-12 săptămâni',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-beige">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Servicii <span className="text-luxury">Premium</span>
          </h1>
          <p className="font-inter text-xl text-muted-foreground animate-fade-in-up max-w-3xl mx-auto leading-relaxed">
            Experiența noastră începe acolo unde visul tău prinde formă.<br />
            Fiecare proiect este tratat cu atenția și eleganța pe care le merită, prin pachete complete de servicii, gândite să te însoțească în fiecare etapă — de la primele schițe până la ultimul detaliu de decor.
            <br /><br />
            Totul este personalizat: ritmul tău, stilul tău, povestea ta.<br />
            Rezultatul? Un spațiu care nu doar arată bine, ci te face să simți că ești acasă.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`relative bg-card rounded-2xl shadow-subtle hover:shadow-luxury transition-all duration-500 p-8 animate-fade-in ${
                  service.popular ? 'ring-2 ring-luxury transform scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-luxury text-luxury-foreground px-6 py-2 rounded-full font-medium text-sm">
                      Cel mai popular
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

                <Button 
                  variant={service.popular ? "luxury" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  Solicită ofertă
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-premium">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Procesul Nostru de <span className="text-luxury">Lucru</span>
            </h2>
            <p className="font-inter text-xl text-muted-foreground animate-fade-in-up">
              Un proces structurat și transparent pentru rezultate excepționale
            </p>
          </div>

          <div className="space-y-12">
            {process.map((phase, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row items-center gap-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-luxury/20 rounded-full flex items-center justify-center">
                    <span className="font-playfair text-2xl font-bold text-luxury">{phase.step}</span>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">
                    {phase.title}
                  </h3>
                  <p className="font-inter text-lg text-muted-foreground mb-2">
                    {phase.description}
                  </p>
                  <div className="inline-flex items-center bg-luxury/10 text-luxury px-4 py-2 rounded-full font-medium text-sm">
                    <Star className="w-4 h-4 mr-2" />
                    Durată: {phase.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Garanțiile <span className="text-luxury font-bold">Noastre</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Garanție Calitate',
                description: '2 ani garanție completă pentru toate lucrările și materialele utilizate',
                icon: '🛡️'
              },
              {
                title: 'Respectarea Bugetului',
                description: 'Preț fix stabilit de la început, fără costuri ascunse sau suplimentare',
                icon: '💰'
              },
              {
                title: 'Livrare la Timp',
                description: 'Respectarea programului stabilit sau compensare pentru întârzieri',
                icon: '⏰'
              }
            ].map((guarantee, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-card rounded-xl shadow-subtle animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{guarantee.icon}</div>
                <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
                  {guarantee.title}
                </h3>
                <p className="font-inter text-muted-foreground">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Pregătit să Începi Proiectul?
          </h2>
          <p className="font-inter text-xl text-white/90 mb-10 animate-fade-in-up">
            Consultația inițială este gratuită și fără obligații.<br />
            Descoperă cum putem transforma spațiul tău.
          </p>
          <Button variant="luxury" size="xl" className="animate-luxury-glow">
            Programează consultația gratuită
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;