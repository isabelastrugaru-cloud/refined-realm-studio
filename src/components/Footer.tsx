import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    servicii: [{
      name: 'Design Interior Complet',
      href: '/servicii'
    }, {
      name: 'Consultanță Design',
      href: '/servicii'
    }, {
      name: 'Mobilier Premium',
      href: '/servicii'
    }, {
      name: 'Design Comercial',
      href: '/servicii'
    }],
    despre: [{
      name: 'Povestea noastră',
      href: '/despre'
    }],
    resurse: [{
      name: 'Portofoliu',
      href: '/portofoliu'
    }, {
      name: 'Testimoniale',
      href: '/testimoniale'
    }, {
      name: 'Blog Design',
      href: '#'
    }, {
      name: 'Ghid Stiluri',
      href: '#'
    }]
  };
  const socialLinks = [{
    icon: Instagram,
    href: '#',
    name: 'Instagram'
  }, {
    icon: Facebook,
    href: '#',
    name: 'Facebook'
  }, {
    icon: Linkedin,
    href: '#',
    name: 'LinkedIn'
  }];
  return <footer className="bg-primary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-playfair text-3xl font-bold mb-4">
              Inspirație & <span className="text-luxury">Tendințe</span>
            </h3>
            <p className="font-inter text-white/80 mb-8 text-lg">
              Primește lunar idei exclusive de design interior,<br />
              tendințe și sfaturi de la experții **Jubilee Luxury Design**
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Adresa ta de email" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-luxury backdrop-blur-sm" />
              <Button variant="luxury">
                Abonează-te
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <h2 className="font-playfair text-3xl font-bold text-white">
                Design Interior București
              </h2>
            </Link>
            <p className="font-inter text-white/80 leading-relaxed mb-8 max-w-md">De peste 5 ani, creăm spații exclusive care îmbină eleganța cu funcționalitatea, oferind servicii complete de design interior de lux pentru clienți exigenți.</p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-luxury mr-3 flex-shrink-0" />
                <span className="font-inter text-white/90">+40 752 490 173</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-luxury mr-3 flex-shrink-0" />
                <span className="font-inter text-white/90">office@designinteriorbucuresti.ro</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-luxury mr-3 flex-shrink-0 mt-0.5" />
                <span className="font-inter text-white/90">
                  Str. Erou Iancu Nicolae 61, București
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(social => <a key={social.name} href={social.href} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury/20 transition-colors duration-300 group" aria-label={social.name}>
                  <social.icon className="w-5 h-5 text-white/80 group-hover:text-luxury transition-colors" />
                </a>)}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-xl font-bold text-white mb-6">
              Servicii
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicii.map(link => <li key={link.name}>
                  <Link to={link.href} className="font-inter text-white/80 hover:text-luxury transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-playfair text-xl font-bold text-white mb-6">
              Despre noi
            </h4>
            <ul className="space-y-3">
              {footerLinks.despre.map(link => <li key={link.name}>
                  <Link to={link.href} className="font-inter text-white/80 hover:text-luxury transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-playfair text-xl font-bold text-white mb-6">
              Resurse
            </h4>
            <ul className="space-y-3">
              {footerLinks.resurse.map(link => <li key={link.name}>
                  <Link to={link.href} className="font-inter text-white/80 hover:text-luxury transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} **Jubilee Luxury Design** Studio. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-8">
              <Link to="/politica-confidentialitate" className="font-inter text-white/60 hover:text-luxury text-sm transition-colors duration-300">
                Politica de confidențialitate
              </Link>
              <Link to="/termeni-conditii" className="font-inter text-white/60 hover:text-luxury text-sm transition-colors duration-300">
                Termeni și condiții
              </Link>
              <Link to="/cookies" className="font-inter text-white/60 hover:text-luxury text-sm transition-colors duration-300">
                Politica cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;