"use client"

import { motion, useReducedMotion } from "motion/react"
import { TOKEN_USAGE, type Vendor } from "@/lib/content"

const VENDOR_COLOR: Record<Vendor, string> = {
  Anthropic: "bg-[#d97757]",
  OpenAI: "bg-[#10a37f]",
  Google: "bg-[#4285f4]",
  Mistral: "bg-[#ff7000]",
}

const TOTAL = TOKEN_USAGE.reduce((s, r) => s + r.tokens, 0)
const TOTAL_USD = TOKEN_USAGE.reduce((s, r) => s + r.costUsd, 0)
const MAX = Math.max(...TOKEN_USAGE.map((r) => r.tokens))

function fmt(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`
  return String(n)
}

/**
 * TokenUsage — animated stat card listing recent model usage.
 * Bars grow on mount, with a reduced-motion fallback that just renders the
 * final widths.
 */
export function TokenUsage() {
  const reduced = useReducedMotion()

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-hairline bg-surface-card/80 p-4 backdrop-blur">
      <div className="flex items-baseline justify-between">
        <div className="text-xs uppercase tracking-[0.14em] text-muted-ink">
          AI token usage · last 30d
        </div>
        <div className="text-xs text-muted-soft">USD ${TOTAL_USD.toFixed(0)}</div>
      </div>
      <div className="text-2xl font-medium text-ink">
        {fmt(TOTAL)} <span className="text-sm text-muted-ink">tokens</span>
      </div>
      <div className="flex flex-col gap-2">
        {TOKEN_USAGE.map((row, i) => {
          const pct = (row.tokens / MAX) * 100
          return (
            <div key={row.model} className="flex items-center gap-3">
              <div className="w-24 shrink-0 text-xs text-body">
                {row.model}
              </div>
              <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-hairline-soft">
                <motion.div
                  className={`absolute inset-y-0 left-0 rounded-full ${VENDOR_COLOR[row.vendor]}`}
                  initial={{ width: reduced ? `${pct}%` : "0%" }}
                  animate={{ width: `${pct}%` }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                    delay: reduced ? 0 : 0.1 + i * 0.08,
                  }}
                />
              </div>
              <div className="w-16 shrink-0 text-right text-xs text-muted-ink">
                {fmt(row.tokens)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
