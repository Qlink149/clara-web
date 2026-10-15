import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import Root from "@/Root";

const container = document.getElementById("root");
const tree = (
  <React.StrictMode>
    <Root pathname={window.location.pathname} />
  </React.StrictMode>
);

// Pages are prerendered at build time (scripts/prerender.mjs); hydrate when HTML is present.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, tree);
} else {
  ReactDOM.createRoot(container).render(tree);
}
