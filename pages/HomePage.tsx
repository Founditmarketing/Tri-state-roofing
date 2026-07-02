import React from 'react';
import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { Brands } from '../components/Brands';
import { Features } from '../components/Features';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { Financing } from '../components/Financing';
import { About } from '../components/About';
import { Portfolio } from '../components/Portfolio';
import { BeforeAfter } from '../components/BeforeAfter';
import { Testimonials } from '../components/Testimonials';
import { ServiceAreas } from '../components/ServiceAreas';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { COMPANY_NAME, ADDRESS, FAQS, TESTIMONIALS } from '../constants';
import { organizationSchema, websiteSchema, localBusinessSchema, faqPageSchema } from '../utils/schema';

const homeSchemas = [
  organizationSchema(),
  websiteSchema(),
  localBusinessSchema({
    path: '/',
    name: COMPANY_NAME,
    address: { streetAddress: '3411 Melody LN', locality: 'Quincy', region: 'IL', postalCode: '62305' },
    geo: { lat: 39.9577, lng: -91.3858 },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`,
    areaServed: [
      { city: 'Quincy', region: 'IL' },
      { city: 'Hannibal', region: 'MO' },
      { city: 'Keokuk', region: 'IA' },
    ],
    aggregateRating: { ratingValue: 5.0, reviewCount: 150 },
    reviews: TESTIMONIALS,
  }),
  faqPageSchema(FAQS),
];

export const HomePage: React.FC = () => (
  <>
    <SEO
      title="Roofing Contractor | Tri-State Roofing & Construction"
      description="Owens Corning shingles & 26-gauge standing seam metal roofing, siding, and gutters serving Quincy, IL, Hannibal, MO & Keokuk, IA. Free inspections."
      path="/"
      jsonLd={homeSchemas}
    />
    <Hero />
    <Brands />
    <Features />
    <Services />
    <BeforeAfter />
    <Process />
    <Financing />
    <About />
    <Portfolio />
    <Testimonials />
    <ServiceAreas />
    <FAQ />
    <Contact />
  </>
);
