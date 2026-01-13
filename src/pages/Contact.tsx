import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.successTitle'),
      description: t('contact.successDescription')
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
    title: t('contact.phoneTitle'),
    details: ['+40 752 490 173'],
    action: t('contact.callNow')
  }, {
    icon: Mail,
    title: t('contact.emailTitle'),
    details: ['office@designinteriorbucuresti.ro'],
    action: t('contact.sendEmail')
  }, {
    icon: MapPin,
    title: t('contact.officeTitle'),
    details: ['Str. Erou Iancu Nicolae 61', 'București'],
    action: t('contact.viewOnMap')
  }, {
    icon: Clock,
    title: t('contact.scheduleTitle'),
    details: ['Lun-Vin: 10:00 - 19:00', 'Sâm: 10:00 - 16:00'],
    action: t('contact.scheduleVisit')
  }];

  const services = ['Design Interior Complet', 'Consultanță Design', 'Renovare & Reamenajare', 'Achiziție Mobilier Premium', 'Design Comercial', 'Altele'];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-beige">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 animate-fade-in leading-tight">
            {t('contact.heroTitle')} <span className="text-luxury">{t('contact.heroHighlight')}</span>
          </h1>
          <p className="font-inter text-base sm:text-lg md:text-xl text-muted-foreground animate-fade-in-up max-w-2xl mx-auto">
            {t('contact.heroDescription')}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-luxury">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-foreground mb-6 md:mb-8 leading-tight">
                    {t('contact.formTitle')} <span className="text-luxury">{t('contact.formHighlight')}</span>
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                          {t('contact.fullName')} *
                        </label>
                        <Input 
                          placeholder={t('contact.namePlaceholder')} 
                          value={formData.name} 
                          onChange={e => setFormData(prev => ({
                            ...prev,
                            name: e.target.value
                          }))} 
                          required 
                          className="h-12" 
                        />
                      </div>
                      <div>
                        <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                          {t('contact.email')} *
                        </label>
                        <Input 
                          type="email" 
                          placeholder={t('contact.emailPlaceholder')} 
                          value={formData.email} 
                          onChange={e => setFormData(prev => ({
                            ...prev,
                            email: e.target.value
                          }))} 
                          required 
                          className="h-12" 
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                          {t('contact.phone')} *
                        </label>
                        <Input 
                          type="tel" 
                          placeholder={t('contact.phonePlaceholder')} 
                          value={formData.phone} 
                          onChange={e => setFormData(prev => ({
                            ...prev,
                            phone: e.target.value
                          }))} 
                          required 
                          className="h-12" 
                        />
                      </div>
                      <div>
                        <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                          {t('contact.projectType')}
                        </label>
                        <select 
                          className="w-full h-12 px-3 bg-background border border-input rounded-md font-inter" 
                          value={formData.project} 
                          onChange={e => setFormData(prev => ({
                            ...prev,
                            project: e.target.value
                          }))}
                        >
                          <option value="">{t('contact.selectProject')}</option>
                          {services.map(service => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                        {t('contact.projectDetails')}
                      </label>
                      <Textarea 
                        placeholder={t('contact.detailsPlaceholder')} 
                        rows={6} 
                        value={formData.message} 
                        onChange={e => setFormData(prev => ({
                          ...prev,
                          message: e.target.value
                        }))} 
                        className="resize-none" 
                      />
                    </div>

                    <Button variant="luxury" size="lg" type="submit" className="w-full text-sm sm:text-base">
                      <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      {t('contact.scheduleCta')}
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </form>

                  <div className="mt-8 p-6 bg-premium rounded-lg">
                    <div className="flex items-start">
                      <MessageSquare className="w-6 h-6 text-luxury mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-inter font-semibold text-foreground mb-2">
                          {t('contact.nextSteps')}
                        </h4>
                        <ul className="space-y-1 font-inter text-sm text-muted-foreground">
                          <li>• {t('contact.step1')}</li>
                          <li>• {t('contact.step2')}</li>
                          <li>• {t('contact.step3')}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="shadow-subtle hover:shadow-luxury transition-all duration-300 animate-fade-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-luxury/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <info.icon className="w-6 h-6 text-luxury" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-playfair text-lg font-bold text-foreground mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="font-inter text-xs text-muted-foreground mb-1 break-words">
                            {detail}
                          </p>
                        ))}
                        <Button variant="ghost" className="mt-2 p-0 h-auto font-inter text-luxury hover:text-luxury/80">
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-premium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 leading-tight px-2">
              <span className="text-luxury font-bold">Jubilee Luxury Design</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                {t('contact.uniqueExperience')}
              </h3>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-luxury rounded-full mr-4"></div>
                  <span className="font-inter text-foreground">{t('contact.personalizedConsultancy')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-luxury rounded-full mr-4"></div>
                  <span className="font-inter text-foreground">{t('contact.freeParking')}</span>
                </div>
              </div>

              <div className="mt-8">
                <Button variant="luxury" size="lg">
                  {t('contact.scheduleOfficeVisit')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="aspect-square bg-gradient-hero rounded-2xl shadow-luxury flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-luxury" />
                  <h4 className="font-playfair text-2xl font-bold mb-2">Biroul Jubilee Luxury Design</h4>
                  <p className="font-inter">Str. Erou Iancu Nicolae 61<br />București</p>
                  <Button variant="outline-light" className="mt-6">
                    {t('contact.openInMaps')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Access */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-8">
            {t('contact.faqTitle')} <span className="text-luxury">{t('contact.faqHighlight')}</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {[{
              question: t('contact.faq1Q'),
              answer: t('contact.faq1A')
            }, {
              question: t('contact.faq2Q'),
              answer: t('contact.faq2A')
            }, {
              question: t('contact.faq3Q'),
              answer: t('contact.faq3A')
            }, {
              question: t('contact.faq4Q'),
              answer: t('contact.faq4A')
            }].map((faq, index) => (
              <div 
                key={index} 
                className="text-left p-6 bg-card rounded-xl shadow-subtle animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="font-playfair text-lg font-bold text-foreground mb-3">
                  {faq.question}
                </h4>
                <p className="font-inter text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <Button variant="outline" size="lg">
            {t('contact.viewAllFaq')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
