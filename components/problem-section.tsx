"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { DriftIn } from "@/components/drift-in"

const PROBLEMS = [
  {
    index: "01",
    image: "/images/problem-overwhelm.jpg",
    headline: "Too much noise.",
    body: "Hundreds of options, scattered across dozens of sites. Most people give up before they even begin.",
  },
  {
    index: "02",
    image: "/images/problem-unknown.jpg",
    headline: "Adventure feels out of reach.",
    body: "Most people never realise experiences like these are available to them — just a few hours from home.",
  },
  {
    index: "03",
    image: "/images/problem-fear.jpg",
    headline: "\"I don't think I can do it.\"",
    body: "No swimming skills? Never done this before? That stops most people. It shouldn't.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10" style={{ backgroundColor: "#050505" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <DriftIn className="mb-16 md:mb-20">
          <p className="text-xs tracking-widest uppercase mb-4 font-medium" style={{ color: "#3F9FFF" }}>
            The problem
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight text-balance max-w-md">
            Adventure is broken for most people.
          </h2>
        </DriftIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.index}
              className="flex flex-col"
              style={{ backgroundColor: "#050505" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={p.image}
                  alt={p.headline}
                  fill
                  className="object-cover"
                  style={{ filter: "grayscale(30%) brightness(0.75)" }}
                />
                {/* Index badge */}
                <span
                  className="absolute top-4 left-4 text-xs font-mono tracking-widest"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {p.index}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                <h3 className="text-base md:text-lg font-semibold text-white leading-snug">
                  {p.headline}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#CBD5E1" }}>
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition line */}
        <DriftIn delay={0.3}>
          <div className="mt-16 md:mt-20 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(63,159,255,0.15)" }} />
            <p className="text-sm md:text-base font-medium text-white text-balance md:text-right max-w-md">
              SimplyEpic exists to remove every one of these barriers.
            </p>
          </div>
        </DriftIn>

      </div>
    </section>
  )
}
