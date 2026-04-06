"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ backgroundColor: "rgba(5,5,5,0.6)" }}>
      <nav className="flex items-center justify-center px-6 md:px-10 relative" style={{ height: "56px" }}>
        {/* Logo - centered */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="cursor-pointer"
        >
          <Image
            src="/logo.png"
            alt="Simply Epic"
            width={108}
            height={29}
            className="object-contain"
          />
        </motion.div>

        {/* CTA button - positioned absolutely on the right */}
        <div className="absolute right-6 md:right-10">
          <a href="#waitlist">
            <motion.button
              whileHover={{ backgroundColor: "rgba(63,159,255,0.08)" }}
              transition={{ duration: 0.3 }}
              className="text-sm font-medium px-4 py-2 rounded-sm border text-white"
              style={{ borderColor: "#3F9FFF" }}
            >
              Secure Early Access
            </motion.button>
          </a>
        </div>
      </nav>
    </header>
  )
}
