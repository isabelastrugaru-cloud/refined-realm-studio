import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import { site } from '@/config/sites';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('nav.about'), href: '/despre' },
    { name: t('nav.portfolio'), href: '/portofoliu' },
    { name: t('nav.services'), href: '/servicii' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.shop'), href: '/shop' },
    { name: t('nav.contact'), href: '/contact' }
  ];
  const isActive = (href: string) => href === '/' ? location.pathname === '/' : location.pathname === href || location.pathname.startsWith(href + '/');
  return <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-luxury focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
      Skip to content
    </a>
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-subtle' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center h-20 relative z-50">
          {/* Mobile Logo - Centered */}
          <Link to="/" className="nav:hidden flex items-center hover:opacity-80 transition-opacity duration-300 absolute left-0">
            <img src={site.logo} alt={`Design Interior ${site.city}`} className="h-14 w-auto" fetchPriority="high" />
          </Link>

          {/* Desktop - Logo on the left */}
          <Link to="/" className="hidden nav:flex items-center hover:opacity-80 transition-opacity duration-300 absolute left-0">
            <img src={site.logo} alt={`Design Interior ${site.city}`} className="h-20 w-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] brightness-105" fetchPriority="high" />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden nav:flex items-center space-x-8">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`relative font-inter text-sm font-medium transition-colors duration-300 group ${isActive(item.href) ? 'text-luxury' : 'text-foreground hover:text-luxury'}`}>
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-luxury transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>)}
          </div>

          {/* CTA Button & Language Selector - Right side */}
          <div className="hidden nav:flex items-center gap-3 absolute right-0">
            <LanguageSelector />
            <Button variant="luxury" size="lg" asChild>
              <a href={`tel:${site.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                {t('nav.callNow')}
              </a>
            </Button>
          </div>

          {/* Mobile menu button & Language - Right side */}
          <div className="nav:hidden flex items-center gap-2 absolute right-0">
            <LanguageSelector />
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-foreground hover:text-luxury transition-colors" aria-label="Deschide meniul">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="nav:hidden fixed inset-0 bg-background z-40 animate-fade-in overflow-y-auto">
            <div className="px-6 pt-28 pb-8 space-y-6 text-center">
              {navigation.map(item => <Link key={item.name} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className={`block font-inter text-lg font-medium transition-colors duration-300 py-2 ${isActive(item.href) ? 'text-luxury' : 'text-foreground hover:text-luxury'}`}>
                  {item.name}
                </Link>)}
              <div className="pt-6">
                <Button variant="luxury" size="lg" className="w-full text-base py-6" asChild>
                  <a href={`tel:${site.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {t('nav.callNow')}
                  </a>
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>
  </>;
};
export default Navigation;