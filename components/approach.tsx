import { APPROACH_STEPS } from "@/lib/content"
import { Reveal } from "@/components/reveal"

/**
 * Approach — the four ordered process steps.
 */
export function Approach() {
  return (
    <section
      id="process"
      aria-labelledby="approach-heading"
      className="border-b border-hairline bg-canvas py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-ink">
            — Approach
          </p>
          <h2
            id="approach-heading"
            className="mt-2 max-w-2xl text-3xl font-medium tracking-tight text-ink sm:text-4xl"
          >
            A repeatable path from idea to production.
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-6 md:grid-cols-2">
          {APPROACH_STEPS.map((s, i) => (
            <Reveal key={s.k} delay={i * 0.06}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-hairline bg-surface-card p-6">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-ink">
                  {s.k}
                </span>
                <h3 className="text-lg font-medium tracking-tight text-ink">
                  {s.t}
                </h3>
                <p className="text-sm text-body">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
