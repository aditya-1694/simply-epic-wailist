"use client"

import { Shield, Zap, Layers, Lock } from "lucide-react"
import { DriftIn } from "@/components/drift-in"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

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
  const [isInView, setIsInView] = useState(false)

  return (
    <section className="py-20 md:py-24 px-6 md:px-10" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="max-w-5xl mx-auto">
        {/* Intro Block */}
        <DriftIn>
          <div className="text-center mb-12">
            <p className="text-sm text-white/50 mb-3">A new way to book adventure</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Extraordinary adventures. Zero guesswork.
            </h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              We cut through the noise to bring you only the most reliable, high-quality adventures. Every experience is carefully selected, fully vetted and built to be seamless from discovery to booking.
            </p>
            <p className="text-white/40 text-sm mt-3">Backed by 30+ years in travel.</p>
          </div>
        </DriftIn>

        {/* Big Statement */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight" style={{ color: "#3F9FFF" }}>
            No guesswork. Just exceptional experiences.
          </h3>
        </motion.div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div
                  className="h-full flex flex-col items-start gap-4 p-6 rounded-sm border transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_0_20px_rgba(63,159,255,0.15)]"
                  style={{
                    backgroundColor: "rgba(10,10,10,0.4)",
                    borderColor: "rgba(63,159,255,0.1)",
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
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
