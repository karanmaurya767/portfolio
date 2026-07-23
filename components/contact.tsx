"use client"

import { useState, type FormEvent } from "react"
import {
  ArrowUpRight,
  CheckCircle,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  PaperPlaneTilt,
} from "@phosphor-icons/react/dist/ssr"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { Reveal } from "@/components/reveal"
import { SITE } from "@/lib/content"
import { cn } from "@/lib/utils"

type Status = "idle" | "submitting" | "sent" | "error"

/**
 * Contact — closing band with a clear primary CTA, social links,
 * an actual working contact form, and a cover image. Fully responsive:
 * stacks on mobile, two-column on tablet, asymmetric grid on desktop.
 */
export function Contact() {
  const reduced = useReducedMotion()
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)
    const name = (data.get("name") as string)?.trim()
    const email = (data.get("email") as string)?.trim()
    const message = (data.get("message") as string)?.trim()

    if (!name || !email || !message) {
      setError("Please fill in every field.")
      setStatus("error")
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("That email doesn't look right — double check?")
      setStatus("error")
      return
    }

    // Fall back to a mailto: round-trip with a prefilled subject so the form
    // works in any environment without a backend. (You can swap this for a
    // Resend / Formspree / API route later — the surface is the same.)
    const subject = encodeURIComponent(`New project inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}\n\n— sent from karan.dev portfolio`
    )
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`

    setStatus("sent")
    form.reset()
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden border-b border-hairline bg-canvas-soft"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28 lg:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-ink">
            — Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-2 max-w-2xl text-3xl font-medium tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            Have a product to build? Let&apos;s start with a conversation.
          </h2>
          
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <Reveal>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-hairline bg-surface-card p-5 sm:p-7"
              aria-label="Project inquiry form"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="name" label="Your name" name="name" placeholder="Karan Maurya" required />
                <Field
                  id="email"
                  type="email"
                  label="Email"
                  name="email"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div className="mt-4">
                <Field
                  id="message"
                  as="textarea"
                  label="What are you building?"
                  name="message"
                  placeholder="A few sentences about your product, timeline, and what you're hoping to ship…"
                  required
                  rows={5}
                />
              </div>

              <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted-ink">
                  Or email me directly at{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-ink underline decoration-hairline-strong underline-offset-2 hover:decoration-primary"
                  >
                    {SITE.email}
                  </a>
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={cn(
                    "inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-on-primary transition-colors hover:bg-[var(--primary-active)] disabled:opacity-60",
                  )}
                >
                  {status === "submitting" ? (
                    "Opening email…"
                  ) : (
                    <>
                      <PaperPlaneTilt size={16} weight="bold" />
                      Send message
                    </>
                  )}
                </button>
              </div>

              <AnimatePresence>
                {status === "sent" && (
                  <motion.div
                    role="status"
                    initial={reduced ? { opacity: 1 } : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-4 flex items-start gap-2 rounded-xl border border-[var(--success)]/30 bg-[var(--success)]/10 p-3 text-sm text-ink"
                  >
                    <CheckCircle size={18} weight="duotone" className="mt-0.5 shrink-0 text-[var(--success)]" />
                    <span>
                      Thanks — your email client should be opening with the
                      message pre-filled. If it didn&apos;t, write to me at{" "}
                      <a
                        href={`mailto:${SITE.email}`}
                        className="font-medium underline decoration-hairline-strong underline-offset-2"
                      >
                        {SITE.email}
                      </a>
                      .
                    </span>
                  </motion.div>
                )}
                {status === "error" && error && (
                  <motion.p
                    role="alert"
                    initial={reduced ? { opacity: 1 } : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-3 text-sm text-[var(--error)]"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>

          {/* Aside: socials + image + meta */}
          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 rounded-2xl border border-hairline bg-surface-card p-5 sm:p-6">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-ink">
                Find me elsewhere
              </p>
              <ul className="flex flex-col gap-1">
                <SocialLink
                  href={`mailto:${SITE.email}`}
                  icon={<EnvelopeSimple size={18} weight="duotone" />}
                  label="Email"
                  value={SITE.email}
                />
                <SocialLink
                  href={SITE.github}
                  icon={<GithubLogo size={18} weight="duotone" />}
                  label="GitHub"
                  value={`@${SITE.githubHandle}`}
                />
                <SocialLink
                  href={SITE.linkedin}
                  icon={<LinkedinLogo size={18} weight="duotone" />}
                  label="LinkedIn"
                  value="Karan Kushawaha"
                />
                <SocialLink
                  href={SITE.twitter}
                  icon={<TwitterLogo size={18} weight="duotone" />}
                  label="X / Twitter"
                  value={`@${SITE.githubHandle}`}
                />
                
              </ul>
            </div>

            {/* <div className="overflow-hidden rounded-2xl border border-hairline">
              <img
                src="/assets/contact-cover-image.png"
                alt="Quiet desk with notebook, coffee, and a laptop — a single afternoon of focused work."
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
                loading="lazy"
              />
            </div> */}

            <p className="text-xs text-muted-ink">
              Typical response time is one working day. I&apos;m based in India
              ({SITE.location}) and work with teams worldwide.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  name,
  type = "text",
  placeholder,
  required,
  as = "input",
  rows,
}: {
  id: string
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
  as?: "input" | "textarea"
  rows?: number
}) {
  const baseClass =
    "mt-1.5 w-full rounded-xl border border-hairline-strong bg-canvas-soft px-3.5 py-2.5 text-sm text-ink placeholder:text-muted-soft outline-none transition-colors focus:border-ink focus:ring-2 focus:ring-ink/10"
  return (
    <label htmlFor={id} className="block">
      <span className="text-xs font-medium text-body">
        {label}
        {required && <span className="ml-0.5 text-[var(--error)]">*</span>}
      </span>
      {as === "input" ? (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={baseClass}
        />
      ) : (
        <textarea
          id={id}
          name={name}
          required={required}
          placeholder={placeholder}
          rows={rows ?? 4}
          className={cn(baseClass, "resize-y")}
        />
      )}
    </label>
  )
}

function SocialLink({
  href,
  icon,
  label,
  value,
}: {
  href: string
  icon: React.ReactNode
  label: string
  value: string
}) {
  const isExternal = href.startsWith("http")
  return (
    <li>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="group flex items-center gap-3 rounded-xl px-2 py-2.5 -mx-2 text-ink transition-colors hover:bg-hairline-soft"
      >
        <span className="text-ink group-hover:text-primary">{icon}</span>
        <span className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.12em] text-muted-ink">
            {label}
          </span>
          <span className="text-sm text-ink group-hover:text-primary">
            {value}
          </span>
        </span>
        {isExternal && (
          <ArrowUpRight
            size={14}
            weight="bold"
            className="ml-auto text-muted-ink group-hover:text-primary"
          />
        )}
      </a>
    </li>
  )
}
