import { ABOUT_META } from "@/lib/content"
import { Reveal } from "@/components/reveal"

/**
 * About — a single editorial band with a short bio and a definition list of
 * the kind of details clients usually want to know up front.
 */
export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-hairline bg-canvas py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-ink">
            — About
          </p>
          <h2
            id="about-heading"
            className="mt-2 text-3xl font-medium tracking-tight text-ink sm:text-4xl"
          >
            I work with small, opinionated teams on products that have to ship.
          </h2>
          <div className="mt-6 space-y-4 text-body">
            <p>
              Six years building production software for early-stage teams. I
              came up through backend systems and then grew into product design
              and front-end engineering — which is why my work tends to look
              like an architect drew the interface.
            </p>
            <p>
              I take on a small number of builds a year and stay close to the
              work: scoping, designing, building, and shipping alongside the
              founders I work with.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="grid grid-cols-1 divide-y divide-hairline rounded-2xl border border-hairline bg-surface-card">
            {ABOUT_META.map(([k, v]) => (
              <div
                key={k}
                className="flex items-baseline justify-between gap-6 px-5 py-4"
              >
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
                  {k}
                </dt>
                <dd className="text-right text-sm text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
