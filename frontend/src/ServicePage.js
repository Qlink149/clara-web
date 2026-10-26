import React from "react";
import { ChevronRight } from "lucide-react";
import { servicePages } from "@/servicePages";
import "@/App.css";
import AgentLanding from "@/AgentLanding";
import { SiteHeader, SiteFooter, TravelStar, WaButton, Star, useSiteMotion } from "@/components/Site";

function ServiceBody({ page }) {
  useSiteMotion();
  const others = servicePages.filter((s) => s.path !== page.path);
  return (
    <div className="site min-h-screen w-full" data-testid="service-page">
      <SiteHeader />
      <TravelStar />
      <main>
        <section className="sec-dark grain relative" style={{ paddingTop: 140, paddingBottom: 80 }}>
          <div className="bg" style={{ backgroundImage: "url(/brand/grad-1.webp)" }} />
          <Star className="star-glow pointer-events-none absolute right-[5%] top-[120px] z-[1] hidden w-[150px] md:block lg:w-[200px]" />
          <div className="wrap">
            <nav className="text-sm text-white/55" aria-label="Breadcrumb">
              <a href="/" className="inline-flex min-h-[44px] items-center hover:text-white">Clara AI</a> <span>/</span> <span>{page.name}</span>
            </nav>
            <div className="eyebrow mt-4">{page.eyebrow}</div>
            <h1 className="h-lg mt-5 max-w-4xl">{page.headline}</h1>
            <p className="lead mt-6 max-w-3xl">{page.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><WaButton variant="light">Book a free demo</WaButton></div>
            <p className="mt-3 text-sm text-white/60">{page.heroNote || "First demo within 7 days, built on your own data."}</p>
          </div>
        </section>

        {page.languages && (
          <section className="sec sec-light">
            <div className="wrap grid gap-5 md:grid-cols-2">
              <div className="card rv">
                <h2 className="h-md">Who it's for</h2>
                <ul className="mt-4 space-y-3 text-[#4A4566]">
                  {page.whoFor.map((w) => (<li key={w} className="flex gap-2"><ChevronRight className="mt-1 h-4 w-4 shrink-0 text-[#5D27CA]" />{w}</li>))}
                </ul>
              </div>
              <div className="card rv">
                <h2 className="h-md">Languages</h2>
                <p className="mt-4 text-[#4A4566]">{page.languages}</p>
                <h2 className="h-md mt-8">First demo within 7 days</h2>
                <p className="mt-4 text-[#4A4566]">Send us your real material and you get a working version 1 demo within 7 days, built on your own data.</p>
              </div>
            </div>
          </section>
        )}

        <section className="sec sec-mist">
          <div className="wrap">
            <div className="eyebrow rv">{page.angle ? "How we start" : "How it works"}</div>
            <h2 className="h-lg mt-4 rv">{page.angle ? "How this would work for you." : "From your workflow to a working system."}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {page.steps.map(([t, d], i) => (
                <div key={t} className="card rv">
                  <div className="font-semibold text-[#5D27CA]">0{i + 1}</div>
                  <h3 className="mt-3 text-xl font-semibold">{t}</h3>
                  <p className="mt-2 text-[#4A4566]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec sec-light">
          <div className="wrap">
            <div className="eyebrow rv">FAQ</div>
            <h2 className="h-lg mt-4 rv">{page.name}: common questions</h2>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {page.faqs.map(([q, a]) => (
                <div key={q} className="card rv">
                  <h3 className="text-lg font-semibold">{q}</h3>
                  <p className="mt-2 text-[#4A4566]">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec sec-dark grain" data-testid="service-demo-cta">
          <div className="bg" style={{ backgroundImage: "url(/brand/grad-2.webp)" }} />
          <div className="wrap">
            <h2 className="h-lg max-w-3xl rv">See it working on <span className="serif text-[#C9B8FF]">your</span> data.</h2>
            <p className="lead mt-4 max-w-2xl rv">{page.ctaText || "Share your real material and get a working first demo within 7 days."}</p>
            <div className="mt-8 rv"><WaButton variant="light">Book a free demo</WaButton></div>
          </div>
        </section>

        <section className="sec sec-light">
          <div className="wrap">
            <h2 className="h-md">Read more on the blog</h2>
            <ul className="mt-4 space-y-1">
              {page.blog.map(([t, href]) => (
                <li key={href}><a href={href} className="inline-flex min-h-[44px] items-center text-[#1F0798] underline decoration-[#8D57DE]/40 underline-offset-4 hover:text-[#5D27CA]">{t}</a></li>
              ))}
            </ul>
            <h2 className="h-md mt-10">Other Clara AI services</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {others.map((o) => (
                <li key={o.path}><a href={o.path} className="inline-flex min-h-[44px] items-center rounded-full border border-[#E2DCF7] bg-white px-5 hover:border-[#8D57DE]">{o.name}</a></li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export default function ServicePage({ page }) {
  if (page.landing) return <AgentLanding page={page} />;
  return <ServiceBody page={page} />;
}
