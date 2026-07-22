"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { Moon, Sun } from "@phosphor-icons/react/dist/ssr"

/**
 * DayNightSwitch — the signature hero toggle.
 * Cycles the hero between a day and night background video with a smooth fade
 * + a small lift on the indicator. Honors prefers-reduced-motion at the
 * call-site (we crossfade instead of scaling when motion is reduced).
 */
export function DayNightSwitch({
  variant = "sun",
  onChange,
}: {
  variant?: "sun" | "moon"
  onChange?: (next: "sun" | "moon") => void
}) {
  const [mode, setMode] = useState<"sun" | "moon">(variant)

  // Sync internal state if the parent forces a value.
  useEffect(() => {
    setMode(variant)
  }, [variant])

  function toggle() {
    const next = mode === "sun" ? "moon" : "sun"
    setMode(next)
    onChange?.(next)
  }

  const isSun = mode === "sun"

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isSun ? "Switch to night" : "Switch to day"}
      aria-pressed={!isSun}
      className="group relative inline-flex h-10 w-[88px] items-center rounded-full border border-hairline-strong bg-surface-card/90 px-1 text-ink shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6)] backdrop-blur transition-colors hover:bg-surface-card"
    >
      {/* Sliding thumb */}
      <motion.span
        aria-hidden
        layout
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
        className="absolute top-1 bottom-1 w-9 rounded-full bg-canvas ring-1 ring-hairline-strong"
        style={{ left: isSun ? 4 : 44 }}
      >
        <span className="absolute inset-0 flex items-center justify-center text-ink">
          {isSun ? (
            <Sun size={16} weight="duotone" />
          ) : (
            <Moon size={16} weight="duotone" />
          )}
        </span>
      </motion.span>

      <span className="sr-only">Toggle day/night hero</span>
    </button>
  )
}
