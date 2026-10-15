// Build-time prerender: renders each route to static HTML so crawlers see real text.
// Runs after `craco build`. Writes build/index.html and build/<route>.html (served via cleanUrls).
import { build } from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "build");
const SITE = "https://www.claraai.tech";
const tmp = path.join(root, "node_modules", ".cache", "prerender", "ssr.mjs");

await build({
  entryPoints: [path.join(root, "src", "ssr-entry.js")],
  bundle: true, platform: "node", format: "esm", outfile: tmp,
  jsx: "automatic", loader: { ".js": "jsx", ".css": "empty", ".png": "empty", ".svg": "empty" },
  alias: { "@": path.join(root, "src") },
  packages: "external", logLevel: "warning",
});
const { Root, servicePages } = await import(pathToFileURL(tmp).href);
const React = (await import("react")).default;
const { renderToString } = await import("react-dom/server");

const template = fs.readFileSync(path.join(out, "index.html"), "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const org = {
  "@type": "Organization", "@id": `${SITE}/#organization`, name: "Clara AI", url: `${SITE}/`,
  logo: `${SITE}/icon-192.png`, email: "yogansh@claraai.tech",
  description: "Clara AI builds, deploys and manages custom AI systems for businesses: AI chatbots for websites and WhatsApp, AI calling agents, operations dashboards and custom AI agents.",
  parentOrganization: { "@type": "Organization", name: "SNB Future Drive Pvt Ltd" },
  areaServed: ["India", "Gulf", "United States", "Canada", "Europe"],
};

const routes = [{
  path: "/", file: "index.html",
  title: "Clara AI | AI Chatbots, Calling Agents and Automation for Businesses",
  description: "Clara AI is an AI implementation partner that builds AI chatbots for websites and WhatsApp, AI calling agents, operations dashboards and custom AI agents. English, Hindi and Arabic. First demo within 7 days.",
  ld: [org, { "@type": "WebSite", "@id": `${SITE}/#website`, name: "Clara AI", url: `${SITE}/`, publisher: { "@id": `${SITE}/#organization` } }],
}];
for (const p of servicePages) {
  const url = `${SITE}${p.path}`;
  routes.push({
    path: p.path, file: `${p.path.slice(1)}.html`, title: p.title, description: p.description, page: p,
    ld: [org,
      { "@type": "Service", name: p.name, url, description: p.description, provider: { "@id": `${SITE}/#organization` }, availableLanguage: ["English", "Hindi", "Arabic"] },
      { "@type": "FAQPage", mainEntity: p.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Clara AI", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: p.name, item: url } ] }],
  });
}

for (const r of routes) {
  const url = `${SITE}${r.path}`;
  const body = renderToString(React.createElement(Root, { pathname: r.path }));
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`)
    .replace(/<meta name="description"[\s\S]*?\/>/, `<meta name="description" content="${esc(r.description)}" />`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(r.title)}" />`)
    .replace(/<meta property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${esc(r.description)}" />`)
    .replace(/<meta property="og:site_name"[^>]*>/, `<meta property="og:site_name" content="Clara AI" />`)
    .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(r.title)}" />`)
    .replace(/<meta name="twitter:description"[\s\S]*?\/>/, `<meta name="twitter:description" content="${esc(r.description)}" />`)
    .replace(/https:\/\/claraai\.tech\/og-image\.png/g, `${SITE}/og-image.png`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": r.ld }).replace(/</g, "\\u003c")}</script>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  if (!html.includes(`<div id="root">${body.slice(0, 40)}`)) throw new Error(`prerender failed for ${r.path}`);
  fs.writeFileSync(path.join(out, r.file), html);
  console.log(`prerendered ${r.path} -> build/${r.file} (${body.length} chars)`);
}
