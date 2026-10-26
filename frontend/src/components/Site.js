import React, { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useWhatsAppLink } from "@/lib/whatsapp";
import { servicePages } from "@/servicePages";
import "@/site.css";

const NAV = [
  ["Solutions", "/#solutions"],
  ["Case studies", "/#case-studies"],
  ["LinkedIn Agent", "/ai-linkedin-outreach-agent"],
  ["SEO Agent", "/ai-seo-agent"],
  ["Blog", "/blog/"],
  ["Contact", "/#contact"],
];

// WhatsApp CTA. Keeps data-testid so the floating button can hide while a CTA is visible.
export function WaButton({ children = "Book a free demo", variant = "primary", className = "", arrow = true }) {
  const href = useWhatsAppLink();
  return (
    <a href={href} target="_blank" rel="noreferrer" data-testid="strategy-button-link" data-cursor="big" className={`btn btn-${variant} ${className}`}>
      {children}
      {arrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </a>
  );
}

export function Star({ className = "", style }) {
  return <span aria-hidden="true" className={`star ${/\bhidden\b/.test(className) ? "" : "block "}${className}`} style={style} />;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return undefined;
    const k = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);
  return (
    <header className="pill" data-testid="site-header">
      <div className="pill-bar">
        <a href="/" aria-label="Clara AI home" className="inline-flex min-h-[44px] items-center">
          <img src="/brand/wordmark-white.svg" alt="Clara AI" width="106" height="34" className="h-[30px] w-auto" />
        </a>
        <nav className="pill-links" aria-label="Main">
          {NAV.map(([t, h]) => <a key={h} href={h}>{t}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <WaButton className="hidden !min-h-[44px] !px-5 !text-[15px] sm:inline-flex" arrow={false}>Book a free demo</WaButton>
          <button type="button" className="menu-btn lg:hidden" aria-expanded={open} aria-controls="site-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div id="site-menu" className="menu-card lg:hidden" onClick={(e) => e.target.closest("a") && setOpen(false)}>
          <nav aria-label="Mobile">
            {NAV.map(([t, h]) => <a key={h} href={h} className="big">{t}<ArrowRight className="h-5 w-5 opacity-60" /></a>)}
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/70">
            {servicePages.filter((s) => !s.landing).map((s) => (
              <a key={s.path} href={s.path} className="inline-flex min-h-[44px] items-center rounded-xl bg-white/5 px-3">{s.name}</a>
            ))}
          </div>
          <WaButton variant="light" className="mt-5 w-full">Book a free demo</WaButton>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="sec-dark grain relative" style={{ padding: "64px 0 40px" }}>
      <div className="bg" style={{ backgroundImage: "url(/brand/grad-4-sm.webp)" }} />
      <div className="wrap">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <img src="/brand/wordmark-white.svg" alt="Clara AI" width="125" height="40" loading="lazy" className="h-9 w-auto" />
            <p className="mt-4 text-white/65">A 14-person AI team building calling agents, chatbots, dashboards and custom agents around your workflow. Trusted by 19 clients.</p>
          </div>
          <WaButton variant="light">Book a free demo</WaButton>
        </div>
        <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-1 border-t border-white/10 pt-6 text-sm text-white/65" aria-label="Services">
          <a href="/" className="inline-flex min-h-[44px] items-center hover:text-white">Clara AI home</a>
          {servicePages.map((o) => <a key={o.path} href={o.path} className="inline-flex min-h-[44px] items-center hover:text-white">{o.name}</a>)}
          <a href="/blog/" className="inline-flex min-h-[44px] items-center hover:text-white">Blog</a>
        </nav>
        <p className="mt-4 text-sm text-white/45">© {new Date().getFullYear()} Clara AI. SNB Future Drive Pvt Ltd.</p>
      </div>
    </footer>
  );
}

// All motion: vanilla DOM, runs after hydration, and does nothing under prefers-reduced-motion.
export function useSiteMotion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups = [];
    const els = document.querySelectorAll(".rv");
    if (reduce || typeof IntersectionObserver === "undefined") {
      els.forEach((e) => e.classList.add("in"));
    } else {
      const io = new IntersectionObserver((en) => en.forEach((x) => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { rootMargin: "0px 0px -8% 0px" });
      els.forEach((e) => io.observe(e));
      cleanups.push(() => io.disconnect());
    }
    if (reduce) return () => cleanups.forEach((c) => c());

    // Travelling star + scroll-scrubbed statement
    const star = document.querySelector(".travel-star");
    const scrubs = [...document.querySelectorAll(".scrub")].map((el) => ({ el, words: [...el.querySelectorAll("span")] }));
    let raf = 0;
    const tick = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      if (star) {
        const y = 90 + p * (window.innerHeight - 160);
        star.style.transform = `translateY(${y}px) rotate(${p * 360}deg)`;
        star.style.opacity = window.scrollY > 200 ? "0.9" : "0";
      }
      scrubs.forEach(({ el, words }) => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const q = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
        const n = Math.round(q * words.length);
        words.forEach((w, i) => w.classList.toggle("on", i < n));
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    tick();
    cleanups.push(() => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); });

    // Dot cursor, desktop pointers only
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      const dot = document.createElement("div");
      dot.className = "dot-cursor";
      dot.setAttribute("aria-hidden", "true");
      document.body.appendChild(dot);
      const mv = (e) => {
        dot.style.opacity = "1";
        dot.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
        dot.classList.toggle("big", !!(e.target.closest && e.target.closest("a,button")));
      };
      window.addEventListener("mousemove", mv, { passive: true });
      cleanups.push(() => { window.removeEventListener("mousemove", mv); dot.remove(); });
    }
    return () => { cleanups.forEach((c) => c()); if (raf) cancelAnimationFrame(raf); };
  }, []);
}

export function TravelStar() {
  return <Star className="travel-star star-glow" style={{ opacity: 0 }} />;
}

// Cycling logo grid: shows `cells` logos and swaps one at a time.
export function LogoGrid({ clients, cells = 8 }) {
  const [shown, setShown] = useState(() => clients.slice(0, cells).map((_, i) => i));
  const [fading, setFading] = useState(-1);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || clients.length <= cells) return undefined;
    let next = cells;
    let slot = 0;
    const id = setInterval(() => {
      const s = slot;
      setFading(s);
      setTimeout(() => {
        setShown((cur) => { const c = [...cur]; c[s] = next % clients.length; return c; });
        next += 1;
        setFading(-1);
      }, 450);
      slot = (slot + 3) % cells;
    }, 1800);
    return () => clearInterval(id);
  }, [clients, cells]);
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4" data-testid="logo-grid">
      {shown.map((ci, i) => {
        const [f, n] = clients[ci];
        return (
          <li key={i} className="logo-cell">
            <img src={`/logos/${f}.webp`} alt={`${n} logo`} loading="lazy" decoding="async" width="140" height="56" className={fading === i ? "out" : ""} />
          </li>
        );
      })}
    </ul>
  );
}

export const CLIENTS = [
  ["hiranandani", "Hiranandani Parks"], ["rustomjee", "Rustomjee"], ["k-raheja-realty", "K Raheja Realty"], ["vijay-sales", "Vijay Sales"],
  ["nilkamal", "Nilkamal"], ["apex-hospitals", "Apex Hospitals"], ["wonder-cement", "Wonder Cement"], ["idac", "iDAC"], ["kisna", "KISNA"],
  ["the-hindu", "The Hindu"], ["haique", "Haique"], ["edme", "edme"], ["kohinoor", "Kohinoor"], ["dp-jewellers", "D.P. Jewellers"],
  ["ergode", "Ergode"], ["arihant", "Arihant"],
];

// Splits a statement into word spans for the scroll scrub. Words wrapped in *stars* get the serif accent.
export function Scrub({ text, className = "" }) {
  return (
    <p className={`scrub ${className}`}>
      {text.split(" ").map((w, i) => {
        const accent = w.startsWith("*");
        const clean = w.replace(/\*/g, "");
        return <React.Fragment key={i}><span className={accent ? "serif" : ""}>{clean}</span>{" "}</React.Fragment>;
      })}
    </p>
  );
}
