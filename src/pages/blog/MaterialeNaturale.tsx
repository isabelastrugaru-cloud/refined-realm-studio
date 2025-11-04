import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import materiale from '@/assets/blog/materiale-naturale.jpg';

const MaterialeNaturale = () => {
  return (
    <div className="pt-20">
      <article className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <Link to="/blog" className="inline-flex items-center text-luxury hover:text-luxury/80 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Înapoi la Blog
        </Link>
        <header className="mb-12">
          <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <span className="inline-flex items-center bg-luxury/10 text-luxury px-4 py-2 rounded-full font-medium">Materiale</span>
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" />18 Februarie 2024</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2" />7 min citire</span>
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ghidul Materialelor Naturale Premium
          </h1>
          <p className="font-inter text-xl text-muted-foreground">
            Tot ce trebuie să știi despre marmură, lemn masiv, piatră naturală și alte materiale de lux.
          </p>
        </header>
        <img src={materiale} alt="Materiale Naturale" className="w-full h-[400px] object-cover rounded-2xl mb-12" />
        <div className="prose prose-lg max-w-none">
          <p className="font-inter text-lg leading-relaxed mb-6">
            Materialele naturale aduc autenticitate și eleganță inegalabilă în designul interior. Fiecare piesă este unică, cu poveste și caracter propriu.
          </p>
          <div className="bg-luxury/5 border-l-4 border-luxury p-6 my-12 rounded-r-lg">
            <p className="font-inter text-lg italic">
              "Materialele naturale nu imbatranesc – devin mai frumoase cu timpul." – Design Interior București
            </p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border">
          <Link to="/contact"><Button variant="luxury" size="lg">Programează o consultație</Button></Link>
        </div>
      </article>
    </div>
  );
};

export default MaterialeNaturale;