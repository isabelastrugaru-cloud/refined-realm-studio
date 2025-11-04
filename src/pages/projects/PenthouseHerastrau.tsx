import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Calendar, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';
import penthouse1 from '@/assets/penthouse-1.jpg';
import penthouse2 from '@/assets/penthouse-2.jpg';
import penthouse3 from '@/assets/penthouse-3.jpg';
import penthouse4 from '@/assets/penthouse-4.jpg';

const PenthouseHerastrau = () => {
  const images = [
    { src: penthouse1, alt: 'Living cu vedere panoramică', description: 'Livingul spațios cu ferestre de la podea până la tavan oferă o vedere spectaculoasă asupra parcului Herăstrău. Lustre italiene și mobilier premium creează o atmosferă de rafinament absolut.' },
    { src: penthouse2, alt: 'Dormitor principal cu vedere', description: 'Dormitorul principal este un sanctuar de liniște și eleganță, cu texturi sofisticate și o paletă cromatică caldă care invită la relaxare. Zona de spa privată adaugă un plus de lux.' },
    { src: penthouse3, alt: 'Bucătărie cu finisaje premium', description: 'Bucătăria este echipată cu aparatură de ultimă generație și finisaje din marmură Calacatta. Accentele aurii din hardware-ul de designer completează perfect designul contemporan.' },
    { src: penthouse4, alt: 'Baie spa cu marmură', description: 'Baia principală este un adevărat spa privat, cu marmură italiană pe pereți, cada free-standing și armături aurii care reflectă lumina naturală într-un mod spectacular.' },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-beige">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link to="/portofoliu">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Înapoi la portofoliu
            </Button>
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
                Penthouse Exclusivist <span className="text-luxury">Herăstrău</span>
              </h1>
              <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-luxury" />
                  <span>Herăstrău, București</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="h-5 w-5 text-luxury" />
                  <span>280 mp</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-luxury" />
                  <span>2023</span>
                </div>
              </div>
              <p className="font-inter text-xl text-muted-foreground leading-relaxed">
                Un proiect spectaculos care transformă un spațiu în cel mai rafinat penthouse din zona Herăstrău, 
                cu vedere panoramică și finisaje de excepție.
              </p>
            </div>
            <div className="relative">
              <img 
                src={penthouse1} 
                alt="Penthouse Herăstrău" 
                className="rounded-lg shadow-luxury w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-8">
            Povestea unei <span className="text-luxury">Transformări</span>
          </h2>
          
          <div className="space-y-8 font-inter text-lg text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Capitolul 1: Când visul întâlnește realitatea</h3>
              <p>
                Totul a început cu un telefon la ora 7 dimineața. "Vreau cel mai frumos penthouse din București!" ne-a spus clientul nostru, 
                un antreprenor de succes care tocmai achiziționase ultimul nivel dintr-un imobil de lux din Herăstrău. 
                Am râs amuzați, dar când am văzut spațiul... ei bine, să spunem că entuziasmul nostru a scăzut dramatic. 
                Era ca o pânză albă... prea albă. Literalmente doar pereți albi și ferestre uriașe care arătau către cel mai frumos parc din oraș. 
                "Ok," ne-am gândit, "avem cu ce lucra!"
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Capitolul 2: Aurul și marmura nu se ceartă niciodată</h3>
              <p>
                Prima provocare: cum transformi 280 mp în ceva ce să te lase fără cuvinte de fiecare dată când intri pe ușă? 
                Răspunsul nostru: marmură italiană, accente aurii și mobilier care costă cât o mașină mică (sau două). 
                Dar nu orice marmură - am căutat bucăți perfect venate de Calacatta care păreau opere de artă. 
                Când le-am instalat în bucătărie, până și instalatorul a scos telefonul să facă poze. "Pentru profilul meu de Instagram," a spus el roșind. 
                Știam că suntem pe drumul cel bun!
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Capitolul 3: Plot twist-ul luminos</h3>
              <p>
                Apoi a venit marele moment: lustre italiene custom-made care au întârziat... 3 luni. Da, ați citit bine. 
                Trei lungi luni în care am verificat tracking-ul zilnic ca și cum ar fi fost pizza pe care o comandasem. 
                Dar când au sosit (în sfârșit!), instalarea lor a fost ca în filmele slow-motion. 
                Lumina s-a aprins și... wow. Chiar și noi, designeri experimentați, am rămas câteva secunde în tăcere. 
                Clientul? A plâns. Da, un antreprenor dur de 1.90m a plâns de bucurie. Asta înseamnă design bine făcut!
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Capitolul 4: Detaliile care fac diferența</h3>
              <p>
                Dormitorul principal a fost alt capitol. Am vrut să creăm un sanctuar - un loc unde să te trezești dimineața 
                și prima ta gândire să fie "Nu vreau să mă ridic din pat". Am reușit. Prea bine chiar. 
                În prima noapte după finalizare, clientul a dormit 12 ore. "E patul," a spus el. "Nu," am zis noi, "e totul - 
                lumina, culorile, textura lenjeriei italiene, vederea, liniștea..." Am creat un cocoon de lux absolut.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Finalul: O poveste de succes (și de cafea multă)</h3>
              <p>
                La 6 luni după finalizare, am primit un mesaj de la client: "Prietenii mei nu vor să plece de la mine din casă. 
                Au început să inventeze scuze să vină în vizită." Perfect! Asta înseamnă că am făcut-o bine. 
                Un penthouse nu e doar despre finisaje scumpe și vederi spectaculoase - e despre cum te face să te simți. 
                Și dacă invitații tăi inventează scuze să rămână... misiune îndeplinită! 
                P.S. Am consumat aproximativ 247 cafele în timpul acestui proiect. Dar cine le-a numărat? (Ok, noi.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-premium">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-center text-foreground mb-16">
            Galerie <span className="text-luxury">Foto</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {images.map((image, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-subtle hover:shadow-luxury transition-all duration-500 mb-6">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground mb-3">{image.alt}</h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {image.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-beige">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Gata să-ți transformăm <span className="text-luxury">visul</span> în realitate?
          </h2>
          <p className="font-inter text-xl text-muted-foreground mb-12">
            Hai să creăm împreună următorul proiect spectaculos
          </p>
          <Link to="/contact">
            <Button variant="luxury" size="lg">
              Discută cu noi
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PenthouseHerastrau;
