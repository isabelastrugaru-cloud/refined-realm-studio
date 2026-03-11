import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Calendar, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';
import apartment1 from '@/assets/apartment-1.webp';
import apartment2 from '@/assets/apartment-2.webp';
import apartment3 from '@/assets/apartment-3.webp';
import apartment4 from '@/assets/apartment-4.webp';

const ApartamentPrimaverii = () => {
  const images = [
    { src: apartment1, alt: 'Living clasic-modern', description: 'Livingul combină eleganța clasică a ștucarurilor și a lambriurilor cu linia curată a mobilierului contemporan. Paleta neutră permite pieselor de designer să strălucească, creând un echilibru perfect între epoci.' },
    { src: apartment2, alt: 'Sufragerie cu lustre clasică', description: 'Sufrageria este o declarație de eleganță atemporală. Lustre de inspirație clasică plutesc deasupra unei mese contemporane, în timp ce lambriurile adaugă profunzime și caracter spațiului.' },
    { src: apartment3, alt: 'Dormitor elegant', description: 'Dormitorul este un refugiu liniștit unde texturile fine și culorile calde creează o atmosferă învăluitoare. Echilibrul între detaliile clasice și confortul modern este impecabil.' },
    { src: apartment4, alt: 'Bucătărie sofisticată', description: 'Bucătăria demonstrează că funcționalitatea modernă și estetica clasică pot coexista armonios. Mobilierul contemporan se împletește cu finisaje rafinate pentru un rezultat sofisticat.' },
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
                Apartament de Lux <span className="text-luxury">Primăverii</span>
              </h1>
              <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-luxury" />
                  <span>Primăverii, București</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="h-5 w-5 text-luxury" />
                  <span>180 mp</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-luxury" />
                  <span>2022</span>
                </div>
              </div>
              <p className="font-inter text-xl text-muted-foreground leading-relaxed">
                Combinația perfectă între eleganța clasică și confortul modern, 
                unde fiecare detaliu este gândit cu atenție pentru a crea un spațiu sofisticat și primitoar.
              </p>
            </div>
            <div className="relative">
              <img 
                src={apartment1} 
                alt="Apartament Primăverii" 
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
            Povestea unui <span className="text-luxury">Echilibru Perfect</span>
          </h2>
          
          <div className="space-y-8 font-inter text-lg text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Capitolul 1: Când mama iubește clasicul, dar fiica adoră modernul</h3>
              <p>
                "Mama vrea candelabre și ștucarturi, eu vreau linii curate și minimalism. Ajutor!" - acesta a fost primul email 
                pe care l-am primit de la clienta noastră, o tânără avocată care tocmai moștenise un apartament spațios în Primăverii. 
                Împreună cu mama ei, o doamnă elegantă cu un gust impecabil pentru antichități, trebuia să transforme 180 mp în... 
                ceva pe care amândouă să-l iubească. "O să fie interesant," ne-am gândit, comandând cafea extra-mare. 
                Plot twist: a fost mai mult decât interesant - a fost o lecție despre cum generațiile diferite pot crea magie împreună. 
                Cu multă diplomație. Și câteva compromisuri creative. Ok, multe compromisuri creative.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Capitolul 2: Negocierea ștucarurilor</h3>
              <p>
                Prima noastră "negociere de pace" a fost despre ștucarturi. Mama: "Vreau ștucarturi elaborate în fiecare cameră!" 
                Fiica: "Deloc ștucarturi!" Noi (transpirând): "Și dacă facem ștucarturi discrete, minimaliste, doar pe tavane și în camera de zi?" 
                Mama a privit suspicioasă. Fiica și-a încrucișat brațele. Am scos render-uri. Am arătat exemple. 
                Am făcut o prezentare PowerPoint (da, chiar am făcut-o). În cele din urmă, ambele au zâmbit. Miracol! 
                Lecția învățată: când două femei puternice nu sunt de acord, render-urile 3D pot salva lumea. 
                Am adăugat ștucarturi elegante, dar contemporane. Mama era fericită. Fiica era fericită. Noi eram epuizați, dar mândri.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Capitolul 3: Marea bătălie a lustrei</h3>
              <p>
                Oh, lustre. Mama a adus un catalog de lustre de cristal din anii '60. Fiica a arătat un LED minimalist de pe Pinterest. 
                Noi am făcut ceea ce facem cel mai bine: am găsit o a treia opțiune pe care nimeni nu o avea în minte. 
                O lustră contemporană cu influențe clasice - metal auriu, forme geometrice moderne, dar cu eleganță atemporală. 
                "E prea simplă," a spus mama. "E prea fancy," a spus fiica. Am instalat-o oricum (uneori trebuie să fii curajos). 
                Prima seară, când a fost aprinsă în sufragerie... tăcere. Apoi: "E perfectă," au spus amândouă în cor. 
                Noi am expirat ușurați și ne-am felicitat în tăcere. Câteodată trebuie să ai încredere în viziunea ta 
                chiar când clienții nu sunt convinși. (Dar doar câteodată. Nu deveniți aroganți.)
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Capitolul 4: Detaliile care unesc generațiile</h3>
              <p>
                Magia s-a întâmplat în detalii. Lambriuri contemporane în sufragerie, dar în culoarea tradițională preferată de mamă. 
                Mobilier modern cu picioare înalte care amintea de piese clasice. Țesături moderne, dar în texturi bogate care 
                adăugau căldură. Fiecare alegere era un dans delicat între două viziuni. Dormitorul a fost zona neutră - 
                ambele au fost de acord asupra unei palete calme și a texturilor luxoase. "Vezi? Putem fi de acord!" a râs fiica. 
                "Nu conta niciodată dacă putem," a zâmbit mama. "Conta cum ajungem acolo." 
                Asta am iubit cel mai mult: procesul le-a adus mai aproape.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Finalul: Un apartament cu două inimi</h3>
              <p>
                La inaugurarea oficiasă (cu șampanie și prăjituri), am privit în jurul nostru. Fiecare cameră spunea o poveste 
                despre compromis, despre respect între generații, despre cum tradiționalul și contemporanul pot dansa împreună. 
                Mama sta în fotoliul ei preferat, admirând ștucarurile discrete. Fiica făcea poze pentru Instagram livingului minimalist. 
                Amândouă radiante. "Mulțumim că ați avut răbdare cu noi," ne-au spus. "Mulțumim că ne-ați învățat despre 
                diplomație în design," am răspuns noi râzând. Acest proiect ne-a arătat că cel mai bun design nu e despre a alege 
                un stil - e despre a găsi armonia între viziuni diferite. Și despre consumarea a MULT cafea în timpul procesului. 
                P.S. Acum vin împreună la întâlniri și deja plănuiesc următorul proiect: casa de vacanță a mamei. Am început deja să stocăm cafea.
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
                    loading="lazy"
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
            Ai o viziune <span className="text-luxury">unică</span> pentru casa ta?
          </h2>
          <p className="font-inter text-xl text-muted-foreground mb-12">
            Hai să o transformăm împreună în realitate, cu atenție la fiecare detaliu
          </p>
          <Link to="/contact">
            <Button variant="luxury" size="lg">
              Contactează-ne
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ApartamentPrimaverii;
