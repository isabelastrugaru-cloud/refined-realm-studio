import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import minimalism from '@/assets/blog/minimalismul-scandinav.webp';

const MinimalismulScandinav = () => {
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
              12 Martie 2024
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              7 min citire
            </span>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Minimalismul Scandinav: Tendința Care Rămâne
          </h1>

          <p className="font-inter text-xl text-muted-foreground">
            De ce designul scandinav continuă să fie relevant și cum să-l adaptezi pentru casa ta modernă.
          </p>
        </header>

        <img 
          src={minimalism} 
          alt="Minimalism Scandinav" 
          className="w-full h-[400px] object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="font-inter text-lg leading-relaxed mb-6">
            Într-o lume plină de zgomot vizual, minimalismul scandinav rămâne o oază de calm și simplitate. Nu este doar o tendință – este o filosofie de viață care prețuiește funcționalitatea, frumusețea naturală și bunăstarea.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Esența Stilului Scandinav
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            La baza designului scandinav stă conceptul de "lagom" – suficient, echilibrat, nici prea mult, nici prea puțin. Fiecare element are un scop, fiecare obiect și-a câștigat locul în spațiu prin utilitate sau frumusețe (ideal, ambele).
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Lumina Naturală – Vedeta Principală
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Scandinav ii știu valoarea luminii naturale. Ferestrele mari, perdelele transparente și oglinzile strategice maximizează fiecare rază de soare. În spațiile cu lumină limitată, sursele artificiale sunt alese cu grijă pentru a imita lumina zilei.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Paleta de Culori: Simplitate Elegantă
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Albul creează baza, dar nu este steril. Tonurile calde de alb, bej și gri deschis adaugă profunzime. Accentele vin din texturi naturale – lemn de esență deschisă, piatră, in – nu din culori stridente. Când apar accente colorate, sunt subtile și inspirate din natură.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Mobilierul: Funcțional și Frumos
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Mobilierul scandinav este simplu în formă, dar nu și în execuție. Piesele sunt realizate din materiale de calitate, cu atenție la detalii. Liniile curate, picioarele subțiri și formele organice creează o senzație de spațiozitate și eleganță fără efort.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Hygge: Confortul Scandinav
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Minimalismul scandinav nu înseamnă rece sau neprietenos. Conceptul danish de "hygge" aduce căldură prin textile moi, lumânări, covoare pufoase și locuri confortabile de relaxare. Este arta de a crea confort fără a adăuga dezordine.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Cum Să Adopți Stilul Scandinav</h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Începe cu decluttering-ul: păstrează doar ce folosești și iubești. Investește în piese de calitate din materiale naturale. Maximizează lumina naturală. Adaugă verdeață – plantele sunt esențiale în designul scandinav. Și cel mai important: creează spații care te fac să te simți bine, nu doar să arate bine.
          </p>

          <div className="bg-luxury/5 border-l-4 border-luxury p-6 my-12 rounded-r-lg">
            <p className="font-inter text-lg italic">
              "Minimalismul scandinav nu înseamnă să ai mai puțin – înseamnă să ai exact ce îți trebuie pentru o viață bună." – Design Interior București
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

export default MinimalismulScandinav;