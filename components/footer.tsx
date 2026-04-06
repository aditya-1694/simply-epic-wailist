"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="px-6 md:px-10 border-t"
      style={{ backgroundColor: "#050505", borderColor: "rgba(255,255,255,0.06)" }}
    >
      {/* Top row: logo + instagram */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8">
        <Image
          src="/logo.png"
          alt="Simply Epic"
          width={150}
          height={40}
          className="object-contain"
        />

        <a
          href="https://www.instagram.com/simplyepic.adventures/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-sm border transition-all duration-300"
          style={{ borderColor: "#3F9FFF", color: "#3F9FFF" }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(63,159,255,0.08)" }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent" }}
        >
          <Instagram size={16} aria-hidden="true" />
          @simplyepic.adventures
        </a>
      </div>

      {/* Divider */}
      <div className="w-full h-px" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} />

      {/* Bottom row: copyright + email */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 py-4">
        <p className="text-xs" style={{ color: "#94A3B8" }}>
          &copy; 2026 Simply Epic. All Rights Reserved.
        </p>
        <a
          href="mailto:info@simplyepic.in"
          className="text-xs transition-opacity duration-300 hover:opacity-70"
          style={{ color: "#94A3B8" }}
        >
          info@simplyepic.in
        </a>
      </div>
    </footer>
  )
}

