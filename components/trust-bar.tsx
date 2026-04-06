"use client"

import { motion } from "framer-motion"
import { Shield, Award, Heart } from "lucide-react"

const TRUST_SIGNALS = [
  {
    icon: Shield,
    label: "Internationally Certified Operators Only",
  },
  {
    icon: Award,
    label: "30+ Years of Industry Experience",
  },
  {
    icon: Heart,
    label: "Zero Compromise on Safety",
  },
]

export function TrustBar() {
  return (
    <section className="py-8 md:py-12 px-6 md:px-10" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
          {TRUST_SIGNALS.map((signal, i) => {
            const Icon = signal.icon
            return (
              <motion.div
                key={signal.label}
                className="flex items-center gap-2 md:gap-3 text-center md:text-left w-full md:w-auto md:flex-1"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon
                  size={20}
                  className="flex-shrink-0"
                  style={{ color: "#3F9FFF" }}
                  aria-hidden="true"
                />
                <span className="text-xs md:text-sm font-medium leading-snug" style={{ color: "#E2E8F0" }}>
                  {signal.label}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
