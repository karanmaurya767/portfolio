"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"
import { motion } from "motion/react"
import { DayNightSwitch } from "@/components/day-night-switch"
import { HeroMedia } from "@/components/hero-media"
import { Reveal } from "@/components/reveal"
import { SITE } from "@/lib/content"

// Lazy-load the two client-only widgets so the hero shell renders instantly.
const LazyWidget = dynamic(
  () => import("@/components/hero-widgets").then((m) => m.HeroWidgets),
  {
    ssr: false,
    loading: () => <div className="h-24 rounded-xl bg-overlay-cream/10" aria-hidden />,
  }
)

/**
 * Hero — the signature day/night hero with the practice area strip and
 * the two floating widgets (visitor location + token usage).
 */
export function Hero() {
  const [mode, setMode] = useState<"sun" | "moon">("sun")

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden text-overlay-cream"
    >
      <HeroMedia
        mode={mode}
        daySrc="/assets/hero-background-video.mp4"
        nightSrc="/assets/hero-night-video.mp4"
        dayPoster="/assets/hero-day-poster.webp"
        nightPoster="/assets/hero-night-poster.webp"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-16 pt-32 lg:px-10">
        <Reveal className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-overlay-cream/80">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            {SITE.heroEyebrow}
          </div>
          <h1 className="font-sans text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {SITE.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-base text-overlay-cream/80 sm:text-lg">
            {SITE.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-canvas px-5 text-sm text-ink transition-colors hover:bg-canvas-soft"
            >
              {SITE.heroCtaPrimary}
              <ArrowUpRight size={16} weight="bold" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-overlay-cream/55 bg-overlay-ink/30 px-5 text-sm text-overlay-cream backdrop-blur transition-colors hover:bg-overlay-ink/50"
            >
              {SITE.heroCtaSecondary}
            </a>
            <a
              href={SITE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-overlay-cream/55 bg-overlay-ink/30 px-5 text-sm text-overlay-cream backdrop-blur transition-colors hover:bg-overlay-ink/50"
            >
              {SITE.heroCtaResume}
              <ArrowUpRight size={16} weight="bold" />
            </a>
            <div className="flex items-center gap-2 rounded-full border border-overlay-cream/30 bg-overlay-ink/30 px-3 py-1 backdrop-blur sm:ml-2">
              <span className="text-xs uppercase tracking-[0.14em] text-overlay-cream/80">
                {mode === "sun" ? "Day" : "Night"}
              </span>
              <DayNightSwitch variant={mode} onChange={setMode} />
            </div>
          </div>
        </Reveal>

        {/* Floating widgets — only on lg+ to keep mobile clean */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="pointer-events-auto absolute bottom-16 right-6 hidden w-[320px] flex-col gap-3 lg:right-10 lg:flex"
        >
          <div className="rounded-2xl border border-overlay-cream/15 bg-overlay-ink/45 p-3 backdrop-blur-xl">
            <LazyWidget kind="location" />
          </div>
          <div className="rounded-2xl border border-overlay-cream/15 bg-overlay-ink/45 p-3 backdrop-blur-xl">
            <LazyWidget kind="usage" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
