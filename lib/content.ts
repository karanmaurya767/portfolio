// Every bit of text/data the site shows lives here, so our components stay clean and easy to re-skin.

/**
 * Centralized site copy.
 *
 * This file holds the repeating, list-shaped content rendered across the
 * portfolio — nav links, projects, capabilities, the stack, footer columns,
 * and so on. One-off strings (headlines, section intros, CTA labels) stay
 * inline in their components; only data with a repeating pattern lives here so
 * it's easy to edit, translate, or hand off in one place.
 *
 * Each export is consumed by the component named in its comment.
 */

// --- Site identity --------------------------------------------------------
export const SITE = {
  name: "Karan Kushawaha",
  shortName: "Karan",
  role: "Full Stack Developer · Laravel & Flask Specialist",
  location: "Varanasi, Uttar Pradesh, India · GMT +5:30",
  email: "kmkaranmaurya767@gmail.com",
  emailShort: "kmkaranmaurya767",
  github: "https://github.com/karanmaurya767",
  githubHandle: "karanmaurya767",
  linkedin: "https://www.linkedin.com/in/karanmaurya767",
  twitter: "https://x.com/Nagumi38748",
  resumeUrl: "https://github.com/karanmaurya767/karanmaurya767/raw/main/Karan_Kushawaha_Resume.pdf",
  // Hero headline copy.
  heroEyebrow: "Software Developer @ Shubham Infotech · Available for new projects",
  heroTitle: "Building production-grade web apps that ship.",
  heroSubtitle:
    "I'm Karan Kushawaha — a Full Stack Developer based in Varanasi, India. I design, develop, and deploy scalable web applications end-to-end: from database schema and backend APIs to polished, responsive interfaces.",
  heroCtaPrimary: "See selected work",
  heroCtaSecondary: "Start a project",
} as const

// --- Site header ----------------------------------------------------------
// components/site-header.tsx — primary + mobile nav.
export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Approach", href: "#process" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
] as const

// --- Practice strip -------------------------------------------------------
// components/practice-strip.tsx — the thin band of practice areas.
export const PRACTICE_AREAS = [
  { k: "01", v: "MLM & Network Platforms" },
  { k: "02", v: "E-commerce Solutions" },
  { k: "03", v: "NGO & Social Portals" },
  { k: "04", v: "Student Management" },
  { k: "05", v: "Animated Frontends" },
] as const

// --- Selected work --------------------------------------------------------
// components/selected-work.tsx — the project carousel.
export type Project = {
  index: string
  title: string
  description: string
  year: string
  status: string
  tags: readonly string[]
  href: string
  image: string
  imageAlt: string
}

export const PROJECTS: readonly Project[] = [
  {
    index: "01",
    title: "FS Foundations — MLM Platform",
    description:
      "Highly scalable MLM system built on Laravel with integrated transaction processing, multi-tier account management, and real-time downline tracking. Serves active network of distributors.",
    year: "2025",
    status: "Live · Production",
    tags: ["Laravel", "MySQL", "PHP", "Tailwind CSS"],
    href: "https://fsfoundations.com",
    image: "/assets/projects/interior-design-platform.png",
    imageAlt: "FS Foundations MLM platform dashboard showing network hierarchy and transaction history.",
  },
  {
    index: "02",
    title: "Nilexuma — MLM System",
    description:
      "Customized MLM framework with automated account tier tracking, referral-based commission engine, and real-time downline management for an active distributor network.",
    year: "2025",
    status: "Live · Production",
    tags: ["Laravel", "MySQL", "REST APIs", "Bootstrap"],
    href: "https://nilexuma.com",
    image: "/assets/projects/headshot-generator.png",
    imageAlt: "Nilexuma MLM system showing tier tracking and commission dashboard.",
  },
  {
    index: "03",
    title: "WayCrest — E-commerce + MLM",
    description:
      "Comprehensive e-commerce platform with referral-based MLM downline integration. Product catalog, shopping cart, and integrated payment gateway for an organic products business.",
    year: "2025",
    status: "Live · Production",
    tags: ["Laravel", "MySQL", "E-commerce", "Payment Gateway"],
    href: "https://waycrest.mbizz.in",
    image: "/assets/projects/automation-agent-systems.png",
    imageAlt: "WayCrest e-commerce product catalog with referral MLM downline panel.",
  },
  {
    index: "04",
    title: "Bhudev — NGO Portal",
    description:
      "Public charity portal with payment gateway integration for online donations, campaign tracking, and donor management. Built for an active social-impact organization.",
    year: "2025",
    status: "Live · Production",
    tags: ["Laravel", "MySQL", "Payment API", "cPanel"],
    href: "https://bhudev.mbizz.in",
    image: "/assets/projects/document-intelligence.png",
    imageAlt: "Bhudev NGO portal showing donation campaigns and donor management dashboard.",
  },
  {
    index: "05",
    title: "Flask EMS — Employee Management",
    description:
      "Full-featured CRUD-based Employee Management System built with Python Flask, SQLAlchemy, and MySQL. Includes user authentication, session management, and is deployed live on Vercel.",
    year: "2026",
    status: "Live · v1.0",
    tags: ["Python", "Flask", "SQLAlchemy", "MySQL"],
    href: "https://flask-app-indol-one.vercel.app/",
    image: "/assets/projects/data-labeling-platform.png",
    imageAlt: "Flask EMS dashboard with employee CRUD operations, login auth, and session tracking.",
  },
  {
    index: "06",
    title: "Pi Brains — Portfolio Platform",
    description:
      "Custom designed portfolio site with GSAP-powered animations, dynamic motion effects, and a full-stack contact portal. Showcases my development philosophy and selected work.",
    year: "2026",
    status: "Live · v2.0",
    tags: ["TypeScript", "Next.js", "GSAP", "Tailwind CSS"],
    href: "https://pibrains.com",
    image: "/assets/projects/interior-design-platform.png",
    imageAlt: "Pi Brains portfolio landing page with GSAP animations and full-stack contact form.",
  },
]

// --- Capabilities ---------------------------------------------------------
// components/capabilities.tsx — the three practice cards. Cards map to the
// icons in components/capability-icons.tsx by position.
export const CAPABILITIES = [
  {
    num: "— 01",
    title: "Backend & Database",
    body: "Production-grade server logic with clean architecture, optimized queries, and rock-solid data integrity. Built for real user load, not just demos.",
    items: [
      "Laravel",
      "PHP",
      "Flask",
      "Python",
      "MySQL",
      "REST APIs",
      "MVC Architecture",
    ],
  },
  {
    num: "— 02",
    title: "Frontend & UI",
    body: "Responsive, accessible interfaces with calm typography and considered motion. Tailwind-first workflows with hand-tuned CSS where it matters.",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "Tailwind CSS",
      "Bootstrap",
      "GSAP",
      "AOS Animation",
    ],
  },
  {
    num: "— 03",
    title: "DevOps & Deployment",
    body: "Version control, hosting, and shipping pipelines that don't get in the way. From local development to production, every step is reproducible.",
    items: [
      "Git & GitHub",
      "Vercel",
      "cPanel",
      "AWS S3",
      "XAMPP",
      "HeidiSQL",
      "Postman",
    ],
  },
] as const

// --- Approach -------------------------------------------------------------
// components/approach.tsx — the four ordered process steps.
export const APPROACH_STEPS = [
  {
    k: "— Step 01",
    t: "Understand the requirement",
    d: "Before any code, I sit with the client to understand the business problem, the users, and the success criteria. What does this product change for the people using it?",
  },
  {
    k: "— Step 02",
    t: "Design the data layer",
    d: "Database schemas, relationships, and API contracts get drafted first. This forces clarity on what the system actually does, before we touch the UI.",
  },
  {
    k: "— Step 03",
    t: "Build the backend & APIs",
    d: "Laravel or Flask endpoints with proper validation, authentication, and error handling. Each route tested with Postman before the frontend sees it.",
  },
  {
    k: "— Step 04",
    t: "Ship the polished frontend",
    d: "Responsive, animated, accessible UI built with Tailwind. Tested across devices, deployed via Vercel or cPanel, and monitored post-launch.",
  },
] as const

// --- Stack ----------------------------------------------------------------
// components/stack.tsx — the editor-mockup panes. Each item is [name, tag].
export const STACK_PANES = [
  {
    title: "Backend",
    items: [
      ["Laravel", "framework"],
      ["PHP", "language"],
      ["Flask", "framework"],
      ["Python", "language"],
      ["MySQL", "database"],
      ["REST APIs", "integration"],
    ],
  },
  {
    title: "Frontend",
    items: [
      ["HTML5 / CSS3", "core"],
      ["JavaScript ES6+", "language"],
      ["TypeScript", "language"],
      ["Tailwind CSS", "styling"],
      ["Bootstrap", "ui-kit"],
      ["GSAP / AOS", "animation"],
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      ["Git", "version-control"],
      ["GitHub", "remote"],
      ["VS Code", "editor"],
      ["Postman", "api-testing"],
      ["HeidiSQL", "db-client"],
      ["XAMPP", "local-stack"],
    ],
  },
  {
    title: "Deployment",
    items: [
      ["Vercel", "frontend-host"],
      ["cPanel", "shared-host"],
      ["AWS S3", "storage"],
      ["GitHub Actions", "ci-cd"],
      ["Custom Domains", "dns"],
    ],
  },
] as const

// --- About ----------------------------------------------------------------
// components/contact.tsx (About band) — the meta definition list. [key, value].
export const ABOUT_META = [
  ["Based", "Varanasi, UP, India"],
  ["Role", "Full Stack Developer"],
  ["Company", "Shubham Infotech"],
  ["Experience", "1+ year production"],
  ["Education", "BCA (Pursuing 2025-26)"],
  ["Speciality", "Laravel + MySQL stacks"],
  ["Availability", "Open to opportunities"],
] as const

// --- Site footer ----------------------------------------------------------
// components/site-footer.tsx — link columns. Each link is [label, href].
export const FOOTER_COLUMNS = [
  {
    title: "Site",
    links: [
      ["Work", "#work"],
      ["Capabilities", "#capabilities"],
      ["Approach", "#process"],
      ["Stack", "#stack"],
      ["About", "#about"],
      ["Contact", "#contact"],
    ],
  },
  {
    title: "Projects",
    links: [
      ["FS Foundations", "https://fsfoundations.com"],
      ["Nilexuma", "https://nilexuma.com"],
      ["WayCrest", "https://waycrest.mbizz.in"],
      ["Bhudev NGO", "https://bhudev.mbizz.in"],
      ["Pi Brains", "https://pibrains.com"],
    ],
  },
  {
    title: "Connect",
    links: [
      ["GitHub", "https://github.com/karanmaurya767"],
      ["LinkedIn", "https://www.linkedin.com/in/karanmaurya767"],
      ["Email", "mailto:kmkaranmaurya767@gmail.com"],
      ["Resume PDF", "https://github.com/karanmaurya767/karanmaurya767/raw/main/Karan_Kushawaha_Resume.pdf"],
    ],
  },
] as const

// --- Token-usage widget ---------------------------------------------------
// components/widgets/token-usage.tsx — sample usage rows.
// (Kept as generic placeholder — not part of my day-to-day but
// matches the design system without changing layout.)
export type Vendor = "Anthropic" | "OpenAI" | "Google" | "Mistral"

export type UsageRow = {
  model: string
  vendor: Vendor
  tokens: number
  costUsd: number
}

export const TOKEN_USAGE: UsageRow[] = [
  { model: "Opus 4.7", vendor: "Anthropic", tokens: 8_230_000, costUsd: 211 },
  { model: "Sonnet 4.6", vendor: "Anthropic", tokens: 2_400_000, costUsd: 42 },
  { model: "Haiku 4.5", vendor: "Anthropic", tokens: 1_140_000, costUsd: 19 },
  { model: "GPT-5", vendor: "OpenAI", tokens: 730_000, costUsd: 12 },
]
