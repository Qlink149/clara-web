// Content for the service pages. Rendered by ServicePage.js and prerendered at build time.
const BLOG = "https://www.claraai.tech/blog/";

const demo =
  "Send us your real material (documents, FAQs, call scripts, data exports) and you get a working first demo within 7 days.";

export const servicePages = [
  {
    path: "/ai-chatbots",
    name: "AI Chatbots",
    title: "AI Chatbots for Websites and WhatsApp | Clara AI",
    description:
      "Clara AI builds AI chatbots for your website and WhatsApp that answer from your own documents, qualify leads, book appointments and hand over to your team. English, Hindi and Arabic. First demo within 7 days.",
    eyebrow: "AI Chatbots",
    headline: "AI chatbots for your website and WhatsApp that answer from your own knowledge.",
    intro:
      "A Clara AI chatbot answers customer questions around the clock from your own catalogues, policies and FAQs. It qualifies leads, books appointments, tracks orders and raises tickets, and it hands the conversation to a person whenever it should.",
    whoFor: [
      "Retail and jewellery brands handling product, pricing and order questions",
      "Hospitals and clinics that want appointment booking on WhatsApp",
      "Manufacturers with large product catalogues and technical support queries",
      "Real estate, education and service businesses that need leads qualified fast",
    ],
    steps: [
      ["Diagnose", "We map the questions your team answers every day and where conversations should go to a person."],
      ["Build on your data", "The chatbot is trained on your own documents, catalogues and systems, not generic answers."],
      ["Connect", "We connect it to your website, WhatsApp Business, CRM or helpdesk so tickets and leads land where your team works."],
      ["Run and improve", "It runs beside your team with clear handover rules, and we keep managing and improving it."],
    ],
    languages:
      "Chatbots work in English and Hindi, and in Arabic for businesses in the Gulf. Customers can switch language mid-conversation.",
    faqs: [
      ["What can an AI chatbot do for my business?", "It answers common questions instantly from your own content, qualifies and captures leads, books appointments, tracks orders, raises support tickets and passes complex conversations to your team with the full history."],
      ["Does it work on WhatsApp as well as our website?", "Yes. Clara AI builds chatbots for websites and for WhatsApp Business, and both can share the same knowledge and the same handover rules."],
      ["Which languages does the chatbot support?", "English and Hindi, and Arabic for businesses in the Gulf."],
      ["How fast can we see it working?", demo],
      ["What happens when the chatbot cannot answer?", "It hands the conversation to a person on your team, with the context, so the customer does not have to repeat themselves."],
    ],
    blog: [
      ["AI Chatbot for Hospital Appointment Booking in the Gulf", BLOG + "ai-chatbot-for-hospital-appointment-booking/"],
      ["AI Chatbot for Jewellery Retail Lead Qualification", BLOG + "ai-chatbot-for-jewellery-retail-lead-qualification/"],
      ["AI Web Chatbot for Industrial Product Catalogue Support", BLOG + "ai-web-chatbot-industrial-product-catalogue-support/"],
    ],
  },
  {
    path: "/ai-calling-agents",
    name: "AI Calling Agents",
    title: "AI Calling Agents for Lead Follow-Up and Support | Clara AI",
    description:
      "Clara AI builds AI calling agents for outbound and inbound calls: lead follow-up, qualification, reminders, feedback and support. English, Hindi and Arabic. First demo within 7 days.",
    eyebrow: "AI Calling Agents",
    headline: "AI calling agents that follow up with every lead and customer by phone.",
    intro:
      "A Clara AI calling agent makes and takes phone calls that sound natural and follow your business logic. It follows up with new leads, qualifies buyers, sends reminders, confirms attendance, checks complaint resolution and passes warm conversations to your team or on to WhatsApp.",
    whoFor: [
      "Real estate developers following up with large pools of homebuyer leads",
      "Retailers running courtesy calls and complaint follow-ups",
      "Event organisers confirming attendance at scale",
      "Any team whose call centre time goes on repetitive calls instead of sales",
    ],
    steps: [
      ["Diagnose", "We look at your current call flows, scripts and the outcomes you need from each call."],
      ["Design the conversation", "We build the agent around real business logic: what to ask, how to qualify and when to hand over."],
      ["Connect", "The agent works with your lead lists and CRM, and can continue the conversation on WhatsApp."],
      ["Run and improve", "Every call is logged with outcomes, and we keep tuning the agent as it runs."],
    ],
    languages:
      "Calling agents speak English and Hindi, and Arabic for businesses in the Gulf.",
    faqs: [
      ["What is an AI calling agent?", "It is an AI voice agent that makes and answers phone calls for your business, following your scripts and rules, and records the outcome of each call."],
      ["Can it handle inbound and outbound calls?", "Yes. It can run outbound flows such as lead follow-up, qualification and reminders, and inbound flows such as support and enquiries."],
      ["Which languages can it speak?", "English and Hindi, and Arabic for businesses in the Gulf."],
      ["How fast can we see it working?", demo],
      ["What happens with interested leads?", "Qualified leads are passed to your sales team with notes from the call, or the conversation continues on WhatsApp."],
    ],
    blog: [
      ["AI Calling Agent for Real Estate Lead Follow-Up", BLOG + "ai-calling-agent-for-real-estate-lead-follow-up/"],
    ],
  },
  {
    path: "/ai-dashboards",
    name: "AI Dashboards",
    title: "AI Operations and BI Dashboards | Clara AI",
    description:
      "Clara AI builds operations intelligence and BI dashboards that bring data from many systems into one live view, with AI summaries and recommendations. First demo within 7 days.",
    eyebrow: "AI Dashboards",
    headline: "Operations dashboards that turn scattered data into one live view.",
    intro:
      "Clara AI builds operations intelligence and BI dashboards that pull data from your existing systems, spreadsheets and branches into a single live view. AI summaries and recommendations sit on top, so leadership sees what changed and what to do next instead of a stack of reports.",
    whoFor: [
      "Multi-branch retailers that need store performance in real time",
      "Manufacturers and distributors tracking dealers, schemes and incentives",
      "Leadership teams that want live KPIs instead of monthly reports",
      "Operations teams stitching together data from many tools by hand",
    ],
    steps: [
      ["Diagnose", "We find the decisions you need to make and the data that should drive them."],
      ["Connect your data", "We bring in data from your existing systems and files, without replacing them."],
      ["Build the view", "We design dashboards around your KPIs, with AI summaries and alerts where they help."],
      ["Run and improve", "We keep the data flowing and add views as your questions change."],
    ],
    languages:
      "Dashboards are delivered in English. Any chat or voice assistant built on top of them works in English and Hindi, and Arabic for the Gulf.",
    faqs: [
      ["What is an operations intelligence dashboard?", "It is a live dashboard that combines data from your different systems and locations into one view, so you can track performance and act on it without waiting for reports."],
      ["Do we need to replace our current software?", "No. Clara AI connects to the systems and files you already use."],
      ["What does the AI add to a dashboard?", "AI summarises what changed, flags issues and suggests next steps, so the dashboard explains the numbers as well as showing them."],
      ["How fast can we see it working?", demo],
    ],
    blog: [
      ["Operations Intelligence Dashboard for Multi-Branch Retail", BLOG + "operations-intelligence-dashboard-multi-branch-retail/"],
    ],
  },
  {
    path: "/custom-ai-agents",
    name: "Custom AI Agents",
    title: "Custom AI Agents for Business Workflows | Clara AI",
    description:
      "Clara AI builds custom AI agents and workflow automation for specific business processes, from lead journeys to internal approvals. English, Hindi and Arabic. First demo within 7 days.",
    eyebrow: "Custom AI Agents",
    headline: "Custom AI agents built around the workflow you actually run.",
    intro:
      "Some work does not fit a standard chatbot or dashboard. Clara AI designs custom AI agents and automations for a specific process in your business, such as lead activation, partner tracking, incentive calculation, document handling or internal approvals, and connects them to the systems you already use.",
    whoFor: [
      "Enterprises and legacy businesses with repetitive, rule-based work",
      "Sales teams re-engaging dormant leads or channel partners",
      "Finance and operations teams running manual calculations and approvals",
      "Growing teams that want AI built into their process, not bolted on",
    ],
    steps: [
      ["Diagnose", "We study the workflow end to end and find where AI saves real time."],
      ["Design the agent", "We define what the agent does, what it can decide and where a person stays in control."],
      ["Build on your data", "The agent works with your real documents, data and tools."],
      ["Run and improve", "It runs beside your team, and we keep managing and improving it."],
    ],
    languages:
      "Agents that talk to people work in English and Hindi, and in Arabic for businesses in the Gulf.",
    faqs: [
      ["What is a custom AI agent?", "It is an AI system designed for one specific workflow in your business, connected to your data and tools, that does the repetitive steps and leaves decisions that matter to your team."],
      ["How is this different from an off-the-shelf tool?", "It is built around how your business already works, instead of making your team change its process to fit the software."],
      ["Which languages does it support?", "Agents that talk to people work in English and Hindi, and in Arabic for the Gulf."],
      ["How fast can we see it working?", demo],
    ],
    blog: [
      ["Operations Intelligence Dashboard for Multi-Branch Retail", BLOG + "operations-intelligence-dashboard-multi-branch-retail/"],
      ["AI Calling Agent for Real Estate Lead Follow-Up", BLOG + "ai-calling-agent-for-real-estate-lead-follow-up/"],
      ["AI Chatbot for Hospital Appointment Booking in the Gulf", BLOG + "ai-chatbot-for-hospital-appointment-booking/"],
    ],
  },
];

export const findServicePage = (pathname) => {
  const p = (pathname || "/").replace(/\.html$/, "").replace(/\/+$/, "") || "/";
  return servicePages.find((s) => s.path === p) || null;
};
