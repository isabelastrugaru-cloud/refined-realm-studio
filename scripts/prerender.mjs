import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const serverDir = path.resolve(distDir, "server");

// Browser API mocks for Node environment
const noop = () => {};
const noopElement = {
  setAttribute: noop,
  removeAttribute: noop,
  getAttribute: () => null,
  addEventListener: noop,
  removeEventListener: noop,
  appendChild: noop,
  removeChild: noop,
  insertBefore: noop,
  contains: () => false,
  style: {},
  classList: { add: noop, remove: noop, toggle: noop, contains: () => false },
  dataset: {},
  childNodes: [],
  children: [],
  parentNode: null,
  parentElement: null,
  nextSibling: null,
  previousSibling: null,
  innerHTML: "",
  textContent: "",
  getBoundingClientRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }),
};

globalThis.localStorage = {
  getItem: () => "ro",
  setItem: noop,
  removeItem: noop,
};

globalThis.document = {
  documentElement: { lang: "ro", setAttribute: noop, getAttribute: () => null },
  getElementById: () => null,
  querySelector: () => null,
  querySelectorAll: () => [],
  getElementsByTagName: () => [],
  getElementsByClassName: () => [],
  createElement: () => ({ ...noopElement }),
  createElementNS: () => ({ ...noopElement }),
  createTextNode: () => ({ ...noopElement }),
  createDocumentFragment: () => ({ ...noopElement, querySelectorAll: () => [] }),
  head: { ...noopElement, querySelectorAll: () => [] },
  body: { ...noopElement },
  addEventListener: noop,
  removeEventListener: noop,
  createEvent: () => ({ initEvent: noop }),
  cookie: "",
};

// IMPORTANT: window.document is NOT set here to ensure react-helmet-async
// detects SSR mode (it checks window.document.createElement at import time).
// window.document is added after the SSR bundle import in prerender().
globalThis.window = {
  scrollTo: noop,
  addEventListener: noop,
  removeEventListener: noop,
  location: { pathname: "/", href: "https://designinteriorbucuresti.ro/", origin: "https://designinteriorbucuresti.ro" },
  dispatchEvent: noop,
  matchMedia: () => ({ matches: false, addListener: noop, removeListener: noop, addEventListener: noop, removeEventListener: noop }),
  getComputedStyle: () => ({}),
  setTimeout: globalThis.setTimeout,
  clearTimeout: globalThis.clearTimeout,
  requestAnimationFrame: (cb) => setTimeout(cb, 0),
  cancelAnimationFrame: (id) => clearTimeout(id),
  navigator: { userAgent: "" },
  innerWidth: 1024,
  innerHeight: 768,
  HTMLElement: class {},
};

Object.defineProperty(globalThis, "navigator", {
  value: { userAgent: "" },
  writable: true,
  configurable: true,
});

globalThis.HTMLElement = class {};
globalThis.Element = class {};
globalThis.Node = class {};
globalThis.SVGElement = class {};
globalThis.CustomEvent = class extends Event { constructor(type, opts) { super(type); this.detail = opts?.detail; } };

globalThis.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
globalThis.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
globalThis.requestAnimationFrame = (cb) => setTimeout(cb, 0);
globalThis.cancelAnimationFrame = (id) => clearTimeout(id);
globalThis.MutationObserver = class {
  observe() {}
  disconnect() {}
};
globalThis.getComputedStyle = () => ({});

// Routes to prerender
const routes = [
  "/",
  "/despre",
  "/portofoliu",
  "/servicii",
  "/blog",
  "/contact",
  "/shop",
  // Projects
  "/proiecte/penthouse-herastrau",
  "/proiecte/villa-pipera",
  "/proiecte/apartament-primaverii",
  // Blog articles
  "/blog/tendinte-design-2024",
  "/blog/tendinte-2025",
  "/blog/casa-inteligenta-2025",
  "/blog/culori-texturi-2025",
  "/blog/minimalismul-scandinav",
  "/blog/design-biofil",
  "/blog/buget-limitat",
  "/blog/spatii-mici",
  "/blog/psihologia-culorilor",
  "/blog/iluminat-perfect",
  "/blog/open-space",
  "/blog/art-deco",
  "/blog/materiale-naturale",
  "/blog/finisaje-premium",
  "/blog/materiale-ecologice",
  // Products
  "/shop/starter-pack",
  "/shop/bathroom-complete",
  "/shop/beige-contract",
  "/shop/green-presentation",
  "/shop/kitchen-ebook",
  "/shop/bathroom-v2",
  "/shop/millwork-guide",
  // Legal
  "/politica-confidentialitate",
  "/termeni-conditii",
  "/cookies",
];

async function prerender() {
  // Import the SSR bundle (window.document intentionally absent so
  // react-helmet-async detects SSR mode)
  const { render } = await import(path.join(serverDir, "entry-server.js"));

  // Now add window.document for any runtime code that needs it
  globalThis.window.document = globalThis.document;

  // Read the client-built index.html as template
  const template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");

  let successCount = 0;
  let errorCount = 0;

  for (const route of routes) {
    try {
      const { html, helmet } = render(route);

      let page = template;

      // Inject rendered HTML into root div
      page = page.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      );

      // Inject Helmet tags into <head>
      if (helmet) {
        const helmetTags = [
          helmet.title?.toString() || "",
          helmet.meta?.toString() || "",
          helmet.link?.toString() || "",
          helmet.script?.toString() || "",
        ]
          .filter(Boolean)
          .join("\n    ");

        if (helmetTags) {
          page = page.replace("</head>", `    ${helmetTags}\n  </head>`);
        }
      }

      // Determine output path
      const routePath = route === "/" ? "" : route;
      const outDir = path.resolve(distDir, routePath.replace(/^\//, ""));
      const outFile = route === "/"
        ? path.resolve(distDir, "index.html")
        : path.resolve(outDir, "index.html");

      // Create directory if needed
      if (route !== "/") {
        fs.mkdirSync(outDir, { recursive: true });
      }

      fs.writeFileSync(outFile, page);
      successCount++;
      console.log(`  ✓ ${route}`);
    } catch (err) {
      errorCount++;
      console.error(`  ✗ ${route}: ${err.message}`);
    }
  }

  console.log(`\nPrerendered ${successCount}/${routes.length} routes.`);
  if (errorCount > 0) {
    console.error(`${errorCount} route(s) failed.`);
  }

  // Clean up server build — not needed in production
  fs.rmSync(serverDir, { recursive: true, force: true });
  console.log("Cleaned up dist/server/");
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
