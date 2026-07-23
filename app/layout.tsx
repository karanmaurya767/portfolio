// The root layout wraps every page. It loads our fonts and the global stylesheet.
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { SITE } from "@/lib/content"

// Geist (sans) for text and Geist Mono for code. Exposed as CSS variables
// so Tailwind can reference them via font-sans / font-mono.
const fontSans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

// Basic metadata shown in the browser tab and search results.
export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.role}`,
  description: SITE.heroSubtitle,
  keywords: [
    "Karan Kushawaha",
    "Full Stack Developer",
    "Laravel",
    "Flask",
    "MySQL",
    "MLM Platform",
    "E-commerce",
    "NGO Portal",
    "Varanasi",
    "Shubham Infotech",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.heroSubtitle,
    type: "website",
    url: "https://portfolio-ochre-nu-74.vercel.app",
    siteName: `${SITE.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.heroSubtitle,
  },
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans antialiased",
        fontSans.variable,
        fontMono.variable
      )}
    >
      <body suppressHydrationWarning className="min-h-screen bg-canvas text-ink">
        {children}
      </body>
    </html>
  )
}
