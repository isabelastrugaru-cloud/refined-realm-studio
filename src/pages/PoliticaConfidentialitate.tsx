import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const PoliticaConfidentialitate = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const content = {
    ro: {
      title: 'Politica de Confidențialitate',
      lastUpdated: 'Ultima actualizare: 10 Martie 2026',
      sections: [
        {
          title: '1. Informații Generale',
          text: 'Jubilee Luxury Design SRL (denumită în continuare "Compania", "noi") respectă confidențialitatea datelor dumneavoastră personale. Această politică descrie modul în care colectăm, utilizăm și protejăm informațiile personale pe care ni le furnizați prin intermediul site-ului designinteriorbucuresti.ro.'
        },
        {
          title: '2. Date Colectate',
          text: 'Colectăm următoarele categorii de date personale: nume și prenume, adresa de email, numărul de telefon, tipul proiectului și detalii despre proiect — toate furnizate voluntar prin formularul de contact. De asemenea, colectăm date tehnice anonime precum adresa IP, tipul de browser și cookie-uri, în scopul îmbunătățirii experienței pe site.'
        },
        {
          title: '3. Scopul Prelucrării',
          text: 'Datele personale sunt prelucrate în scopul: răspunsului la solicitările dumneavoastră prin formularul de contact, programării consultațiilor, trimiterii de informații relevante privind serviciile noastre (doar cu consimțământul dumneavoastră) și îmbunătățirii serviciilor și a experienței pe site.'
        },
        {
          title: '4. Temeiul Legal',
          text: 'Prelucrarea datelor personale se bazează pe: consimțământul dumneavoastră explicit (Art. 6(1)(a) GDPR), executarea unui contract sau măsuri precontractuale (Art. 6(1)(b) GDPR) și interesul nostru legitim de a îmbunătăți serviciile (Art. 6(1)(f) GDPR).'
        },
        {
          title: '5. Durata Stocării',
          text: 'Datele personale sunt stocate pe durata necesară îndeplinirii scopurilor pentru care au fost colectate, dar nu mai mult de 3 ani de la ultima interacțiune, sau conform obligațiilor legale aplicabile.'
        },
        {
          title: '6. Drepturile Dumneavoastră',
          text: 'Conform GDPR, aveți dreptul de: acces la datele personale, rectificare a datelor inexacte, ștergere a datelor ("dreptul de a fi uitat"), restricționare a prelucrării, portabilitate a datelor și opoziție la prelucrare. Pentru exercitarea acestor drepturi, contactați-ne la isabela@designinteriorbucuresti.ro.'
        },
        {
          title: '7. Securitatea Datelor',
          text: 'Implementăm măsuri tehnice și organizatorice adecvate pentru protecția datelor personale împotriva accesului neautorizat, pierderii sau distrugerii. Datele sunt stocate pe servere securizate și accesul este restricționat.'
        },
        {
          title: '8. Contact',
          text: 'Pentru orice întrebări legate de prelucrarea datelor personale, ne puteți contacta la: Jubilee Luxury Design SRL, Str. Erou Iancu Nicolae 61, București, Email: isabela@designinteriorbucuresti.ro, Telefon: +40 752 490 173.'
        }
      ]
    },
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: March 10, 2026',
      sections: [
        {
          title: '1. General Information',
          text: 'Jubilee Luxury Design SRL (hereinafter "the Company", "we") respects the confidentiality of your personal data. This policy describes how we collect, use, and protect the personal information you provide through the website designinteriorbucuresti.ro.'
        },
        {
          title: '2. Data Collected',
          text: 'We collect the following categories of personal data: name, email address, phone number, project type, and project details — all voluntarily provided through the contact form. We also collect anonymous technical data such as IP address, browser type, and cookies to improve the site experience.'
        },
        {
          title: '3. Purpose of Processing',
          text: 'Personal data is processed for the purpose of: responding to your requests through the contact form, scheduling consultations, sending relevant information about our services (only with your consent), and improving our services and site experience.'
        },
        {
          title: '4. Legal Basis',
          text: 'The processing of personal data is based on: your explicit consent (Art. 6(1)(a) GDPR), performance of a contract or pre-contractual measures (Art. 6(1)(b) GDPR), and our legitimate interest in improving services (Art. 6(1)(f) GDPR).'
        },
        {
          title: '5. Storage Duration',
          text: 'Personal data is stored for the duration necessary to fulfill the purposes for which it was collected, but no longer than 3 years from the last interaction, or as required by applicable legal obligations.'
        },
        {
          title: '6. Your Rights',
          text: 'Under GDPR, you have the right to: access personal data, rectify inaccurate data, erase data ("right to be forgotten"), restrict processing, data portability, and object to processing. To exercise these rights, contact us at isabela@designinteriorbucuresti.ro.'
        },
        {
          title: '7. Data Security',
          text: 'We implement appropriate technical and organizational measures to protect personal data against unauthorized access, loss, or destruction. Data is stored on secure servers with restricted access.'
        },
        {
          title: '8. Contact',
          text: 'For any questions regarding the processing of personal data, you can contact us at: Jubilee Luxury Design SRL, Str. Erou Iancu Nicolae 61, Bucharest, Email: isabela@designinteriorbucuresti.ro, Phone: +40 752 490 173.'
        }
      ]
    },
    es: {
      title: 'Política de Privacidad',
      lastUpdated: 'Última actualización: 10 de Marzo de 2026',
      sections: [
        {
          title: '1. Información General',
          text: 'Jubilee Luxury Design SRL (en adelante "la Empresa", "nosotros") respeta la confidencialidad de sus datos personales. Esta política describe cómo recopilamos, utilizamos y protegemos la información personal que nos proporciona a través del sitio web designinteriorbucuresti.ro.'
        },
        {
          title: '2. Datos Recopilados',
          text: 'Recopilamos las siguientes categorías de datos personales: nombre, dirección de correo electrónico, número de teléfono, tipo de proyecto y detalles del proyecto, proporcionados voluntariamente a través del formulario de contacto. También recopilamos datos técnicos anónimos como dirección IP, tipo de navegador y cookies para mejorar la experiencia del sitio.'
        },
        {
          title: '3. Finalidad del Tratamiento',
          text: 'Los datos personales se procesan con el fin de: responder a sus solicitudes a través del formulario de contacto, programar consultas, enviar información relevante sobre nuestros servicios (solo con su consentimiento) y mejorar nuestros servicios y la experiencia del sitio.'
        },
        {
          title: '4. Base Legal',
          text: 'El tratamiento de datos personales se basa en: su consentimiento explícito (Art. 6(1)(a) GDPR), la ejecución de un contrato o medidas precontractuales (Art. 6(1)(b) GDPR) y nuestro interés legítimo en mejorar los servicios (Art. 6(1)(f) GDPR).'
        },
        {
          title: '5. Duración del Almacenamiento',
          text: 'Los datos personales se almacenan durante el tiempo necesario para cumplir los fines para los que fueron recopilados, pero no más de 3 años desde la última interacción, o según las obligaciones legales aplicables.'
        },
        {
          title: '6. Sus Derechos',
          text: 'Según el GDPR, tiene derecho a: acceder a sus datos personales, rectificar datos inexactos, borrar datos ("derecho al olvido"), restringir el procesamiento, portabilidad de datos y oponerse al procesamiento. Para ejercer estos derechos, contáctenos en isabela@designinteriorbucuresti.ro.'
        },
        {
          title: '7. Seguridad de los Datos',
          text: 'Implementamos medidas técnicas y organizativas apropiadas para proteger los datos personales contra el acceso no autorizado, la pérdida o la destrucción. Los datos se almacenan en servidores seguros con acceso restringido.'
        },
        {
          title: '8. Contacto',
          text: 'Para cualquier pregunta sobre el procesamiento de datos personales, puede contactarnos en: Jubilee Luxury Design SRL, Str. Erou Iancu Nicolae 61, Bucarest, Email: isabela@designinteriorbucuresti.ro, Teléfono: +40 752 490 173.'
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

export default PoliticaConfidentialitate;
