import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import shopHero from "@/assets/shop-hero.jpg";

const Shop = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${shopHero})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/90 backdrop-blur-sm" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Resurse premium pentru designeri și arhitecți
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Template-uri, ebook-uri și fișiere CAD care îți optimizează timpul, îți clarifică procesul și îți ridică prezentările la nivel profesionist.
          </p>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="luxury" size="xl" className="group">
              👉 Intră în Shop
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
