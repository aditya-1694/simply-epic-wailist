"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface DriftInProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function DriftIn({ children, className, delay = 0 }: DriftInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
