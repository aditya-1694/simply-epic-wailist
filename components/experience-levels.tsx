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
]

export function ExperienceLevels() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-16" style={{ backgroundColor: "#050505" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <DriftIn>
          <div className="mb-14">
            <p className="text-xs tracking-[0.25em] uppercase mb-4 font-medium" style={{ color: "#3F9FFF" }}>
              Built for everyone
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight text-balance max-w-md">
                Your first time or your hundredth. We have an experience for you.
              </h2>
              <p className="text-sm leading-relaxed max-w-xs md:text-right" style={{ color: "#64748B" }}>
                From a single afternoon to a full expedition. Every experience is guided, safe, and unforgettable.
              </p>
            </div>
          </div>
        </DriftIn>

        <div className="w-full h-px mb-14" style={{ backgroundColor: "rgba(63,159,255,0.1)" }} />

        {/* ── Desktop: horizontal spectrum ── */}
        <div className="hidden md:block">
          {/* Beginner / Advanced labels */}
          <div className="flex justify-between mb-5">
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "rgba(63,159,255,0.45)" }}>
              Beginner
            </span>
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#3F9FFF" }}>
              Advanced
            </span>
          </div>

          {/* Track */}
          <div className="relative">
            {/* Base track */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center" style={{ top: "6px", height: "1px" }}>
              <div className="w-full h-px" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />
            </div>

            {/* Animated fill */}
            <div className="absolute left-0 right-0 flex items-center" style={{ top: "6px", height: "1px" }}>
              <motion.div
                className="h-px origin-left"
                style={{ background: "linear-gradient(to right, rgba(63,159,255,0.25), #3F9FFF)" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                // Use a full-width div
                layoutId="spectrum-fill"
              >
                {/* invisible spacer to give it width */}
                <div className="w-full" style={{ width: "100vw" }} />
              </motion.div>
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
                    <span className="text-xs leading-snug" style={{ color: "#64748B", maxWidth: "120px" }}>
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
          {/* Beginner / Advanced labels */}
          <div className="flex justify-between mb-6">
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "rgba(63,159,255,0.45)" }}>
              Beginner
            </span>
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#3F9FFF" }}>
              Advanced
            </span>
          </div>

          {/* Horizontal track */}
          <div className="relative h-px w-full mb-8" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
            <motion.div
              className="absolute left-0 top-0 h-full origin-left"
              style={{ background: "linear-gradient(to right, rgba(63,159,255,0.25), #3F9FFF)", right: 0 }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            />
            {/* Dots along track */}
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.label}
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: `${(i / (MILESTONES.length - 1)) * 100}%`, transform: `translate(${i === MILESTONES.length - 1 ? "-100%" : i === 0 ? "0%" : "-50%"}, -50%)` }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.12 }}
                viewport={{ once: true }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full border-2"
                  style={{
                    backgroundColor: "#050505",
                    borderColor: i === MILESTONES.length - 1 ? "#3F9FFF" : "rgba(63,159,255,0.4)",
                    boxShadow: i === MILESTONES.length - 1 ? "0 0 8px rgba(63,159,255,0.5)" : "none",
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* 2x2 grid of milestone cards */}
          <div className="grid grid-cols-2 gap-3">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.label}
                className="flex flex-col gap-1.5 p-4 rounded-sm border"
                style={{
                  borderColor: i === MILESTONES.length - 1 ? "rgba(63,159,255,0.3)" : "rgba(255,255,255,0.06)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-semibold text-white">{m.label}</span>
                <span className="text-xs font-mono" style={{ color: "#3F9FFF" }}>{m.duration}</span>
                <span className="text-xs leading-snug" style={{ color: "#64748B" }}>{m.description}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
