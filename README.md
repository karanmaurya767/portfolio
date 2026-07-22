# Karan Maurya — Portfolio

A modern, editorial developer portfolio built with **Next.js 16**, **Tailwind CSS v4**, and **Motion** (Framer Motion). Features a signature day/night hero switch, keyless live visitor-location + weather widget, animated AI token-usage card, an editorial design system, and choreographed scroll animations.

![Portfolio hero — day mode](./public/assets/hero-day-poster.webp)

🌐 **Live:** _(add your deployment URL here)_

---

## ✨ Features

- 🌗 **Interactive day/night hero switch** — swaps a day background video for a night one with smooth Motion choreography.
- 📍 **Live visitor location + real-time weather** — server keyless, uses `ipwho.is` + Open-Meteo.
- 📊 **Animated AI token-usage widget** — bars grow on mount with reduced-motion support.
- 🎨 **Editorial design system** — warm cream canvas, hairline borders (no shadows), light display type, one orange accent.
- 🖼️ **Selected Work** — animated project carousel with keyboard navigation.
- 🧩 **Capabilities** — three practice cards with hand-crafted animated SVG icons.
- 🪜 **Approach**, faux code-editor **Stack**, **About** + **Contact** sections.
- 📩 **Working contact form** — opens the user's email client with a pre-filled message (no backend required).
- 🧭 **Scroll-aware header** with mobile menu drawer, matching media-backed footer.
- 🎬 **Motion animations** — scroll reveals via a reusable `Reveal` component, with full `prefers-reduced-motion` support.
- 📱 **Fully responsive** and content-centralized for easy edits.

---

## 🛠️ Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router + Turbopack) |
| Language | TypeScript |
| UI | React 19 |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (Radix) |
| Animation | Motion (Framer Motion) |
| Icons | @phosphor-icons/react |
| Fonts | Geist + Geist Mono (next/font) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js **20.9+** (or Bun 1.2+)
- npm / pnpm / yarn / bun

### Install & run

```bash
# 1. Clone
git clone https://github.com/karanmaurya767/portfolio.git
cd portfolio

# 2. Install dependencies
npm install        # or: pnpm install / yarn / bun install

# 3. Start the dev server
npm run dev        # or: pnpm dev / yarn dev / bun dev

# 4. Open http://localhost:3000
```

No `.env` file is needed — the location and weather widget uses free, keyless services.

### Other scripts

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
npm run format     # prettier
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Editorial design system (CSS variables + Tailwind theme)
│   ├── layout.tsx        # Root layout (fonts, metadata)
│   └── page.tsx          # Home page — assembles every section
├── components/
│   ├── site-header.tsx   # Scroll-aware header + mobile menu
│   ├── hero.tsx          # Day/night hero with floating widgets
│   ├── hero-media.tsx    # Video crossfade between day/night
│   ├── day-night-switch.tsx
│   ├── hero-widgets.tsx  # Lazy-loads the two floating widgets
│   ├── practice-strip.tsx
│   ├── selected-work.tsx # Project carousel
│   ├── capabilities.tsx  # 3 cards + animated SVG icons
│   ├── capability-icons.tsx
│   ├── approach.tsx      # 4-step process
│   ├── stack.tsx         # Editor-mockup panes
│   ├── about.tsx         # Bio + meta list
│   ├── contact.tsx       # Form + socials + cover image
│   ├── site-footer.tsx   # Media-backed footer
│   ├── reveal.tsx        # Scroll-reveal helper (Motion)
│   └── widgets/
│       ├── visitor-location.tsx  # Keyless IP geolocation + weather
│       └── token-usage.tsx       # Animated stat card
├── lib/
│   ├── content.ts        # ALL site copy (nav, projects, capabilities, …)
│   ├── capability-icons.tsx
│   └── utils.ts          # cn() class merger
└── public/
    └── assets/           # Hero videos, posters, project images, contact cover
```

---

## ✏️ Customising the content

Every piece of text the site shows lives in **`lib/content.ts`**. Open it and edit:

| Export | Where it shows up |
| --- | --- |
| `SITE` | Name, role, email, socials, hero copy, location |
| `NAV_LINKS` | Header / mobile nav |
| `PRACTICE_AREAS` | Thin band under the hero |
| `PROJECTS` | Selected Work carousel |
| `CAPABILITIES` | 3 practice cards |
| `APPROACH_STEPS` | 4-step process |
| `STACK_PANES` | Editor-mockup panes |
| `ABOUT_META` | About list |
| `FOOTER_COLUMNS` | Footer links |
| `TOKEN_USAGE` | Animated stat card |

To swap the social links, edit `SITE.github` / `SITE.linkedin` / `SITE.twitter` and the matching entries in `FOOTER_COLUMNS`. To change the project images, drop new PNGs into `public/assets/projects/` and update each `image` path in `PROJECTS`.

---

## 🎨 Design system

The editorial design tokens live in `app/globals.css` under `:root` and `@theme inline`. The palette is intentionally restrained:

- **Surfaces:** warm cream canvas (`--canvas: #f7f7f4`) — never pure white.
- **Hairlines:** 1px borders at 3 depths (`--hairline`, `--hairline-soft`, `--hairline-strong`) — no drop shadows.
- **Type:** warm near-black ink on cream, with a single orange accent (`--primary: #f54e00`).
- **Overlay pair:** light cream type on dark ink scrim — used in the hero scrim and the media-backed footer.

To re-skin the site, change the values inside `:root` in `globals.css`. The shadcn primitives automatically pick up the new tokens.

---

## 🌍 Deploying

The easiest path is **Vercel** (the team behind Next.js):

1. Push this repo to GitHub.
2. Import it on [vercel.com/new](https://vercel.com/new).
3. Click **Deploy**. No environment variables needed.

Other targets (Cloudflare Pages, Netlify, your own Node server) work too — the build output is a standard Next.js app.

---

## 📜 License

MIT — use it for whatever you want, attribution appreciated but not required.

---

## 🙏 Credits

- Tutorial starter by [CodeBucks](https://github.com/codebucks27) — this is a fork of his excellent Next.js 16 portfolio tutorial.
- Background video assets, project mockups, and the original content skeleton came from that starter.
- Day/night switch, widgets, animations, contact form, and footer were implemented on top of it.
