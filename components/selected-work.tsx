"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { motion, useReducedMotion } from "motion/react"
import { PROJECTS, type Project } from "@/lib/content"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

/**
 * SelectedWork — the project carousel. One large featured image on the left,
 * a list of meta on the right, with prev/next controls and keyboard support.
 */
export function SelectedWork() {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement | null>(null)

  const project = PROJECTS[index]
  const total = PROJECTS.length

  function go(delta: number) {
    setIndex((i) => (i + delta + total) % total)
  }

  // Keyboard: ← → to navigate the carousel while it's focused.
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1)
      if (e.key === "ArrowLeft") go(-1)
    }
    el.addEventListener("keydown", onKey)
    return () => el.removeEventListener("keydown", onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total])

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-b border-hairline bg-canvas py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-ink">
                — Selected work
              </p>
              <h2
                id="work-heading"
                className="mt-2 text-3xl font-medium tracking-tight text-ink sm:text-4xl"
              >
                11+ production apps I designed, built, and shipped.
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <CarouselButton onClick={() => go(-1)} aria-label="Previous project">
                <ArrowLeft size={16} weight="bold" />
              </CarouselButton>
              <CarouselButton onClick={() => go(1)} aria-label="Next project">
                <ArrowRight size={16} weight="bold" />
              </CarouselButton>
            </div>
          </div>
        </Reveal>

        <div
          ref={trackRef}
          tabIndex={0}
          role="region"
          aria-label="Project carousel"
          className="grid gap-8 outline-none lg:grid-cols-[1.4fr_1fr] lg:gap-10"
        >
          <Reveal className="overflow-hidden rounded-2xl border border-hairline bg-surface-card">
            <ProjectImage project={project} reduced={!!reduced} />
          </Reveal>

          <Reveal delay={0.05} className="flex flex-col">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-muted-ink">
              <span className="font-mono">{project.index}</span>
              <span className="h-px w-6 bg-hairline-strong" />
              <span>{project.year}</span>
              <span className="h-px w-6 bg-hairline-strong" />
              <span>{project.status}</span>
            </div>
            <h3 className="mt-4 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-3 text-body">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-hairline bg-canvas-soft px-2.5 py-1 text-xs text-body"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.metrics && project.metrics.length > 0 && (
              <ul className="mt-5 grid grid-cols-1 gap-1.5 border-t border-hairline pt-4 sm:grid-cols-3">
                {project.metrics.map((m) => (
                  <li
                    key={m}
                    className="text-xs text-muted-ink"
                  >
                    <span className="mr-1 text-primary">●</span>
                    {m}
                  </li>
                ))}
              </ul>
            )}

            <a
              href={project.href}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-hairline-strong bg-surface-card px-4 py-2 text-sm text-ink transition-colors hover:bg-surface-strong"
            >
              View live project
              <ArrowUpRight size={14} weight="bold" />
            </a>

            <div className="mt-8 grid grid-cols-5 gap-2">
              {PROJECTS.map((p, i) => (
                <button
                  key={p.index}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to project ${p.title}`}
                  className={cn(
                    "h-1.5 rounded-full transition-colors",
                    i === index ? "bg-ink" : "bg-hairline-strong hover:bg-muted-ink"
                  )}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function CarouselButton({
  children,
  onClick,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline-strong bg-surface-card text-ink transition-colors hover:bg-surface-strong"
      {...rest}
    >
      {children}
    </button>
  )
}

function ProjectImage({ project, reduced }: { project: Project; reduced: boolean }) {
  return (
    <motion.div
      key={project.index}
      initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-[16/10] w-full overflow-hidden bg-hairline-soft"
    >
      <img
        src={project.image}
        alt={project.imageAlt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </motion.div>
  )
}
