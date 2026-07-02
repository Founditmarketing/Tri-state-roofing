import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Navigation, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Button } from '../components/Button';
import { LOCATIONS } from '../data/locations';
import { PAGE_SERVICES } from '../data/serviceContent';
import { COMPANY_NAME, PHONE_NUMBER, PHONE_DISPLAY } from '../constants';
import { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '../utils/schema';

export const LocationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = LOCATIONS.find((l) => l.slug === slug);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!location) return <Navigate to="/404" replace />;

  const title = location.metaTitle;
  const description = location.metaDescription;
  const path = `/locations/${location.slug}`;

  const localBusiness = localBusinessSchema({
    path,
    name: `${COMPANY_NAME} - ${location.city}, ${location.state}`,
    address: { locality: location.city, region: location.state, postalCode: location.zip },
    geo: { lat: location.lat, lng: location.lng },
    hasMap: location.mapEmbedSrc,
    areaServed: [{ city: location.city, region: location.state }],
  });

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: `${location.city}, ${location.state}`, path },
  ];

  return (
    <>
      <SEO
        title={title}
        description={description}
        path={path}
        jsonLd={[localBusiness, breadcrumbSchema(crumbs), faqPageSchema(location.faqs)]}
      />
      <Breadcrumbs crumbs={crumbs} />

      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-bold tracking-wide uppercase text-sm mb-3">{location.county}, {location.stateFull}</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Roofing &amp; Exterior Contractor in {location.city}, {location.state}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{location.heroBlurb}</p>
          <div className="mt-8">
            <Button variant="white" onClick={() => (window.location.href = `tel:${PHONE_NUMBER}`)}>
              Call {PHONE_DISPLAY}
            </Button>
          </div>
        </div>
      </section>

      {/* Intro copy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {location.intro.map((paragraph, idx) => (
            <p key={idx} className="text-lg text-gray-600 mb-6 leading-relaxed">{paragraph}</p>
          ))}

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">Major Routes We Cover</h3>
              <ul className="space-y-2 text-gray-600">
                {location.highways.map((hwy) => (
                  <li key={hwy} className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3" />{hwy}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">Local Landmarks &amp; Institutions</h3>
              <ul className="space-y-2 text-gray-600">
                {location.landmarks.map((landmark) => (
                  <li key={landmark} className="flex items-start"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0" />{landmark}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services offered here */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Services We Provide in {location.city}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PAGE_SERVICES.map((s) => (
              <Link
                key={s.id}
                to={`/services/${s.slug}`}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow flex items-start gap-4"
              >
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">{s.service.title}</h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{s.service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Our {location.city} Service Area</h2>
          <div className="h-96 rounded-xl overflow-hidden border border-gray-200 shadow-lg relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 border-0"
              src={location.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${location.city}, ${location.state} service area`}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            {location.city}, {location.state} Roofing FAQs
          </h2>
          <div className="space-y-4">
            {location.faqs.map((faq, index) => (
              <div key={index} className={`bg-white rounded-lg border transition-all duration-200 ${openIndex === index ? 'border-primary shadow-md' : 'border-gray-200'}`}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                >
                  <span className={`font-bold ${openIndex === index ? 'text-primary' : 'text-gray-900'}`}>{faq.question}</span>
                  {openIndex === index ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                </button>
                {openIndex === index && (
                  <p className="p-5 pt-0 text-gray-600 leading-relaxed">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready for a Free Inspection in {location.city}?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Call us or request a quote online — our {location.city} crews typically schedule inspections within a day or two.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="white" onClick={() => (window.location.href = `tel:${PHONE_NUMBER}`)}>
              <MapPin className="w-4 h-4 mr-2" /> Call {PHONE_DISPLAY}
            </Button>
            <Link to="/#contact">
              <Button variant="primary">
                <Navigation className="w-4 h-4 mr-2" /> Request a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
