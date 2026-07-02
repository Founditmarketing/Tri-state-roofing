// Throwaway verification script (not part of the app). Renders every route
// with a real DOM (jsdom) and react-dom/client, waits a tick for the SEO
// component's useEffect to run, then prints the resulting <head> so we can
// confirm each route gets unique title/canonical/schema. Deleted after use.
import { JSDOM } from 'jsdom';

const routes = [
  '/',
  '/locations/quincy-il',
  '/locations/hannibal-mo',
  '/locations/keokuk-ia',
  '/services/residential-roofing',
  '/services/commercial-roofing',
  '/services/siding',
  '/services/windows-doors',
  '/services/gutters',
  '/services/decks-additions',
  '/this-path-does-not-exist',
];

async function run() {
  for (const route of routes) {
    const dom = new JSDOM('<!doctype html><html><head></head><body><div id="root"></div></body></html>', {
      url: `https://www.tristateroofingquincy.com${route}`,
      runScripts: 'outside-only',
    });
    (global as any).window = dom.window;
    (global as any).document = dom.window.document;
    (global as any).localStorage = dom.window.localStorage;
    dom.window.scrollTo = () => {};
    Object.defineProperty(global, 'navigator', { value: dom.window.navigator, configurable: true });

    // Fresh module graph per route since App/SEO hold no route state themselves,
    // but React/ReactDOM singletons are fine to reuse.
    const React = await import('react');
    const { createRoot } = await import('react-dom/client');
    const { MemoryRouter, Routes, Route } = await import('react-router-dom');
    const { Layout } = await import('../components/Layout');
    const { HomePage } = await import('../pages/HomePage');
    const { LocationPage } = await import('../pages/LocationPage');
    const { ServicePage } = await import('../pages/ServicePage');
    const { NotFound } = await import('../pages/NotFound');

    const root = createRoot(dom.window.document.getElementById('root')!);
    root.render(
      React.createElement(
        MemoryRouter,
        { initialEntries: [route] },
        React.createElement(
          Routes,
          null,
          React.createElement(Route, { element: React.createElement(Layout) }, [
            React.createElement(Route, { key: 'home', path: '/', element: React.createElement(HomePage) }),
            React.createElement(Route, { key: 'loc', path: '/locations/:slug', element: React.createElement(LocationPage) }),
            React.createElement(Route, { key: 'svc', path: '/services/:slug', element: React.createElement(ServicePage) }),
            React.createElement(Route, { key: '404', path: '*', element: React.createElement(NotFound) }),
          ])
        )
      )
    );

    // let effects flush
    await new Promise((r) => setTimeout(r, 300));

    const title = dom.window.document.title;
    const canonical = dom.window.document.querySelector('link[rel="canonical"]')?.getAttribute('href');
    const desc = dom.window.document.querySelector('meta[name="description"]')?.getAttribute('content');
    const robots = dom.window.document.querySelector('meta[name="robots"]')?.getAttribute('content');
    const ogImage = dom.window.document.querySelector('meta[property="og:image"]')?.getAttribute('content');
    const jsonLdCount = dom.window.document.querySelectorAll('script[type="application/ld+json"]').length;
    const h1 = dom.window.document.querySelector('h1')?.textContent;
    const bodyText = dom.window.document.body.textContent || '';

    console.log('====', route, '====');
    console.log('title:', title);
    console.log('canonical:', canonical);
    console.log('robots:', robots);
    console.log('description:', desc?.slice(0, 80));
    console.log('og:image:', ogImage);
    console.log('h1:', h1);
    console.log('json-ld blocks:', jsonLdCount);
    console.log('body length:', bodyText.length, bodyText.length < 200 ? '  <-- SUSPICIOUSLY SHORT' : '');
    console.log('');
  }
}

run().then(() => process.exit(0)).catch((err) => { console.error(err); process.exit(1); });
