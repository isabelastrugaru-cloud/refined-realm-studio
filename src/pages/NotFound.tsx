import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6">
      <div className="text-center max-w-2xl">
        <div className="mb-6 md:mb-8">
          <h1 className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-luxury mb-3 md:mb-4 animate-fade-in">
            404
          </h1>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 animate-fade-in-up leading-tight px-2">
            Pagina nu a fost găsită
          </h2>
          <p className="font-inter text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 animate-fade-in-up px-4">
            Ne pare rău, dar pagina pe care o căutați nu există sau a fost mutată.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fade-in-up px-4">
          <Button asChild variant="luxury" size="lg">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Înapoi la pagina principală
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" onClick={() => window.history.back()}>
            <button type="button">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Înapoi
            </button>
          </Button>
        </div>

        <div className="mt-12 md:mt-16 p-4 sm:p-6 md:p-8 bg-premium rounded-2xl animate-scale-in mx-4">
          <h3 className="font-playfair text-xl sm:text-2xl font-bold text-foreground mb-3 md:mb-4">
            Poate te interesează
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 md:gap-4 text-left">
            <Link 
              to="/portofoliu" 
              className="p-4 bg-background rounded-lg hover:shadow-subtle transition-all duration-300 group"
            >
              <h4 className="font-inter font-semibold text-foreground mb-2 group-hover:text-luxury">
                Portofoliul nostru
              </h4>
              <p className="font-inter text-sm text-muted-foreground">
                Descoperă proiectele exclusive realizate
              </p>
            </Link>
            <Link 
              to="/servicii" 
              className="p-4 bg-background rounded-lg hover:shadow-subtle transition-all duration-300 group"
            >
              <h4 className="font-inter font-semibold text-foreground mb-2 group-hover:text-luxury">
                Serviciile noastre
              </h4>
              <p className="font-inter text-sm text-muted-foreground">
                Pachete complete de design interior
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
