"use client"

import { DriftIn } from "@/components/drift-in"

export function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh" }}
      aria-label="Hero"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      {/* Dark radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(5,5,5,0.08) 0%, rgba(5,5,5,0.15) 60%, rgba(5,5,5,0.18) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between px-6 py-16">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <DriftIn delay={0.1}>
            <h1
              className="text-shimmer font-semibold leading-tight tracking-tight text-balance mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              The World&apos;s Most Epic Adventures.
            </h1>
          </DriftIn>

          <DriftIn delay={0.2}>
            <h3 className="text-2xl md:text-3xl font-light italic leading-tight text-balance text-white">
              Handpicked experiences. Trusted operators.{" "}
              <span style={{ color: "white", fontWeight: "bold" }}>Adventure simplified.</span>
            </h3>
          </DriftIn>
        </div>

        {/* Scroll indicator at bottom */}
        <DriftIn delay={0.4}>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs tracking-widest uppercase" style={{ color: "#94A3B8" }}>
              Scroll to explore
            </p>
            <svg
              className="w-5 h-5 animate-bounce"
              style={{ color: "#3F9FFF" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </DriftIn>
      </div>
    </section>
  )
}
