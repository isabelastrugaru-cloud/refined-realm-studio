import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from 'lucide-react';
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Mesaj trimis cu succes!",
      description: "Vă vom contacta în maxim 24 de ore pentru programarea consultației."
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      project: '',
      message: ''
    });
  };
  const contactInfo = [{
    icon: Phone,
    title: 'Telefon',
    details: ['+40 752 490 173'],
    action: 'Sună acum'
  }, {
    icon: Mail,
    title: 'Email',
    details: ['office@designinteriorbucuresti.ro'],
    action: 'Trimite email'
  }, {
    icon: MapPin,
    title: 'Showroom',
    details: ['Str. Erou Iancu Nicolae 61', 'București'],
    action: 'Vezi pe hartă'
  }, {
    icon: Clock,
    title: 'Program',
    details: ['Lun-Vin: 10:00 - 19:00', 'Sâm: 10:00 - 16:00'],
    action: 'Programează vizită'
  }];
  const services = ['Design Interior Complet', 'Consultanță Design', 'Renovare & Reamenajare', 'Achiziție Mobilier Premium', 'Design Comercial', 'Altele'];
  return <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-beige">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Să Începem <span className="text-luxury">Împreună</span>
          </h1>
          <p className="font-inter text-xl text-muted-foreground animate-fade-in-up">
            Consultația inițială este gratuită și fără obligații.<br />
            Contactează-ne pentru a discuta despre visul tău
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-luxury">
                <CardContent className="p-8">
                  <h2 className="font-playfair text-3xl font-bold text-foreground mb-8">
                    Programează Consultația <span className="text-luxury">Gratuită</span>
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                          Nume complet *
                        </label>
                        <Input placeholder="Numele tău" value={formData.name} onChange={e => setFormData(prev => ({
                        ...prev,
                        name: e.target.value
                      }))} required className="h-12" />
                      </div>
                      <div>
                        <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                          Email *
                        </label>
                        <Input type="email" placeholder="email@exemplu.com" value={formData.email} onChange={e => setFormData(prev => ({
                        ...prev,
                        email: e.target.value
                      }))} required className="h-12" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                          Telefon *
                        </label>
                        <Input type="tel" placeholder="+40 723 456 789" value={formData.phone} onChange={e => setFormData(prev => ({
                        ...prev,
                        phone: e.target.value
                      }))} required className="h-12" />
                      </div>
                      <div>
                        <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                          Tip proiect
                        </label>
                        <select className="w-full h-12 px-3 bg-background border border-input rounded-md font-inter" value={formData.project} onChange={e => setFormData(prev => ({
                        ...prev,
                        project: e.target.value
                      }))}>
                          <option value="">Selectează tipul proiectului</option>
                          {services.map(service => <option key={service} value={service}>{service}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                        Detalii despre proiect
                      </label>
                      <Textarea placeholder="Spune-ne mai multe despre viziunea ta..." rows={6} value={formData.message} onChange={e => setFormData(prev => ({
                      ...prev,
                      message: e.target.value
                    }))} className="resize-none" />
                    </div>

                    <Button variant="luxury" size="lg" type="submit" className="w-full">
                      <Calendar className="mr-2 h-5 w-5" />
                      Programează Consultația Gratuită
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>

                  <div className="mt-8 p-6 bg-premium rounded-lg">
                    <div className="flex items-start">
                      <MessageSquare className="w-6 h-6 text-luxury mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-inter font-semibold text-foreground mb-2">
                          Ce urmează după trimiterea formularului?
                        </h4>
                        <ul className="space-y-1 font-inter text-sm text-muted-foreground">
                          <li>• Te contactăm în maxim 24 de ore</li>
                          <li>• Programăm consultația la momentul potrivit</li>
                          
                          <li>• Primești o propunere personalizată</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => <Card key={index} className="shadow-subtle hover:shadow-luxury transition-all duration-300 animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-luxury/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <info.icon className="w-6 h-6 text-luxury" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-playfair text-lg font-bold text-foreground mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => <p key={idx} className="font-inter text-xs text-muted-foreground mb-1 break-words">
                            {detail}
                          </p>)}
                        <Button variant="ghost" className="mt-2 p-0 h-auto font-inter text-luxury hover:text-luxury/80">
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-premium">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Showroom <span className="text-luxury font-bold">Jubilee Luxury Design</span>
            </h2>
            <p className="font-inter text-xl text-muted-foreground">
              Vizitează showroom-ul nostru pentru a experimenta direct<br />
              calitatea materialelor și a discuta față în față despre proiectul tău
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                O Experiență Unică te Așteaptă
              </h3>
              <div className="space-y-6 font-inter text-lg text-muted-foreground leading-relaxed">
                <p>
                  Showroom-ul nostru de pe Calea Victoriei este conceput să îți ofere 
                  o experiență completă a luxului și calității materialelor pe care 
                  le folosim în proiectele noastre.
                </p>
                <p>
                  Aici poți experimenta direct texturile, culorile și finisajele premium, 
                  iar echipa noastră îți va prezenta portfoliul complet al proiectelor realizate.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-luxury rounded-full mr-4"></div>
                  <span className="font-inter text-foreground">Expoziție materiale premium</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-luxury rounded-full mr-4"></div>
                  <span className="font-inter text-foreground">Mobilier și accesorii de lux</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-luxury rounded-full mr-4"></div>
                  <span className="font-inter text-foreground">Consultanță personalizată</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-luxury rounded-full mr-4"></div>
                  <span className="font-inter text-foreground">Parcare gratuită disponibilă</span>
                </div>
              </div>

              <div className="mt-8">
                <Button variant="luxury" size="lg">
                  Programează vizita la showroom
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="aspect-square bg-gradient-hero rounded-2xl shadow-luxury flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-luxury" />
                  <h4 className="font-playfair text-2xl font-bold mb-2">Showroom **Jubilee Luxury Design**</h4>
                  <p className="font-inter">Str. Erou Iancu Nicolae 61<br />București</p>
                  <Button variant="outline-light" className="mt-6">
                    Deschide în Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Access */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-8">
            Întrebări <span className="text-luxury">Frecvente</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[{
            question: 'Cât durează un proiect?',
            answer: 'Între 4-12 săptămâni, în funcție de complexitatea proiectului și suprafața spațiului.'
          }, {
            question: 'Oferiți garanție?',
            answer: 'Da, oferim 2 ani garanție completă pentru toate lucrările și materialele utilizate.'
          }, {
            question: 'Lucrați în toată țara?',
            answer: 'Da, acceptăm proiecte în întreaga țară pentru suprafețe de minimum 150mp.'
          }, {
            question: 'Care este bugetul minim?',
            answer: 'Bugetul minim pentru un proiect complet este de 25.000€, inclusiv mobilier și execuție.'
          }].map((faq, index) => <div key={index} className="text-left p-6 bg-card rounded-xl shadow-subtle animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <h4 className="font-playfair text-lg font-bold text-foreground mb-3">
                  {faq.question}
                </h4>
                <p className="font-inter text-muted-foreground">
                  {faq.answer}
                </p>
              </div>)}
          </div>

          <Button variant="outline" size="lg">
            Vezi toate întrebările frecvente
          </Button>
        </div>
      </section>
    </div>;
};
export default Contact;