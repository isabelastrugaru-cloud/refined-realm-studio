import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import tendinte2024 from '@/assets/blog/tendinte-2024.jpg';

const Tendinte2025 = () => {
  return (
    <div className="pt-20">
      <article className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-luxury hover:text-luxury/80 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Înapoi la Blog
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="inline-flex items-center bg-luxury/10 text-luxury px-3 py-1 rounded-full">
                <Tag className="w-3 h-3 mr-1" />
                Tendințe
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                15 Ianuarie 2025
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                10 min citire
              </span>
            </div>
            
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Tendințele în Design Interior pentru 2025
            </h1>
            <p className="font-inter text-lg text-muted-foreground">
              Descoperă cele mai importante tendințe care vor defini designul interior în 2025 — de la culori îndrăznețe la materiale inovatoare.
            </p>
          </header>

          <img 
            src={tendinte2024} 
            alt="Tendințe Design Interior 2025" 
            className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Culorile Anului 2025</h2>
            <p className="text-muted-foreground mb-6">
              Anul 2025 aduce o paletă de culori curajoasă și sofisticată. Tonurile de burgundy profund, verde smarald și albastru nocturn domină spațiile elegante, în timp ce nuanțele calde de terracotta și caramel creează atmosfere primitoare. Accentele metalice în auriu mat și bronz antic completează paleta.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Materialele Vedete</h2>
            <p className="text-muted-foreground mb-6">
              Pietra naturală cu vene dramatice, lemnul reciclat cu textură pronunțată și țesăturile organice sunt materialele preferate. Betonul lustruit revine în forță pentru suprafețe industriale-chic, iar sticla colorată adaugă accente artistice. Materialele bio-compozite câștigă teren pentru sustenabilitate.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Formele și Mobilierul</h2>
            <p className="text-muted-foreground mb-6">
              Mobilierul sculptural cu forme organice și linii fluide definește 2025. Piesele statement cu proporții neconvenționale, canapelele curbe și fotoliile-cocoon creează puncte focale. Designul modular și multifuncțional răspunde nevoilor de flexibilitate ale locuințelor moderne.
            </p>

            <blockquote className="border-l-4 border-luxury pl-6 my-8 italic text-foreground">
              "2025 este anul curajului în design — spațiile care îndrăznesc să fie diferite vor deveni memorabile."
            </blockquote>

            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Tehnologia Inteligentă</h2>
            <p className="text-muted-foreground mb-6">
              Automatizarea discretă și AI-ul integrat în locuințe devine standardul. Iluminatul adaptat circadian, sistemele de climatizare predictive și oglinzile inteligente transformă experiența locuirii. Totul este controlabil prin voce sau gesturi, fără a compromite estetica.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Sustenabilitatea ca Standard</h2>
            <p className="text-muted-foreground mb-6">
              Designul regenerativ depășește sustenabilitatea pasivă. Materialele carbon-negative, vopselele purificatoare de aer și sistemele de reciclare a apei gri devin esențiale. Certificările de mediu nu mai sunt opționale, ci așteptate de clienți informați.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Button variant="luxury" size="lg" asChild>
              <Link to="/contact">Programează o consultație</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Tendinte2025;