"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DriftIn } from "@/components/drift-in"
import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    question: "What is SimplyEpic?",
    answer: "SimplyEpic is a curated platform for booking high-quality adventure experiences. We focus on reliability, safety, and seamless booking so you can plan with confidence.",
  },
  {
    question: "How are experiences selected?",
    answer: "Every experience is carefully vetted based on safety standards, operator credentials, and overall quality. We only include operators we would trust ourselves.",
  },
  {
    question: "When will bookings open?",
    answer: "We are launching soon. Early access members will be the first to get notified of these experiences.",
  },
  {
    question: "What do I get with early access?",
    answer: "Early access gives you inaugural discounts, priority access to new activities and concierge access for your first trip with SimplyEpic.",
  },
  {
    question: "Is SimplyEpic only for experienced travellers?",
    answer: "No. We have experiences for all levels, including complete beginners. You will always know what to expect before you book.",
  },
  {
    question: "Which destinations will be available?",
    answer: "We are starting with a select set of destinations in India and South East Asia. Early access members will get visibility of new destinations and activities first.",
  },
  {
    question: "How is this different from other travel platforms?",
    answer: "Most platforms focus on volume. We focus on quality. Every experience on SimplyEpic is selected to remove guesswork and deliver a consistently high standard.",
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
            <h2 className="text-3xl md:text-4xl font-semibold text-white text-balance mb-3">
              Questions
            </h2>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#64748B" }}>
              Everything you need to know about SimplyEpic.
            </p>
          </div>
        </DriftIn>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
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
      </div>
    </section>
  )
}
