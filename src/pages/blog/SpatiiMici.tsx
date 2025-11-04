import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import spatii from '@/assets/blog/spatii-mici.jpg';

const SpatiiMici = () => {
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
              6 Martie 2024
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              7 min citire
            </span>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Maximizarea Spațiilor Mici: Trucuri și Soluții
          </h1>

          <p className="font-inter text-xl text-muted-foreground">
            Cum să transformi un apartament mic într-un spațiu funcțional, luminos și elegant.
          </p>
        </header>

        <img 
          src={spatii} 
          alt="Spații Mici Optimizate" 
          className="w-full h-[400px] object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="font-inter text-lg leading-relaxed mb-6">
            Într-o eră a apartamentelor urbane compacte, știința (și arta) maximizării spațiului devine esențială. Vestea bună? Un spațiu mic nu înseamnă automat un spațiu întunecat sau nepractic. Cu strategiile potrivite, poți crea o locuință generoasă și invitantă, chiar și pe metri puțini.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Mobilier Multifuncțional: Heroii Spațiilor Mici
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Canapelele extensibile, mesele pliante, paturile cu sertare, scaunele cu spațiu de depozitare – fiecare piesă trebuie să muncească din greu. Dar atenție: multifuncțional nu înseamnă urât. Există design excelent pentru mobilier inteligent, trebuie doar să cauți.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Verticalitatea: Spațiul Neexploatat
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Când nu poți expanda pe orizontală, gândește vertical. Rafturi până în tavan, agatătoare la înălțime, dulapuri suspendate – toate folosesc spațiul aerian care altfel stă nefolosit. Bonus: ochiul urmărește liniile verticale, făcând tavanul să pară mai înalt.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Culoarea: Iluzia Spațiului
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Da, culorile deschise măresc vizual spațiul – dar nu trebuie să fie alb steril. Tonuri calde de bej, gri deschis sau albastru pal creează profunzime fără să închidă spațiul. Un perete accent mai închis poate chiar crea iluzia adâncimii.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Oglinzile: Magia Simplă
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Plasează strategic oglinzi mari pentru a dubla vizual spațiul și lumina. O oglindă mare pe peretele opus ferestrei reflectă lumina naturală în tot spațiul. Evită oglinzile mici decorative – o oglindă mare are impact mult mai puternic.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Lumina: Componentă Esențială
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Spațiile mici necesită iluminat generos. Combină lumina naturală (perdele transparente sau stores) cu multiple surse artificiale. Iluminatul din multiple puncte elimină umbrele și face spațiul să pară mai mare.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Less is More: Pentru o Dată, Clișeul Este Adevărat
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            În spații mici, fiecare obiect contează. Prea multe decorațiuni creează dezordine vizuală. Alege câteva piese statement de calitate în loc de multe accesorii mici. Fiecare obiect trebuie să-și câștige locul.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Transparența: Lasă Spațiul Să Respire
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Mobilier cu picioare vizibile (nu bloc până în podea), rafturi deschise, mese din sticlă – toate permit ochiului să vadă în continuare, creând senzația de spațiu mai mare. Transparența literală sau vizuală este aliatul tău.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-foreground mt-12 mb-6">
            Organizarea: Baza Tuturor
          </h2>
          <p className="font-inter text-lg leading-relaxed mb-6">
            Un spațiu mic dezorganizat pare și mai mic. Investește în soluții de organizare inteligente – cutii frumoase, organizatoare de sertare, sisteme modulare. Când fiecare lucru are locul său, spațiul pare instantaneu mai generos.
          </p>

          <div className="bg-luxury/5 border-l-4 border-luxury p-6 my-12 rounded-r-lg">
            <p className="font-inter text-lg italic">
              "Nu este despre cât spațiu ai, ci despre cât de bine îl folosești." – Design Interior București
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

export default SpatiiMici;