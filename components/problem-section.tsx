"use client"

import { DriftIn } from "@/components/drift-in"

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-16" style={{ backgroundColor: "#050505" }}>
      <div className="max-w-6xl mx-auto">

        {/* Eyebrow */}
        <DriftIn>
          <p
            className="text-xs tracking-[0.25em] uppercase mb-4 font-medium"
            style={{ color: "#3F9FFF" }}
          >
            Why Adventure Stays a Dream
          </p>
        </DriftIn>

        {/* Headline */}
        <DriftIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-2 text-balance">
            Most people never go.
          </h2>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight mb-12 md:mb-16 italic text-balance" style={{ color: "#CBD5E1" }}>
            Not because they don&apos;t want to.
          </h2>
        </DriftIn>

        {/* Body paragraphs */}
        <DriftIn delay={0.2}>
          <div className="flex flex-col gap-6 max-w-xl">
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#CBD5E1" }}>
              They don&apos;t know which operator to trust. Pricing is vague. Quality is inconsistent. Safety feels compromised.
            </p>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#CBD5E1" }}>
              And if anyone is doing this for the first time, where do they even begin?
            </p>
          </div>
        </DriftIn>

      </div>
    </section>
  )
}
