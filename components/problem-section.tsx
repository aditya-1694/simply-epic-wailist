"use client"

import { motion } from "framer-motion"
import { DriftIn } from "@/components/drift-in"

const PROBLEMS = [
  {
    index: "01",
    headline: "Too much noise.",
    body: "Hundreds of options across dozens of sites, with no clear pricing, no context, and no way to compare. Most people give up before they even start.",
  },
  {
    index: "02",
    headline: "It never even occurs to them.",
    body: "Most people simply do not think of adventure as something available to them. A long weekend. A few hours from home. Nobody told them it was possible.",
  },
  {
    index: "03",
    headline: "They think they cannot do it.",
    body: "No swimming skills. Never done this before. Too unfit, too afraid, too old. The barriers feel real, even when they are not.",
  },
  {
    index: "04",
    headline: "No idea who to trust.",
    body: "Safety standards vary wildly. Certifications are hard to verify. One bad experience is enough to put someone off adventure for years.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-16" style={{ backgroundColor: "#050505" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header Row */}
        <DriftIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p
                className="text-xs tracking-[0.25em] uppercase mb-4 font-medium"
                style={{ color: "#3F9FFF" }}
              >
                Why adventure stays a dream
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight max-w-xl text-balance">
                The same four things hold people back. Every time.
              </h2>
            </div>
            <p
              className="text-sm md:text-base leading-relaxed max-w-xs md:text-right"
              style={{ color: "#CBD5E1" }}
            >
              Adventure is not niche. It is just harder to access than it should be.
            </p>
          </div>
        </DriftIn>

        {/* Divider */}
        <div className="w-full h-px mb-0" style={{ backgroundColor: "rgba(63,159,255,0.12)" }} />

        {/* Problem rows */}
        <div className="flex flex-col">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.index}
              className="group grid grid-cols-[48px_1fr] md:grid-cols-[80px_1fr_1fr] items-start gap-6 md:gap-12 py-8 md:py-10 border-b transition-colors duration-300"
              style={{ borderColor: "rgba(63,159,255,0.12)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
            >
              {/* Index */}
              <span
                className="text-xs font-mono tracking-widest pt-1 transition-colors duration-300 group-hover:text-white"
                style={{ color: "rgba(63,159,255,0.5)" }}
              >
                {p.index}
              </span>

              {/* Headline */}
              <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug tracking-tight text-balance">
                {p.headline}
              </h3>

              {/* Body — hidden on mobile, shown on md+ */}
              <p
                className="hidden md:block text-sm leading-relaxed self-center"
                style={{ color: "#CBD5E1" }}
              >
                {p.body}
              </p>

              {/* Body — shown on mobile below headline */}
              <p
                className="col-start-2 md:hidden text-sm leading-relaxed mt-2"
                style={{ color: "#CBD5E1" }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
