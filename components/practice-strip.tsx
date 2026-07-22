import { PRACTICE_AREAS } from "@/lib/content"
import { Reveal } from "@/components/reveal"

/**
 * PracticeStrip — a thin band of practice-area labels just below the hero.
 */
export function PracticeStrip() {
  return (
    <section
      aria-label="Practice areas"
      className="border-y border-hairline bg-canvas-soft"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-4 px-6 py-6 sm:grid-cols-3 lg:grid-cols-5 lg:px-10">
        {PRACTICE_AREAS.map((p, i) => (
          <Reveal key={p.k} delay={i * 0.05}>
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-muted-soft">{p.k}</span>
              <span className="text-sm text-ink">{p.v}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
