import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Clock, Star } from 'lucide-react';
const About = () => {
  const stats = [{
    icon: Award,
    label: 'Ani de experiență',
    value: '15+'
  }, {
    icon: Users,
    label: 'Proiecte finalizate',
    value: '200+'
  }, {
    icon: Clock,
    label: 'Clienți mulțumiți',
    value: '150+'
  }, {
    icon: Star,
    label: 'Premii internaționale',
    value: '12'
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
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Povestea <span className="text-luxury">Jubilee Luxury Interior</span>
          </h1>
          <p className="font-inter text-xl text-muted-foreground animate-fade-in-up">
            De peste un deceniu, creăm spații exclusive care reflectă<br />
            personalitatea și visurile clienților noștri
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-8">
                O Viziune Născută din Pasiune
              </h2>
              <div className="space-y-6 font-inter text-lg text-muted-foreground leading-relaxed">
                <p>LuxInterior Studio s-a născut în 2022 dintr-o pasiune pentru frumusețe, funcționalitate și dorința de a transforma fiecare spațiu într-o operă de artă unică.</p>
                <p>
                  Specializându-ne în design interior de lux, am dezvoltat o abordare holistică 
                  care îmbină eleganța atemporală cu inovația contemporană, creând interioare 
                  care depășesc tendințele momentului.
                </p>
                <p>
                  Filosofia noastră se bazează pe ideea că fiecare client este unic, 
                  iar casa sa trebuie să reflecte personalitatea, stilul de viață și aspirațiile sale.
                </p>
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
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
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Echipa <span className="text-luxury">Premium</span>
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
              Profesioniști cu experiență internațională, dedicați excelentei în design
            </p>
          </div>

          {team.map((member, index) => <div key={index} className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="animate-fade-in">
                <h3 className="font-playfair text-3xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="font-inter text-xl text-luxury mb-6">{member.role}</p>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-8">
                  {member.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-inter font-semibold text-foreground mb-3">
                    Acreditări & Certificări:
                  </h4>
                  {member.credentials.map((credential, idx) => <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-luxury rounded-full mr-3"></div>
                      <span className="font-inter text-muted-foreground">{credential}</span>
                    </div>)}
                </div>
              </div>
              <div className="relative animate-scale-in">
                <div className="aspect-[4/5] bg-gradient-beige rounded-lg shadow-luxury"></div>
              </div>
            </div>)}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-premium">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in">
            Filosofia Noastră
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
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