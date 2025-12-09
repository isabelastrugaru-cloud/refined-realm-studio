import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import iluminat from '@/assets/blog/iluminat-perfect.jpg';

const CasaInteligenta2025 = () => {
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
                22 Ianuarie 2025
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                8 min citire
              </span>
            </div>
            
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Casa Inteligentă în 2025: Design și Tehnologie
            </h1>
            <p className="font-inter text-lg text-muted-foreground">
              Cum să integrezi tehnologia smart în designul interior fără a compromite estetica și confortul.
            </p>
          </header>

          <img 
            src={iluminat} 
            alt="Casa Inteligentă 2025" 
            className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Iluminatul Circadian</h2>
            <p className="text-muted-foreground mb-6">
              Sistemele de iluminat din 2025 se adaptează automat la ritmul circadian, ajustând temperatura culorii și intensitatea în funcție de ora zilei. Dimineața, lumina albăstruie stimulează energia, iar seara, tonurile calde de chihlimbar pregătesc corpul pentru odihnă.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Controlul Invizibil</h2>
            <p className="text-muted-foreground mb-6">
              Întrerupătoarele și termostatul vizibil devin relicve. În 2025, controlul se face prin gesturi, voce sau aplicații discrete. Senzorii de prezență anticipează nevoile, iar AI-ul învață preferințele familiei pentru a crea scenarii personalizate automat.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Audio-Video Integrat</h2>
            <p className="text-muted-foreground mb-6">
              Boxele dispar în pereți și tavane, oferind sunet surround fără echipamente vizibile. Ecranele devin oglinzi sau tablouri când nu sunt folosite, iar proiectoarele laser 4K înlocuiesc televizoarele tradiționale în spațiile premium.
            </p>

            <blockquote className="border-l-4 border-luxury pl-6 my-8 italic text-foreground">
              "Cea mai bună tehnologie este cea pe care nu o observi — funcționează perfect și arată ca design."
            </blockquote>

            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Climatizarea Predictivă</h2>
            <p className="text-muted-foreground mb-6">
              Sistemele HVAC din 2025 folosesc AI pentru a prezice și anticipa nevoile de încălzire sau răcire. Învață programul familiei, monitorizează prognoza meteo și ajustează temperatura înainte ca tu să simți disconfortul. Eficiența energetică crește cu până la 40%.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Securitate Discretă</h2>
            <p className="text-muted-foreground mb-6">
              Camerele de supraveghere se ascund în obiecte decorative, iar sistemele de alarmă sunt invizibile. Recunoașterea facială înlocuiește cheile, iar senzorii de mișcare diferențiază între animale de companie și intruși. Totul funcționează fără butoane sau panouri vizibile.
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

export default CasaInteligenta2025;