import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import iluminat from '@/assets/blog/iluminat-perfect.jpg';

const IluminatPerfect = () => {
  return (
    <div className="pt-20">
      <article className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <Link to="/blog" className="inline-flex items-center text-luxury hover:text-luxury/80 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Înapoi la Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <span className="inline-flex items-center bg-luxury/10 text-luxury px-4 py-2 rounded-full font-medium">
              Design
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              28 Februarie 2024
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              7 min citire
            </span>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ghidul Complet pentru Iluminatul Perfect
          </h1>

          <p className="font-inter text-xl text-muted-foreground">
            Cum să folosești iluminatul pentru a crea atmosfera perfectă și a evidenția elementele de design din casa ta.
          </p>
        </header>

        <img 
          src={iluminat} 
          alt="Iluminat Perfect" 
          className="w-full h-[400px] object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="font-inter text-lg leading-relaxed mb-6">
            Iluminatul poate face sau distruge un design interior. Este elementul care transformă un spațiu plat într-unul tridimensional, care creează atmosferă și evidențiază frumusețea. Iată cum să-l folosești ca un profesionist.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Cele Trei Straturi ale Iluminatului
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Iluminatul ambient (general), task lighting (funcțional) și accent lighting (decorativ) – toate trei sunt esențiale pentru un spațiu bine iluminat. Neglijarea oricăruia creează un dezechilibru vizual.
          </p>

          <div className="bg-luxury/5 border-l-4 border-luxury p-6 my-12 rounded-r-lg">
            <p className="font-inter text-lg italic">
              "Lumina potrivită face diferența între un spațiu care funcționează și unul care inspiră." – Design Interior București
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <Link to="/contact">
            <Button variant="luxury" size="lg">
              Programează o consultație
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default IluminatPerfect;