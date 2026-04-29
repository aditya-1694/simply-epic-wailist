"use client"

import { useState } from "react"
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

const vibes = [
  {
    id: "deep-blue",
    title: "The Deep Blue",
    description: "Total immersion for those who seek the silent world.",
    image: "/vibe-deep-blue.jpg",
  },
  {
    id: "high-altitude",
    title: "The High Altitude",
    description: "Conquer snow peaks where the air is crisp and the views are endless.",
    image: "/vibe-high-altitude.jpg",
  },
  {
    id: "surface",
    title: "The Surface",
    description: "Master the momentum of the wind and water.",
    image: "/vibe-surface.jpg",
  },
  {
    id: "void",
    title: "The Void",
    description: "Find your center in the free-fall, for those who seek the silence of the sky.",
    image: "/vibe-void.jpg",
  },
]

export function TrustPillars() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="py-16 md:py-24 px-6 md:px-16" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header Row */}
        <DriftIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
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

        {/* Multiple Worlds Section */}
        <DriftIn>
          <div className="mb-16">
            <h2 className="text-lg md:text-xl font-semibold text-white tracking-tight mb-2 text-center">
              Multiple Worlds.
            </h2>
            <p className="text-xs md:text-sm tracking-widest uppercase text-center mb-8" style={{ color: "#94A3B8" }}>
              One seamless way to experience them.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-16">
              {vibes.map((vibe, i) => {
                const isHovered = hoveredId === vibe.id
                const isDimmed = hoveredId !== null && !isHovered

                return (
                  <DriftIn key={vibe.id} delay={i * 0.1}>
                    <motion.div
                      className="relative overflow-hidden cursor-pointer rounded-sm group"
                      style={{ aspectRatio: "3 / 4" }}
                      onHoverStart={() => setHoveredId(vibe.id)}
                      onHoverEnd={() => setHoveredId(null)}
                      onTouchStart={() => setHoveredId(vibe.id)}
                      onTouchEnd={() => setHoveredId(null)}
                      animate={{ opacity: isDimmed ? 0.5 : 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      {/* Base image */}
                      <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${vibe.image}')` }}
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />

                      {/* Blue tint overlay on hover */}
                      <motion.div
                        className="absolute inset-0"
                        style={{ backgroundColor: "#3F9FFF", mixBlendMode: "color" }}
                        animate={{ opacity: isHovered ? 0.35 : 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />

                      {/* Dark overlay — desktop only on hover, mobile always at bottom for text visibility */}
                      <div
                        className="hidden sm:block absolute inset-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: "linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.4) 50%, transparent 100%)",
                        }}
                      />

                      {/* Mobile: bottom gradient only for text readability */}
                      <div
                        className="sm:hidden absolute inset-0"
                        style={{
                          background: "linear-gradient(to top, rgba(5,5,5,0.7) 0%, rgba(5,5,5,0.2) 60%, transparent 100%)",
                        }}
                      />

                      {/* Text — always visible on mobile, fades in on hover on desktop */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 p-4 sm:p-5"
                        animate={{
                          opacity: isHovered ? 1 : 1,
                          y: isHovered ? 0 : 0,
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <h3
                          className="text-sm sm:text-base font-bold mb-1 sm:mb-2 text-white transition-colors duration-300"
                          style={{ color: isHovered ? "#3F9FFF" : "#ffffff" }}
                        >
                          {vibe.title}
                        </h3>
                        <p className="text-xs sm:text-xs leading-relaxed transition-colors duration-300" style={{ color: "#E2E8F0" }}>
                          {vibe.description}
                        </p>
                      </motion.div>

                      {/* Touch feedback indicator for mobile */}
                      <motion.div
                        className="sm:hidden absolute inset-0 pointer-events-none rounded-sm"
                        style={{
                          border: "2px solid #3F9FFF",
                          boxShadow: "inset 0 0 20px rgba(63,159,255,0.1)",
                        }}
                        animate={{ opacity: isHovered ? 0.6 : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  </DriftIn>
                )
              })}
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
