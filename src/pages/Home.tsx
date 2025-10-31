import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import heroInterior from '@/assets/hero-interior.jpg';
import luxuryBedroom from '@/assets/luxury-bedroom.jpg';
import luxuryKitchen from '@/assets/luxury-kitchen.jpg';
const Home = () => {
  const projects = [{
    id: 1,
    image: luxuryBedroom,
    title: 'Penthouse Exclusivist',
    category: 'Rezidențial'
  }, {
    id: 2,
    image: luxuryKitchen,
    title: 'Villa Contemporană',
    category: 'Rezidențial'
  }, {
    id: 3,
    image: heroInterior,
    title: 'Showroom Premium',
    category: 'Comercial'
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroInterior})`
    }}>
        <div className="absolute inset-0 bg-primary/40"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Design Interior București<br />
            <span className="text-luxury">de Lux</span>
          </h1>
          <p className="font-inter text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            Transformăm spațiile în opere de artă prin eleganță,<br />
            rafinament și atenție la detalii
          </p>
          <div className="flex justify-center animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            <Button variant="luxury" size="xl" className="group">
              Programează o consultație gratuită
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
                Excelența în<br />
                <span className="text-luxury">Design Interior</span>
              </h2>
              <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">Cu peste 5 ani de experiență în crearea de spații exclusive, Jubilee Luxury Design îmbină artă, funcționalitate și eleganță pentru a realiza interioare care depășesc așteptările.</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-luxury rounded-full mr-4"></div>
                  <span className="font-inter text-foreground">Design personalizat și exclusivist</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-luxury rounded-full mr-4"></div>
                  <span className="font-inter text-foreground">Materiale premium și mobilier de lux</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-luxury rounded-full mr-4"></div>
                  <span className="font-inter text-foreground">Servicii complete turnkey</span>
                </div>
              </div>
              <Button variant="outline" size="lg">
                Citește povestea noastră
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <div className="space-y-4">
                <img src={luxuryBedroom} alt="Interior design luxury bedroom" className="w-full h-64 object-cover rounded-lg shadow-subtle hover:shadow-luxury transition-all duration-500" />
                <img src={luxuryKitchen} alt="Luxury kitchen interior design" className="w-full h-48 object-cover rounded-lg shadow-subtle hover:shadow-luxury transition-all duration-500" />
              </div>
              <div className="mt-8">
                <img src={heroInterior} alt="Modern luxury interior design living room" className="w-full h-80 object-cover rounded-lg shadow-subtle hover:shadow-luxury transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-premium">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Proiecte <span className="text-luxury">Exclusive</span>
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Fiecare proiect este o poveste unică de eleganță și rafinament,
              creată special pentru clienții noștri exigenți
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => <div key={project.id} className="group cursor-pointer animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="relative overflow-hidden rounded-lg shadow-subtle group-hover:shadow-luxury transition-all duration-500">
                  <img src={project.image} alt={project.title} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <p className="font-inter text-sm text-luxury mb-1">{project.category}</p>
                    <h3 className="font-playfair text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>)}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="luxury" size="lg">
              Vezi tot portofoliul
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Pregătit să îți transformi spațiul?
          </h2>
          
          <Button variant="luxury" size="xl" className="animate-luxury-glow">
            Programează o consultație gratuită
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>
    </div>;
};
export default Home;