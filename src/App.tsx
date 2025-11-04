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
import NotFound from "./pages/NotFound";
import PenthouseHerastrau from "./pages/projects/PenthouseHerastrau";
import VillaPipera from "./pages/projects/VillaPipera";
import ApartamentPrimaverii from "./pages/projects/ApartamentPrimaverii";

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
            <Route path="contact" element={<Contact />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
