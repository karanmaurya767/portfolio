"use client"

import {
  ArrowUp,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  EnvelopeSimple,
  ArrowUpRight,
  MapPin,
} from "@phosphor-icons/react/dist/ssr"
import { motion, useReducedMotion } from "motion/react"
import { useEffect, useState } from "react"
import { FOOTER_COLUMNS, SITE } from "@/lib/content"
import { cn } from "@/lib/utils"

/**
 * SiteFooter — full-bleed background image, dark scrim overlay, brand mark,
 * social icons, link columns, and a back-to-top button. Stacks cleanly on
 * mobile, balanced grid on tablet, four-column on desktop.
 */
export function SiteFooter() {
  const year = new Date().getFullYear()
  const reduced = useReducedMotion()
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative isolate overflow-hidden text-overlay-cream">
      {/* Background image */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <motion.div
          initial={reduced ? { scale: 1 } : { scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <img
            src="/assets/contact-cover-image.png"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </motion.div>
        {/* Multi-layer scrim: vertical gradient + soft brand wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-overlay-ink/85 via-overlay-ink/75 to-overlay-ink/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,78,0,0.18),transparent_55%)]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:py-20 lg:px-10">
        {/* Top row: brand + tagline + email CTA */}
        <div className="grid gap-10 border-b border-overlay-cream/15 pb-12 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <a
              href="#top"
              className="font-mono text-sm tracking-tight text-overlay-cream"
              aria-label={`${SITE.name} — home`}
            >
              <span className="text-primary">●</span> {SITE.shortName.toLowerCase()}
              <span className="opacity-60">.dev</span>
            </a>
           
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-on-primary transition-colors hover:bg-[var(--primary-active)]"
            >
              <EnvelopeSimple size={16} weight="bold" />
              Start a project
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="font-mono text-sm text-overlay-cream/80 underline decoration-overlay-cream/30 underline-offset-4 transition-colors hover:decoration-primary hover:text-overlay-cream"
            >
              {SITE.email}
            </a>
            <span className="inline-flex items-center gap-1.5 text-xs text-overlay-cream/60">
              <MapPin size={12} weight="duotone" />
              {SITE.location}
            </span>
          </div>
        </div>

        {/* Middle row: 3 link columns */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-overlay-cream/70">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map(([label, href]) => {
                  const isExternal = href.startsWith("http")
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="group inline-flex items-center gap-1.5 text-sm text-overlay-cream/90 transition-colors hover:text-primary"
                      >
                        {label}
                        {isExternal && (
                          <ArrowUpRight
                            size={12}
                            weight="bold"
                            className="opacity-0 transition-opacity group-hover:opacity-100"
                          />
                        )}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Social row */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-overlay-cream/15 pt-8 sm:flex-row sm:items-center">
          <ul className="flex items-center gap-2">
            <SocialIcon href={SITE.github} label="GitHub">
              <GithubLogo size={16} weight="duotone" />
            </SocialIcon>
            <SocialIcon href={SITE.linkedin} label="LinkedIn">
              <LinkedinLogo size={16} weight="duotone" />
            </SocialIcon>
            <SocialIcon href={SITE.twitter} label="X / Twitter">
              <TwitterLogo size={16} weight="duotone" />
            </SocialIcon>
          </ul>

          <a
            href={`mailto:${SITE.email}`}
            className="font-mono text-xs text-overlay-cream/60 transition-colors hover:text-overlay-cream sm:text-sm"
          >
            {SITE.email}
          </a>
        </div>

        {/* Bottom row: copyright + tech credit + back to top */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-overlay-cream/60 sm:flex-row sm:items-center">
          <span>
            © {year} {SITE.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <span className="font-mono">
              Built with Next.js · Tailwind · Motion
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className={cn(
                "inline-flex h-9 items-center gap-1.5 rounded-full border border-overlay-cream/30 bg-overlay-ink/40 px-3 text-sm text-overlay-cream backdrop-blur transition-colors hover:border-overlay-cream/60 hover:bg-overlay-ink/60",
                showTop ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
            >
              <ArrowUp size={12} weight="bold" />
              Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-overlay-cream/30 bg-overlay-ink/40 text-overlay-cream backdrop-blur transition-colors hover:border-primary hover:bg-primary hover:text-on-primary"
      >
        {children}
      </a>
    </li>
  )
}
