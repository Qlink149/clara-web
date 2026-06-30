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
    title: "Hiranandani Parks",
    tag: "Real Estate",
    summary:
      "Multilingual AI calling in English and Tamil for large-scale buyer outreach, qualification, and follow-up journeys.",
    result: "Qualified leads generated rapidly with scalable follow-up.",
  },
  {
    title: "Nilkamal Sleep",
    tag: "Retail / Distribution",
    summary:
      "Dealer-facing dashboards for scheme visibility, incentive intimation, and sales nudges that keep teams informed.",
    result: "Sharper distributor visibility and better on-ground coordination.",
  },
  {
    title: "Vijay Sales",
    tag: "Customer Operations",
    summary:
      "AI courtesy-calling for complaint resolution follow-ups so human teams can stay focused on revenue tasks.",
    result: "Freed up human bandwidth while maintaining customer communication.",
  },
  {
    title: "Apex Hospitals",
    tag: "Healthcare",
    summary:
      "AI call quality monitoring that scores patient interactions with more consistency and lower supervisor effort.",
    result: "Reduced manual review load and improved evaluation consistency.",
  },
  {
    title: "iDAC",
    tag: "Events",
    summary:
      "AI calling, WhatsApp guidance, and visitor support flows for event attendance confirmation and navigation.",
    result: "Smarter event coordination with better attendee support.",
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

function StrategyButton({ className = "", size = "default" }) {
  return (
    <a href={whatsappLink} target="_blank" rel="noreferrer" data-testid="strategy-button-link">
      <Button size={size} className={className} data-testid="strategy-button">
        Book a strategy call
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
                "Jaipur Rugs",
                "Apex Hospitals",
                "Wonder Cement",
                "iDAC",
                "Hiranandani",
                "Vijay Sales",
                "Nilkamal",
                "Jaipur Rugs",
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.26em] text-white/40">
                Case studies
              </div>
              <h3 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                A few systems already in the field.
              </h3>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <Card className="group h-full rounded-[2rem] border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] text-white shadow-none transition duration-300 hover:border-violet-200/20 hover:bg-[linear-gradient(180deg,rgba(152,108,255,0.09),rgba(255,255,255,0.03))]" data-testid="case-study-card">
                    <CardContent className="p-7">
                      <div className="flex items-center justify-between gap-4">
                        <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/55">
                          {study.tag}
                        </div>
                        <ArrowRight className="h-5 w-5 text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:text-white/65" />
                      </div>
                      <div className="mt-6 text-3xl font-medium tracking-[-0.04em]">
                        {study.title}
                      </div>
                      <p className="mt-4 text-sm leading-7 text-white/60">{study.summary}</p>
                      <div className="mt-8 border-t border-white/10 pt-5 text-sm text-violet-100/90">
                        {study.result}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
