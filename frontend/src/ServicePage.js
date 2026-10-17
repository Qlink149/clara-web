import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ClaraLogo, StrategyButton, meshBackground, whiteLogo } from "@/App";
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
          <a href="/" aria-label="Clara AI home"><ClaraLogo /></a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="/#solutions" className="transition hover:text-white">Solutions</a>
            <a href="/#case-studies" className="transition hover:text-white">Case studies</a>
            <a href="/blog/" className="transition hover:text-white">Blog</a>
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
          <p className="mt-3 text-sm text-white/45">First demo within 7 days, built on your own data.</p>
        </section>

        <section className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-6 md:grid-cols-2 lg:px-10">
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
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
          <div className="text-sm uppercase tracking-[0.26em] text-white/40">How it works</div>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">From your workflow to a working system.</h2>
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
              Share your real material and get a working first demo within 7 days.
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
