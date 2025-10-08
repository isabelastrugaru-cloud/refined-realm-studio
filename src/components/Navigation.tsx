import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
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
    name: 'Acasă',
    href: '/'
  }, {
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
    name: 'Contact',
    href: '/contact'
  }];
  const isActive = (href: string) => location.pathname === href;
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-subtle' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="font-playfair text-2xl font-bold text-foreground hover:text-luxury transition-colors duration-300">Design Interior Bucuresti</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`relative font-inter text-sm font-medium transition-colors duration-300 group ${isActive(item.href) ? 'text-luxury' : 'text-foreground hover:text-luxury'}`}>
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-luxury transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>)}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="luxury" size="lg">
              Programează consultația
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground hover:text-luxury transition-colors">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border animate-fade-in">
            <div className="px-6 py-6 space-y-4">
              {navigation.map(item => <Link key={item.name} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className={`block font-inter text-base font-medium transition-colors duration-300 ${isActive(item.href) ? 'text-luxury' : 'text-foreground hover:text-luxury'}`}>
                  {item.name}
                </Link>)}
              <div className="pt-4">
                <Button variant="luxury" size="lg" className="w-full">
                  Programează consultația
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;