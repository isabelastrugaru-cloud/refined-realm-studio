import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import PoliticaConfidentialitate from "./pages/PoliticaConfidentialitate";
import TermeniConditii from "./pages/TermeniConditii";
import PoliticaCookies from "./pages/PoliticaCookies";
import CookieConsent from "./components/CookieConsent";
import PenthouseHerastrau from "./pages/projects/PenthouseHerastrau";
import VillaPipera from "./pages/projects/VillaPipera";
import ApartamentPrimaverii from "./pages/projects/ApartamentPrimaverii";
import TendinteDesign2024 from "./pages/blog/TendinteDesign2024";
import MinimalismulScandinav from "./pages/blog/MinimalismulScandinav";
import DesignBiofil from "./pages/blog/DesignBiofil";
import Tendinte2025 from "./pages/blog/Tendinte2025";
import CasaInteligenta2025 from "./pages/blog/CasaInteligenta2025";
import CuloriSiTexturi2025 from "./pages/blog/CuloriSiTexturi2025";
import BugetLimitat from "./pages/blog/BugetLimitat";
import SpatiiMici from "./pages/blog/SpatiiMici";
import PsihologiaCulorilor from "./pages/blog/PsihologiaCulorilor";
import IluminatPerfect from "./pages/blog/IluminatPerfect";
import OpenSpace from "./pages/blog/OpenSpace";
import ArtDeco from "./pages/blog/ArtDeco";
import MaterialeNaturale from "./pages/blog/MaterialeNaturale";
import FinisajePremium from "./pages/blog/FinisajePremium";
import MaterialeEcologice from "./pages/blog/MaterialeEcologice";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="despre" element={<About />} />
            <Route path="portofoliu" element={<Portfolio />} />
            <Route path="proiecte/penthouse-herastrau" element={<PenthouseHerastrau />} />
            <Route path="proiecte/villa-pipera" element={<VillaPipera />} />
            <Route path="proiecte/apartament-primaverii" element={<ApartamentPrimaverii />} />
            <Route path="servicii" element={<Services />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/tendinte-design-2024" element={<TendinteDesign2024 />} />
            <Route path="blog/tendinte-2025" element={<Tendinte2025 />} />
            <Route path="blog/casa-inteligenta-2025" element={<CasaInteligenta2025 />} />
            <Route path="blog/culori-texturi-2025" element={<CuloriSiTexturi2025 />} />
            <Route path="blog/minimalismul-scandinav" element={<MinimalismulScandinav />} />
            <Route path="blog/design-biofil" element={<DesignBiofil />} />
            <Route path="blog/buget-limitat" element={<BugetLimitat />} />
            <Route path="blog/spatii-mici" element={<SpatiiMici />} />
            <Route path="blog/psihologia-culorilor" element={<PsihologiaCulorilor />} />
            <Route path="blog/iluminat-perfect" element={<IluminatPerfect />} />
            <Route path="blog/open-space" element={<OpenSpace />} />
            <Route path="blog/art-deco" element={<ArtDeco />} />
            <Route path="blog/materiale-naturale" element={<MaterialeNaturale />} />
            <Route path="blog/finisaje-premium" element={<FinisajePremium />} />
            <Route path="blog/materiale-ecologice" element={<MaterialeEcologice />} />
            <Route path="contact" element={<Contact />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:productId" element={<ProductDetail />} />
            <Route path="politica-confidentialitate" element={<PoliticaConfidentialitate />} />
            <Route path="termeni-conditii" element={<TermeniConditii />} />
            <Route path="cookies" element={<PoliticaCookies />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
