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
            "radial-gradient(ellipse at center, rgba(5,5,5,0.18) 0%, rgba(5,5,5,0.32) 60%, rgba(5,5,5,0.38) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <DriftIn delay={0.1}>
          <h1
            className="text-shimmer font-bold leading-tight tracking-tight text-balance mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            The World&apos;s Most Epic Adventures.
          </h1>
        </DriftIn>

        <DriftIn delay={0.2}>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 leading-tight text-balance">
            Vetted. Simplified.
          </h2>
        </DriftIn>

        <DriftIn delay={0.25}>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mb-10 text-white">
            Seamless to discover. Effortless to book.{" "}
            <span style={{ color: "white", fontWeight: "bold" }}>Simply</span>
            <span style={{ color: "#3F9FFF", fontWeight: "bold" }}>Epic.</span>
          </p>
        </DriftIn>

        <DriftIn delay={0.4}>
          <a href="#waitlist">
            <button
              className="relative px-8 py-4 text-sm font-semibold tracking-widest uppercase text-white border rounded-sm transition-all duration-500 group"
              style={{
                borderColor: "#3F9FFF",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = "#3F9FFF"
                el.style.boxShadow = "0 0 20px rgba(63,159,255,0.4)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = "transparent"
                el.style.boxShadow = "none"
              }}
            >
              Secure Early Access
            </button>
          </a>
        </DriftIn>
      </div>
    </section>
  )
}
