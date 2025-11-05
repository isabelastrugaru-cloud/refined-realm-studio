import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Clock, Star, Sparkles, Home, Heart } from 'lucide-react';
const About = () => {
  const stats = [{
    icon: Sparkles,
    label: 'Ani de experiență',
    value: '13+'
  }, {
    icon: Home,
    label: 'Proiecte finalizate',
    value: '100+'
  }, {
    icon: Heart,
    label: 'Clienți mulțumiți',
    value: '150+'
  }];
  const team = [{
    name: 'Alexandra Popescu',
    role: 'Fondator & Design Director',
    description: 'Cu peste 15 ani de experiență în design interior de lux, Alexandra a studiat la Milano și a lucrat cu cele mai prestigioase studiouri din Europa.',
    credentials: ['Interior Design Institute Milano', 'ASID Member', 'BIID Certified']
  }];
  return <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-beige">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 animate-fade-in leading-tight">
            Povestea <span className="text-luxury">Jubilee Luxury Design</span>
          </h1>
          <p className="font-inter text-base sm:text-lg md:text-xl text-muted-foreground animate-fade-in-up max-w-2xl mx-auto">
            De peste 13 ani, creăm spații exclusive care reflectă personalitatea și visurile clienților noștri
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-8 leading-tight">
                O Viziune Născută din Pasiune
              </h2>
              <div className="space-y-4 md:space-y-6 font-inter text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>Jubilee Luxury Design s-a născut în 2012 dintr-o pasiune pentru frumusețe, funcționalitate și dorința de a transforma fiecare spațiu într-o operă de artă unică.</p>
                <p>
                  Specializându-ne în design interior de lux, am dezvoltat o abordare holistică 
                  care îmbină eleganța atemporală cu inovația contemporană, creând interioare 
                  care depășesc tendințele momentului.
                </p>
                <p>Filozofia noastră se bazează pe ideea că fiecare client este unic, iar casa sa trebuie să reflecte personalitatea, stilul de viață și aspirațiile sale.</p>
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
            {stats.map((stat, index) => <div key={index} className="text-center animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-16 h-16 bg-luxury/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-luxury" />
                </div>
                <div className="font-playfair text-4xl font-bold mb-2">{stat.value}</div>
                <div className="font-inter text-white/80">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">Profesioniști cu experiență, dedicați excelenței în design</p>
          </div>

          {team.map((member, index) => <div key={index} className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              
              <div className="relative animate-scale-in">
                
              </div>
            </div>)}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-premium">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 md:mb-8 animate-fade-in">Filozofia Noastră</h2>
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="animate-fade-in">
              <div className="w-16 h-16 bg-luxury/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-luxury" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Excelență</h3>
              <p className="font-inter text-muted-foreground">
                Standardele noastre înalte se reflectă în fiecare detaliu al proiectelor
              </p>
            </div>
            <div className="animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              <div className="w-16 h-16 bg-luxury/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-luxury" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Personalizare</h3>
              <p className="font-inter text-muted-foreground">
                Fiecare proiect este unic, adaptat perfect nevoilor clientului
              </p>
            </div>
            <div className="animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <div className="w-16 h-16 bg-luxury/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-luxury" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Exclusivitate</h3>
              <p className="font-inter text-muted-foreground">
                Acces la mobilier premium și piese de artă exclusiviste
              </p>
            </div>
          </div>
          <Button variant="luxury" size="lg">
            Începe proiectul tău
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>;
};
export default About;