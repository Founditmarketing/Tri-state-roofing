import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Button } from '../components/Button';
import { getServiceBySlug } from '../data/serviceContent';
import { LOCATIONS } from '../data/locations';
import { SITE_URL, PHONE_NUMBER, PHONE_DISPLAY } from '../constants';
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema';

export const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = getServiceBySlug(slug ?? '');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!page) return <Navigate to="/404" replace />;

  const { service, intro, faqs, metaTitle, metaDescription } = page;
  const path = `/services/${page.slug}`;
  const title = metaTitle;
  const description = metaDescription;

  const serviceLd = serviceSchema(service, {
    path,
    areaServed: LOCATIONS.map((l) => ({ city: l.city, region: l.state })),
  });

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: service.title, path },
  ];

  const Icon = service.icon;

  return (
    <>
      <SEO
        title={title}
        description={description}
        path={path}
        image={`${SITE_URL}${service.image}`}
        jsonLd={[serviceLd, breadcrumbSchema(crumbs), faqPageSchema(faqs)]}
      />
      <Breadcrumbs crumbs={crumbs} />

      {/* Hero */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={service.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
            <Icon className="w-7 h-7 text-accent" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{service.title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{service.description}</p>
          <div className="mt-8">
            <Button variant="white" onClick={() => (window.location.href = `tel:${PHONE_NUMBER}`)}>
              Call {PHONE_DISPLAY}
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {intro.map((paragraph, idx) => (
            <p key={idx} className="text-lg text-gray-600 mb-6 leading-relaxed">{paragraph}</p>
          ))}

          {service.benefits && (
            <div className="mt-8 bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Key Benefits</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Locations served */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            {service.title} Across the Tri-State Area
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow flex items-center gap-4"
              >
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">{loc.city}, {loc.state}</h3>
                  <p className="text-sm text-gray-500">{loc.county}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">{service.title} FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
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
          <h2 className="text-3xl font-extrabold mb-4">Get a Free {service.title} Quote</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Free, no-obligation inspection and a detailed written estimate — no hidden fees.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="white" onClick={() => (window.location.href = `tel:${PHONE_NUMBER}`)}>
              Call {PHONE_DISPLAY}
            </Button>
            <Link to="/#contact">
              <Button variant="primary">
                Request a Free Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
