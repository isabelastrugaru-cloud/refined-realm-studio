import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import culori from '@/assets/blog/psihologia-culorilor.webp';

const PsihologiaCulorilor = () => {
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
              2 Martie 2024
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              8 min citire
            </span>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Psihologia Culorilor în Design Interior
          </h1>

          <p className="font-inter text-xl text-muted-foreground">
            Cum influențează culorile starea ta de spirit și cum să le folosești strategic în fiecare cameră.
          </p>
        </header>

        <img 
          src={culori} 
          alt="Psihologia Culorilor" 
          className="w-full h-[400px] object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="font-inter text-lg leading-relaxed mb-6">
            Culorile nu sunt doar elemente decorative – ele influențează profund cum ne simțim într-un spațiu. Știința psihologiei culorilor ne arată că nuanțele potrivite pot energiza, calma, inspira sau consola. Iată cum să le folosești cu inteligență.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Albastrul: Oaza de Calm
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Albastrul reduce ritmul cardiac și tensiunea arterială – perfect pentru dormitor sau baie. Tonurile deschise de albastru creează senzație de spațiu și aer curat. Dar atenție la bucătărie: albastrul poate suprima apetitul (deși asta poate fi un bonus pentru unii!).
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Verdele: Echilibrul Natural
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Asociat cu natura și reînnoirea, verdele este culoarea echilibrului perfect între calm și energie. Excelent pentru orice cameră, dar mai ales pentru spații de lucru și living. Tonurile de sage și eucalipt sunt deosebit de populare în 2024.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Galbenul: Soare în Casă
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Galbenul stimulează creativitatea și optimismul. Perfect pentru bucătărie sau zonele de mic dejun unde vrei energie dimineața. Evită tonurile prea stridente în dormitor – pot fi prea stimulative pentru somn. Alege nuanțe calde, muștar sau ocru pentru eleganță.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Roșul: Pasiune cu Măsură
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Roșul crește energia și pulsul – folosește-l strategic. Excelent ca accent în living sau sufragerie unde dorești conversație și vitalitate. În dormitor, alege burgundy sau terracota pentru căldură fără intensitate copleșitoare.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Neutrul: Fundația Elegantă
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Bej, gri, taupe – neutrul nu este plictisitor când este bine executat. Aceste culori creează o pânză pe care poți adăuga personalitate prin texturi și accente. Sunt versatile, elegante și permite schimbări ușoare de decor fără renovări majore.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Violetul: Mister și Creativitate
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Violet

ul combină calmul albastru cu energia roșu. Perfect pentru spații creative sau dormitoare adulți. Lavanda este calmantă, în timp ce aubergine adaugă dramatism și sofisticare.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Negrul și Albul: Contrastul Perfect
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Negrul adaugă profunzime și eleganță, dar doar ca accent. Prea mult poate întunecat spațiul. Albul reflectă lumina și mărește vizual spațiul, dar poate părea steril dacă nu este combinat cu texturi și accente calde.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Cum Să Combini Culorile
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Regula 60-30-10: 60% culoare dominantă (de obicei neutră), 30% culoare secundară, 10% accent. Această proporție creează echilibru vizual fără a copleși. Testează întotdeauna culorile în spațiul real – lumina influențează dramatic cum percepem culorile.
          </p>

          <div className="bg-luxury/5 border-l-4 border-luxury p-6 my-12 rounded-r-lg">
            <p className="font-inter text-lg italic">
              "Culorile potrivite pot transforma nu doar spațiul, ci și starea ta de spirit." – Design Interior București
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

export default PsihologiaCulorilor;