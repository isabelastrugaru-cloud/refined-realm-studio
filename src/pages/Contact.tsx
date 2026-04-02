import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  const serviceMapping: Record<string, string> = {
    'design-interior-complet': t('contact.service1'),
    'consultanta-design': t('contact.service2'),
    'mobilier-premium': t('contact.service4'),
  };

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam && serviceMapping[serviceParam]) {
      setFormData(prev => ({ ...prev, project: serviceMapping[serviceParam] }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!gdprConsent) {
      toast({
        title: 'Error',
        description: t('contact.gdprRequired'),
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
          gdpr_consent: gdprConsent.toString(),
        }).toString(),
      });

      if (!response.ok) throw new Error('Form submission failed');

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
      setGdprConsent(false);
    } catch {
      toast({
        title: t('contact.errorTitle'),
        description: t('contact.errorDescription'),
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [{
    icon: Phone,
    title: t('contact.phoneTitle'),
    details: ['+40 752 490 173'],
    action: t('contact.callNow'),
    href: 'tel:+40752490173'
  }, {
    icon: Mail,
    title: t('contact.emailTitle'),
    details: ['isabela@designinteriorbucuresti.ro'],
    action: t('contact.sendEmail'),
    href: 'mailto:isabela@designinteriorbucuresti.ro'
  }, {
    icon: MapPin,
    title: t('contact.officeTitle'),
    details: ['Str. Erou Iancu Nicolae 61', 'București'],
    action: t('contact.viewOnMap'),
    href: 'https://maps.app.goo.gl/rYLqVRsjxr6eKiVRA'
  }, {
    icon: Clock,
    title: t('contact.scheduleTitle'),
    details: ['Lun-Vin: 10:00 - 19:00', 'Sâm: 10:00 - 16:00'],
    action: t('contact.scheduleVisit'),
    href: 'tel:+40752490173'
  }];

  const services = [
    t('contact.service1'),
    t('contact.service2'),
    t('contact.service3'),
    t('contact.service4'),
    t('contact.service5'),
    t('contact.service6'),
  ];

  return (
    <div className="pt-20">
      <SEO title={t('seo.contactTitle')} description={t('seo.contactDesc')} />
      {/* Hero Section */}
      <section className="py-24 bg-gradient-beige">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <img src="/isabela-2.webp" alt="Isabela — designer interior Jubilee Luxury Design" fetchPriority="high" className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover object-[center_60%] rounded-full mx-auto mb-10 shadow-luxury animate-scale-in" />
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

                  <form name="contact" onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden"><input name="bot-field" /></p>
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

                    {/* GDPR Consent */}
                    <div className="flex items-center gap-3">
                      <Switch
                        id="gdpr-consent"
                        checked={gdprConsent}
                        onCheckedChange={setGdprConsent}
                        className="data-[state=checked]:bg-luxury"
                      />
                      <label htmlFor="gdpr-consent" className="font-inter text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        {t('contact.gdprConsent')}{' '}
                        <Link to="/politica-confidentialitate" className="text-luxury hover:underline">
                          {t('contact.gdprPrivacyLink')}
                        </Link>{' '}
                        {t('contact.gdprAnd')}{' '}
                        <Link to="/termeni-conditii" className="text-luxury hover:underline">
                          {t('contact.gdprTermsLink')}
                        </Link>.
                      </label>
                    </div>

                    <Button variant="luxury" size="lg" type="submit" className="w-full text-sm sm:text-base" disabled={isSubmitting}>
                      <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      {isSubmitting ? '...' : t('contact.scheduleCta')}
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
                        <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="block">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="font-inter text-xs text-muted-foreground mb-1 break-words hover:text-foreground transition-colors">
                              {detail}
                            </p>
                          ))}
                        </a>
                        <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                          <Button variant="ghost" className="mt-2 px-4 h-auto py-1.5 font-inter text-luxury hover:text-foreground hover:bg-luxury/10 border border-luxury/30">
                            {info.action}
                          </Button>
                        </a>
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
                <a href="tel:+40752490173">
                  <Button variant="luxury" size="lg">
                    {t('contact.scheduleOfficeVisit')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="aspect-video rounded-2xl shadow-luxury overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Str.+Erou+Iancu+Nicolae+61,+Bucuresti&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '350px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jubilee Luxury Design - Locație birou"
                ></iframe>
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
        </div>
      </section>
    </div>
  );
};

export default Contact;
