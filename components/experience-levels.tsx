"use client"

import { motion } from "framer-motion"
import { DriftIn } from "@/components/drift-in"

const MILESTONES = [
  {
    label: "Try it out",
    duration: "Half day",
    description: "No experience needed. Just show up.",
  },
  {
    label: "Go deeper",
    duration: "Full day",
    description: "Build confidence with expert guidance.",
  },
  {
    label: "Commit",
    duration: "2 to 5 days",
    description: "Immersive journeys for the dedicated.",
  },
  {
    label: "Master it",
    duration: "Expeditions",
    description: "Certifications and advanced challenges.",
  },
]

export function ExperienceLevels() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-16" style={{ backgroundColor: "#050505" }}>
      <div className="max-w-6xl mx-auto">

        <div className="w-full h-px mb-14" style={{ backgroundColor: "rgba(63,159,255,0.1)" }} />

        {/* ── Desktop: horizontal spectrum ── */}
        <div className="hidden md:block overflow-hidden">
          {/* Beginner / Advanced labels */}
          <div className="flex justify-between mb-5">
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "rgba(63,159,255,0.45)" }}>
              Beginner
            </span>
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#3F9FFF" }}>
              Advanced
            </span>
          </div>

          {/* Track container with fixed width */}
          <div className="relative w-full">
            {/* Base track */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center" style={{ top: "6px", height: "1px" }}>
              <div className="w-full h-px" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />
            </div>

            {/* Animated fill */}
            <div className="absolute left-0 right-0 flex items-center" style={{ top: "6px", height: "1px" }}>
              <motion.div
                className="h-px w-full"
                style={{ background: "linear-gradient(to right, rgba(63,159,255,0.25), #3F9FFF)" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                origin="left"
              />
            </div>

            {/* Milestone dots + labels */}
            <div className="relative flex justify-between">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.label}
                  className="flex flex-col items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                  viewport={{ once: true }}
                  style={{ width: "25%" }}
                >
                  {/* Dot */}
                  <motion.div
                    className="w-3 h-3 rounded-full border-2 z-10"
                    style={{
                      backgroundColor: "#050505",
                      borderColor: i === MILESTONES.length - 1 ? "#3F9FFF" : "rgba(63,159,255,0.45)",
                      boxShadow: i === MILESTONES.length - 1 ? "0 0 12px rgba(63,159,255,0.5)" : "none",
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.35, delay: 0.5 + i * 0.15 }}
                    viewport={{ once: true }}
                  />

                  {/* Label block */}
                  <div
                    className="flex flex-col gap-1 text-left"
                    style={{ paddingLeft: i === 0 ? 0 : i === MILESTONES.length - 1 ? undefined : undefined, alignItems: i === MILESTONES.length - 1 ? "flex-end" : "flex-start" }}
                  >
                    <span className="text-sm font-semibold text-white">{m.label}</span>
                    <span className="text-xs font-mono tracking-wide" style={{ color: "#3F9FFF" }}>
                      {m.duration}
                    </span>
                    <span className="text-xs leading-snug" style={{ color: "#CBD5E1", maxWidth: "120px" }}>
                      {m.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile: vertical timeline ── */}
        <div className="flex md:hidden flex-col">

          {/* Beginner label */}
          <span className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: "rgba(63,159,255,0.45)" }}>
            Beginner
          </span>

          <div className="relative flex flex-col">
            {/* Vertical animated line */}
            <div
              className="absolute left-[5px] top-0 bottom-0 w-px"
              style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
            />
            <motion.div
              className="absolute left-[5px] top-0 w-px origin-top"
              style={{ background: "linear-gradient(to bottom, rgba(63,159,255,0.25), #3F9FFF)", bottom: 0 }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            />

            {/* Milestones */}
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.label}
                className="relative flex items-start gap-5 pb-8 last:pb-0"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Dot */}
                <motion.div
                  className="relative z-10 flex-shrink-0 w-[11px] h-[11px] rounded-full border-2 mt-1"
                  style={{
                    backgroundColor: "#050505",
                    borderColor: i === MILESTONES.length - 1 ? "#3F9FFF" : "rgba(63,159,255,0.45)",
                    boxShadow: i === MILESTONES.length - 1 ? "0 0 10px rgba(63,159,255,0.5)" : "none",
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                />

                {/* Content */}
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-white leading-tight">{m.label}</span>
                  <span className="text-xs font-mono tracking-wide" style={{ color: "#3F9FFF" }}>{m.duration}</span>
                  <span className="text-xs leading-relaxed" style={{ color: "#CBD5E1" }}>{m.description}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Advanced label */}
          <span className="text-xs tracking-widest uppercase font-medium mt-2 ml-8" style={{ color: "#3F9FFF" }}>
            Advanced
          </span>

        </div>

      </div>
    </section>
  )
}
