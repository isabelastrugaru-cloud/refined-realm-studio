import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const TermeniConditii = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const content = {
    ro: {
      title: 'Termeni și Condiții',
      lastUpdated: 'Ultima actualizare: 10 Martie 2026',
      sections: [
        {
          title: '1. Informații Generale',
          text: 'Prezentele Termeni și Condiții reglementează utilizarea site-ului designinteriorbucuresti.ro, operat de Jubilee Luxury Design SRL, cu sediul în Str. Erou Iancu Nicolae 61, București. Prin accesarea și utilizarea site-ului, sunteți de acord cu acești termeni.'
        },
        {
          title: '2. Serviciile Noastre',
          text: 'Jubilee Luxury Design oferă servicii de design interior de lux, consultanță design, achiziție mobilier premium și design comercial. Detaliile specifice ale serviciilor, inclusiv prețurile, durata și condițiile, sunt stabilite individual pentru fiecare proiect printr-un contract separat.'
        },
        {
          title: '3. Utilizarea Site-ului',
          text: 'Site-ul poate fi utilizat exclusiv în scopuri legale. Este interzisă utilizarea site-ului pentru: transmiterea de conținut ilegal, încercarea de acces neautorizat la sisteme, distribuirea de malware sau orice activitate care ar putea afecta funcționarea site-ului.'
        },
        {
          title: '4. Proprietate Intelectuală',
          text: 'Toate materialele de pe site (texte, imagini, design, logo-uri, grafice) sunt proprietatea Jubilee Luxury Design SRL sau sunt utilizate cu licență. Reproducerea, distribuirea sau utilizarea comercială a acestor materiale fără acordul prealabil scris este interzisă.'
        },
        {
          title: '5. Formularul de Contact',
          text: 'Prin trimiterea formularului de contact, confirmați că informațiile furnizate sunt corecte și complete. Compania va utiliza aceste informații exclusiv în scopul răspunsului la solicitarea dumneavoastră și conform Politicii de Confidențialitate.'
        },
        {
          title: '6. Limitarea Răspunderii',
          text: 'Informațiile de pe site sunt furnizate cu titlu informativ. Jubilee Luxury Design SRL nu garantează exactitatea, completitudinea sau actualitatea informațiilor. Compania nu răspunde pentru daunele directe sau indirecte rezultate din utilizarea site-ului.'
        },
        {
          title: '7. Modificări',
          text: 'Ne rezervăm dreptul de a modifica acești Termeni și Condiții în orice moment. Modificările intră în vigoare la momentul publicării pe site. Utilizarea continuă a site-ului după modificări constituie acceptarea noilor termeni.'
        },
        {
          title: '8. Legislația Aplicabilă',
          text: 'Acești termeni sunt guvernați de legislația română. Orice litigiu va fi soluționat de instanțele competente din București, România.'
        },
        {
          title: '9. Contact',
          text: 'Pentru orice întrebări legate de acești Termeni și Condiții, ne puteți contacta la: Jubilee Luxury Design SRL, Str. Erou Iancu Nicolae 61, București, Email: isabela@designinteriorbucuresti.ro, Telefon: +40 752 490 173.'
        }
      ]
    },
    en: {
      title: 'Terms and Conditions',
      lastUpdated: 'Last updated: March 10, 2026',
      sections: [
        {
          title: '1. General Information',
          text: 'These Terms and Conditions govern the use of the website designinteriorbucuresti.ro, operated by Jubilee Luxury Design SRL, headquartered at Str. Erou Iancu Nicolae 61, Bucharest. By accessing and using the site, you agree to these terms.'
        },
        {
          title: '2. Our Services',
          text: 'Jubilee Luxury Design offers luxury interior design services, design consultancy, premium furniture acquisition, and commercial design. Specific details of services, including prices, duration, and conditions, are established individually for each project through a separate contract.'
        },
        {
          title: '3. Site Usage',
          text: 'The site may be used exclusively for legal purposes. It is prohibited to use the site for: transmitting illegal content, attempting unauthorized access to systems, distributing malware, or any activity that could affect the operation of the site.'
        },
        {
          title: '4. Intellectual Property',
          text: 'All materials on the site (texts, images, design, logos, graphics) are the property of Jubilee Luxury Design SRL or are used under license. Reproduction, distribution, or commercial use of these materials without prior written consent is prohibited.'
        },
        {
          title: '5. Contact Form',
          text: 'By submitting the contact form, you confirm that the information provided is correct and complete. The Company will use this information exclusively to respond to your request and in accordance with the Privacy Policy.'
        },
        {
          title: '6. Limitation of Liability',
          text: 'Information on the site is provided for informational purposes. Jubilee Luxury Design SRL does not guarantee the accuracy, completeness, or timeliness of the information. The Company is not liable for direct or indirect damages resulting from the use of the site.'
        },
        {
          title: '7. Modifications',
          text: 'We reserve the right to modify these Terms and Conditions at any time. Changes take effect upon publication on the site. Continued use of the site after modifications constitutes acceptance of the new terms.'
        },
        {
          title: '8. Applicable Law',
          text: 'These terms are governed by Romanian law. Any dispute will be resolved by the competent courts in Bucharest, Romania.'
        },
        {
          title: '9. Contact',
          text: 'For any questions regarding these Terms and Conditions, you can contact us at: Jubilee Luxury Design SRL, Str. Erou Iancu Nicolae 61, Bucharest, Email: isabela@designinteriorbucuresti.ro, Phone: +40 752 490 173.'
        }
      ]
    },
    es: {
      title: 'Términos y Condiciones',
      lastUpdated: 'Última actualización: 10 de Marzo de 2026',
      sections: [
        {
          title: '1. Información General',
          text: 'Estos Términos y Condiciones regulan el uso del sitio web designinteriorbucuresti.ro, operado por Jubilee Luxury Design SRL, con sede en Str. Erou Iancu Nicolae 61, Bucarest. Al acceder y utilizar el sitio, acepta estos términos.'
        },
        {
          title: '2. Nuestros Servicios',
          text: 'Jubilee Luxury Design ofrece servicios de diseño interior de lujo, consultoría de diseño, adquisición de mobiliario premium y diseño comercial. Los detalles específicos de los servicios, incluidos precios, duración y condiciones, se establecen individualmente para cada proyecto mediante un contrato separado.'
        },
        {
          title: '3. Uso del Sitio',
          text: 'El sitio puede utilizarse exclusivamente con fines legales. Está prohibido utilizar el sitio para: transmitir contenido ilegal, intentar acceso no autorizado a sistemas, distribuir malware o cualquier actividad que pueda afectar el funcionamiento del sitio.'
        },
        {
          title: '4. Propiedad Intelectual',
          text: 'Todos los materiales del sitio (textos, imágenes, diseño, logotipos, gráficos) son propiedad de Jubilee Luxury Design SRL o se utilizan bajo licencia. La reproducción, distribución o uso comercial de estos materiales sin consentimiento previo por escrito está prohibida.'
        },
        {
          title: '5. Formulario de Contacto',
          text: 'Al enviar el formulario de contacto, confirma que la información proporcionada es correcta y completa. La Empresa utilizará esta información exclusivamente para responder a su solicitud y de acuerdo con la Política de Privacidad.'
        },
        {
          title: '6. Limitación de Responsabilidad',
          text: 'La información del sitio se proporciona con fines informativos. Jubilee Luxury Design SRL no garantiza la exactitud, integridad o actualidad de la información. La Empresa no es responsable de daños directos o indirectos derivados del uso del sitio.'
        },
        {
          title: '7. Modificaciones',
          text: 'Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entran en vigor en el momento de su publicación en el sitio. El uso continuado del sitio después de las modificaciones constituye la aceptación de los nuevos términos.'
        },
        {
          title: '8. Legislación Aplicable',
          text: 'Estos términos se rigen por la legislación rumana. Cualquier disputa será resuelta por los tribunales competentes de Bucarest, Rumanía.'
        },
        {
          title: '9. Contacto',
          text: 'Para cualquier pregunta sobre estos Términos y Condiciones, puede contactarnos en: Jubilee Luxury Design SRL, Str. Erou Iancu Nicolae 61, Bucarest, Email: isabela@designinteriorbucuresti.ro, Teléfono: +40 752 490 173.'
        }
      ]
    }
  };

  const c = content[language];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-beige">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            {c.title}
          </h1>
          <p className="font-inter text-muted-foreground">{c.lastUpdated}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="font-inter text-luxury hover:text-luxury/80 text-sm mb-8 inline-block transition-colors"
          >
            {t('legal.back')}
          </button>

          <div className="p-6 bg-premium rounded-lg mb-8">
            <p className="font-inter text-sm text-muted-foreground leading-relaxed">
              <strong>Jubilee Luxury Design SRL</strong><br />
              Str. Erou Iancu Nicolae 61, București<br />
              CUI: [de completat] | J40/[de completat]<br />
              Email: isabela@designinteriorbucuresti.ro | Tel: +40 752 490 173
            </p>
          </div>

          <div className="space-y-8">
            {c.sections.map((section, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <h2 className="font-playfair text-xl font-bold text-foreground mb-3">{section.title}</h2>
                <p className="font-inter text-muted-foreground leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermeniConditii;
