import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Calendar, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';
import villa1 from '@/assets/villa-1.jpg';
import villa2 from '@/assets/villa-2.jpg';
import villa3 from '@/assets/villa-3.jpg';
import villa4 from '@/assets/villa-4.jpg';

const VillaPipera = () => {
  const images = [
    { src: villa1, alt: 'Exterior modern cu lemn', description: 'Fațada impresionantă combină lemnul natural cu sticla și betonul arhitectural, creând un echilibru perfect între căldură și modernism. Peisagistica integrată completează viziunea arhitecturală.' },
    { src: villa2, alt: 'Living cu șemineu din piatră', description: 'Livingul cu tavan înalt și șemineul sculptural din piatră naturală este centrul casei. Ferestrele generoase aduc natura înăuntru, iar materialele naturale creează o atmosferă primitoare și sofisticată.' },
    { src: villa3, alt: 'Bucătărie cu vedere către grădină', description: 'Bucătăria open-space se deschide către grădină prin pereți de sticlă retractabili. Lemnul de nuc și pietrele naturale se îmbină perfect cu tehnologia smart integrată discret.' },
    { src: villa4, alt: 'Dormitor master cu terasă privată', description: 'Suita master este un retreat privat cu acces direct pe terasă. Designul minimalist pune accent pe materiale naturale și vederea spectaculoasă, creând un spațiu de calm absolut.' },
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
                Villa Moderna <span className="text-luxury">Pipera</span>
              </h1>
              <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-luxury" />
                  <span>Pipera, București</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="h-5 w-5 text-luxury" />
                  <span>450 mp</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-luxury" />
                  <span>2023</span>
                </div>
              </div>
              <p className="font-inter text-xl text-muted-foreground leading-relaxed">
                O vilă care redefinește conceptul de lux modern prin eleganță atemporală, 
                materiale naturale premium și tehnologie smart home perfect integrată.
              </p>
            </div>
            <div className="relative">
              <img 
                src={villa1} 
                alt="Villa Pipera" 
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
            Povestea unei <span className="text-luxury">Vile Inteligente</span>
          </h2>
          
          <div className="space-y-8 font-inter text-lg text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Capitolul 1: Familia și visul lor eco-chic</h3>
              <p>
                "Vrem o casă care să respire," ne-au spus clienții noștri - o familie tânără cu doi copii energici și un golden retriever 
                pe nume Biscuit (care avea să devină supervizor neoficial al șantierului). Dorința lor? O vilă modernă, dar caldă. 
                Tehnologie, dar nu la vedere. Lux, dar nu ostentativ. "Deci practic vreți imposibilul?" am glumit noi. 
                "Exact!" au răspuns ei zâmbind. Challenge accepted! Prima noastră misiune: să convingem Biscuit că șantierul nu este 
                parc de joacă. (Spoiler: am pierdut această bătălie.)
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Capitolul 2: Lemnul, piatra și... Alexa?</h3>
              <p>
                Am început cu materialele - lemn de nuc pentru pardoseli și mobilier, piatră naturală pentru șemineu și accente, 
                sticlă pentru lumină maximă. Apoi a venit partea tech. "Vreau să pot controla totul de pe telefon, 
                dar să nu se vadă niciun buton sau ecran," a spus clientul. Am privit lungă spre arhitectul nostru. 
                El a privit spre inginerul de instalații. Inginerul a oftât profund. "Hai să bem o cafea," a zis el. 
                Trei cafele și două prototipuri mai târziu, am reușit: prize integrate în lemn, switchuri tactile invizibile, 
                senzori ascunși în designul natural. E ca Tony Stark's house, dar cu mai mult lemn și mai puține roboti zburători.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Capitolul 3: Incidentul cu șemineul</h3>
              <p>
                Ah, șemineul nostru spectacular din piatră naturală. L-am proiectat să fie piesa centrală - masiv, sculptural, 
                impresionant. Când a sosit piatra (6 tone de granit), ne-am dat seama că... ușa era prea mică. 
                "Cum adică prea mică?" a întrebat clientul. "Măsurătura 1.2m, piatra are 1.4m," am explicat noi suferind. 
                Soluția? Am demontat temporar fereastra din living. Vecinii au crezut că facem un heist. 
                "Furăm pietre?" glumea unul dintre ei. "Da, pentru că asta fac hoții - fură pietre de 6 tone," am răspuns amuzați. 
                Dar când a fost instalat și focul a fost aprins prima dată... magic pur. Worth it!
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Capitolul 4: Smart home adventures</h3>
              <p>
                Partea de smart home a fost... o aventură. Am integrat totul: lumini, temperatură, storuri, sistem audio, 
                securitate, irigații. Prima zi după instalare, sistemul a decis singur că e momentul perfect pentru o 
                "party". La 3 dimineața. Luminile s-au aprins, muzica a pornit (la maxim, evident), stropitoarele din grădină 
                au început să funcționeze. Vecinii au fost... impresionați. Am rezolvat bug-ul în 24 de ore 
                (și ne-am cerut scuze vecinilor cu prăjituri artizanale). Acum totul funcționează perfect. 
                Îți spală mașina în fiecare dimineață? Nu. Dar poate controla tot restul fără să se vadă un singur buton.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Finalul: O casă care trăiește</h3>
              <p>
                După 11 luni (și o oră neplănificată de "concert" nocturn), villa era gata. Familia s-a mutat, 
                Biscuit și-a găsit locul lui preferat lângă șemineu (evident), iar copiii au făcut instant prieteni cu Alexa. 
                "Casa pare să respire," ne-a spus clientul la 3 luni după mutare. "Dimineața se trezește cu noi - luminile cresc treptat, 
                jaluzelele se ridică, muzica începe ușor. Seara se liniștește odată cu noi." Perfect! 
                Asta și-au dorit: o casă care nu e doar smart, ci inteligent-emoțională. Și cu mult lemn. Și cu loc pentru Biscuit. 
                P.S. Biscuit ne vizitează periodic pe șantierele noi. Aparent suntem prieteni acum.
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
            Visezi la o casă <span className="text-luxury">inteligentă</span> și caldă?
          </h2>
          <p className="font-inter text-xl text-muted-foreground mb-12">
            Hai să creăm împreună spațiul perfect pentru tine și familia ta
          </p>
          <Link to="/contact">
            <Button variant="luxury" size="lg">
              Începem proiectul tău
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VillaPipera;
