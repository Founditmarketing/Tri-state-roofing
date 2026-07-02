import { useEffect } from 'react';
import { SITE_URL, DEFAULT_OG_IMAGE, COMPANY_NAME } from '../constants';

interface SEOProps {
  /** Page <title>. Keep under ~60 chars. */
  title: string;
  /** Meta description. Keep under ~155 chars. */
  description: string;
  /** Path only, e.g. "/locations/quincy-il" (home is "/"). Used to build the canonical + og:url. */
  path: string;
  /** Absolute or root-relative image URL. Defaults to the logo. */
  image?: string;
  /** One JSON-LD object, or an array of them (e.g. [LocalBusiness, BreadcrumbList, FAQPage]). */
  jsonLd?: object | object[];
  /** Set true for any page that should not be indexed (e.g. future ad-campaign landing pages). */
  noindex?: boolean;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Lightweight, dependency-free per-route head manager.
 *
 * Why not react-helmet-async: this app has no SSR server, so
 * react-helmet-async's server-string-injection features are dead weight here.
 * A build-time prerender pass (see scripts/prerender.mjs) re-runs each route
 * through this component with a real DOM and writes the resulting <head> to
 * a static HTML file, which is what actually solves the "JS-gated meta
 * tags" problem for crawlers. This component just has to behave correctly
 * inside that headless render.
 */
export const SEO: React.FC<SEOProps> = ({ title, description, path, image, jsonLd, noindex }) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const ogImage = image || DEFAULT_OG_IMAGE;

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', COMPANY_NAME);
    upsertMeta('property', 'og:image', ogImage);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImage);

    // Remove the static no-JS fallback schema baked into index.html (id="ld-base")
    // and any JSON-LD left over from the previous route, then add this route's.
    document.getElementById('ld-base')?.remove();
    document.querySelectorAll('script[data-seo-jsonld="true"]').forEach((el) => el.remove());
    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      items.forEach((item) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-jsonld', 'true');
        script.text = JSON.stringify(item);
        document.head.appendChild(script);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, image, noindex, JSON.stringify(jsonLd)]);

  return null;
};
