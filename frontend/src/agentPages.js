// Light landing pages for Clara AI's browser agents (v2). Content and numbers come from
// the LinkedIn Outreach Agent and SEO Agent decks. Rendered by AgentLanding.js.
const angle =
  "Today, a person does this job in a browser and sends updates on WhatsApp. Our agent does the same job, the same way. A person on our team checks its work.";

export const agentPages = [
  {
    landing: true,
    path: "/ai-linkedin-outreach-agent",
    name: "AI LinkedIn Outreach Agent",
    title: "AI LinkedIn Outreach Agent: Replies Sent to WhatsApp | Clara AI",
    description:
      "Clara AI's LinkedIn agent finds your buyers, connects with them and sends every reply to you on WhatsApp. Haique Surfaces: 345 reached, 107 accepted, 14 replies.",
    waText: "Hi Clara, I'd like a demo of the LinkedIn Outreach Agent [WEB-LI]",
    eyebrow: "AI LinkedIn Outreach Agent",
    headline: "Get replies from buyers on LinkedIn",
    subhead: "Our AI agent reaches out for you. Every reply comes to your WhatsApp.",
    heroStatsLabel: "Haique Surfaces, 3 LinkedIn profiles",
    heroStats: [["345", "People reached"], ["107", "Accepted (31%)"], ["14", "Replies"]],
    heroImages: [
      ["/proof/li-proof-jll.jpg", "JLL India lead booked a Teams meeting"],
      ["/proof/li-proof-studio.jpg", "Architect agreed to connect"],
    ],
    angle,
    results: [
      {
        name: "Sanjeet Ray, coach (2 to 18 Oct)",
        stats: [["149", "Invites"], ["43", "New connections (29%)"], ["12", "Chats"], ["3", "Warm leads"]],
      },
    ],
    outcomes: [
      "JLL India: booked a Microsoft Teams meeting.",
      "Bengaluru design studio founder: agreed to a call.",
      "Architect at Deshpande and Associates: \"Call me, we can discuss.\"",
    ],
    moreImages: [
      ["/proof/li-proof-thryve.jpg", "Sanjeet Ray: coworking founder open to a session"],
      ["/proof/li-proof-growthyari.jpg", "Sanjeet Ray: founder says \"Let's connect\""],
    ],
    imagesNote: "Real replies. Names and faces of the people who replied are blurred.",
    whatYouGet: [
      "Invites, likes and comments sent to the right buyers.",
      "A personal first message to every new connection.",
      "Every reply sent to your WhatsApp. Tell the agent what to say, and it replies.",
      "LinkedIn Premium set up and run on your account.",
      "A report and a meeting with our team every 2 weeks.",
    ],
    howItWorks: [
      ["Find", "The agent finds people who match your ideal buyer."],
      ["Connect", "It likes their posts, sends an invite and a personal message."],
      ["Reply", "Replies come to your WhatsApp. You say what to answer."],
    ],
    start: [
      ["Week 1", "We learn your business and buyers. We set up Premium and your WhatsApp agent."],
      ["Week 2", "You approve the buyer list and message style. Outreach goes live."],
      ["Every 2 weeks", "We meet, check results and fine-tune."],
    ],
    midCta: "Want replies like these from your buyers?",
    ctaText: "Tell us who you sell to. We'll show you how the agent would reach them.",
    faqs: [
      ["Do I need to open LinkedIn?", "No. You get every reply on WhatsApp and answer from there."],
      ["Will the agent reply on its own?", "Not to warm leads. It asks you first."],
      ["Is my account safe?", "Yes. We keep daily limits and a human pace."],
    ],
    whoWeAre: "Clara AI is a 14-person AI team at SNB Future Drive Pvt Ltd. We use this agent ourselves.",
  },
  {
    landing: true,
    path: "/ai-seo-agent",
    name: "AI SEO Agent",
    title: "AI SEO Agent: a New Blog Post Every Day | Clara AI",
    description:
      "Clara AI's SEO agent writes and posts a new blog on your site every day, made to rank on Google and show up in ChatGPT. On our own site: organic search +81%, users +49% in week one.",
    waText: "Hi Clara, I'd like a demo of the SEO Agent [WEB-SEO]",
    eyebrow: "AI SEO Agent",
    headline: "A new blog post daily. More Google traffic.",
    subhead: "Our AI agent writes and posts on your site every day. Our team checks it.",
    heroStatsLabel: "claraai.tech, first week with the agent vs the week before",
    heroStats: [["+81%", "Visits from Google search"], ["+49%", "Users"], ["+108%", "Blog views"]],
    heroImages: [
      ["/proof/seo-cover-calling-agent.jpg", "A cover image made by the agent"],
      ["/proof/seo-diagram-web-vs-whatsapp.jpg", "A diagram made by the agent"],
    ],
    angle,
    results: [
      {
        name: "claraai.tech (agent started 10 Oct 2026, Google Analytics)",
        stats: [["183 → 272", "Users"], ["207 → 317", "Sessions"], ["131 → 237", "Visits from Google"], ["~2x", "Times seen on Google a day"]],
      },
    ],
    outcomes: [],
    moreImages: [
      ["/proof/seo-cover-chatbot-cost.jpg", "Cover image"],
      ["/proof/seo-cover-ivr-vs-voice.jpg", "Cover image"],
      ["/proof/seo-cover-gulf-dashboard.jpg", "Cover for a post aimed at Gulf buyers"],
      ["/proof/seo-diagram-lead-journey.jpg", "Diagram inside a post"],
    ],
    imagesNote: "Every post gets its own cover and diagrams. All from claraai.tech.",
    whatYouGet: [
      "About 30 posts a month, one a day.",
      "Topics picked for your services and regions.",
      "Posts made to rank on Google and show up in ChatGPT, Gemini and Perplexity.",
      "A cover image and diagrams for every post.",
      "A weekly report on what is working.",
    ],
    howItWorks: [
      ["Research", "The agent picks topics your buyers search for."],
      ["Write", "It writes the post and makes the images. Our team checks it."],
      ["Publish", "It posts to your site every day, with demo buttons in each post."],
    ],
    start: [
      ["Learn", "We learn your services, buyers and regions."],
      ["Set up", "We set up tracking and the technical basics on your site."],
      ["Agree", "You approve the topic plan and image style."],
      ["Go live", "Daily posts start. Weekly reports begin."],
    ],
    midCta: "Want this kind of growth on your site?",
    ctaText: "Tell us what you sell and where. We'll show you the topic plan.",
    faqs: [
      ["Who writes the posts?", "The AI agent writes them. Our team sets the plan and checks the work."],
      ["Does it help with AI search too?", "Yes. Posts give clear answers that ChatGPT, Gemini and Perplexity can quote."],
      ["How will I know it works?", "You get a report every week from Google Analytics and Search Console."],
    ],
    whoWeAre: "Clara AI is a 14-person AI team at SNB Future Drive Pvt Ltd. We run this agent on our own site.",
  },
];
