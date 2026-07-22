"use client"

import { CAPABILITIES } from "@/lib/content"
import { CAPABILITY_ICONS } from "@/lib/capability-icons"
import { Reveal } from "@/components/reveal"

/**
 * Capabilities — three practice cards with hand-crafted animated icons.
 */
export function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="border-b border-hairline bg-canvas-soft py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-ink">
            — Capabilities
          </p>
          <h2
            id="capabilities-heading"
            className="mt-2 max-w-2xl text-3xl font-medium tracking-tight text-ink sm:text-4xl"
          >
            Three practice areas, each treated as an engineering discipline.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CAPABILITIES.map((c, i) => {
            const Icon = CAPABILITY_ICONS[i] as unknown as React.ComponentType
            return (
              <Reveal key={c.num} delay={i * 0.08}>
                <article className="flex h-full flex-col gap-5 rounded-2xl border border-hairline bg-surface-card p-6 transition-colors hover:border-hairline-strong">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-ink">
                      {c.num}
                    </span>
                    <div className="h-12 w-12 text-ink">
                      <Icon />
                    </div>
                  </div>
                  <h3 className="text-xl font-medium tracking-tight text-ink">
                    {c.title}
                  </h3>
                  <p className="text-sm text-body">{c.body}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                    {c.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-hairline bg-canvas-soft px-2.5 py-1 text-xs text-body"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
