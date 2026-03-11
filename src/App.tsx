import { lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CookieConsent from "./components/CookieConsent";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Services = lazy(() => import("./pages/Services"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const Shop = lazy(() => import("./pages/Shop"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PoliticaConfidentialitate = lazy(() => import("./pages/PoliticaConfidentialitate"));
const TermeniConditii = lazy(() => import("./pages/TermeniConditii"));
const PoliticaCookies = lazy(() => import("./pages/PoliticaCookies"));
const PenthouseHerastrau = lazy(() => import("./pages/projects/PenthouseHerastrau"));
const VillaPipera = lazy(() => import("./pages/projects/VillaPipera"));
const ApartamentPrimaverii = lazy(() => import("./pages/projects/ApartamentPrimaverii"));
const TendinteDesign2024 = lazy(() => import("./pages/blog/TendinteDesign2024"));
const MinimalismulScandinav = lazy(() => import("./pages/blog/MinimalismulScandinav"));
const DesignBiofil = lazy(() => import("./pages/blog/DesignBiofil"));
const Tendinte2025 = lazy(() => import("./pages/blog/Tendinte2025"));
const CasaInteligenta2025 = lazy(() => import("./pages/blog/CasaInteligenta2025"));
const CuloriSiTexturi2025 = lazy(() => import("./pages/blog/CuloriSiTexturi2025"));
const BugetLimitat = lazy(() => import("./pages/blog/BugetLimitat"));
const SpatiiMici = lazy(() => import("./pages/blog/SpatiiMici"));
const PsihologiaCulorilor = lazy(() => import("./pages/blog/PsihologiaCulorilor"));
const IluminatPerfect = lazy(() => import("./pages/blog/IluminatPerfect"));
const OpenSpace = lazy(() => import("./pages/blog/OpenSpace"));
const ArtDeco = lazy(() => import("./pages/blog/ArtDeco"));
const MaterialeNaturale = lazy(() => import("./pages/blog/MaterialeNaturale"));
const FinisajePremium = lazy(() => import("./pages/blog/FinisajePremium"));
const MaterialeEcologice = lazy(() => import("./pages/blog/MaterialeEcologice"));

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
