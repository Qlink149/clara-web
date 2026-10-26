import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  PhoneCall,
  MessageSquare,
  LayoutDashboard,
  Workflow,
  Bot,
  ShieldCheck,
  Factory,
  ShoppingBag,
  HeartPulse,
  CalendarDays,
  Truck,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink, useWhatsAppLink } from "@/lib/whatsapp";
import "@/App.css";
import { SiteHeader, SiteFooter, WaButton, Star, LogoGrid, Scrub, CLIENTS, useSiteMotion } from "@/components/Site";


export const whatsappLink = waLink();

// Horizontal case-study row: native swipe/scroll, slow auto-advance that pauses on hover, touch,
// focus or an open card, and never runs under prefers-reduced-motion.
function CaseRow({ items }) {
  const ref = React.useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let paused = false, resumeAt = 0, raf = 0, last = 0, acc = 0;
    const pause = () => { paused = true; };
    const resume = () => { paused = false; resumeAt = performance.now() + 2500; };
    const step = (t) => {
      const dt = last ? t - last : 0; last = t;
      const open = el.querySelector("details[open]");
      if (!paused && !open && t > resumeAt && document.visibilityState === "visible") {
        acc += dt * 0.03;
        if (acc >= 1) { const n = Math.floor(acc); acc -= n;
          if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) { el.scrollLeft = 0; resumeAt = t + 1500; }
          else el.scrollLeft += n; }
      }
      raf = requestAnimationFrame(step);
    };
    const ev = [["pointerenter", pause], ["pointerleave", resume], ["touchstart", pause], ["touchend", resume], ["focusin", pause], ["focusout", resume]];
    ev.forEach(([k, f]) => el.addEventListener(k, f, { passive: true }));
    raf = requestAnimationFrame(step);
    return () => { cancelAnimationFrame(raf); ev.forEach(([k, f]) => el.removeEventListener(k, f)); };
  }, []);
  return (
    <div ref={ref} className="case-row mt-10" data-hide-float tabIndex={0} aria-label="Client case studies">
      {items.map((c) => (
        <article key={c.title + c.subtitle} className="card case-card">
          <div className="inline-flex self-start rounded-full bg-[#E9E5FF] px-3 py-1 text-xs font-semibold text-[#5D27CA]">{c.tag}</div>
          <h3 className="mt-3 text-xl font-semibold">{c.title}</h3>
          <div className="text-sm text-[#4A4566]">{c.subtitle}</div>
          <p className="mt-4 text-[15px] leading-6 text-[#4A4566]">{c.built}</p>
          <p className="mt-2 text-[15px] font-semibold leading-6 text-[#0C0828]">{c.win}</p>
          <details className="mt-4">
            <summary className="inline-flex min-h-[44px] cursor-pointer items-center font-semibold text-[#5D27CA]">Read more</summary>
            <p className="mt-2 text-sm leading-6 text-[#4A4566]"><strong className="text-[#0C0828]">Challenge: </strong>{c.challenge}</p>
            <p className="mt-2 text-sm leading-6 text-[#4A4566]"><strong className="text-[#0C0828]">What we built: </strong>{c.solution}</p>
            <p className="mt-2 text-sm leading-6 text-[#0C0828]"><strong>Result: </strong>{c.result}</p>
          </details>
        </article>
      ))}
    </div>
  );
}

const caseStudies = [
  {
    title: "KISNA Diamond & Gold Jewellery",
    subtitle: "AI WhatsApp Concierge",
    tag: "WhatsApp AI",
    challenge:
      "KISNA needed to handle high volumes of customer queries across pre-order, post-order, and support — product availability, pricing, order tracking, returns, and complaint escalation — while keeping a premium brand experience. The support team was stretched thin, with no unified system for tickets, conversation history, or CRM integration.",
    solution:
      "We built KIA, an AI WhatsApp concierge for the full customer lifecycle — product discovery and recommendations, order tracking, returns, and complaint resolution. The bot auto-generates tickets, keeps conversation history, tags issues, and escalates to a human when needed, synced live with their CRM and helpdesk.",
    built: "AI WhatsApp concierge for product, order and support queries.",
    win: "Instant answers on WhatsApp, with human handoff for complex issues.",
    result:
      "Customers get instant answers on product info, order status, and support on WhatsApp, any time they message. Automated ticketing and logs give the team full visibility, and human handoff means complex issues are never dropped.",
  },
  {
    title: "One Reside",
    subtitle: "AI-Powered Virtual Concierge",
    tag: "WhatsApp AI",
    challenge:
      "An architectural brand wanted a digital extension of their in-store experience — a way for customers to discover furnishing, home accessories, and décor from multiple brands online. Product discovery, comparison, and purchase were split across websites, calls, and store visits.",
    solution:
      "We built a WhatsApp virtual concierge that takes customers from discovery and cross-brand comparison through to Razorpay checkout in a single chat. A dashboard lets the client manage brands, products, and services in real time, and the bot remembers context across conversations.",
    built: "WhatsApp concierge from discovery to Razorpay checkout.",
    win: "Discovery, comparison and purchase happen in one chat.",
    result:
      "Discovery, comparison, and purchase now happen end-to-end on WhatsApp. The client runs the catalogue from one dashboard, and customers get a personalised concierge that remembers preferences and past interactions.",
  },
  {
    title: "Hiranandani Parks",
    subtitle: "Festive Campaign — Diwali 2025 · Chennai, Oragadam",
    tag: "AI Calling",
    challenge:
      "Hiranandani needed to reach a pool of around 35,000 homebuyer leads before the festive season, but did not have the manpower for high-volume outreach.",
    solution:
      "We deployed a multilingual AI calling agent fluent in English and Tamil — built to understand buyer intent, speak naturally, and continue the conversation on WhatsApp.",
    built: "Multilingual AI calling agent in English and Tamil.",
    win: "6,000+ homebuyers called and 195 qualified leads in 2 days.",
    result:
      "In 2 days the agent called over 6,000 homebuyers and generated 195 qualified leads — fully automated, multilingual, and WhatsApp-supported.",
  },
  {
    title: "Vijay Sales",
    subtitle: "Courtesy-Calling for Complaint Follow-ups",
    tag: "AI Calling",
    challenge:
      "Complaint-resolution follow-ups were consuming call-centre bandwidth, keeping agents away from sales and new-customer acquisition.",
    solution:
      "We deployed an AI courtesy-calling agent that automatically checks complaint-resolution status with customers, without pulling human agents into every follow-up.",
    built: "AI courtesy-calling agent for complaint follow-ups.",
    win: "About 1,867 calls a day, freeing 5+ human agents.",
    result:
      "The agent now handles about 1,867 calls per day, freeing 5+ human agents for revenue-generating work.",
  },
  {
    title: "iDAC",
    subtitle: "GEO: Dominating AI Search Engines",
    tag: "GEO",
    challenge:
      "iDAC needed to show up for complex, high-intent conversational queries on AI search engines — not traditional keywords alone.",
    solution:
      "We built a Generative Engine Optimization strategy so the brand ranks on ChatGPT, Gemini, and Perplexity for queries such as “best architecture exhibitions in Mumbai” and “top architecture awards.”",
    built: "GEO strategy to rank on ChatGPT, Gemini and Perplexity.",
    win: "16% organic traffic growth and 38% more targeted Mumbai traffic.",
    result:
      "16% overall organic traffic growth, 38% targeted traffic increase from Mumbai, and 100% of referral traffic growth targets hit.",
  },
  {
    title: "AI Video Analytics Agents",
    subtitle: "AVAA",
    tag: "AVAA",
    challenge:
      "Ordinary CCTV systems were collecting footage without turning it into usable intelligence for revenue, compliance, or cost control.",
    solution:
      "AVAA turns existing cameras into a live intelligence layer — spotting sales opportunities and customer flow, monitoring SOP and safety compliance, and flagging operational waste.",
    built: "Turns existing cameras into a live intelligence layer.",
    win: "Real-time sales, SOP and safety insight from cameras they already had.",
    result:
      "Teams get real-time insight from infrastructure they already have: stronger revenue signals, automatic SOP checks, and lower operating cost.",
  },
  {
    title: "Nilkamal Sleep",
    subtitle: "Turnkey AI Solutions",
    tag: "Custom Solutions",
    challenge:
      "Leadership lacked a live view of retail performance, and dealer incentive settlement was a 15–20 day manual process. Sales and customer experience needed automation, not another static report.",
    solution:
      "We built a retail store performance dashboard for sales, footfall, scheme qualification, and store KPIs; a Virtual AI CEO that ingests business data and delivers executive recommendations; and a Dealer Incentive Engine that computes incentives from three uploaded files.",
    built: "Store dashboard, Virtual AI CEO and dealer incentive engine.",
    win: "Settlement moved from 15–20 days to real time.",
    result:
      "Settlement moved from 15–20 days to real time. Leadership now sees every store live and gets always-on executive recommendations instead of a stack of reports.",
  },
  {
    title: "A leading Indian life insurer",
    subtitle: "Channel Partner Tracking",
    tag: "Custom Solutions",
    challenge:
      "Dormant channel partners were hard to reactivate because engagement and performance data were not consolidated in real time.",
    solution:
      "We built a dashboard and backend that tracks every partner’s last interaction with the company and their manager, alongside dealer incentive earnings.",
    built: "Partner-tracking dashboard with interaction and incentive history.",
    win: "Managers reactivate partners with full context, not generic calls.",
    result:
      "Managers now have full context for personalised outreach — for example spotting a training gap and unused incentive, then reactivating a partner with tailored support instead of a generic sales call.",
  },
  {
    title: "Rustomjee",
    subtitle: "Personalized Lead Activation",
    tag: "Custom Solutions",
    challenge:
      "Re-engaging dormant leads needed highly personalised communication, not generic cold calls.",
    solution:
      "We created virtual customer profiles that track past interactions and compare them against current projects, then used that intelligence to power personalised AI-driven calls.",
    built: "Virtual customer profiles powering personalised AI calls.",
    win: "Dormant prospects reactivated with specific, relevant context.",
    result:
      "Dormant prospects are reactivated with specific context — for example a buyer inactive for 18 months who wanted a 3 BHK near a good international school was called about a new project launching next to a Global High School campus.",
  },
  {
    title: "A US accounting and advisory firm",
    subtitle: "Practice Management Dashboard",
    tag: "Custom Solutions",
    challenge:
      "The firm ran audit engagements across 5+ disconnected tools — spreadsheets, email, and shared drives — with no real-time visibility. Monthly WIP reconciliation took 3–5 days, invoices were fully manual, and payment health was judged on gut feel.",
    solution:
      "We built a unified AI practice-management dashboard covering engagements, PBC tracking, WIP and billing, time entry, and a client portal — plus a Payment Health Scoring Engine (0–100), ClaraGPT document analysis, and auto-generated invoice PDFs.",
    built: "Unified AI practice-management dashboard and client portal.",
    win: "WIP reconciliation went from 3–5 days to real time.",
    result:
      "WIP reconciliation went from 3–5 days to real time. Invoice generation dropped from 30 minutes to under 30 seconds. Five tools became one platform with role-based access and a self-service client portal with Stripe payments.",
  },
  {
    title: "KISNA Diamond & Gold Jewellery",
    subtitle: "Sales & Support Dashboard",
    tag: "Custom Solutions",
    challenge:
      "Kisna’s sales and support team managed gold-order fulfilment across 25+ vendors with zero real-time visibility. Status tracking was manual — vendors were called every 7 days — so stores could not tell if an order was delayed, in finishing, or ready to dispatch. That created 21-day backlogs and task mismatches across 2,000+ orders.",
    solution:
      "We built a live Sales & Support Dashboard for the full gold-order lifecycle: store order receipt, credit-health checks, vendor assignment, QC, payment confirmation, and dispatch. It includes WhatsApp and email alerts via Kisna’s own number, a vendor portal, a QC Review Bureau with digital checklists, and a 7-day payment reminder engine, with role-based access.",
    built: "Live sales and support dashboard for gold orders.",
    win: "2,124 orders across 28 states tracked live on one dashboard.",
    result:
      "2,124 orders across 28 states and 124 customers are now tracked live. INR 17.3 Cr in order value sits on one dashboard. 25+ vendors are moving onto a unified portal, and five disconnected workflows — assignment, vendor coordination, QC, payment, and dispatch — now run as one system.",
  },
  {
    title: "Apex Hospitals",
    subtitle: "AI Call Quality Monitoring",
    tag: "Healthcare",
    challenge:
      "Quality checks on patient calls were extremely time-intensive for supervisors, creating bottlenecks in healthcare service delivery.",
    solution:
      "We built a custom AI quality-check agent that listens to calls and scores each interaction consistently out of 10.",
    built: "AI agent that listens to calls and scores each one out of 10.",
    win: "Consistent call evaluations and far less supervisor workload.",
    result:
      "Evaluations are now consistent and objective, supervisor workload dropped sharply, and patient-care standards improved.",
  },
  {
    title: "IRC-CA",
    subtitle: "Automated Financial Reconciliation",
    tag: "Custom Solutions",
    challenge:
      "Manual reconciliation between ERP and Tally data was slow and error-prone, with weak visibility into why figures did not match.",
    solution:
      "Our AI system reconciles ERP and Tally records using unique identifiers, flags discrepancies instantly, and calculates Net Balance, Permanent Difference, and Value of Receipts. A dashboard shows where differences exist and why.",
    built: "AI reconciliation of ERP and Tally records.",
    win: "Faster, more accurate reconciliation with clear audit visibility.",
    result:
      "Reconciliation is faster and more accurate, audit visibility is stronger, and mismatches can be resolved without hunting through spreadsheets.",
  },
  {
    title: "iDAC",
    subtitle: "Infrastructure Development, Architecture & Construction",
    tag: "Events",
    challenge:
      "The event needed attendance confirmed at massive scale, visitors guided to the right booths, and analytics captured throughout — without stretching human teams.",
    solution:
      "An AI calling agent confirmed attendance, an AI WhatsApp agent guided every visitor to their destination booth, and real-time analytics ran continuously during the event.",
    built: "AI calling and WhatsApp agents plus live event analytics.",
    win: "43,000 calls in one day and 100% navigation support.",
    result:
      "43,000 calls in one day, 100% navigation support, and 24/7 event analytics — with record turnout and a complete post-event dataset for the next edition.",
  },
];

const solutions = [
  {
    icon: Bot,
    title: "AI Virtual Employees",
    href: "#contact",
    id: "ai-virtual-employees",
    text: "AI employees that work in a browser and use your websites and tools like a person would. Message them a task on WhatsApp and they report back when it is done.",
  },
  {
    icon: PhoneCall,
    title: "AI Calling Agents",
    href: "/ai-calling-agents",
    text: "Outbound, inbound, reminder, qualification, and support flows built around real business logic.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots (Web & WhatsApp)",
    href: "/ai-chatbots",
    text: "Chatbots for your website and WhatsApp that answer from your own knowledge, handle support and bookings, and qualify leads.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Visibility",
    href: "/ai-dashboards",
    text: "Operational dashboards that turn scattered workflows into visible, measurable systems.",
  },
  {
    icon: Workflow,
    title: "Custom AI Agents & Automation",
    href: "/custom-ai-agents",
    text: "Custom AI agents and automations for your own workflows, from lead journeys to internal approvals.",
  },
];

const industries = [
  { icon: Factory, name: "Manufacturing" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: CalendarDays, name: "Events" },
  { icon: Truck, name: "Logistics" },
  { icon: GraduationCap, name: "Education" },
];

// Single background mesh image
export const meshBackground = "https://customer-assets.emergentagent.com/job_clara-platform/artifacts/bdu3d8vr_mesh-199.png";

// Logo URL - white logo only
export const whiteLogo = "https://customer-assets.emergentagent.com/job_clara-platform/artifacts/afgl66uy_White%20Full%20Logo.png";

export function StrategyButton({ className = "", size = "default", children = "Book a free demo" }) {
  const href = useWhatsAppLink();
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-w-0 max-w-full ${className.includes("w-full") ? "w-full" : ""}`}
      data-testid="strategy-button-link"
    >
      <Button size={size} className={`min-h-[44px] max-w-full ${className}`} data-testid="strategy-button">
        {children}
      </Button>
    </a>
  );
}

// Clara Logo Component - White logo only
export function ClaraLogo() {
  return (
    <div className="relative flex items-center" data-testid="clara-logo">
      <img src={whiteLogo} alt="Clara AI" className="h-7 w-auto max-w-[140px] object-contain md:h-8" />
    </div>
  );
}


const TYPED = ["AI calling agents", "WhatsApp chatbots", "live dashboards", "custom AI agents"];

// Typing line. The first phrase is server-rendered so the layout never shifts; height is reserved in CSS.
function Typing() {
  const [txt, setTxt] = useState(TYPED[0]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let w = 0, n = TYPED[0].length, del = true, t;
    const step = () => {
      if (del) {
        n -= 1;
        if (n === 0) { del = false; w = (w + 1) % TYPED.length; }
      } else {
        n += 1;
      }
      setTxt(TYPED[w].slice(0, n));
      if (!del && n === TYPED[w].length) { del = true; t = setTimeout(step, 2000); return; }
      t = setTimeout(step, del ? 35 : 65);
    };
    t = setTimeout(step, 2200);
    return () => clearTimeout(t);
  }, []);
  return <span className="type-line" aria-hidden="true">{txt || "\u00a0"}<span className="caret" /></span>;
}

export default function App() {
  useSiteMotion();
  const featured = caseStudies.filter((c) => ["Hiranandani Parks", "Vijay Sales", "Nilkamal Sleep"].includes(c.title));
  const featuredStat = { "Hiranandani Parks": ["195", "qualified leads from 6,000+ calls in 2 days"], "Vijay Sales": ["1,867", "courtesy calls a day, 5+ agents freed"], "Nilkamal Sleep": ["Real time", "dealer incentive settlement, down from 15–20 days"] };
  return (
    <div className="site min-h-screen w-full" data-testid="home">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section id="about" className="sec-dark grain relative" style={{ paddingTop: 150, paddingBottom: 96 }}>
          <div className="bg" style={{ backgroundImage: "url(/brand/grad-1.webp)" }} />
          <Star className="star-glow pointer-events-none absolute right-[4%] top-[92px] z-[1] w-[64px] opacity-95 sm:top-[110px] sm:w-[170px] lg:right-[9%] lg:top-[140px] lg:w-[230px]" />
          <div className="wrap">
            <div className="max-w-4xl">
              <span className="eyebrow">AI implementation partner</span>
              <h1 className="h-xl mt-6">
                AI implementation for businesses that need <span className="serif text-[#C9B8FF]">results,</span> not experiments.
              </h1>
              <p className="h-md mt-6 font-medium text-white/85" aria-label="We build AI calling agents, WhatsApp chatbots, live dashboards and custom AI agents">
                We build <Typing />
              </p>
              <p className="lead hero-sub mt-5 max-w-2xl">
                Clara AI studies how your team works today, then builds and runs the AI that takes the manual work off their plate. Built around your workflow. Done for you.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WaButton variant="light">Book a free demo</WaButton>
                <a href="#case-studies" className="btn btn-ghost">See client results</a>
              </div>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-white/80">
                {["Free demo", "First demo within 7 days", "Built on your own data"].map((f) => (
                  <li key={f} className="chip"><ShieldCheck className="h-4 w-4" />{f}</li>
                ))}
              </ul>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 md:grid-cols-3">
              {[["60–70%", "less manual workflow time"], ["5–12%", "sales uplift"], ["19", "clients"]].map(([n, l]) => (
                <div key={l}><div className="stat">{n}</div><div className="mt-2 text-sm text-white/65">{l}</div></div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="sec sec-light" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div className="wrap grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
            <div className="rv">
              <span className="eyebrow">Trusted by 19 clients</span>
              <h2 className="h-md mt-4">Teams in real estate, retail, healthcare, media and manufacturing run on Clara AI.</h2>
            </div>
            <div className="rv"><LogoGrid clients={CLIENTS} cells={8} /></div>
          </div>
        </section>

        {/* Statement scrub */}
        <section className="sec sec-mist">
          <div className="wrap">
            <Scrub className="h-lg max-w-5xl" text="Most AI projects stall as *experiments.* We start with the work your team already does, then build the system that does it for them, and *keep it running.*" />
          </div>
        </section>

        {/* Solutions */}
        <section id="solutions" className="sec sec-light">
          <div className="wrap">
            <span className="eyebrow rv">Solutions</span>
            <h2 className="h-lg mt-4 max-w-3xl rv">What we build for you</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {solutions.map(({ icon: Icon, title, href, text, id }) => (
                <a key={href} id={id} href={href} className="card group flex flex-col gap-4 transition hover:-translate-y-1 hover:border-[#8D57DE] rv" data-cursor="big">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9E5FF] text-[#5D27CA]"><Icon className="h-6 w-6" /></span>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="card-muted">{text}</p>
                  <span className="mt-auto inline-flex items-center gap-2 font-semibold text-[#5D27CA]">{href === "#contact" ? "Talk to us" : "Learn more"} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </a>
              ))}
              {[["/ai-linkedin-outreach-agent", "AI LinkedIn Outreach Agent", "Finds your buyers, connects and messages them, and sends every reply to your WhatsApp."], ["/ai-seo-agent", "AI SEO Agent", "Writes and publishes search-ready blog posts for you, checked by our team."]].map(([href, t, d]) => (
                <a key={href} href={href} className="card group flex items-center justify-between gap-4 bg-[#0C0828] text-white rv" style={{ background: "#0C0828", borderColor: "#1F0798" }} data-cursor="big">
                  <div><div className="text-xs font-semibold uppercase tracking-[.14em] text-[#C9B8FF]">New agent</div><h3 className="mt-2 text-xl font-semibold">{t}</h3><p className="mt-1 text-white/65">{d}</p></div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-[#C9B8FF] transition group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Featured results, dark */}
        <section className="sec sec-dark grain">
          <div className="bg" style={{ backgroundImage: "url(/brand/grad-2.webp)" }} />
          <div className="wrap">
            <span className="eyebrow rv">Results</span>
            <h2 className="h-lg mt-4 max-w-3xl rv">Real numbers from <span className="serif text-[#C9B8FF]">live</span> systems</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {featured.map((c) => (
                <div key={c.title} className="card rv">
                  <div className="text-sm text-white/60">{c.title} · {c.tag}</div>
                  <div className="stat mt-4" style={{ fontSize: "clamp(36px,4vw,52px)" }}>{featuredStat[c.title][0]}</div>
                  <p className="mt-2 text-white/80">{featuredStat[c.title][1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="sec sec-light">
          <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow rv">How we work</span>
              <h2 className="h-lg mt-4 rv">We listen before we build</h2>
              <ol className="mt-8 space-y-6">
                {[
                  ["Diagnose the workflow", "We identify workflow friction, repetitive manual work, and missed visibility across teams."],
                  ["Select the right solution", "We choose the best-fit tools or design a custom architecture based on your reality."],
                  ["Build, deploy, and refine", "We launch the system, train teams, and keep improving the output after go-live."],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-4 rv">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5D27CA] font-semibold text-white">{i + 1}</span>
                    <div><h3 className="text-xl font-semibold">{t}</h3><p className="mt-1 text-[#4A4566]">{d}</p></div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rv">
              <div className="grid gap-3">
                {[["Not just tool sellers", "We choose the right product when it exists and build custom systems when it doesn't."], ["One team", "Business understanding and technical implementation stay under one roof."]].map(([t, d]) => (
                  <div key={t} className="card !p-4"><div className="font-semibold">{t}</div><p className="mt-1 text-sm text-[#4A4566]">{d}</p></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All case studies */}
        <section id="case-studies" className="sec sec-mist">
          <div className="wrap">
            <span className="eyebrow rv">Case studies</span>
            <h2 className="h-lg mt-4 max-w-3xl rv">What we built, and what changed</h2>
            <p className="mt-3 text-[#4A4566] rv">Swipe or scroll the row. Tap “Read more” for the full story.</p>
          </div>
          <CaseRow items={caseStudies} />
        </section>

        {/* Industries */}
        <section className="sec sec-light" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div className="wrap">
            <h2 className="h-md rv">Industries we work with</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {industries.map(({ icon: Icon, name }) => (
                <li key={name} className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[#E2DCF7] bg-white px-5 rv"><Icon className="h-4 w-4 text-[#5D27CA]" />{name}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="sec sec-dark grain" style={{ paddingTop: 120, paddingBottom: 120 }}>
          <div className="bg" style={{ backgroundImage: "url(/brand/hills-dusk.webp)" }} />
          <div className="wrap text-center">
            <Star className="star-glow mx-auto w-[56px] rv" />
            <h2 className="h-lg mx-auto mt-6 max-w-3xl rv">See it working on <span className="serif text-[#C9B8FF]">your</span> data.</h2>
            <p className="lead mx-auto mt-5 max-w-2xl rv">Share your real material and get a working first demo within 7 days. Message us on WhatsApp to book a free demo.</p>
            <div className="mt-8 flex justify-center rv"><WaButton variant="light">Book a free demo</WaButton></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
