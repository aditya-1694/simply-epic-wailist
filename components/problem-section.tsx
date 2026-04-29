"use client"

import { motion } from "framer-motion"

export function ProblemSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16" style={{ backgroundColor: "#050505" }}>
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-4 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="text-xs tracking-[0.25em] uppercase font-medium"
            style={{ color: "#3F9FFF" }}
          >
            The Problem
          </span>
          <div className="h-px w-16" style={{ backgroundColor: "#3F9FFF", opacity: 0.4 }} />
        </motion.div>

        {/* Big headline block */}
        <motion.div
          className="mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05] text-balance"
          >
            Most people never go.
          </h2>
          <h2
            className="text-5xl md:text-7xl font-light tracking-tight leading-[1.05] text-balance italic mt-1"
            style={{ color: "#94A3B8" }}
          >
            Not because they don&apos;t want to.
          </h2>
        </motion.div>

        {/* Body paragraphs */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <motion.p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "#CBD5E1" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            You don&apos;t know which operator to trust.{" "}
            <span style={{ color: "#3F9FFF" }}>Pricing is vague.</span>{" "}
            Quality is inconsistent. The noise makes it impossible to decide.
          </motion.p>

          <motion.p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "#CBD5E1" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            And if you&apos;re doing this for the{" "}
            <span style={{ color: "#3F9FFF" }}>first time</span>, where do you even begin?
            Most people never realise adventure is already within reach.
          </motion.p>

          <motion.p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "#CBD5E1" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.3 }}
          >
            Adventure{" "}
            <span style={{ color: "#3F9FFF" }}>should not feel this hard</span>{" "}
            to access.
          </motion.p>
        </div>

      </div>
    </section>
  )
}
