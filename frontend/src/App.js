import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Menu,
  Sparkles,
  PhoneCall,
  MessageSquare,
  LayoutDashboard,
  Workflow,
  ShieldCheck,
  Factory,
  ShoppingBag,
  HeartPulse,
  CalendarDays,
  Truck,
  GraduationCap,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import "@/App.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const whatsappLink =
  "https://wa.me/918696979791?text=Hello%2C%0AI%20am%20ready%20to%20implement%20AI%20in%20my%20business!";

const caseStudies = [
  {
    title: "KISNA Diamond & Gold Jewellery",
    subtitle: "AI WhatsApp Concierge",
    tag: "WhatsApp AI",
    challenge:
      "KISNA needed to handle high volumes of customer queries across pre-order, post-order, and support — product availability, pricing, order tracking, returns, and complaint escalation — while keeping a premium brand experience. The support team was stretched thin, with no unified system for tickets, conversation history, or CRM integration.",
    solution:
      "We built KIA, an AI WhatsApp concierge for the full customer lifecycle — product discovery and recommendations, order tracking, returns, and complaint resolution. The bot auto-generates tickets, keeps conversation history, tags issues, and escalates to a human when needed, synced live with their CRM and helpdesk.",
    result:
      "Customers get instant answers on product info, order status, and support 24/7 on WhatsApp. Automated ticketing and logs give the team full visibility, and human handoff means complex issues are never dropped.",
  },
  {
    title: "One Reside",
    subtitle: "AI-Powered Virtual Concierge",
    tag: "WhatsApp AI",
    challenge:
      "An architectural brand wanted a digital extension of their in-store experience — a way for customers to discover furnishing, home accessories, and décor from multiple brands online. Product discovery, comparison, and purchase were split across websites, calls, and store visits.",
    solution:
      "We built a WhatsApp virtual concierge that takes customers from discovery and cross-brand comparison through to Razorpay checkout in a single chat. A dashboard lets the client manage brands, products, and services in real time, and the bot remembers context across conversations.",
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
    result:
      "Settlement moved from 15–20 days to real time. Leadership now sees every store live and gets always-on executive recommendations instead of a stack of reports.",
  },
  {
    title: "Aditya Birla Sun Life",
    subtitle: "Channel Partner Tracking",
    tag: "Custom Solutions",
    challenge:
      "Dormant channel partners were hard to reactivate because engagement and performance data were not consolidated in real time.",
    solution:
      "We built a dashboard and backend that tracks every partner’s last interaction with the company and their manager, alongside dealer incentive earnings.",
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
    result:
      "Dormant prospects are reactivated with specific context — for example a buyer inactive for 18 months who wanted a 3 BHK near a good international school was called about a new project launching next to a Global High School campus.",
  },
  {
    title: "Zelenkofske Axelrod LLC",
    subtitle: "Practice Management Dashboard",
    tag: "Custom Solutions",
    challenge:
      "ZA ran audit engagements across 5+ disconnected tools — spreadsheets, email, and shared drives — with no real-time visibility. Monthly WIP reconciliation took 3–5 days, invoices were fully manual, and payment health was judged on gut feel.",
    solution:
      "We built a unified AI practice-management dashboard covering engagements, PBC tracking, WIP and billing, time entry, and a client portal — plus a Payment Health Scoring Engine (0–100), ClaraGPT document analysis, and auto-generated invoice PDFs.",
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
    result:
      "43,000 calls in one day, 100% navigation support, and 24/7 event analytics — with record turnout and a complete post-event dataset for the next edition.",
  },
  {
    title: "Samara Chatbot",
    subtitle: "WhatsApp Vedic Astrology",
    tag: "Weekend Project",
    challenge:
      "People want a real Vedic astrology reading without waiting on an astrologer — but most chatbots are generic and disconnected from actual chart data.",
    solution:
      "We built a WhatsApp chatbot that collects birth details, computes a real kundli, and delivers warm Hindi/English readings grounded in the chart.",
    result: "Try it live on WhatsApp — say hi to start your reading.",
    href: "https://wa.me/919549549339?text=hi",
  },
];

const solutions = [
  {
    icon: PhoneCall,
    title: "AI Calling Agents",
    text: "Outbound, inbound, reminder, qualification, and support flows built around real business logic.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp AI Agents",
    text: "Structured conversational workflows for support, bookings, lead management, and internal operations.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Visibility",
    text: "Operational dashboards that turn scattered workflows into visible, measurable systems.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    text: "From lead journeys to internal approvals, we remove repetitive work across departments.",
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
const meshBackground = "https://customer-assets.emergentagent.com/job_clara-platform/artifacts/bdu3d8vr_mesh-199.png";

// Logo URL - white logo only
const whiteLogo = "https://customer-assets.emergentagent.com/job_clara-platform/artifacts/afgl66uy_White%20Full%20Logo.png";

function StrategyButton({ className = "", size = "default", children = "Book a strategy call" }) {
  return (
    <a href={whatsappLink} target="_blank" rel="noreferrer" data-testid="strategy-button-link">
      <Button size={size} className={className} data-testid="strategy-button">
        {children}
      </Button>
    </a>
  );
}

// Clara Logo Component - White logo only
function ClaraLogo() {
  return (
    <div className="relative flex items-center" data-testid="clara-logo">
      <img src={whiteLogo} alt="Clara.ai" className="h-7 md:h-8" />
    </div>
  );
}

export default function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070312] text-white selection:bg-violet-300/30" data-testid="clara-website">
      {/* Background Effects - Single mesh gradient */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute rounded-full hidden md:block"
          animate={{ x: mouse.x - 220, y: mouse.y - 220 }}
          transition={{ type: "spring", stiffness: 55, damping: 18, mass: 0.6 }}
          style={{
            width: 440,
            height: 440,
            background: "radial-gradient(circle, rgba(139,92,246,0.42), transparent 68%)",
            filter: "blur(85px)",
            willChange: "transform",
          }}
        />

        <motion.img
          src={meshBackground}
          alt="AI automation workflow background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,3,18,0.12),rgba(7,3,18,0.45)_45%,rgba(7,3,18,0.92)_100%)]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#070312]/70 backdrop-blur-xl" data-testid="header">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <ClaraLogo />

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex" data-testid="desktop-nav">
            <a href="#about" className="transition hover:text-white">
              Why Clara
            </a>
            <a href="#solutions" className="transition hover:text-white">
              Solutions
            </a>
            <a href="#case-studies" className="transition hover:text-white">
              Case Studies
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <StrategyButton className="rounded-full bg-white text-[#0A0618] hover:bg-white/90" />
          </div>

          <button
            className="rounded-full border border-white/10 p-2 text-white/70 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/8 bg-[#070312]/95 backdrop-blur-xl" data-testid="mobile-menu">
            <nav className="flex flex-col gap-4 px-6 py-4">
              <a href="#about" className="text-white/70 hover:text-white transition" onClick={() => setMobileMenuOpen(false)}>
                Why Clara
              </a>
              <a href="#solutions" className="text-white/70 hover:text-white transition" onClick={() => setMobileMenuOpen(false)}>
                Solutions
              </a>
              <a href="#case-studies" className="text-white/70 hover:text-white transition" onClick={() => setMobileMenuOpen(false)}>
                Case Studies
              </a>
              <a href="#contact" className="text-white/70 hover:text-white transition" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
              <StrategyButton className="rounded-full bg-white text-[#0A0618] hover:bg-white/90 w-full mt-2" />
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24" data-testid="hero-section">
          <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/65">
                <Sparkles className="h-3.5 w-3.5" />
                Trusted by enterprise teams across industries
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl" data-testid="hero-title">
                AI implementation for businesses that need
                <span className="bg-[linear-gradient(135deg,#FFFFFF,#CDB8FF_60%,#8C63FF)] bg-clip-text text-transparent">
                  {" "}
                  results, not experiments.
                </span>
              </h1>

              <div className="mt-10 flex flex-wrap gap-4">
                <StrategyButton
                  size="lg"
                  className="rounded-full bg-white px-7 text-[#0A0618] hover:bg-white/92"
                />
                <a href="#case-studies">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white/14 bg-white/5 px-7 text-white hover:bg-white/10 hover:text-white"
                    data-testid="view-case-studies-button"
                  >
                    View case studies
                  </Button>
                </a>
              </div>

              <div className="mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3" data-testid="stats-section">
                {[
                  ["60–70%", "reduction in manual workflow time"],
                  ["5–12%", "improvement in sales revenue"],
                  ["18+", "active enterprise relationships"],
                ].map(([value, label]) => (
                  <div
                    key={value}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur-sm"
                    data-testid="stat-card"
                  >
                    <div className="text-2xl font-semibold tracking-[-0.03em] text-white">
                      {value}
                    </div>
                    <div className="mt-1 text-sm leading-6 text-white/55">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
              data-testid="hero-card"
            >
              <div className="absolute -inset-6 rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(130,88,255,0.14),rgba(255,255,255,0.02))] blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#120B27]/70 px-4 py-3">
                  <div>
                    <div className="text-sm text-white/45">Clara.ai</div>
                    <div className="text-lg font-medium text-white">
                      Your AI partner for businesses
                    </div>
                  </div>
                  <div className="rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-xs text-violet-100">
                    Live systems
                  </div>
                </div>

                <div className="mt-4 grid gap-4">
                  <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-[0.22em] text-white/35">
                          How we work
                        </div>
                        <div className="mt-2 text-xl font-medium text-white">
                          Map. Build. Deploy.
                        </div>
                      </div>
                      <div className="rounded-2xl bg-[linear-gradient(135deg,rgba(132,87,255,0.35),rgba(255,255,255,0.08))] px-3 py-2 text-sm text-white/80">
                        Fractional AI team
                      </div>
                    </div>
                    <div className="mt-5 space-y-3">
                      {[
                        "Map pain points across real workflows",
                        "Pick the right tools or build custom systems",
                        "Deploy dashboards, agents, and automations",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-2xl border border-white/7 bg-white/[0.02] px-4 py-3 text-sm text-white/70"
                        >
                          <div className="h-2 w-2 rounded-full bg-violet-300" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(152,108,255,0.12),rgba(255,255,255,0.03))] p-5">
                      <div className="text-sm text-white/45">Trusted by teams in</div>
                      <div className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                        Real estate, retail, healthcare, insurance, events
                      </div>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
                      <div className="text-sm text-white/45">Built for</div>
                      <div className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                        Clarity, speed, and operational lift
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Logo Marquee */}
          <div className="mt-14 overflow-hidden rounded-full border border-white/10 bg-white/[0.03] py-4" data-testid="logo-marquee">
            <motion.div
              animate={{ x: [0, -600] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex min-w-max items-center gap-10 px-6 text-sm uppercase tracking-[0.28em] text-white/45"
            >
              {[
                "Hiranandani",
                "Vijay Sales",
                "Nilkamal",
                "Apex Hospitals",
                "Wonder Cement",
                "iDAC",
                "Hiranandani",
                "Vijay Sales",
                "Nilkamal",
                "Apex Hospitals",
                "Wonder Cement",
                "iDAC",
              ].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Clara Section */}
        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10" data-testid="about-section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
              <div className="text-sm uppercase tracking-[0.26em] text-white/40">
                Why Clara.ai
              </div>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                We solve business problems first. AI comes after.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                [
                  "We listen before we build",
                  "We study the workflow, the bottlenecks, and the people already doing the work.",
                ],
                [
                  "Not just tool sellers",
                  "We choose the right product when it exists and build custom systems when it doesn't.",
                ],
                [
                  "Strategy + execution",
                  "Business understanding and technical implementation stay under one roof.",
                ],
                [
                  "Still there after deployment",
                  "We refine, monitor, and improve once the system goes live.",
                ],
              ].map(([title, text]) => (
                <Card
                  key={title}
                  className="rounded-[1.75rem] border-white/10 bg-white/[0.035] text-white shadow-none"
                  data-testid="why-clara-card"
                >
                  <CardContent className="p-6">
                    <div className="text-lg font-medium">{title}</div>
                    <p className="mt-3 text-sm leading-7 text-white/60">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Process Section */}
        <section className="bg-[#EDE3FF] text-[#0F0822]" data-testid="process-section">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div>
                <div className="text-sm uppercase tracking-[0.26em] text-[#4F3D7A]/60">
                  Our process
                </div>
                <h3 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  A practical path from problem statement to deployed system.
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  [
                    "01",
                    "Map pain points",
                    "We identify workflow friction, repetitive manual work, and missed visibility across teams.",
                  ],
                  [
                    "02",
                    "Select the right solution",
                    "We choose the best-fit tools or design a custom architecture based on your reality.",
                  ],
                  [
                    "03",
                    "Build, deploy, and refine",
                    "We launch the system, train teams, and keep improving the output after go-live.",
                  ],
                ].map(([num, title, text]) => (
                  <div
                    key={num}
                    className="rounded-[1.75rem] border border-[#B9A2EA]/35 bg-white/60 p-6 backdrop-blur-sm"
                    data-testid="process-step"
                  >
                    <div className="flex items-start gap-5">
                      <div className="rounded-2xl bg-[#120B27] px-3 py-2 text-sm font-medium text-white">
                        {num}
                      </div>
                      <div>
                        <div className="text-xl font-medium">{title}</div>
                        <p className="mt-2 max-w-2xl text-base leading-7 text-[#3A2C57]/75">
                          {text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="mx-auto max-w-7xl px-6 py-20 lg:px-10" data-testid="solutions-section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <div className="text-sm uppercase tracking-[0.26em] text-white/40">
                  Solutions
                </div>
                <h3 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  Built around the system you actually run.
                </h3>
              </div>
              <p className="max-w-2xl text-white/60">
                AI calling agents, WhatsApp agents, dashboards, workflow automation,
                and custom AI systems — all designed to fit existing business
                operations, not replace them blindly.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {solutions.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} whileHover={{ y: -4 }} transition={{ duration: 0.22 }}>
                    <Card className="h-full rounded-[1.9rem] border-white/10 bg-white/[0.035] text-white shadow-none" data-testid="solution-card">
                      <CardContent className="p-7">
                        <div className="flex items-center justify-between">
                          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                            <Icon className="h-5 w-5 text-violet-200" />
                          </div>
                          <ChevronRight className="h-5 w-5 text-white/35" />
                        </div>
                        <div className="mt-6 text-2xl font-medium tracking-[-0.03em]">
                          {item.title}
                        </div>
                        <p className="mt-3 text-sm leading-7 text-white/60">{item.text}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="mx-auto max-w-7xl px-6 py-20 lg:px-10" data-testid="case-studies-section">
          <div>
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.26em] text-white/40">
                Case studies
              </div>
              <h3 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Problem, challenge, and solution from systems already in the field.
              </h3>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {caseStudies.map((study) => (
                <div key={`${study.title}-${study.subtitle}`} className="case-study-card h-full">
                  <Card
                    className="group flex h-full flex-col rounded-[2rem] border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] text-white shadow-none transition duration-300 hover:border-violet-200/20 hover:bg-[linear-gradient(180deg,rgba(152,108,255,0.09),rgba(255,255,255,0.03))]"
                    data-testid="case-study-card"
                  >
                    <CardContent className="flex h-full flex-col p-7">
                      <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/55 w-fit">
                        {study.tag}
                      </div>
                      <div className="mt-6 text-3xl font-medium tracking-[-0.04em]">
                        {study.title}
                      </div>
                      <div className="mt-2 text-sm text-violet-100/80">{study.subtitle}</div>

                      <div className="mt-7 space-y-5">
                        {[
                          ["01", "Problem / Challenge", study.challenge],
                          ["02", "Solution", study.solution],
                          ["03", "Result", study.result],
                        ].map(([num, label, text]) => (
                          <div key={label}>
                            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40">
                              <span className="text-violet-200/80">{num}</span>
                              {label}
                            </div>
                            <p
                              className={`mt-2 text-sm leading-7 ${
                                label === "Result" ? "text-violet-100/90" : "text-white/65"
                              }`}
                            >
                              {text}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto flex flex-wrap gap-3 pt-8">
                        <StrategyButton className="rounded-full bg-white text-[#0A0618] hover:bg-white/90">
                          Book Strategy Call
                        </StrategyButton>
                        {study.href ? (
                          <a href={study.href} target="_blank" rel="noreferrer" data-testid="case-study-link">
                            <Button
                              variant="outline"
                              className="rounded-full border-white/14 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                            >
                              Try it live
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </a>
                        ) : null}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credibility Section */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10" data-testid="credibility-section">
          <div className="grid gap-8 rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8 md:grid-cols-[1fr_auto_1fr] md:items-center lg:p-10">
            <div>
              <div className="text-sm uppercase tracking-[0.26em] text-white/40">
                Credibility
              </div>
              <div className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                Backed under the Rajasthan Startup Policy and recognised by government institutions.
              </div>
            </div>
            <div className="hidden h-20 w-px bg-white/10 md:block" />
            <div className="flex items-start gap-3 text-white/60">
              <ShieldCheck className="mt-1 h-5 w-5 text-violet-200" />
              <p className="text-sm leading-7">
                Built for serious operating teams that need implementation support,
                not just another AI tool demo.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="bg-[#EDE3FF] text-[#0F0822]" data-testid="industries-section">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <div className="text-sm uppercase tracking-[0.26em] text-[#4F3D7A]/60">
                  Industries
                </div>
                <h3 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  Designed to fit complex businesses across sectors.
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#3A2C57]/75">
                  From retail operations and patient communication to channel
                  management, event coordination, and logistics workflows — the systems
                  change, but the approach stays practical.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {industries.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="rounded-[1.6rem] border border-[#B9A2EA]/35 bg-white/60 p-5"
                      data-testid="industry-card"
                    >
                      <Icon className="h-5 w-5 text-[#5A35C8]" />
                      <div className="mt-4 text-lg font-medium">{item.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10" data-testid="quote-section">
          <div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(117,72,255,0.14),rgba(255,255,255,0.03))] p-8 text-center lg:p-14">
            <div className="mx-auto max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Your best employees are humans. Let's stop making them work like robots.
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-10" data-testid="contact-section">
          <div className="grid gap-8 rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
            <div>
              <div className="text-sm uppercase tracking-[0.26em] text-white/40">
                Contact
              </div>
              <h3 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Bring us the problem statement. We'll bring the solution.
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/60">
                Whether you need a single automation, a new dashboard, or a full AI
                rollout across teams, Clara.ai can step in as your implementation partner.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <StrategyButton
                  size="lg"
                  className="rounded-full bg-white px-7 text-[#0A0618] hover:bg-white/92"
                />
                <a href="#solutions">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white/14 bg-white/5 px-7 text-white hover:bg-white/10 hover:text-white"
                    data-testid="see-solutions-button"
                  >
                    See solutions
                  </Button>
                </a>
              </div>
            </div>

            <div className="rounded-[1.9rem] border border-white/10 bg-[#0C071A] p-6">
              <div className="text-sm uppercase tracking-[0.24em] text-white/40">
                Quick details
              </div>
              <div className="mt-6 space-y-4 text-sm text-white/70">
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                  <div className="text-white/45">Company</div>
                  <div className="mt-1 text-base text-white">Clara.ai</div>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                  <div className="text-white/45">Positioning</div>
                  <div className="mt-1 text-base text-white">
                    AI consulting and implementation partner
                  </div>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                  <div className="text-white/45">Best fit</div>
                  <div className="mt-1 text-base text-white">
                    Enterprises, legacy businesses, and growing operational teams
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/8 px-6 py-8 lg:px-10" data-testid="footer">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src={whiteLogo} alt="Clara.ai" className="h-6" />
          </div>
          <div className="flex items-center gap-6">
            <span>AI implementation partner for businesses</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Enterprise systems, thoughtfully deployed</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
