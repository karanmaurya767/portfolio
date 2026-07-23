"use client"

import { motion, useReducedMotion } from "motion/react"
import { QUICK_STATS } from "@/lib/content"

/**
 * QuickStats — replaces the token-usage widget with real portfolio stats.
 * Counts up on mount, reduced-motion fallback shows final values.
 */
export function QuickStats() {
  const reduced = useReducedMotion()

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-hairline bg-surface-card/80 p-4 backdrop-blur">
      <div className="flex items-baseline justify-between">
        <div className="text-xs uppercase tracking-[0.14em] text-muted-ink">
          Portfolio · by the numbers
        </div>
        <div className="text-xs text-muted-soft">live</div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        {QUICK_STATS.map((stat, i) => (
          <div key={stat.label} className="flex flex-col">
            <motion.div
              className="text-2xl font-medium text-ink"
              initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: reduced ? 0 : 0.08 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {stat.value}
            </motion.div>
            <div className="text-[11px] uppercase tracking-[0.1em] text-muted-ink">
              {stat.label}
            </div>
            {stat.hint && (
              <div className="text-[10px] text-muted-soft">{stat.hint}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
