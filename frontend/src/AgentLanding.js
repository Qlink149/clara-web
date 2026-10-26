import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { StrategyButton, whiteLogo } from "@/App";
import "@/App.css";

const clients = [
  ["hiranandani", "Hiranandani Parks"], ["rustomjee", "Rustomjee"], ["k-raheja-realty", "K Raheja Realty"], ["vijay-sales", "Vijay Sales"],
  ["nilkamal", "Nilkamal"], ["apex-hospitals", "Apex Hospitals"], ["wonder-cement", "Wonder Cement"], ["idac", "iDAC"], ["kisna", "KISNA"],
  ["the-hindu", "The Hindu"], ["haique", "Haique"], ["edme", "edme"], ["kohinoor", "Kohinoor"], ["dp-jewellers", "D.P. Jewellers"],
  ["ergode", "Ergode"], ["arihant", "Arihant"],
];
const wrap = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";
const btn = "rounded-full bg-[#5A35C8] px-7 text-white hover:bg-[#4A2BB0]";
const h2 = "text-2xl font-bold tracking-tight text-[#14112A] sm:text-3xl";

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
        <div key={l} className="rounded-2xl border border-[#E6E0F7] bg-white p-3 sm:p-4">
          <div className="text-2xl font-bold text-[#5A35C8] sm:text-3xl">{n}</div>
          <div className="mt-1 text-xs leading-5 text-[#3B3752] sm:text-sm">{l}</div>
        </div>
      ))}
    </div>
  );
}

function Shot({ src, caption }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-[#E6E0F7] bg-white shadow-sm">
      <img src={src} alt={caption} loading="lazy" className="w-full object-contain" />
      <figcaption className="border-t border-[#EFEAFB] px-3 py-2 text-sm text-[#3B3752]">{caption}</figcaption>
    </figure>
  );
}

export default function AgentLanding({ page }) {
  return (
    <div className="min-h-screen w-full bg-[#FAF8FF] text-[#14112A]" data-testid="agent-landing">
      <header className="sticky top-0 z-40 border-b border-[#ECE7FA] bg-white/90 backdrop-blur">
        <div className={`${wrap} flex items-center justify-between gap-3 py-3`}>
          <a href="/" aria-label="Clara AI home" className="inline-flex min-h-[44px] items-center">
            <img src={whiteLogo} alt="Clara AI" className="h-7 w-auto max-w-[130px] object-contain brightness-0" />
          </a>
          <Cta size="sm" />
        </div>
      </header>

      <main>
        {/* 1. Above the fold: dream-outcome headline, effortless subhead, 2+ proofs, one CTA, FUD reducers, outcome visual */}
        <section className={`${wrap} grid gap-8 py-10 sm:py-14 lg:grid-cols-2 lg:items-center`}>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-[#5A35C8]">{page.eyebrow}</div>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{page.fold.headline}</h1>
            <p className="mt-4 text-lg leading-8 text-[#4A4566]">{page.fold.subhead}</p>
            <div className="mt-7"><Cta full /></div>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#2A2545]" data-testid="fud">
              {page.fold.fud.map((f) => (
                <li key={f} className="flex items-center gap-1.5"><Check className="h-4 w-4 text-[#1E9E5A]" />{f}</li>
              ))}
            </ul>
            <div className="mt-8 text-sm font-medium text-[#3B3752]">{page.heroStatsLabel}</div>
            <div className="mt-3"><Stats items={page.heroStats} /></div>
          </div>
          <div className="grid gap-4">
            {page.heroImages.map(([s, c]) => <Shot key={s} src={s} caption={c} />)}
          </div>
        </section>

        {/* Second proof form above/at the fold: trusted-by strip (approved public names) */}
        <section className="border-y border-[#ECE7FA] bg-white py-5">
          <div className={`${wrap} text-center`}>
            <div className="text-sm font-semibold text-[#3B3752]">14-person AI team. Trusted by 19 clients, including</div>
            <ul className="mt-4 grid grid-cols-3 items-center gap-x-4 gap-y-4 sm:grid-cols-4 lg:grid-cols-8">
              {clients.map(([f, n]) => (
                <li key={f} className="flex h-12 items-center justify-center">
                  <img src={`/logos/${f}.webp`} alt={`${n} logo`} loading="lazy" decoding="async" width="120" height="48" className="max-h-10 w-auto max-w-[110px] object-contain" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 2. Emotion: problem, agitate, solve */}
        <section className={`${wrap} py-12`}>
          <h2 className={h2}>{page.pain.headline}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[#E6E0F7] bg-white p-5"><div className="font-bold">The problem</div><p className="mt-2 text-[#3B3752]">{page.pain.problem}</p></div>
            <div className="rounded-2xl border border-[#F3D9D9] bg-[#FFF7F7] p-5"><div className="font-bold">What it costs you</div><p className="mt-2 text-[#3B3752]">{page.pain.agitate}</p></div>
            <div className="rounded-2xl border border-[#D7CCF7] bg-[#F0EBFF] p-5"><div className="font-bold text-[#5A35C8]">The fix</div><p className="mt-2 text-[#2A2545]">{page.pain.solve}</p></div>
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
                <li key={o} className="flex gap-2 font-medium text-[#2A2545]"><Check className="mt-1 h-4 w-4 shrink-0 text-[#5A35C8]" />{o}</li>
              ))}
            </ul>
          )}
          <div className={`mt-6 grid gap-4 sm:grid-cols-2 ${page.wideImages ? "" : "lg:grid-cols-3"}`}>
            {page.moreImages.map(([s, c]) => <Shot key={s} src={s} caption={c} />)}
          </div>
          <p className="mt-3 text-sm text-[#5C5775]">{page.imagesNote}</p>
          {page.clientProof && (
            <figure className="mx-auto mt-10 max-w-sm">
              <figcaption className="mb-3 text-center font-bold text-[#2A2545]">{page.clientProof.caption}</figcaption>
              <img src={page.clientProof.src} alt={page.clientProof.alt} loading="lazy" decoding="async" width="600" height="1110" className="h-auto w-full rounded-2xl border border-[#E6E0F7] shadow-sm" />
            </figure>
          )}
        </section>

        {/* Middle CTA */}
        <section className={`${wrap} py-4`}>
          <div className="flex flex-col gap-4 rounded-2xl bg-[#5A35C8] p-6 text-white sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xl font-semibold">{page.midCta}</p>
            <StrategyButton size="lg" className="w-full rounded-full bg-white px-7 text-[#5A35C8] hover:bg-white/90 sm:w-auto">
              Book a free demo <ArrowRight className="ml-2 h-4 w-4" />
            </StrategyButton>
          </div>
        </section>

        {/* 4. How it works in exactly 3 steps, headline states it */}
        <section className={`${wrap} py-10`}>
          <h2 className={h2}>{page.stepsHeadline}</h2>
          <ol className="mt-5 grid gap-4 md:grid-cols-3">
            {page.howItWorks.slice(0, 3).map(([t, d], i) => (
              <li key={t} className="rounded-2xl border border-[#E6E0F7] bg-white p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5A35C8] font-bold text-white">{i + 1}</div>
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
              <li key={w} className="flex gap-3 rounded-2xl border border-[#E6E0F7] bg-white p-4 text-[#2A2545]">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[#5A35C8]" />{w}
              </li>
            ))}
          </ul>
        </section>

        {/* Why us */}
        <section className={`${wrap} py-10`}>
          <h2 className={h2}>{page.whyHeadline}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {page.why.map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-[#E6E0F7] bg-white p-5">
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
              <div key={q} className="rounded-2xl border border-[#E6E0F7] bg-white p-4">
                <div className="font-bold">{q}</div>
                <p className="mt-1 text-[#3B3752]">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`${wrap} py-12`}>
          <div className="rounded-3xl bg-[#14112A] p-8 text-center text-white sm:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl">{page.ctaText}</h2>
            <div className="mt-6 flex justify-center">
              <StrategyButton size="lg" className="rounded-full bg-[#8C63FF] px-8 text-white hover:bg-[#7A4FF5]">
                Book a free demo <ArrowRight className="ml-2 h-4 w-4" />
              </StrategyButton>
            </div>
            <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/80">
              {page.fold.fud.map((f) => <li key={f} className="flex items-center gap-1.5"><Check className="h-4 w-4" />{f}</li>)}
            </ul>
            <p className="mt-6 text-sm text-white/70">{page.whoWeAre}</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#ECE7FA] bg-white py-6 text-sm text-[#5C5775]">
        <div className={`${wrap} flex flex-wrap gap-x-6 gap-y-2`}>
          <a href="/" className="inline-flex min-h-[44px] items-center hover:text-[#5A35C8]">Clara AI home</a>
          <a href="/ai-linkedin-outreach-agent" className="inline-flex min-h-[44px] items-center hover:text-[#5A35C8]">AI LinkedIn Outreach Agent</a>
          <a href="/ai-seo-agent" className="inline-flex min-h-[44px] items-center hover:text-[#5A35C8]">AI SEO Agent</a>
          <a href="/blog/" className="inline-flex min-h-[44px] items-center hover:text-[#5A35C8]">Blog</a>
          <span>© Clara AI</span>
        </div>
      </footer>
    </div>
  );
}
