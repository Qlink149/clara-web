// Product pages for Clara AI's browser agents. Content and numbers come from the
// LinkedIn Outreach Agent and SEO Agent sales decks. Rendered by ServicePage.js.
const BLOG = "https://www.claraai.tech/blog/";

const angle = [
  "For work that is not physical, companies will come to AI agencies instead of hiring.",
  "A person in that role works in a browser all day and reports to their manager on WhatsApp. Our agents do exactly that: they work in the browser, and they report to you on WhatsApp.",
  "Each agent is run by a person on the Clara AI team, so you get the speed of AI with a human checking the work.",
];

export const agentPages = [
  {
    path: "/ai-linkedin-outreach-agent",
    name: "AI LinkedIn Outreach Agent",
    title: "AI LinkedIn Outreach Agent, Managed for You | Clara AI",
    description:
      "Clara AI's LinkedIn Outreach Agent runs targeted invites, likes, comments and personal first messages on your profile, and sends every reply to you on WhatsApp. Human plus AI, with real results for Haique Surfaces and Sanjeet Ray.",
    waText: "Hi Clara, I'd like a demo of the LinkedIn Outreach Agent [WEB-LI]",
    eyebrow: "AI LinkedIn Outreach Agent",
    headline: "Human plus AI LinkedIn outreach, with every reply sent to you on WhatsApp.",
    intro:
      "Outreach, messages, likes and comments, run by an AI agent and owned by a person on our team. Every new LinkedIn reply comes straight to you on WhatsApp, and you answer it from there.",
    heroNote: "You never need to open LinkedIn.",
    angle,
    stats: [
      ["345", "People reached for Haique Surfaces"],
      ["107", "Accepted (31%)"],
      ["14", "Replies"],
      ["24/7", "Every reply sent to you on WhatsApp"],
    ],
    whatYouGet: [
      ["Outreach", "Targeted invites, likes and comments, and a personal first message to every new connection."],
      ["Your own WhatsApp agent, 24/7", "Every new LinkedIn reply is sent to you on WhatsApp the moment it comes in. To answer, just tell the agent what to say, and it replies on LinkedIn for you. You can ask it about your LinkedIn anytime, day or night."],
      ["LinkedIn Premium", "We set up and run Premium on your account, so you get its extra insights and messaging."],
      ["Meetings and reporting", "A meeting with our team once every 2 weeks, and a report on every invite, acceptance and reply."],
    ],
    whyItWorks: [
      "Every profile is checked against your ideal buyer before an invite goes out. No spray and pray.",
      "We like and comment on each prospect's recent posts first, so the invite comes from a familiar name.",
      "Every first message is personal to the person and their company.",
      "The agent never replies to a warm lead on its own. It sends the reply to you on WhatsApp and answers the way you tell it to.",
      "Daily caps, human-like pacing and varied timings keep your account safe.",
    ],
    caseStudies: [
      {
        name: "Haique Surfaces",
        summary: "We manage 3 LinkedIn profiles for Haique, a premium surfaces brand selling to architects, designers and developers in India and the UAE.",
        head: ["Profile", "Reached", "Accepted", "Replies"],
        rows: [
          ["Co-owner: architects and developers, India", "243", "82 (34%)", "8"],
          ["Designers and developers, India and UAE", "67", "17 (25%)", "4"],
          ["Procurement at UAE and Saudi developers", "35", "8 (23%)", "2"],
          ["Total", "345", "107 (31%)", "14"],
        ],
        outcomes: [
          "JLL India, Head of Commercial & Contracts: booked a Microsoft Teams meeting and shared his email.",
          "Luxury interior design studio founder, Bengaluru: agreed to a call and shared her email.",
          "Principal Architect, Deshpande and Associates: \"Call me, we can discuss\", and shared his number.",
        ],
      },
      {
        name: "Sanjeet Ray, coach",
        summary: "Ran our LinkedIn agent from 2 to 18 Oct: 149 hand-picked invites, 43 new connections (29%), 12 conversations and 3 warm leads ready for him to take forward.",
        head: ["Audience", "Invites", "Accepted", "Replies"],
        rows: [
          ["Corporate teams and brands", "62", "19 (31%)", "5"],
          ["Coaches, therapists, professionals", "44", "10 (23%)", "4"],
          ["Communities", "43", "14 (33%)", "3"],
        ],
        outcomes: [],
      },
    ],
    proofsTitle: "Real replies, unedited",
    proofsNote: "Names, faces and contact details of the people who replied are blurred.",
    proofs: [
      ["/proof/li-proof-jll.jpg", "Haique Surfaces: JLL India, Head of Commercial & Contracts, Teams meeting booked"],
      ["/proof/li-proof-studio.jpg", "Haique Surfaces: Studio Saar architect, agreed to connect"],
      ["/proof/li-proof-thryve.jpg", "Sanjeet Ray: Founder, Thryve Coworking, open to a free session"],
      ["/proof/li-proof-growthyari.jpg", "Sanjeet Ray: Founder, GrowthYari, \"Let's connect\""],
    ],
    plan: {
      title: "What we aim for over 3 months",
      items: [["600", "Invites"], ["120+", "Connections"], ["8–10+", "Conversations targeted"], ["2–3", "Meetings targeted"], ["6", "Meetings with our team (once every 2 weeks)"]],
    },
    steps: [
      ["Week 1: learn", "We learn your business, your ideal buyers and the regions you sell in, and tidy up your LinkedIn profile."],
      ["Week 1: set up", "We set up LinkedIn Premium on your account and connect your WhatsApp agent."],
      ["Week 2: go live", "We agree the target list and your message style with you, then outreach goes live."],
      ["Every 2 weeks: review", "A meeting with our team to review results and adjust the targeting."],
    ],
    whatsappDemo: {
      reply: "New LinkedIn reply: Neha, Head of Procurement, Pune: \"Sounds interesting. Can you share more details? Free next week?\"",
      you: "Send her our deck and offer Tuesday at 4.",
      agent: "Done. Replied to Neha on LinkedIn with the deck and Tuesday at 4 PM.",
      note: "Example only. Every new reply reaches you on WhatsApp, and you answer it from there.",
    },
    whoWeAre: "Clara AI, a 14-person AI team at SNB Future Drive Pvt Ltd. We run this same agent for our own outreach.",
    ctaText: "Tell us who your ideal buyers are, and we'll show you how the agent would reach them.",
    faqs: [
      ["Do I need to open LinkedIn myself?", "No. Every new reply is sent to you on WhatsApp. You tell the agent what to say, and it replies on LinkedIn for you."],
      ["Will the agent reply to leads on its own?", "Never to a warm lead. It sends the reply to you on WhatsApp and answers the way you tell it to."],
      ["Is my LinkedIn account safe?", "Daily caps, human-like pacing and varied timings keep your account safe."],
      ["Who checks the work?", "A person on the Clara AI team owns your account, with a meeting once every 2 weeks and a report on every invite, acceptance and reply."],
      ["How do we start?", "In week 1 we learn your business and set up Premium and your WhatsApp agent. In week 2 we agree the target list and message style, and outreach goes live."],
    ],
    blog: [["Clara AI blog", BLOG]],
  },
  {
    path: "/ai-seo-agent",
    name: "AI SEO Agent",
    title: "AI SEO Agent: a New Blog Post on Your Site Every Day | Clara AI",
    description:
      "Clara AI's SEO Agent researches, writes, designs and publishes a new post on your site every day, built to rank on Google and be quoted by ChatGPT, Gemini and Perplexity. Expert-led, AI-assisted, with weekly reports.",
    waText: "Hi Clara, I'd like a demo of the SEO Agent [WEB-SEO]",
    eyebrow: "AI SEO Agent",
    headline: "Expert-led, AI-assisted blogging. A new post on your site every day.",
    intro:
      "An AI agent researches, writes, designs and publishes a new post on your site every day. Our team sets the strategy and checks the work.",
    heroNote: "Posts built to rank on Google and be quoted by ChatGPT, Gemini and Perplexity.",
    angle,
    problem: {
      title: "Why most blogs don't bring in leads",
      items: [
        ["96.55%", "of pages get no traffic from Google", "Ahrefs, study of ~14bn pages"],
        ["8% vs 15%", "clicks on a result when Google shows an AI summary, vs when it doesn't", "Pew Research Center, 2025"],
        ["−25%", "traditional search volume by 2026 as AI answers take over", "Gartner prediction, 2024"],
      ],
      note: "Posts now need to rank on Google and be quoted by ChatGPT, Gemini and Perplexity.",
    },
    stats: [
      ["+81%", "Organic search sessions"],
      ["+49%", "Users"],
      ["+108%", "Blog views"],
      ["~2x", "Search Console impressions a day"],
    ],
    whatYouGet: [
      ["Research", "Topics and keywords picked for your services and regions."],
      ["Writing", "Posts optimised for Google and AI search, checked by our team."],
      ["Images", "A branded cover and diagrams for every post."],
      ["Publishing", "Built and posted to your site daily, with schema and CTAs."],
      ["Reporting", "A weekly Google Analytics and Search Console report, compared by post type, region and service, so we write more of what works."],
    ],
    whyItWorks: [
      "Experts set the strategy. AI does the heavy lifting.",
      "Daily posts build topical authority faster than one post a month.",
      "Posts are written to be quoted by AI tools, not only ranked.",
      "Every CTA is tracked, so traffic is tied to leads.",
      "The weekly report shows which types and regions win, and we adjust.",
    ],
    caseStudies: [
      {
        name: "Clara AI's own site, claraai.tech",
        summary: "The agent started on 10 Oct 2026. Its first week against the week before, from Google Analytics. Search Console impressions roughly doubled, from about 173 to 340 a day.",
        head: ["Google Analytics", "3–9 Oct", "10–16 Oct", "Change"],
        rows: [
          ["Users", "183", "272", "+49%"],
          ["Sessions", "207", "317", "+53%"],
          ["Organic search sessions", "131", "237", "+81%"],
          ["Engagement rate", "43%", "47.6%", "+4.6 pts"],
          ["Blog views", "13", "27", "+108%"],
        ],
        outcomes: [],
      },
    ],
    postTypes: [
      ["Definition", "700–1,000 words", "Answers \"what is…\" questions"],
      ["Problem-led", "1,200–1,600 words", "Meets a buyer at their pain point"],
      ["Comparison", "1,800–2,200 words", "Wins \"X vs Y\" and \"best\" searches"],
      ["News", "400–600 words", "Keeps the site fresh and timely"],
    ],
    builtIn: [
      ["SEO", "Keyword research, clean structure, internal links"],
      ["AI search (GEO)", "Clear answers that AI tools can quote"],
      ["Schema", "Structured data so search engines read the page right"],
      ["Three CTAs", "In the header, mid-post and at the end"],
    ],
    proofsTitle: "Real images, made by the agent",
    proofsNote: "Every post gets a branded cover and diagrams that explain the idea. From claraai.tech.",
    proofs: [
      ["/proof/seo-cover-calling-agent.jpg", "Cover: What Is an AI Calling Agent and How It Works"],
      ["/proof/seo-cover-chatbot-cost.jpg", "Cover: How Much Does an AI Chatbot Cost in India"],
      ["/proof/seo-diagram-web-vs-whatsapp.jpg", "In-post diagram: web chatbot vs WhatsApp chatbot"],
      ["/proof/seo-cover-ivr-vs-voice.jpg", "Cover: IVR vs AI Voice Agent"],
      ["/proof/seo-cover-gulf-dashboard.jpg", "Cover: a post written for Gulf buyers"],
      ["/proof/seo-diagram-lead-journey.jpg", "In-post diagram: a lead follow-up journey"],
    ],
    plan: {
      title: "Every month",
      items: [["~30", "Posts (1 a day)"], ["4", "Post types, rotated"], ["3", "CTAs in every post"], ["4", "Weekly reports"]],
    },
    steps: [
      ["Learn", "We learn your services, buyers and target regions."],
      ["Set up", "We set up tracking, sitemap, robots.txt, llms.txt and schema on your site."],
      ["Agree", "We agree the topic plan and your brand image style."],
      ["Go live", "Daily posts go live, and the weekly reports begin."],
    ],
    whoWeAre: "A 14-person AI team at SNB Future Drive Pvt Ltd. We run this same agent on our own site.",
    ctaText: "Tell us your services and target regions, and we'll show you the topic plan the agent would follow.",
    faqs: [
      ["What does the SEO Agent do?", "It researches, writes, designs and publishes a new post on your site every day. Our team sets the strategy and checks the work."],
      ["Is it written for AI search as well as Google?", "Yes. Every post is built for SEO and for AI search (GEO), with clear answers that ChatGPT, Gemini and Perplexity can quote."],
      ["What do you set up on our site?", "Sitemap, robots.txt and llms.txt updated with every post, conversion tracking on every CTA, and auto-publishing so a new post goes live each day."],
      ["How will we know it's working?", "A weekly Google Analytics and Search Console report, compared by post type, region and service."],
      ["Has it worked anywhere?", "On claraai.tech, the agent's first week against the week before showed +81% organic search sessions, +49% users and +108% blog views."],
    ],
    blog: [
      ["Clara AI blog, written and published by the SEO Agent", BLOG],
    ],
  },
];
