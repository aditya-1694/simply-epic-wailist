"use client"

import { motion } from "framer-motion"

interface DriftInProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function DriftIn({ children, className, delay = 0 }: DriftInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
