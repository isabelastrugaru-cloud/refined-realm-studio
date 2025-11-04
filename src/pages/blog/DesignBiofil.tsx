import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import biofil from '@/assets/blog/design-biofil.jpg';

const DesignBiofil = () => {
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
              Tendințe
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              8 Martie 2024
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              6 min citire
            </span>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Design Biofil: Natura în Casa Ta
          </h1>

          <p className="font-inter text-xl text-muted-foreground">
            Cum să aduci natura în spațiile interioare pentru bunăstare și frumusețe maximă.
          </p>
        </header>

        <img 
          src={biofil} 
          alt="Design Biofil" 
          className="w-full h-[400px] object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="font-inter text-lg leading-relaxed mb-6">
            Designul biofil nu este doar o tendință – este o recunoaștere a legăturii noastre profunde cu natura. Studiile arată că prezența elementelor naturale în spații interioare reduce stresul, îmbunătățește productivitatea și crește bunăstarea generală.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Ce Este Designul Biofil?
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Termenul "biofilie" înseamnă literalmente "dragostea pentru viață". În design, acest concept se traduce prin integrarea elementelor naturale – plante, lemn, piatră, apă, lumină naturală – în spațiile în care trăim și muncim.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Plantele: Vedete Vii ale Designului
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            De la ferestre la terase suspendate și grădini verticale, plantele transformă orice spațiu. Dar atenție: nu este doar despre cantitate. Alegerea plantelor potrivite pentru fiecare cameră – considerând lumina, umiditatea și întreținerea – face diferența între o junglă urbană de succes și un hobby frustrant.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Materiale Naturale, Texturi Autentice
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Lemnul masiv cu venele vizibile, piatra naturală cu imperfecțiunile ei, răchita împletită, inul texturat – toate acestea ne reconectează cu natura. Evită imitațiile: materialele autentice aduc nu doar frumusețe, ci și o senzație tactilă ireproducibilă.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Lumina: Cea Mai Importantă Resursă
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Maximizează lumina naturală prin ferestre generoase, perdele transparente și eliminarea obstacolelor. Când lumina naturală este limitată, alege becuri cu temperatură de culoare caldă care imită lumina zilei. Jocul de umbre și lumini create de plante adaugă un strat suplimentar de frumusețe.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Apa: Elementul Calmant
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Fântânile interioare, acvariile, sau chiar o vedere spre apă – prezența sau sugestia apei are un efect calmant dovedit științific. Chiar și fotografiile sau picturile cu apă pot contribui la atmosfera liniștitoare.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Formele Organice
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Natura nu are linii drepte. Mobilierul cu curbe naturale, decorațiunile cu forme neregulate și pattern-urile inspirate din natură creează un spațiu mai confortabil și mai uman. Gândește-te la curbele unei foi, la fluiditatea apei, la rotunjimea pietrelor – și transpune asta în design.
          </p>

          <div className="bg-luxury/5 border-l-4 border-luxury p-6 my-12 rounded-r-lg">
            <p className="font-inter text-lg italic">
              "Când aduci natura în casă, nu decorezi doar un spațiu – creezi un refugiu pentru suflet." – Design Interior București
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

export default DesignBiofil;