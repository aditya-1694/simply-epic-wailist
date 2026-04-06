"use client"

import { Shield, Zap, Layers, Lock } from "lucide-react"
import { DriftIn } from "@/components/drift-in"

const pillars = [
  {
    icon: Shield,
    title: "Vetted Without Compromise",
    description: "Only the world's safest, internationally certified operators make the cut. Zero guesswork.",
  },
  {
    icon: Zap,
    title: "Guided by Passionate Experts",
    description: "From absolute beginners to veterans, every experience is led by passionate instructors who adapt to your pace and your goals.",
  },
  {
    icon: Layers,
    title: "The Curated Layer",
    description: "Forget fragmented bookings and hidden costs. Seamless experience. Zero friction.",
  },
  {
    icon: Lock,
    title: "Decades of Experience, Distilled",
    description: "Backed by 30+ years in the travel industry, so nothing is left to chance.",
  },
]

export function TrustPillars() {
  return (
    <section className="py-12 px-6 md:px-10" style={{ backgroundColor: "#0a0a0a" }}>
      <DriftIn>
        <h2
          className="text-center text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-balance"
          style={{ color: "#3F9FFF" }}
        >
          Built so you don&apos;t have to second guess.
        </h2>
      </DriftIn>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {pillars.map((pillar, i) => {
          const Icon = pillar.icon
          return (
            <DriftIn key={pillar.title} delay={i * 0.1}>
              <div
                className="flex flex-col items-start gap-4 p-6 rounded-sm border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(63,159,255,0.15)]"
                style={{
                  backgroundColor: "rgba(10,10,10,0.4)",
                  borderColor: "rgba(63,159,255,0.1)",
                  minHeight: "280px",
                }}
              >
                <Icon
                  size={28}
                  strokeWidth={0.75}
                  style={{ color: "#3F9FFF" }}
                  aria-hidden="true"
                />
                <h3 className="text-base font-semibold text-white">{pillar.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                  {pillar.description}
                </p>
              </div>
            </DriftIn>
          )
        })}
      </div>
    </section>
  )
}
