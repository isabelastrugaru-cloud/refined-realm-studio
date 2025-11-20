import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BookOpen, FileText, Layers, Package, Check, Star } from "lucide-react";
import shopHero from "@/assets/shop-hero.jpg";
import architectureManual from "@/assets/architecture-manual.jpg";
import { useState } from "react";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string[];
}

const products: Product[] = [
  {
    id: "starter-pack",
    title: "Starter Pack Client",
    description: "Set profesional pentru prima interacțiune cu un client: ghiduri, chestionare și documente esențiale. Te ajută să creezi un proces clar, premium și coerent de la primul contact.",
    price: "€20",
    category: ["toate", "pachete"]
  },
  {
    id: "bathroom-complete",
    title: "Bathroom eBook + CAD Files + Template",
    description: "Pachet complet pentru proiectarea băilor: ebook detaliat, fișiere CAD + template profesional. Tot ce ai nevoie pentru proiecte tehnic corecte și estetic impecabile.",
    price: "€50",
    category: ["toate", "pachete", "ebook", "cad", "template"]
  },
  {
    id: "beige-contract",
    title: "BEIGE – Template Contract & Ofertă de Preț",
    description: "Document elegant și ușor de personalizat pentru contracte și oferte. Construit pentru a transmite profesionalism și consecvență în relația cu clientul.",
    price: "€20",
    category: ["toate", "template"]
  },
  {
    id: "green-presentation",
    title: "GREEN – Template Prezentare Companie",
    description: "Template minimalist, perfect pentru pitch-uri, colaborări B2B, întâlniri corporate și prezentarea agenției tale.",
    price: "€20",
    category: ["toate", "template"]
  },
  {
    id: "kitchen-ebook",
    title: "Kitchen eBook + CAD Files",
    description: "Ghid complet pentru proiectarea bucătăriilor + fișiere CAD organizate. Ideal pentru proiecte rapide, corecte și super profesionale.",
    price: "€50",
    category: ["toate", "ebook", "cad"]
  },
  {
    id: "bathroom-v2",
    title: "Bathroom eBook + CAD Files + Template (V2)",
    description: "Pachet complet alternativ pentru proiecte de băi: detalii tehnice, fișiere CAD + template premium pentru prezentări.",
    price: "€50",
    category: ["toate", "pachete", "ebook", "cad", "template"]
  }
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("toate");

  const filteredProducts = products.filter(product => 
    product.category.includes(activeCategory)
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${shopHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/90 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Resurse premium pentru designeri și arhitecți
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Template-uri, ebook-uri și fișiere CAD care îți optimizează timpul, îți clarifică procesul și îți ridică prezentările la nivel profesionist.
          </p>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="luxury" size="xl" className="group" onClick={() => document.getElementById('categorii')?.scrollIntoView({ behavior: 'smooth' })}>
              👉 Intră în Shop
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Architecture Manual Image */}
      <section className="w-full">
        <img 
          src={architectureManual} 
          alt="Manual de arhitectură" 
          className="w-full h-[400px] md:h-[600px] object-cover"
        />
      </section>

      {/* Categories Section */}
      <section id="categorii" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground text-center mb-8">
            Categorii
          </h2>
          
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 md:grid-cols-5 gap-2">
              <TabsTrigger value="toate" className="flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span className="hidden sm:inline">Toate produsele</span>
                <span className="sm:hidden">Toate</span>
              </TabsTrigger>
              <TabsTrigger value="ebook" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Ebook-uri
              </TabsTrigger>
              <TabsTrigger value="template" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Template-uri
              </TabsTrigger>
              <TabsTrigger value="cad" className="flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span className="hidden sm:inline">Fișiere CAD</span>
                <span className="sm:hidden">CAD</span>
              </TabsTrigger>
              <TabsTrigger value="pachete" className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                <span className="hidden sm:inline">Pachete complete</span>
                <span className="sm:hidden">Pachete</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="flex flex-col hover:shadow-luxury transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl">{product.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed mt-4">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-3xl font-bold text-luxury">{product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full group">
                    Vezi produsul
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12">
            De ce funcționează aceste resurse?
          </h2>
          
          <div className="space-y-6">
            {[
              "Te ajută să economisești ore întregi în procesul de lucru",
              "Prezinți proiectele într-un mod profesionist și convingător",
              "Te ajută să-ți organizezi clar tot fluxul cu clientul",
              "Documente premium inspirate de studiouri internaționale",
              "Rezultate mai bune și o experiență premium pentru client"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-luxury/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-luxury" />
                </div>
                <p className="text-lg text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-muted/50">
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-luxury text-luxury" />
                  ))}
                </div>
                <CardDescription className="text-base leading-relaxed text-foreground">
                  "Documentele sunt superbe și intuitive. Mi-au schimbat complet modul în care prezint proiectele."
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <p className="text-sm font-medium text-muted-foreground">— Andreea, designer</p>
              </CardFooter>
            </Card>

            <Card className="bg-muted/50">
              <CardHeader>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-luxury text-luxury" />
                  ))}
                </div>
                <CardDescription className="text-base leading-relaxed text-foreground">
                  "Am simțit imediat cum arată o agenție premium. Template-urile sunt aur."
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <p className="text-sm font-medium text-muted-foreground">— Vlad, arhitect</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Găsește resursele care îți eficientizează munca
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Documente premium pentru arhitecți și designeri care vor mai mult: ordine, profesionalism, eficiență.
          </p>

          <Button variant="luxury" size="xl" className="group" onClick={() => document.getElementById('categorii')?.scrollIntoView({ behavior: 'smooth' })}>
            👉 Cumpără acum
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Shop;
