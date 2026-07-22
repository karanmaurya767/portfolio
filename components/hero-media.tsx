"use client"

import { motion, AnimatePresence } from "motion/react"
import { useEffect, useRef, useState } from "react"

/**
 * HeroMedia — the day/night background layer.
 * Crossfades between two video sources and falls back to a static poster
 * when prefers-reduced-motion is set (CSS handles the swap).
 */
export function HeroMedia({
  mode,
  daySrc,
  nightSrc,
  dayPoster,
  nightPoster,
}: {
  mode: "sun" | "moon"
  daySrc: string
  nightSrc: string
  dayPoster: string
  nightPoster: string
}) {
  const isDay = mode === "sun"
  const dayRef = useRef<HTMLVideoElement | null>(null)
  const nightRef = useRef<HTMLVideoElement | null>(null)

  // Keep playback in sync with the visible mode.
  useEffect(() => {
    const visible = isDay ? dayRef.current : nightRef.current
    const hidden = isDay ? nightRef.current : dayRef.current
    visible?.play().catch(() => {})
    if (hidden) {
      hidden.pause()
    }
  }, [isDay])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <AnimatePresence initial={false}>
        {isDay ? (
          <motion.video
            key="day"
            ref={dayRef}
            src={daySrc}
            poster={dayPoster}
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <motion.video
            key="night"
            ref={nightRef}
            src={nightSrc}
            poster={nightPoster}
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </AnimatePresence>
      {/* Soft scrim so headline stays readable on either video. */}
      <div className="absolute inset-0 bg-gradient-to-b from-overlay-ink/30 via-overlay-ink/10 to-overlay-ink/45" />
    </div>
  )
}