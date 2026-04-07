"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Percent, Star, Headphones, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const PERKS = [
  {
    icon: Percent,
    title: "15% Off First Activity",
    description: "A founding member discount on your first activity.",
  },
  {
    icon: Star,
    title: "Priority Access",
    description: "First in line for new adventures, destinations, and experiences before the public.",
  },
  {
    icon: Headphones,
    title: "Concierge Support",
    description: "Expert trip guidance, logistics, and advice on your first activity of choice.",
  },
]

// Floating particle
function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={style}
      animate={{
        y: [0, -30, 0],
        opacity: [0.15, 0.4, 0.15],
      }}
      transition={{
        duration: Math.random() * 4 + 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 3,
      }}
    />
  )
}

function ParticleField() {
  const [particles, setParticles] = useState<React.CSSProperties[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 22 }, () => ({
      width: `${Math.random() * 4 + 2}px`,
      height: `${Math.random() * 4 + 2}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      backgroundColor: Math.random() > 0.5 ? "#3F9FFF" : "#CBD5E1",
    }))
    setParticles(generated)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((style, i) => (
        <Particle key={i} style={style} />
      ))}
    </div>
  )
}

export function SuccessPageClient({ memberName }: { memberName: string | null }) {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{ backgroundColor: "#050505" }}
    >
      <ParticleField />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(63,159,255,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Logo */}
      <motion.div
        className="absolute top-6 left-6 md:top-8 md:left-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/">
          <Image src="/logo.png" alt="SimplyEpic" width={97} height={26} className="object-contain" />
        </Link>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl w-full pt-20 md:pt-0">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-medium px-4 py-1.5 rounded-full"
            style={{
              backgroundColor: "rgba(63,159,255,0.1)",
              color: "#3F9FFF",
              border: "1px solid rgba(63,159,255,0.2)",
            }}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#3F9FFF" }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            Early Access Confirmed
          </span>
        </motion.div>

        {/* Headline with member name */}
        <motion.h1
          className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-balance mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-white">Welcome to the Inner Circle,</span>
          {memberName && (
            <span style={{ color: "#3F9FFF" }}> {memberName}</span>
          )}
          <span className="text-white">.</span>
        </motion.h1>

        <motion.p
          className="text-sm md:text-base leading-relaxed mb-16 max-w-md"
          style={{ color: "#94A3B8" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          You are among the first 200. We will be in touch when SimplyEpic goes live.
        </motion.p>

        {/* Divider */}
        <motion.div
          className="w-full h-px mb-14"
          style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Perk cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-16">
          {PERKS.map((perk, i) => {
            const Icon = perk.icon
            return (
              <motion.div
                key={perk.title}
                className="flex flex-col items-start gap-4 p-6 rounded-sm border text-left"
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(63,159,255,0.12)",
                }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.55 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Icon container */}
                <motion.div
                  className="flex items-center justify-center w-10 h-10 rounded-full"
                  style={{ backgroundColor: "rgba(63,159,255,0.1)" }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.12, ease: "backOut" }}
                >
                  <Icon size={18} style={{ color: "#3F9FFF" }} aria-hidden="true" />
                </motion.div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="text-sm font-semibold text-white">{perk.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#CBD5E1" }}>
                    {perk.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.95 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-300"
            style={{ color: "#64748B" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#CBD5E1")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Back to home
          </Link>
        </motion.div>

      </div>
    </main>
  )
}
