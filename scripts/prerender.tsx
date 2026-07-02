// Post-build step (runs after `vite build`). Renders every real route with
// the same jsdom + MemoryRouter approach as verify-routes.tsx, then writes
// the resulting <head>/<body> into a copy of the built dist/index.html at
// the matching path — so a crawler that never executes JavaScript sees the
// real title, canonical, content, and JSON-LD for that specific route
// instead of the empty SPA shell repeated on every URL.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { JSDOM } from "jsdom";
import { LOCATIONS } from "../data/locations";
import { PAGE_SERVICES } from "../data/serviceContent";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = resolve(ROOT, "dist");
const SITE_URL = "https://www.tristateroofingquincy.com";

const ROUTES = [
  { path: "/", outPath: "index.html" },
  ...LOCATIONS.map((l) => ({ path: `/locations/${l.slug}`, outPath: `locations/${l.slug}/index.html` })),
  ...PAGE_SERVICES.map((s) => ({ path: `/services/${s.slug}`, outPath: `services/${s.slug}/index.html` })),
];

/** Renders one route in a fresh jsdom instance and returns the resulting head/body markup. */
async function renderRoute(path: string) {
  const dom = new JSDOM('<!doctype html><html><head></head><body><div id="root"></div></body></html>', {
    url: `${SITE_URL}${path}`,
    runScripts: "outside-only",
  });
  (global as any).window = dom.window;
  (global as any).document = dom.window.document;
  (global as any).localStorage = dom.window.localStorage;
  dom.window.scrollTo = () => {};
  dom.window.HTMLElement.prototype.scrollIntoView = () => {};
  Object.defineProperty(global, "navigator", { value: dom.window.navigator, configurable: true });

  const React = await import("react");
  const { createRoot } = await import("react-dom/client");
  const { MemoryRouter, Routes, Route } = await import("react-router-dom");
  const { Layout } = await import("../components/Layout");
  const { HomePage } = await import("../pages/HomePage");
  const { LocationPage } = await import("../pages/LocationPage");
  const { ServicePage } = await import("../pages/ServicePage");
  const { NotFound } = await import("../pages/NotFound");

  const root = createRoot(dom.window.document.getElementById("root")!);
  root.render(
    React.createElement(
      MemoryRouter,
      { initialEntries: [path] },
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { element: React.createElement(Layout) }, [
          React.createElement(Route, { key: "home", path: "/", element: React.createElement(HomePage) }),
          React.createElement(Route, { key: "loc", path: "/locations/:slug", element: React.createElement(LocationPage) }),
          React.createElement(Route, { key: "svc", path: "/services/:slug", element: React.createElement(ServicePage) }),
          React.createElement(Route, { key: "404", path: "*", element: React.createElement(NotFound) }),
        ])
      )
    )
  );

  // let SEO.tsx's useEffect (title/meta/JSON-LD) flush
  await new Promise((r) => setTimeout(r, 300));

  const headHTML = dom.window.document.head.innerHTML;
  const rootHTML = dom.window.document.getElementById("root")!.innerHTML;
  root.unmount();
  return { headHTML, rootHTML };
}

/** Merges a rendered route's head/body into a fresh copy of the built dist/index.html template. */
function mergeIntoTemplate(templateHTML: string, headHTML: string, rootHTML: string) {
  const dom = new JSDOM(templateHTML);
  const doc = dom.window.document;

  // Parse the rendered head into a throwaway document so we can read its tags.
  const rendered = new JSDOM(`<!doctype html><html><head>${headHTML}</head><body></body></html>`).window.document;

  const setMeta = (attr: "name" | "property", key: string, content: string | null) => {
    let el = doc.head.querySelector(`meta[${attr}="${key}"]`);
    if (content == null) {
      el?.remove();
      return;
    }
    if (!el) {
      el = doc.createElement("meta");
      el.setAttribute(attr, key);
      doc.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  doc.title = rendered.title;

  const description = rendered.querySelector('meta[name="description"]')?.getAttribute("content") ?? null;
  setMeta("name", "description", description);
  const robots = rendered.querySelector('meta[name="robots"]')?.getAttribute("content") ?? null;
  setMeta("name", "robots", robots);

  const canonicalHref = rendered.querySelector('link[rel="canonical"]')?.getAttribute("href");
  if (canonicalHref) {
    let canonical = doc.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = doc.createElement("link");
      canonical.setAttribute("rel", "canonical");
      doc.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);
  }

  ["og:title", "og:description", "og:url", "og:type", "og:site_name", "og:image"].forEach((key) => {
    const content = rendered.querySelector(`meta[property="${key}"]`)?.getAttribute("content") ?? null;
    setMeta("property", key, content);
  });
  ["twitter:card", "twitter:title", "twitter:description", "twitter:image"].forEach((key) => {
    const content = rendered.querySelector(`meta[name="${key}"]`)?.getAttribute("content") ?? null;
    setMeta("name", key, content);
  });

  // Drop the generic static fallback schema and any leftover rendered JSON-LD,
  // then insert this route's actual schema blocks.
  doc.getElementById("ld-base")?.remove();
  doc.querySelectorAll('script[data-seo-jsonld="true"]').forEach((el) => el.remove());
  rendered.querySelectorAll('script[type="application/ld+json"]').forEach((script) => {
    const clone = doc.createElement("script");
    clone.type = "application/ld+json";
    clone.setAttribute("data-seo-jsonld", "true");
    clone.textContent = script.textContent;
    doc.head.appendChild(clone);
  });

  const rootDiv = doc.getElementById("root");
  if (rootDiv) rootDiv.innerHTML = rootHTML;

  return `<!doctype html>\n${doc.documentElement.outerHTML}`;
}

async function main() {
  const template = readFileSync(resolve(DIST, "index.html"), "utf8");

  for (const route of ROUTES) {
    const { headHTML, rootHTML } = await renderRoute(route.path);
    const merged = mergeIntoTemplate(template, headHTML, rootHTML);
    const outFile = resolve(DIST, route.outPath);
    mkdirSync(dirname(outFile), { recursive: true });
    writeFileSync(outFile, merged, "utf8");
    console.log(`[prerender] ${route.path} -> dist/${route.outPath}`);
  }
}

main().catch((err) => {
  console.error("[prerender] failed:", err);
  process.exit(1);
});
