import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ecologic from '@/assets/blog/materiale-ecologice.jpg';

const MaterialeEcologice = () => {
  return (
    <div className="pt-20">
      <article className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <Link to="/blog" className="inline-flex items-center text-luxury hover:text-luxury/80 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />Înapoi la Blog
        </Link>
        <header className="mb-12">
          <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <span className="inline-flex items-center bg-luxury/10 text-luxury px-4 py-2 rounded-full font-medium">Materiale</span>
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" />10 Februarie 2024</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2" />7 min citire</span>
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">Materiale Ecologice: Lux Sustenabil</h1>
          <p className="font-inter text-xl text-muted-foreground">Designul responsabil fără compromisuri estetice sau de calitate.</p>
        </header>
        <img src={ecologic} alt="Materiale Ecologice" className="w-full h-[400px] object-cover rounded-2xl mb-12" />
        <div className="prose prose-lg max-w-none">
          <p className="font-inter text-lg leading-relaxed mb-6">Sustenabilitatea devine standard în designul de lux. Materialele eco-friendly moderne sunt la fel de frumoase și durabile ca alternativele tradiționale.</p>
          <div className="bg-luxury/5 border-l-4 border-luxury p-6 my-12 rounded-r-lg">
            <p className="font-inter text-lg italic">"Luxul viitorului este sustenabil – frumos pentru tine și pentru planetă." – Design Interior București</p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border">
          <Link to="/contact"><Button variant="luxury" size="lg">Programează o consultație</Button></Link>
        </div>
      </article>
    </div>
  );
};

export default MaterialeEcologice;