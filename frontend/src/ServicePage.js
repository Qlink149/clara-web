import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { StrategyButton, meshBackground, whiteLogo } from "@/App";
import { servicePages } from "@/servicePages";
import "@/App.css";

export default function ServicePage({ page }) {
  const others = servicePages.filter((s) => s.path !== page.path);
  return (
    <div className="min-h-screen w-full min-w-0 bg-[#070312] text-white selection:bg-violet-300/30" data-testid="service-page">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <img src={meshBackground} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,3,18,0.12),rgba(7,3,18,0.45)_45%,rgba(7,3,18,0.92)_100%)]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#070312]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-10">
          <a href="/" aria-label="Clara AI home"><img src={whiteLogo} alt="Clara AI" className="h-7 w-auto max-w-[140px] object-contain md:h-8" /></a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="/#solutions" className="transition hover:text-white">Solutions</a>
            <a href="/#case-studies" className="transition hover:text-white">Case studies</a>
            <a href="/blog/" className="transition hover:text-white">Blog</a>
            <a href="/ai-linkedin-outreach-agent" className="transition hover:text-white">LinkedIn Agent</a>
            <a href="/ai-seo-agent" className="transition hover:text-white">SEO Agent</a>
            <a href="/#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <StrategyButton size="sm" className="rounded-full">Book a free demo</StrategyButton>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 sm:pt-24 lg:px-10">
          <nav className="text-sm text-white/40" aria-label="Breadcrumb">
            <a href="/" className="hover:text-white">Clara AI</a> <span>/</span> <span>{page.name}</span>
          </nav>
          <div className="mt-6 text-sm uppercase tracking-[0.26em] text-white/40">{page.eyebrow}</div>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">{page.headline}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">{page.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <StrategyButton size="lg" className="rounded-full">
              Book a free demo <ArrowRight className="ml-2 h-4 w-4" />
            </StrategyButton>
          </div>
          <p className="mt-3 text-sm text-white/45">{page.heroNote || "First demo within 7 days, built on your own data."}</p>
        </section>

        {page.angle && <AgentSections page={page} />}

        {page.languages && (<section className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-6 md:grid-cols-2 lg:px-10">
          <Card className="rounded-[1.9rem] border-white/10 bg-white/[0.035] text-white shadow-none">
            <CardContent className="p-5 sm:p-7">
              <h2 className="text-2xl font-medium tracking-[-0.03em]">Who it's for</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-white/60">
                {page.whoFor.map((w) => (
                  <li key={w} className="flex gap-2"><ChevronRight className="mt-1.5 h-4 w-4 shrink-0 text-violet-200" />{w}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-[1.9rem] border-white/10 bg-white/[0.035] text-white shadow-none">
            <CardContent className="p-5 sm:p-7">
              <h2 className="text-2xl font-medium tracking-[-0.03em]">Languages</h2>
              <p className="mt-4 text-sm leading-7 text-white/60">{page.languages}</p>
              <h2 className="mt-8 text-2xl font-medium tracking-[-0.03em]">First demo within 7 days</h2>
              <p className="mt-4 text-sm leading-7 text-white/60">
                Send us your real material and you get a working version 1 demo within 7 days, built on your own data.
              </p>
            </CardContent>
          </Card>
        </section>)}

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
          <div className="text-sm uppercase tracking-[0.26em] text-white/40">{page.angle ? "How we start" : "How it works"}</div>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{page.angle ? "How this would work for you." : "From your workflow to a working system."}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {page.steps.map(([t, d], i) => (
              <Card key={t} className="rounded-[1.9rem] border-white/10 bg-white/[0.035] text-white shadow-none">
                <CardContent className="p-5 sm:p-7">
                  <div className="text-sm text-violet-200">0{i + 1}</div>
                  <h3 className="mt-3 text-xl font-medium">{t}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
          <div className="text-sm uppercase tracking-[0.26em] text-white/40">FAQ</div>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{page.name}: common questions</h2>
          <div className="mt-8 space-y-4">
            {page.faqs.map(([q, a]) => (
              <div key={q} className="rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-5">
                <h3 className="text-lg font-medium">{q}</h3>
                <p className="mt-2 text-sm leading-7 text-white/60">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10" data-testid="service-demo-cta">
          <div className="rounded-[1.9rem] border border-violet-300/20 bg-[linear-gradient(135deg,rgba(139,92,246,0.18),rgba(255,255,255,0.03))] p-6 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">See it working on your data.</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white/60">
              {page.ctaText || "Share your real material and get a working first demo within 7 days."}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <StrategyButton size="lg" className="w-full rounded-full bg-white px-7 text-[#0A0618] hover:bg-white/90 sm:w-auto">
                Book a free demo <ArrowRight className="ml-2 h-4 w-4" />
              </StrategyButton>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
          <h2 className="text-2xl font-medium tracking-[-0.03em]">Read more on the blog</h2>
          <ul className="mt-4 space-y-3 text-white/70">
            {page.blog.map(([t, href]) => (
              <li key={href}><a href={href} className="underline decoration-white/20 underline-offset-4 hover:text-white">{t}</a></li>
            ))}
          </ul>
          <h2 className="mt-10 text-2xl font-medium tracking-[-0.03em]">Other Clara AI services</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {others.map((o) => (
              <li key={o.path}><a href={o.path} className="inline-block rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 hover:text-white">{o.name}</a></li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-white/8 px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <img src={whiteLogo} alt="Clara AI" className="h-6 w-auto max-w-[120px] object-contain" />
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Services">
            {servicePages.map((o) => (<a key={o.path} href={o.path} className="transition hover:text-white">{o.name}</a>))}
            <a href="/blog/" className="transition hover:text-white">Blog</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

const card = "rounded-[1.9rem] border border-white/10 bg-white/[0.035]";
const eyebrow = "text-sm uppercase tracking-[0.26em] text-white/40";
const h2 = "mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl";
const wrap = "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10";

function MidCta({ text }) {
  return (
    <section className={wrap} data-testid="agent-mid-cta">
      <div className="flex flex-col gap-4 rounded-[1.9rem] border border-violet-300/20 bg-[linear-gradient(135deg,rgba(139,92,246,0.18),rgba(255,255,255,0.03))] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <p className="text-lg font-medium sm:text-xl">{text}</p>
        <StrategyButton size="lg" className="w-full rounded-full bg-white px-7 text-[#0A0618] hover:bg-white/90 sm:w-auto">
          Book a free demo <ArrowRight className="ml-2 h-4 w-4" />
        </StrategyButton>
      </div>
    </section>
  );
}

function Table({ head, rows }) {
  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead><tr className="text-white/45">{head.map((h) => <th key={h} className="border-b border-white/10 py-2 pr-4 font-normal">{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className={r[0] === "Total" ? "font-semibold text-white" : "text-white/70"}>
              {r.map((c, i) => <td key={i} className="border-b border-white/5 py-2 pr-4">{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AgentSections({ page }) {
  return (
    <>
      <section className={wrap} data-testid="agent-angle">
        <div className={`${card} p-6 sm:p-10`}>
          <div className={eyebrow}>Why companies will come to AI agencies</div>
          <p className="mt-5 max-w-4xl text-2xl font-medium tracking-[-0.03em] sm:text-3xl">{page.angle[0]}</p>
          {page.angle.slice(1).map((t) => <p key={t} className="mt-4 max-w-3xl text-base leading-8 text-white/60">{t}</p>)}
        </div>
      </section>

      {page.problem && (
        <section className={wrap}>
          <div className={eyebrow}>The problem</div>
          <h2 className={h2}>{page.problem.title}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {page.problem.items.map(([n, l, src]) => (
              <div key={n} className={`${card} p-6`}>
                <div className="text-4xl font-semibold text-violet-200">{n}</div>
                <p className="mt-3 text-sm leading-7 text-white/70">{l}</p>
                <p className="mt-2 text-xs text-white/40">{src}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base text-white/60">{page.problem.note}</p>
        </section>
      )}

      <section className={wrap}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {page.stats.map(([n, l]) => (
            <div key={l} className={`${card} p-6`}>
              <div className="text-4xl font-semibold tracking-[-0.04em]">{n}</div>
              <p className="mt-2 text-sm text-white/55">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${wrap} grid gap-5 md:grid-cols-2`}>
        <div className={`${card} p-6 sm:p-8`}>
          <h2 className="text-2xl font-medium tracking-[-0.03em]">What you get</h2>
          <ul className="mt-5 space-y-4">
            {page.whatYouGet.map(([t, d]) => (
              <li key={t}><div className="font-medium">{t}</div><p className="mt-1 text-sm leading-7 text-white/60">{d}</p></li>
            ))}
          </ul>
        </div>
        <div className={`${card} p-6 sm:p-8`}>
          <h2 className="text-2xl font-medium tracking-[-0.03em]">Why it works</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-white/60">
            {page.whyItWorks.map((w) => <li key={w} className="flex gap-2"><ChevronRight className="mt-1.5 h-4 w-4 shrink-0 text-violet-200" />{w}</li>)}
          </ul>
        </div>
      </section>

      {page.whatsappDemo && (
        <section className={wrap}>
          <div className={eyebrow}>How you run it from WhatsApp</div>
          <div className={`${card} mt-6 max-w-2xl space-y-3 p-6 text-sm leading-6`}>
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.07] px-4 py-3 text-white/80">{page.whatsappDemo.reply}</div>
            <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#25D366]/25 px-4 py-3 text-white">{page.whatsappDemo.you}</div>
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.07] px-4 py-3 text-white/80">{page.whatsappDemo.agent}</div>
            <p className="pt-2 text-xs text-white/40">{page.whatsappDemo.note}</p>
          </div>
        </section>
      )}

      <MidCta text={page.ctaText} />

      <section className={wrap} data-testid="agent-case-studies">
        <div className={eyebrow}>Case studies</div>
        <h2 className={h2}>Real results.</h2>
        <div className="mt-8 space-y-5">
          {page.caseStudies.map((c) => (
            <div key={c.name} className={`${card} p-6 sm:p-8`}>
              <h3 className="text-2xl font-medium tracking-[-0.03em]">{c.name}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60">{c.summary}</p>
              <Table head={c.head} rows={c.rows} />
              {c.outcomes.length > 0 && (
                <>
                  <h4 className="mt-6 font-medium">What came out of it</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-white/60">
                    {c.outcomes.map((o) => <li key={o} className="flex gap-2"><ChevronRight className="mt-1.5 h-4 w-4 shrink-0 text-violet-200" />{o}</li>)}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className={wrap} data-testid="agent-proofs">
        <div className={eyebrow}>Proof</div>
        <h2 className={h2}>{page.proofsTitle}</h2>
        <p className="mt-3 text-sm text-white/50">{page.proofsNote}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {page.proofs.map(([src, cap]) => (
            <figure key={src} className={`${card} overflow-hidden p-3`}>
              <img src={src} alt={cap} loading="lazy" className="w-full rounded-2xl" />
              <figcaption className="px-2 pt-3 pb-1 text-sm text-white/55">{cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {page.postTypes && (
        <section className={wrap}>
          <div className={eyebrow}>What goes live</div>
          <h2 className={h2}>Four post types, rotated daily.</h2>
          <div className={`${card} mt-8 p-6 sm:p-8`}><Table head={["Post type", "Length", "What it does"]} rows={page.postTypes} /></div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {page.builtIn.map(([t, d]) => (
              <div key={t} className={`${card} p-6`}><div className="font-medium">{t}</div><p className="mt-2 text-sm leading-7 text-white/60">{d}</p></div>
            ))}
          </div>
        </section>
      )}

      <section className={wrap}>
        <h2 className="text-2xl font-medium tracking-[-0.03em]">{page.plan.title}</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {page.plan.items.map(([n, l]) => (
            <div key={l} className={`${card} p-6`}><div className="text-3xl font-semibold">{n}</div><p className="mt-2 text-sm text-white/55">{l}</p></div>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/50">Who we are: {page.whoWeAre}</p>
      </section>
    </>
  );
}
