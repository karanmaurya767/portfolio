import { STACK_PANES } from "@/lib/content"
import { Reveal } from "@/components/reveal"

/**
 * Stack — a faux code-editor layout. Each pane is a "file" with macOS-style
 * dots, a title, and a list of [name, tag] pairs styled like a config.
 */
export function Stack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="border-b border-hairline bg-canvas-soft py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-ink">
            — Stack
          </p>
          <h2
            id="stack-heading"
            className="mt-2 max-w-2xl text-3xl font-medium tracking-tight text-ink sm:text-4xl"
          >
            Tools chosen for durability, not fashion.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {STACK_PANES.map((pane, i) => (
            <Reveal key={pane.title} delay={i * 0.06}>
              <div className="overflow-hidden rounded-2xl border border-hairline bg-surface-card">
                <div className="flex items-center gap-2 border-b border-hairline bg-canvas-soft px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--term-red)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--term-yellow)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--term-green)]" />
                  <span className="ml-2 font-mono text-xs text-muted-ink">
                    {pane.title.toLowerCase().replace(/\s+/g, "-")}.config
                  </span>
                </div>
                <div className="p-4">
                  <p className="mb-3 text-xs uppercase tracking-[0.14em] text-muted-ink">
                    {pane.title}
                  </p>
                  <ul className="font-mono text-sm">
                    {pane.items.map(([name, tag], idx) => (
                      <li
                        key={name}
                        className="flex items-center gap-2 border-b border-hairline-soft py-2 last:border-0"
                      >
                        <span className="text-muted-soft">{String(idx + 1).padStart(2, "0")}</span>
                        <span className="text-ink">{name}</span>
                        <span className="ml-auto text-xs text-muted-ink">{tag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
