import { SITE_URL, COMPANY_NAME, PHONE_NUMBER, EMAIL_ADDRESS, DEFAULT_OG_IMAGE, SOCIAL_LINKS } from '../constants';
import { ServiceItem, Testimonial } from '../types';

export interface Crumb {
  name: string;
  path: string; // e.g. "/locations/quincy-il"
}

export interface CityRef {
  city: string;
  region: string; // state abbreviation
}

const BUSINESS_HOURS = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '07:00',
    closes: '18:00',
  },
  { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '12:00' },
];

/** Builds a schema.org BreadcrumbList from an ordered list of crumbs (Home first). */
export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

/** Company-level Organization node. Homepage only. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: COMPANY_NAME,
    url: `${SITE_URL}/`,
    logo: DEFAULT_OG_IMAGE,
    sameAs: SOCIAL_LINKS,
  };
}

/** Site-level WebSite node with a sitelinks SearchAction. Homepage only. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: COMPANY_NAME,
    publisher: { '@id': `${SITE_URL}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/?s={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

export interface LocalBusinessSchemaOptions {
  path: string; // canonical path, e.g. "/" or "/locations/quincy-il"
  name: string;
  address: {
    streetAddress?: string; // only the real HQ page should set this
    locality: string;
    region: string;
    postalCode: string;
  };
  geo: { lat: number; lng: number };
  hasMap: string;
  areaServed: CityRef[];
  aggregateRating?: { ratingValue: number; reviewCount: number; bestRating?: number; worstRating?: number };
  reviews?: Testimonial[];
}

/** LocalBusiness node. Used on the homepage (real HQ) and each location page (service-area page — no fabricated street address). */
export function localBusinessSchema(opts: LocalBusinessSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'RoofingContractor'],
    '@id': `${SITE_URL}${opts.path}#business`,
    name: opts.name,
    url: `${SITE_URL}${opts.path}`,
    image: DEFAULT_OG_IMAGE,
    telephone: PHONE_NUMBER,
    email: EMAIL_ADDRESS,
    address: {
      '@type': 'PostalAddress',
      ...(opts.address.streetAddress ? { streetAddress: opts.address.streetAddress } : {}),
      addressLocality: opts.address.locality,
      addressRegion: opts.address.region,
      postalCode: opts.address.postalCode,
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: opts.geo.lat, longitude: opts.geo.lng },
    hasMap: opts.hasMap,
    openingHoursSpecification: BUSINESS_HOURS,
    areaServed: opts.areaServed.map((a) => ({ '@type': 'City', name: a.city, addressRegion: a.region })),
    priceRange: '$$',
    ...(opts.aggregateRating
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: String(opts.aggregateRating.ratingValue),
            reviewCount: String(opts.aggregateRating.reviewCount),
            bestRating: String(opts.aggregateRating.bestRating ?? 5),
            worstRating: String(opts.aggregateRating.worstRating ?? 1),
          },
        }
      : {}),
    ...(opts.reviews
      ? {
          review: opts.reviews.map((r) => ({
            '@type': 'Review',
            author: { '@type': 'Person', name: r.name },
            reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: '5' },
            reviewBody: r.content,
          })),
        }
      : {}),
  };
}

/** Service node for a single service page. provider references the homepage LocalBusiness. */
export function serviceSchema(service: ServiceItem, opts: { path: string; areaServed: CityRef[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${opts.path}#service`,
    name: service.title,
    description: service.longDescription ?? service.description,
    url: `${SITE_URL}${opts.path}`,
    image: `${SITE_URL}${service.image}`,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: opts.areaServed.map((a) => ({ '@type': 'City', name: a.city, addressRegion: a.region })),
  };
}
