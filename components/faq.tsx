"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DriftIn } from "@/components/drift-in"
import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    question: "What is SimplyEpic?",
    answer: "SimplyEpic is a platform for booking high-quality adventure experiences. We focus on safety, reliability, and a seamless booking journey so you can plan with complete confidence.",
  },
  {
    question: "When will bookings open?",
    answer: "We are launching soon. Early access members will be the first to get notified of these experiences.",
  },
  {
    question: "Is SimplyEpic only for experienced travellers?",
    answer: "No. We have experiences for all levels, including complete beginners. You will always know what to expect before you book.",
  },
]

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: "#050505" }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <DriftIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white text-balance">
              FAQs
            </h2>
          </div>
        </DriftIn>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3 mb-12">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="border rounded-sm transition-all duration-300"
              style={{
                backgroundColor: openId === i ? "rgba(63,159,255,0.08)" : "transparent",
                borderColor: openId === i ? "rgba(63,159,255,0.3)" : "rgba(255,255,255,0.08)",
              }}
            >
              <button
                onClick={() => setOpenId(openId === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left transition-all duration-300"
              >
                <span className="text-base font-semibold text-white">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openId === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown
                    size={20}
                    style={{ color: openId === i ? "#3F9FFF" : "#64748B" }}
                  />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openId === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p
                      className="px-6 pb-4 text-sm leading-relaxed"
                      style={{ color: "#94A3B8" }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Closing message */}
        <DriftIn>
          <div className="text-center">
            <p className="text-sm leading-relaxed italic" style={{ color: "#CBD5E1" }}>
              That&apos;s all you need to know for now. The rest unfolds with the adventure. Stay tuned!
            </p>
          </div>
        </DriftIn>
      </div>
    </section>
  )
}
