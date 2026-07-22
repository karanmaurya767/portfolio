"use client"

import { useEffect, useState } from "react"
import { List, X } from "@phosphor-icons/react/dist/ssr"
import { motion, AnimatePresence } from "motion/react"
import { NAV_LINKS, SITE } from "@/lib/content"
import { cn } from "@/lib/utils"

/**
 * SiteHeader — scroll-aware header. Sits overlay on the hero, then snaps to a
 * solid bar with a hairline once you scroll past the hero. Includes a working
 * mobile menu drawer.
 */
export function SiteHeader() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close menu when route hash changes (i.e. user clicks a link).
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener("hashchange", close)
    return () => window.removeEventListener("hashchange", close)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        solid
          ? "border-b border-hairline bg-canvas/85 backdrop-blur"
          : "border-b border-transparent"
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-6 lg:px-10",
          !solid && "text-overlay-cream"
        )}
      >
        <a
          href="#top"
          className="font-mono text-sm tracking-tight"
          aria-label={`${SITE.name} — home`}
        >
          <span className="text-primary">●</span> {SITE.shortName.toLowerCase()}
          <span className="opacity-60">.dev</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm transition-colors",
                solid ? "text-body hover:text-ink" : "text-overlay-cream/85 hover:text-overlay-cream"
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className={cn(
              "hidden h-9 items-center rounded-full border px-4 text-sm transition-colors md:inline-flex",
              solid
                ? "border-hairline-strong bg-surface-card text-ink hover:bg-surface-strong"
                : "border-overlay-cream/55 bg-overlay-ink/40 text-overlay-cream backdrop-blur hover:bg-overlay-ink/60"
            )}
          >
            Start a project
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-full border md:hidden",
              solid
                ? "border-hairline-strong bg-surface-card text-ink"
                : "border-overlay-cream/55 bg-overlay-ink/40 text-overlay-cream backdrop-blur"
            )}
          >
            {open ? <X size={16} weight="bold" /> : <List size={16} weight="bold" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "mx-3 mb-3 overflow-hidden rounded-2xl border md:hidden",
              solid
                ? "border-hairline bg-canvas/95 text-ink backdrop-blur"
                : "border-overlay-cream/15 bg-overlay-ink/85 text-overlay-cream backdrop-blur"
            )}
          >
            <nav className="flex flex-col p-2" aria-label="Mobile">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm",
                    solid ? "text-body hover:bg-hairline-soft hover:text-ink" : "text-overlay-cream/85 hover:bg-overlay-cream/10 hover:text-overlay-cream"
                  )}
                >
                  {l.label}
                </a>
              ))}
              <div
                className={cn(
                  "my-1 h-px",
                  solid ? "bg-hairline" : "bg-overlay-cream/15"
                )}
              />
              <a
                href="#contact"
                className={cn(
                  "rounded-xl px-3 py-2 text-sm",
                  solid ? "text-ink" : "text-overlay-cream"
                )}
              >
                Start a project →
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
