"use client"

import { VisitorLocation } from "@/components/widgets/visitor-location"
import { TokenUsage } from "@/components/widgets/token-usage"

export function HeroWidgets({ kind }: { kind: "location" | "usage" }) {
  if (kind === "location") {
    return <VisitorLocation />
  }
  return <TokenUsage />
}
