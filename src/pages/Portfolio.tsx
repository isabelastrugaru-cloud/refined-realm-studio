import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroInterior from '@/assets/hero-interior.jpg';
import luxuryBedroom from '@/assets/luxury-bedroom.jpg';
import luxuryKitchen from '@/assets/luxury-kitchen.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Toate');
  
  const filters = ['Toate', 'Rezidențial', 'Comercial', 'Penthouse', 'Villa'];
  
  const projects = [
    {
      id: 1,
      title: 'Penthouse Exclusivist Herastrau',
      category: 'Penthouse',
      area: '280 mp',
      year: '2023',
      image: heroInterior,
      description: 'Design contemporan cu accente aurii, mobilier italian premium și vedere panoramică.',
    },
    {
      id: 2,
      title: 'Villa Moderna Pipera',
      category: 'Villa',
      area: '450 mp',
      year: '2023',
      image: luxuryBedroom,
      description: 'Eleganță atemporală cu materiale naturale și tehnologie smart home integrată.',
    },
    {
      id: 3,
      title: 'Apartament de Lux Primaverii',
      category: 'Rezidențial',
      area: '180 mp',
      year: '2022',
      image: luxuryKitchen,
      description: 'Combinația perfectă între clasic și modern, cu atenție la fiecare detaliu.',
    },
  ];

  const filteredProjects = activeFilter === 'Toate' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-beige">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 animate-fade-in leading-tight">
            Portofoliu Premium
          </h1>
          <p className="font-inter text-base sm:text-lg md:text-xl text-muted-foreground animate-fade-in-up max-w-2xl mx-auto">
            Colecția noastră de proiecte exclusive care redefinesc standardele de eleganță și rafinament
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 md:py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "luxury" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="transition-all duration-300"
              >
                <Filter className="mr-2 h-4 w-4" />
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-subtle hover:shadow-luxury transition-all duration-700">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Project Info Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center gap-4 text-sm mb-2">
                      <span className="bg-luxury/20 backdrop-blur-sm px-3 py-1 rounded-full text-luxury">
                        {project.category}
                      </span>
                      <span>{project.area}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-playfair text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="font-inter text-white/90 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <Link to={`/proiecte/${project.id === 1 ? 'penthouse-herastrau' : project.id === 2 ? 'villa-pipera' : 'apartament-primaverii'}`}>
                      <Button variant="outline-light" size="sm" className="self-start">
                        Vezi detalii
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Project Info Below Image */}
                <div className="pt-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                    <span className="bg-luxury/10 text-luxury px-3 py-1 rounded-full font-medium">
                      {project.category}
                    </span>
                    <span>{project.area}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-2 group-hover:text-luxury transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-premium">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 md:mb-8 animate-fade-in">
            Procesul Nostru
          </h2>
          <p className="font-inter text-base sm:text-lg md:text-xl text-muted-foreground mb-12 md:mb-16 animate-fade-in-up max-w-2xl mx-auto">
            Fiecare proiect urmează un proces riguros de la concept la finalizare
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: '01', title: 'Consultația', description: 'Analiză detaliată a nevoilor și visurilor tale' },
              { step: '02', title: 'Conceptul', description: 'Dezvoltarea unei viziuni unice și personalizate' },
              { step: '03', title: 'Execuția', description: 'Implementare precisă cu materiale premium' },
              { step: '04', title: 'Finalizarea', description: 'Predarea unui spațiu perfect și funcțional' },
            ].map((phase, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-luxury/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-playfair text-2xl font-bold text-luxury">{phase.step}</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground mb-3">{phase.title}</h3>
                <p className="font-inter text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <Button variant="luxury" size="lg">
              Începe proiectul tău
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;