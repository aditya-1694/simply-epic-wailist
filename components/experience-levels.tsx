"use client"

import { motion } from "framer-motion"
import { DriftIn } from "@/components/drift-in"

export function ExperienceLevels() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-10" style={{ backgroundColor: "#050505" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Beginners */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-1 h-8"
                style={{ backgroundColor: "#3F9FFF" }}
              />
              <h3 className="text-lg md:text-xl font-semibold text-white">
                New to it? Start here.
              </h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
              No experience needed. Our guided experiences are designed for absolute beginners. Short, immersive, and backed by passionate instructors who meet you where you are.
            </p>
            <ul className="text-xs space-y-2 mt-2">
              <li className="flex gap-2" style={{ color: "#94A3B8" }}>
                <span style={{ color: "#3F9FFF" }}>+</span>
                <span>Half-day and full-day experiences</span>
              </li>
              <li className="flex gap-2" style={{ color: "#94A3B8" }}>
                <span style={{ color: "#3F9FFF" }}>+</span>
                <span>All equipment and training included</span>
              </li>
              <li className="flex gap-2" style={{ color: "#94A3B8" }}>
                <span style={{ color: "#3F9FFF" }}>+</span>
                <span>Safety first, fun always</span>
              </li>
            </ul>
          </motion.div>

          {/* Right: Advanced */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-1 h-8"
                style={{ backgroundColor: "#3F9FFF" }}
              />
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Ready to go deeper?
              </h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
              Multi-day expeditions, certification courses, and advanced journeys for those who want to master their craft. Train with the best. Go places most never will.
            </p>
            <ul className="text-xs space-y-2 mt-2">
              <li className="flex gap-2" style={{ color: "#94A3B8" }}>
                <span style={{ color: "#3F9FFF" }}>+</span>
                <span>3-day to week-long expeditions</span>
              </li>
              <li className="flex gap-2" style={{ color: "#94A3B8" }}>
                <span style={{ color: "#3F9FFF" }}>+</span>
                <span>Certification and skills progression</span>
              </li>
              <li className="flex gap-2" style={{ color: "#94A3B8" }}>
                <span style={{ color: "#3F9FFF" }}>+</span>
                <span>World-class instructors and locations</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
