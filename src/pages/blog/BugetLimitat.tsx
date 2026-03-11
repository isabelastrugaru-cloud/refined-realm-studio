import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import buget from '@/assets/blog/buget-limitat.webp';

const BugetLimitat = () => {
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
              Sfaturi
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              10 Martie 2024
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              9 min citire
            </span>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cum să Creezi un Spațiu de Lux cu Buget Limitat
          </h1>

          <p className="font-inter text-xl text-muted-foreground">
            Ghid complet pentru transformarea locuinței tale într-un spațiu luxos fără a depăși bugetul planificat.
          </p>
        </header>

        <img 
          src={buget} 
          alt="Lux cu Buget Limitat" 
          className="w-full h-[400px] object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="font-inter text-lg leading-relaxed mb-6">
            Luxul autentic nu vine întotdeauna cu un preț astronomic. Cu alegeri inteligente, puțină creativitate și prioritizarea corectă, poți crea un spațiu elegant și rafinat fără să spargi banca. Iată cum.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Regula 80/20: Investește Strategic
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Nu toate elementele trebuie să fie premium. Investește 80% din buget în piesele cheie – canapea, pat, iluminat principal – și economisește la accesorii. O canapea de calitate cu perne de la IKEA arată mai bine decât opusul.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Culoarea: Transformare Instant, Cost Minim
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Vopseaua este cea mai eficientă investiție în design. Un perete accent într-o culoare sofisticată transformă complet spațiul. Trucul? Alege culori complexe, nu primare. Bej sofisticat bate albul simplu oricând, și costă la fel.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Iluminatul: Secret

ul Spațiilor de Lux
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Spațiile luxoase au un comun numitor: iluminat în straturi. Becuri LED dimabile, o lampă statement (poate vintage, găsită la second-hand) și câteva spoturi strategice costă mai puțin decât crezi, dar fac diferență enormă.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Textile: Luxul Accesibil
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Perdele lungi până în podea (chiar și cele de la retaileri accesibili) fac tavanele să pară mai înalte. Covoare mari și moi adaugă confort și eleganță. Pernele decorative în țesături naturale – in, catifea – sunt relativ ieftine dar au impact mare.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Artă și Decorațiuni: Gândește Diferit
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Nu trebuie să cumperi artă scumpă. Poze personale încadrate profesional, printuri de calitate, sau chiar textile încadrate pot arăta spectaculos. O oglindă mare în ramă simplă pare mai scumpă decât este și face spațiul să pară mai generos.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            DIY-ul Inteligent
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Vopsitul mobilierului vechi, schimbarea mânerelor la dulapuri, adăugarea unui blat nou la o comodă – proiecte DIY simple pot transforma piese ieftine sau vechi în statement pieces. Pinterest este prietenul tău aici.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Cumpărături Inteligente
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Magazinele second-hand, licitațiile online, reducerile de sezon – știind când și unde să cauți poți găsi piese premium la fracțiune din preț. Mobilierul vintage solid costă mai puțin decât echivalentul modern low-cost și arată mult mai bine.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Ordinea și Curățenia: Luxul Gratuit
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Cel mai ieftin upgrade? Decluttering-ul și curățenia profundă. Un spațiu organizat și curat pare automat mai luxos, indiferent de mobilier. Investește în soluții de stocare elegante – organizarea este baza luxului.
          </p>

          <div className="bg-luxury/5 border-l-4 border-luxury p-6 my-12 rounded-r-lg">
            <p className="font-inter text-lg italic">
              "Luxul autentic nu este despre cât cheltuiești, ci despre cât de bine cheltuiești." – Design Interior București
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

export default BugetLimitat;