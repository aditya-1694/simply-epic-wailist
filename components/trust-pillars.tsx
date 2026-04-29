"use client"

import { DriftIn } from "@/components/drift-in"
import { motion } from "framer-motion"

const pillars = [
  {
    index: "01",
    title: "Vetted Without Compromise",
    description: "Only internationally certified operators make the cut.",
  },
  {
    index: "02",
    title: "Built for Every Level, Including Zero",
    description: "From complete beginners to seasoned adventurers, every experience is led by instructors who adapt to your pace.",
  },
  {
    index: "03",
    title: "Seamless from Discovery to Booking",
    description: "No hidden costs. No fragmented booking. Zero friction.",
  },
]

export function TrustPillars() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-16" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header Row */}
        <DriftIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p
                className="text-xs tracking-[0.25em] uppercase mb-4 font-medium"
                style={{ color: "#3F9FFF" }}
              >
                A new way to book adventure
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight max-w-xl text-balance">
                Built so you don&apos;t have to second guess.
              </h2>
            </div>
          </div>
        </DriftIn>

        {/* Divider */}
        <div className="w-full h-px mb-12" style={{ backgroundColor: "rgba(63,159,255,0.12)" }} />

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(63,159,255,0.08)" }}>
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.index}
              className="group flex flex-col gap-6 p-7 transition-all duration-500 cursor-default"
              style={{ backgroundColor: "#0a0a0a" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ backgroundColor: "#0f1117" }}
            >
              {/* Index */}
              <span
                className="text-xs font-mono tracking-widest transition-colors duration-300 group-hover:text-white"
                style={{ color: "rgba(63,159,255,0.5)" }}
              >
                {pillar.index}
              </span>

              {/* Accent line */}
              <div
                className="w-6 h-px transition-all duration-500 group-hover:w-12"
                style={{ backgroundColor: "#3F9FFF" }}
              />

              {/* Content */}
              <div className="flex flex-col gap-3 flex-1">
                <h3 className="text-base font-semibold leading-snug text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#CBD5E1" }}>
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
