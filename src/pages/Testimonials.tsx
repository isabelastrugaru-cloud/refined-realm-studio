import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Andrei',
      role: 'CEO & Founder',
      company: 'Tech Innovation SRL',
      rating: 5,
      text: 'LuxInterior a transformat complet apartamentul nostru. Atenția la detalii și calitatea materialelor folosite au depășit cu mult așteptările. Echipa a fost profesionistă și s-a respectat perfect cronogramul stabilit.',
      project: 'Penthouse 280mp, Herastrau',
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Alexandru Popescu',
      role: 'Managing Partner',
      company: 'Investment Group',
      rating: 5,
      text: 'Colaborarea cu Alexandra și echipa sa a fost o experiență excepțională. Au reușit să înțeleagă perfect viziunea noastră și să o transpună într-un design care îmbină eleganța cu funcționalitatea.',
      project: 'Villa 450mp, Pipera',
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Elena Gheorghiu',
      role: 'Director General',
      company: 'Luxury Retail',
      rating: 5,
      text: 'Showroom-ul nostru nou este o adevărată operă de artă. Clienții sunt impresionați de eleganța spațiului, iar vânzările au crescut cu 40% de la redesign. Investiția s-a întors rapid.',
      project: 'Showroom 320mp, Center',
      image: '/api/placeholder/80/80'
    },
    {
      id: 4,
      name: 'Radu Ionescu',
      role: 'Antreprenor',
      company: 'Private Investor',
      rating: 5,
      text: 'Am lucrat cu multe firme de design, dar LuxInterior se distinge prin profesionalism și rezultate. Casa noastră este acum exact cum am visat, iar prietenii sunt mereu impresionați.',
      project: 'Casa 380mp, Snagov',
      image: '/api/placeholder/80/80'
    },
    {
      id: 5,
      name: 'Cristina Stanescu',
      role: 'Doctor',
      company: 'Clinica Premium',
      rating: 5,
      text: 'Clinica noastră transmite acum luxul și încrederea pe care le doream. Pacienții se simt confortabili în noul ambient, iar echipa lucrează cu plăcere în spațiile renovate.',
      project: 'Clinica 280mp, Primaverii',
      image: '/api/placeholder/80/80'
    },
    {
      id: 6,
      name: 'Andrei Vasile',
      role: 'Arhitect',
      company: 'Design Studio',
      rating: 5,
      text: 'Ca arhitect, am standarde foarte înalte. LuxInterior a depășit toate așteptările prin creativitate, execuție impecabilă și respectul pentru arhitectura existentă.',
      project: 'Apartament 200mp, Aviatorilor',
      image: '/api/placeholder/80/80'
    }
  ];

  const stats = [
    { value: '150+', label: 'Clienți Mulțumiți' },
    { value: '98%', label: 'Satisfacție Client' },
    { value: '4.9/5', label: 'Rating Mediu' },
    { value: '200+', label: 'Proiecte Finalizate' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-beige">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Ce Spun <span className="text-luxury">Clienții</span>
          </h1>
          <p className="font-inter text-xl text-muted-foreground animate-fade-in-up">
            Mărturiile celor care și-au transformat spațiile<br />
            alături de echipa LuxInterior Studio
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-playfair text-4xl md:text-5xl font-bold text-luxury mb-2">
                  {stat.value}
                </div>
                <div className="font-inter text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="bg-card p-8 rounded-2xl shadow-subtle hover:shadow-luxury transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-luxury text-luxury" />
                  ))}
                </div>

                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-luxury/30" />
                </div>

                {/* Testimonial Text */}
                <p className="font-inter text-foreground leading-relaxed mb-8 text-lg">
                  "{testimonial.text}"
                </p>

                {/* Project Info */}
                <div className="bg-premium p-4 rounded-lg mb-6">
                  <p className="font-inter text-sm text-muted-foreground">
                    Proiect: <span className="text-luxury font-medium">{testimonial.project}</span>
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-luxury/10 rounded-full flex items-center justify-center mr-4">
                    <span className="font-playfair font-bold text-luxury text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="font-inter text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-24 bg-premium">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in">
            Testimoniale <span className="text-luxury">Video</span>
          </h2>
          <p className="font-inter text-xl text-muted-foreground mb-12 animate-fade-in-up">
            Ascultă direct de la clienții noștri experiența colaborării cu LuxInterior
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Maria & Alexandru', project: 'Penthouse Herastrau' },
              { name: 'Elena Gheorghiu', project: 'Showroom Premium' },
            ].map((video, index) => (
              <div 
                key={index} 
                className="relative aspect-video bg-gradient-hero rounded-2xl shadow-luxury overflow-hidden group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-luxury/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-playfair text-xl font-bold mb-1">{video.name}</h3>
                  <p className="font-inter text-white/80">{video.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Process */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-8 animate-fade-in">
            De Ce Clienții <span className="text-luxury">Ne Aleg</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Transparență Totală',
                description: 'Comunicare constantă și raportare regulată pe parcursul întregului proiect',
                icon: '🔍'
              },
              {
                title: 'Calitate Garantată',
                description: 'Materiale premium și execuție impecabilă cu garanție de 2 ani',
                icon: '⭐'
              },
              {
                title: 'Servicii Complete',
                description: 'De la concept la predarea cheilor, ne ocupăm de fiecare detaliu',
                icon: '🏆'
              }
            ].map((reason, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
                  {reason.title}
                </h3>
                <p className="font-inter text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          <Button variant="luxury" size="lg">
            Alătură-te clienților mulțumiți
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Pregătit să îți transformi spațiul?
          </h2>
          <p className="font-inter text-xl text-white/90 mb-10 animate-fade-in-up">
            Alătură-te celor peste 150 de clienți mulțumiți<br />
            și descoperă diferența LuxInterior
          </p>
          <Button variant="luxury" size="xl" className="animate-luxury-glow">
            Începe cu o consultație gratuită
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;