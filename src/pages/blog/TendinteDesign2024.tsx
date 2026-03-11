import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import tendinte2024 from '@/assets/blog/tendinte-2024.webp';

const TendinteDesign2024 = () => {
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
              15 Martie 2024
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              8 min citire
            </span>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tendințele în Design Interior pentru 2024
          </h1>

          <p className="font-inter text-xl text-muted-foreground">
            Descoperă cele mai noi tendințe în design interior care vor domina în 2024, de la culori și materiale la concepte inovatoare.
          </p>
        </header>

        <img 
          src={tendinte2024} 
          alt="Tendințe Design Interior 2024" 
          className="w-full h-[400px] object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="font-inter text-lg leading-relaxed mb-6">
            Anul 2024 aduce o revoluție în lumea designului interior, o fuziune perfectă între eleganța clasică și inovația modernă. Tendințele acestui an ne învață că luxul nu mai înseamnă doar opulență vizibilă, ci și rafinament subtil și funcționalitate inteligentă.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Culorile Momentului
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Paletele de culori pentru 2024 sunt inspirate de natură și relaxare. Tonurile neutre calde – bej, taupe, nisipiu – creează o atmosferă liniștitoare, perfectă pentru stilul de viață modern. Accentele de aur mat și aramă adaugă un strat de rafinament fără a fi copleșitoare.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Materialele Preferate
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Marmura cu venațiuni dramatice rămâne regina materialelor premium, dar asistăm la o redescoperire a lemnului masiv cu finisaje naturale. Texturile au devenit esențiale: catifea, in, lână bouclé – toate creează profunzime vizuală și tactilă.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Mobilier și Forme
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Liniile curbe domină designul de mobilier în 2024. Canapelele cu forme organice, mesele rotunde și fotoliile cu spătare curbate aduc o senzație de confort și eleganță. Funcționalitatea devine artă – fiecare piesă trebuie să fie și frumoasă, și practică.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Tehnologia Discretă
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Tehnologia smart devine invizibilă, integrată perfect în design. Sistemele de iluminat inteligent, termostatele ascunse, boxele audio integrate în pereți – toate funcționează în armonie cu estetica spațiului, fără să-l domine.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Sustenabilitatea cu Stil
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Designul eco-conscious devine mainstream, dar fără compromisuri estetice. Materialele reciclate, mobilierul recuperat și soluțiile energy-efficient sunt acum la fel de frumoase ca alternativele tradiționale. Luxul sustenabil nu este doar trendy – este viitorul.
          </p>

          <div className="bg-luxury/5 border-l-4 border-luxury p-6 my-12 rounded-r-lg">
            <p className="font-inter text-lg italic">
              "Tendințele 2024 ne arată că adevăratul lux înseamnă să creezi spații care te fac să te simți bine, nu doar să arăți bine." – Alexandra Popescu, Design Interior București
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

export default TendinteDesign2024;