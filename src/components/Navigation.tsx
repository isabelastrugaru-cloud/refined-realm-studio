import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import logo from '@/assets/logo.svg';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigation = [{
    name: 'Despre noi',
    href: '/despre'
  }, {
    name: 'Portofoliu',
    href: '/portofoliu'
  }, {
    name: 'Servicii',
    href: '/servicii'
  }, {
    name: 'Blog',
    href: '/blog'
  }, {
    name: 'Shop',
    href: '/shop'
  }, {
    name: 'Contact',
    href: '/contact'
  }];
  const isActive = (href: string) => location.pathname === href;
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-subtle' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center h-20 relative">
          {/* Mobile Logo - Centered */}
          <Link to="/" className="md:hidden flex items-center hover:opacity-80 transition-opacity duration-300 absolute left-0">
            <img src={logo} alt="Design Interior Bucuresti" className="h-14 w-auto" />
          </Link>

          {/* Desktop - Logo on the left */}
          <Link to="/" className="hidden md:flex items-center hover:opacity-80 transition-opacity duration-300 absolute left-0">
            <img src={logo} alt="Design Interior Bucuresti" className="h-20 w-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] brightness-105" />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`relative font-inter text-sm font-medium transition-colors duration-300 group ${isActive(item.href) ? 'text-luxury' : 'text-foreground hover:text-luxury'}`}>
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-luxury transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>)}
          </div>

          {/* CTA Button - Right side */}
          <div className="hidden md:block absolute right-0">
            <Button variant="luxury" size="lg" asChild>
              <a href="tel:+40752490173">
                <Phone className="mr-2 h-5 w-5" />
                Sună acum
              </a>
            </Button>
          </div>

          {/* Mobile menu button - Right side */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground hover:text-luxury transition-colors absolute right-0">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border animate-fade-in">
            <div className="px-6 py-6 space-y-4 text-center">
              {navigation.map(item => <Link key={item.name} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className={`block font-inter text-base font-medium transition-colors duration-300 ${isActive(item.href) ? 'text-luxury' : 'text-foreground hover:text-luxury'}`}>
                  {item.name}
                </Link>)}
              <div className="pt-4">
                <Button variant="luxury" size="lg" className="w-full" asChild>
                  <a href="tel:+40752490173">
                    <Phone className="mr-2 h-5 w-5" />
                    Sună acum
                  </a>
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;