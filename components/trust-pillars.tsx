"use client"

import { DriftIn } from "@/components/drift-in"

export function TrustPillars() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-16" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="max-w-6xl mx-auto">

        {/* Eyebrow */}
        <DriftIn>
          <div className="flex items-center gap-4 mb-10">
            <p
              className="text-xs tracking-[0.25em] uppercase font-medium"
              style={{ color: "#3F9FFF" }}
            >
              A new way to book adventure
            </p>
            <div className="h-px w-16" style={{ backgroundColor: "rgba(63,159,255,0.4)" }} />
          </div>
        </DriftIn>

        {/* Statement */}
        <DriftIn delay={0.1}>
          <p className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight text-balance max-w-3xl">
            This platform makes hard adventures{" "}
            <span style={{ color: "#CBD5E1", fontWeight: 300, fontStyle: "italic" }}>easy to find, book and</span>{" "}
            <span style={{ color: "#3F9FFF" }}>LIVE.</span>
          </p>
        </DriftIn>

      </div>
    </section>
  )
}
