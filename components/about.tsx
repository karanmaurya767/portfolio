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
            I build production web applications for small teams and growing businesses.
          </h2>
          <div className="mt-6 space-y-4 text-body">
            <p>
              I'm a Full Stack Developer based in Varanasi, India, currently
              working at Shubham Infotech as a Software Developer since July
              2025. Over the past year I've led the development and deployment
              of 7+ dynamic web applications — MLM platforms, e-commerce
              stores, NGO portals, and student management systems — all
              built on Laravel, MySQL, and modern frontend stacks.
            </p>
            <p>
              I take ownership of the full SDLC: from requirement analysis
              and database design, through API and frontend development, all
              the way to production deployment on cPanel or Vercel. I work
              directly with clients, translate business needs into technical
              features, and ship work that's actually used by real people.
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
