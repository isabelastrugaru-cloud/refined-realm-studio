import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import culori from '@/assets/blog/psihologia-culorilor.jpg';

const CuloriSiTexturi2025 = () => {
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
                5 Februarie 2025
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                7 min citire
              </span>
            </div>
            
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Culori și Texturi Dominante în 2025
            </h1>
            <p className="font-inter text-lg text-muted-foreground">
              Paleta cromatică și texturile care vor transforma interioarele în 2025 — de la tonuri pământii la accente metalice.
            </p>
          </header>

          <img 
            src={culori} 
            alt="Culori și Texturi 2025" 
            className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Tonurile Pământii Reinventate</h2>
            <p className="text-muted-foreground mb-6">
              2025 aduce o reinterpretare sofisticată a tonurilor naturale. Terracotta se îmbină cu nuanțe de nucă și caramel, creând spații calde și primitoare. Maro ciocolatiu înlocuiește gri-ul neutru, iar beige-ul capătă profunzime prin subtilități de roz pudrat.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Verdele Smarald ca Statement</h2>
            <p className="text-muted-foreground mb-6">
              Verdele intens, inspirat de pădurile tropicale, devine culoarea declarație a anului. Folosit pe pereți accent, în mobilier tapițat sau textile, smaraldul aduce energie și rafinament. Se combină perfect cu aurul mat și lemnul natural pentru un look opulent dar natural.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Texturi Tactile</h2>
            <p className="text-muted-foreground mb-6">
              Suprafețele cer să fie atinse în 2025. Tencuielile cu textură de piatră, tapeturile 3D, lemnul cu relief natural și țesăturile boucle creează stratificări senzoriale. Contrastul dintre neted și texturat definește spațiile moderne.
            </p>

            <blockquote className="border-l-4 border-luxury pl-6 my-8 italic text-foreground">
              "În 2025, designul se simte, nu doar se vede — texturile devin la fel de importante ca și culorile."
            </blockquote>

            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Metalele Calde</h2>
            <p className="text-muted-foreground mb-6">
              Aurul mat, bronzul patinat și arama antică înlocuiesc finisajele strălucitoare. Aceste metale calde adaugă eleganță discretă corpurilor de iluminat, mânerelor și decorațiunilor. Combinate cu lemn întunecat sau marmură veinoasă, creează o estetică de lux accesibil.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Contrastele Dramatice</h2>
            <p className="text-muted-foreground mb-6">
              2025 celebrează curajul cromatic. Negru profund alături de alb crem, burgundy lângă roz pudrat, albastru nocturn cu coral deschis — contrastele îndrăznețe definesc personalitatea spațiilor. Cheia este echilibrul: una sau două zone de impact, restul în tonuri neutre.
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

export default CuloriSiTexturi2025;