"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { DriftIn } from "@/components/drift-in"

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

export function VibeCards() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  return (
    <section className="py-12 px-6 md:px-10" style={{ backgroundColor: "#050505" }}>
      <DriftIn>
        <p className="text-center text-xs md:text-sm tracking-widest uppercase mb-8 md:mb-12" style={{ color: "#94A3B8" }}>
          Multiple worlds. One seamless way to experience them. Masterfully guided, even for the first-timer.
        </p>
      </DriftIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-7xl mx-auto">
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

                {/* Dark gradient overlay — lighter on mobile for better text visibility */}
                <div
                  className="absolute inset-0 sm:group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.4) 50%, transparent 100%)",
                  }}
                />

                {/* Mobile-specific always-visible gradient for text contrast */}
                <div
                  className="sm:hidden absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.3) 50%, transparent 100%)",
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
    </section>
  )
}
