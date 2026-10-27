import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { StrategyButton } from "@/App";
import "@/App.css";
import { SiteHeader, SiteFooter, Star, useSiteMotion, useAutoScroll } from "@/components/Site";

const clients = [
  ["hiranandani", "Hiranandani Parks"], ["rustomjee", "Rustomjee"], ["k-raheja-realty", "K Raheja Realty"], ["vijay-sales", "Vijay Sales"],
  ["nilkamal", "Nilkamal"], ["apex-hospitals", "Apex Hospitals"], ["wonder-cement", "Wonder Cement"], ["idac", "iDAC"], ["kisna", "KISNA"],
  ["the-hindu", "The Hindu"], ["haique", "Haique"], ["edme", "edme"], ["kohinoor", "Kohinoor"], ["dp-jewellers", "D.P. Jewellers"],
  ["ergode", "Ergode"], ["arihant", "Arihant"],
];
const wrap = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";
const btn = "rounded-full bg-[#5D27CA] px-7 text-white hover:bg-[#4C1DB0]";
const h2 = "text-2xl font-bold tracking-tight text-[#0C0828] sm:text-3xl";

function Cta({ size = "lg", full }) {
  return (
    <StrategyButton size={size} className={`${btn} ${full ? "w-full sm:w-auto" : ""}`}>
      Book a free demo <ArrowRight className="ml-2 h-4 w-4" />
    </StrategyButton>
  );
}

function Stats({ items }) {
  return (
    <div className={`grid gap-3 ${items.length > 3 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-3"}`}>
      {items.map(([n, l]) => (
        <div key={l} className="rounded-2xl border border-[#E2DCF7] bg-white p-3 sm:p-4">
          <div className="text-2xl font-bold text-[#5D27CA] sm:text-3xl">{n}</div>
          <div className="mt-1 text-xs leading-5 text-[#3B3752] sm:text-sm">{l}</div>
        </div>
      ))}
    </div>
  );
}

function Shot({ src, caption }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-[#E2DCF7] bg-white shadow-sm">
      <img src={src} alt={caption} loading="lazy" className="w-full object-contain" />
      <figcaption className="border-t border-[#EFEAFB] px-3 py-2 text-sm text-[#3B3752]">{caption}</figcaption>
    </figure>
  );
}

function ProofRow({ items, wide }) {
  const ref = React.useRef(null);
  const [open, setOpen] = React.useState(null);
  useAutoScroll(ref);
  React.useEffect(() => {
    if (!open) return undefined;
    const k = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);
  return (
    <>
      <div ref={ref} className="case-row proof-row mt-6" data-hide-float tabIndex={0} aria-label="Proof screenshots">
        {items.map((it) => (
          <figure key={it.src} className={`proof-frame ${wide ? "proof-wide" : ""}`}>
            <div className="proof-bar" aria-hidden="true"><i /><i /><i /></div>
            <button type="button" className="proof-img" onClick={() => setOpen(it)} aria-label={`Open larger: ${it.title}`}>
              <img src={it.src} alt={it.alt} loading="lazy" decoding="async" />
            </button>
            <figcaption className="px-4 py-3">
              <div className="text-sm font-semibold text-[#0C0828]">{it.title}</div>
              <div className="mt-0.5 text-sm text-[#4A4566]">{it.line}</div>
            </figcaption>
          </figure>
        ))}
      </div>
      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={open.title} onClick={() => setOpen(null)}>
          <button type="button" className="lightbox-x" aria-label="Close" onClick={() => setOpen(null)}>×</button>
          <img src={open.src} alt={open.alt} onClick={(e) => e.stopPropagation()} />
          <p className="mt-3 text-center text-sm text-white/80">{open.title}. {open.line}</p>
        </div>
      )}
    </>
  );
}

export default function AgentLanding({ page }) {
  useSiteMotion();
  return (
    <div className="site min-h-screen w-full" data-testid="agent-landing">
      <SiteHeader />

      <main>
        {/* 1. Above the fold: dream-outcome headline, effortless subhead, 2+ proofs, one CTA, FUD reducers, outcome visual */}
        <section className="sec-dark grain relative" style={{ paddingTop: 120, paddingBottom: 64 }}>
          <div className="bg" style={{ backgroundImage: "url(/brand/grad-1.webp)" }} />
          <Star className="star-glow pointer-events-none absolute left-[46%] top-[96px] z-[1] hidden w-[110px] lg:block" />
        <div className={`${wrap} relative z-[2] grid gap-8 lg:grid-cols-2 lg:items-center`}>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-[#C9B8FF]">{page.eyebrow}</div>
            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{page.fold.headline}</h1>
            <p className="mt-4 text-lg leading-8 text-white/75">{page.fold.subhead}</p>
            <div className="mt-7"><Cta full /></div>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-white/85" data-testid="fud">
              {page.fold.fud.map((f) => (
                <li key={f} className="flex items-center gap-1.5"><Check className="h-4 w-4 text-[#8EF0B5]" />{f}</li>
              ))}
            </ul>
            <div className="mt-8 text-sm font-medium text-white/70">{page.heroStatsLabel}</div>
            <div className="mt-3"><Stats items={page.heroStats} /></div>
          </div>
          <div className="grid gap-4">
            {page.heroImages.map(([s, c]) => <Shot key={s} src={s} caption={c} />)}
          </div>
        </div>
        </section>

        {/* Second proof form above/at the fold: trusted-by strip (approved public names) */}
        <section className="border-y border-[#ECE7FA] bg-white py-5">
          <div className={`${wrap} text-center`}>
            <div className="text-sm font-semibold text-[#3B3752]">Trusted by 19 clients, including</div>
            <ul className="mt-4 grid grid-cols-3 items-center gap-x-4 gap-y-4 sm:grid-cols-4 lg:grid-cols-8">
              {clients.map(([f, n]) => (
                <li key={f} className="flex h-14 items-center justify-center">
                  <img src={`/logos/${f}.webp`} alt={`${n} logo`} loading="lazy" decoding="async" width="120" height="48" className="max-h-12 w-auto max-w-[120px] object-contain" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 2. Emotion: problem, agitate, solve */}
        <section className={`${wrap} py-12`}>
          <h2 className={h2}>{page.pain.headline}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[#E2DCF7] bg-white p-5"><div className="font-bold">The problem</div><p className="mt-2 text-[#3B3752]">{page.pain.problem}</p></div>
            <div className="rounded-2xl border border-[#F3D9D9] bg-[#FFF7F7] p-5"><div className="font-bold">What it costs you</div><p className="mt-2 text-[#3B3752]">{page.pain.agitate}</p></div>
            <div className="rounded-2xl border border-[#D7CCF7] bg-[#E9E5FF] p-5"><div className="font-bold text-[#5D27CA]">The fix</div><p className="mt-2 text-[#2A2545]">{page.pain.solve}</p></div>
          </div>
        </section>

        {/* 3. Wall of proof: stacked, never a carousel */}
        <section className={`${wrap} py-10`} data-testid="wall-of-proof">
          <h2 className={h2}>{page.proofHeadline}</h2>
          {page.results.map((r) => (
            <div key={r.name} className="mt-5">
              <div className="mb-3 text-sm font-semibold text-[#3B3752]">{r.name}</div>
              <Stats items={r.stats} />
            </div>
          ))}
          {page.outcomes.length > 0 && (
            <ul className="mt-6 space-y-2">
              {page.outcomes.map((o) => (
                <li key={o} className="flex gap-2 font-medium text-[#2A2545]"><Check className="mt-1 h-4 w-4 shrink-0 text-[#5D27CA]" />{o}</li>
              ))}
            </ul>
          )}
        </section>
        <div className="pb-6">
          <ProofRow wide={page.wideImages} items={[...page.moreImages, ...(page.clientProof ? [{ src: page.clientProof.src, title: "Sanjeet Ray, business coach", line: "Clara AI client, on WhatsApp.", alt: page.clientProof.alt }] : [])]} />
          <p className={`${wrap} mt-1 text-sm text-[#5C5775]`}>{page.imagesNote}</p>
        </div>

        {/* Middle CTA */}
        <section className={`${wrap} py-4`}>
          <div className="flex flex-col gap-4 rounded-2xl bg-[#5D27CA] p-6 text-white sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xl font-semibold">{page.midCta}</p>
            <StrategyButton size="lg" className="w-full rounded-full bg-white px-7 text-[#5D27CA] hover:bg-white/90 sm:w-auto">
              Book a free demo <ArrowRight className="ml-2 h-4 w-4" />
            </StrategyButton>
          </div>
        </section>

        {/* 4. How it works in exactly 3 steps, headline states it */}
        <section className={`${wrap} py-10`}>
          <h2 className={h2}>{page.stepsHeadline}</h2>
          <ol className="mt-5 grid gap-4 md:grid-cols-3">
            {page.howItWorks.slice(0, 3).map(([t, d], i) => (
              <li key={t} className="rounded-2xl border border-[#E2DCF7] bg-white p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5D27CA] font-bold text-white">{i + 1}</div>
                <div className="mt-3 text-lg font-bold">{t}</div>
                <p className="mt-1 text-[#3B3752]">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={`${wrap} py-10`}>
          <h2 className={h2}>{page.getHeadline}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {page.whatYouGet.map((w) => (
              <li key={w} className="flex gap-3 rounded-2xl border border-[#E2DCF7] bg-white p-4 text-[#2A2545]">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[#5D27CA]" />{w}
              </li>
            ))}
          </ul>
        </section>

        {/* Why us */}
        <section className={`${wrap} py-10`}>
          <h2 className={h2}>{page.whyHeadline}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {page.why.map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-[#E2DCF7] bg-white p-5">
                <div className="font-bold">{t}</div>
                <p className="mt-1 text-[#3B3752]">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Objections, fully exposed (no accordion) */}
        <section className={`${wrap} py-10`}>
          <h2 className={h2}>{page.faqHeadline}</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {page.faqs.map(([q, a]) => (
              <div key={q} className="rounded-2xl border border-[#E2DCF7] bg-white p-4">
                <div className="font-bold">{q}</div>
                <p className="mt-1 text-[#3B3752]">{a}</p>
              </div>
            ))}
          </div>
          {page.related && (
            <div className="mt-6" data-testid="related-reading">
              <div className="text-sm font-bold text-[#3B3752]">Related reading on our blog</div>
              <ul className="mt-2 flex flex-wrap gap-2">
                {page.related.map(([href, label]) => (
                  <li key={href}><a href={href} className="inline-block rounded-full border border-[#E2DCF7] bg-white px-3 py-1.5 text-sm font-semibold text-[#5B3FD9] hover:bg-[#F4F0FF]">{label}</a></li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <section className={`${wrap} py-12`}>
          <div className="sec-dark grain relative overflow-hidden rounded-3xl p-8 text-center text-white sm:p-12"><div className="bg" style={{ backgroundImage: "url(/brand/grad-2-sm.webp)" }} /><div className="relative z-[2]">
            <h2 className="text-2xl font-bold sm:text-3xl">{page.ctaText}</h2>
            <div className="mt-6 flex justify-center">
              <StrategyButton size="lg" className="rounded-full bg-[#8D57DE] px-8 text-white hover:bg-[#5D27CA]">
                Book a free demo <ArrowRight className="ml-2 h-4 w-4" />
              </StrategyButton>
            </div>
            <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/80">
              {page.fold.fud.map((f) => <li key={f} className="flex items-center gap-1.5"><Check className="h-4 w-4" />{f}</li>)}
            </ul>
            <p className="mt-6 text-sm text-white/70">{page.whoWeAre}</p></div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
