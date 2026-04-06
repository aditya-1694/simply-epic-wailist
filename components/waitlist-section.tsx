"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DriftIn } from "@/components/drift-in"
import { Instagram } from "lucide-react"

const TOTAL_SPOTS = 200

const HORIZON_OPTIONS = [
  {
    value: "the-deep-blue",
    label: "The Deep Blue",
    hint: "Scuba & diving experiences",
  },
  {
    value: "the-high-altitude",
    label: "The High Altitude",
    hint: "Skiing & snowboarding adventures",
  },
  {
    value: "the-surface",
    label: "The Surface",
    hint: "Surfing & kiteboarding",
  },
  {
    value: "the-void",
    label: "The Void",
    hint: "Paragliding & skydiving",
  },
]

const PERKS = [
  {
    index: "01",
    title: "15% Off Your First Activity",
    highlight: "15% off",
    description: "Sign up now and get 15% off the first activity you book with SimplyEpic.",
  },
  {
    index: "02",
    title: "Priority Access",
    highlight: "First in line",
    description: "You get first access to new activities, destinations, and experiences before they open to the public.",
  },
  {
    index: "03",
    title: "Concierge Access",
    highlight: "Expert advice",
    description: "Trip planning guidance, location advice, packing tips, visa information and logistics recommendations from people who know these experiences inside out.",
  },
]

function SlotMachineCounter({ targetValue }: { targetValue: number }) {
  const [hasAnimated, setHasAnimated] = useState(false)

  const digits = String(targetValue).split("")

  return (
    <motion.div
      className="inline-flex font-mono font-bold text-5xl md:text-6xl tracking-tight overflow-hidden"
      style={{ color: "#3F9FFF" }}
      onViewportEnter={() => {
        if (!hasAnimated) setHasAnimated(true)
      }}
      viewport={{ once: true, amount: 0.8 }}
    >
      {digits.map((digit, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: 80, opacity: 0 }}
          animate={hasAnimated ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
        >
          {digit}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function WaitlistSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    city: "",
    horizon: "",
    whatsapp: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [apiError, setApiError] = useState("")
  const [remaining, setRemaining] = useState<number>(TOTAL_SPOTS)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Fetch live spot count on mount
  useEffect(() => {
    fetch("/api/waitlist/count")
      .then((r) => r.json())
      .then((data) => setRemaining(data.remaining || TOTAL_SPOTS))
      .catch(() => setRemaining(TOTAL_SPOTS))
  }, [])

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Full name is required."
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "A valid email is required."
    if (!formData.countryCode.trim()) newErrors.countryCode = "Country code is required."
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required."
    if (!formData.city.trim()) newErrors.city = "City is required."
    if (!formData.horizon) newErrors.horizon = "Select a horizon to conquer."
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setApiError("")
    setSubmitting(true)

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phone}`,
          city: formData.city,
          horizon: formData.horizon,
          whatsapp: formData.whatsapp,
        }),
      })
      const data = await res.json()

      if (!res.ok) {
        setApiError(data.error || "Something went wrong. Please try again.")
        return
      }

      // Decrement counter and show success
      setRemaining((prev) => Math.max(0, prev - 1))
      
      // Wait 1 second before showing success
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitted(true)
    } catch {
      setApiError("Network error. Please check your connection and try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const selectedOption = HORIZON_OPTIONS.find((o) => o.value === formData.horizon)

  const inputClass = `
    w-full bg-transparent text-white text-sm py-3 px-0
    border-b border-slate-700 focus:border-[#3F9FFF] focus:outline-none
    transition-colors duration-300 placeholder:text-slate-600
  `

  return (
    <section
      id="waitlist"
      className="relative py-16 md:py-24 px-6 md:px-10 flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#050505" }}
    >
      {/* Perks Section */}
      <div className="w-full max-w-6xl mb-20">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.25em] uppercase mb-4 font-medium" style={{ color: "#3F9FFF" }}>
            Founding member benefits
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight text-balance max-w-lg">
              Sign up now. These perks are yours when we launch.
            </h2>
            <p className="text-sm leading-relaxed max-w-xs md:text-right" style={{ color: "#64748B" }}>
              Only the first 200 members get access to these benefits. Once the spots are gone, they are gone.
            </p>
          </div>
        </motion.div>

        {/* Perks List */}
        <div className="flex flex-col gap-4 mt-2">
          {PERKS.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group flex flex-col sm:flex-row sm:items-stretch gap-5 sm:gap-0 px-7 py-6 rounded-sm border transition-all duration-300 hover:border-[rgba(63,159,255,0.35)] hover:shadow-[0_0_30px_rgba(63,159,255,0.07)]"
              style={{
                backgroundColor: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.06)",
              }}
            >
              {/* Left: big highlight value */}
              <div
                className="flex-shrink-0 w-full sm:w-48 flex flex-col justify-center gap-1 border-b sm:border-b-0 sm:border-r pb-4 sm:pb-0 sm:pr-10"
                style={{ borderColor: "rgba(63,159,255,0.1)" }}
              >
                <span
                  className="text-2xl md:text-3xl font-bold tracking-tight leading-none"
                  style={{ color: "#3F9FFF" }}
                >
                  {perk.highlight}
                </span>
                <span className="text-xs font-mono tracking-widest mt-2" style={{ color: "rgba(255,255,255,0.2)" }}>
                  {perk.index}
                </span>
              </div>

              {/* Right: title + description */}
              <div className="flex flex-col justify-center gap-2 flex-1 sm:pl-10">
                <h3 className="text-base font-semibold text-white leading-snug">
                  {perk.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                  {perk.description}
                </p>
              </div>

              {/* Arrow indicator */}
              <motion.div
                className="hidden sm:flex flex-shrink-0 items-center text-sm pl-6"
                style={{ color: "rgba(63,159,255,0.3)" }}
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                →
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px mt-14 mb-0" style={{ backgroundColor: "rgba(63,159,255,0.1)" }} />
      </div>

      {/* Form Section */}
      <DriftIn className="w-full max-w-xl">
        <div
          className="rounded-lg border p-8 md:p-12"
          style={{
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            backgroundColor: "rgba(10,10,10,0.5)",
            borderColor: "rgba(63,159,255,0.15)",
          }}
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Urgency Ticker */}
                <div className="text-center mb-10">
                  <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#64748B" }}>
                    Founding spots available
                  </p>
                  <SlotMachineCounter targetValue={remaining} />
                  <p className="text-xs mt-3 tracking-widest uppercase" style={{ color: "#64748B" }}>
                    spots remaining
                  </p>
                  <div className="mt-6 mb-2">
                    <h2 className="text-xl md:text-2xl font-semibold text-white text-balance">
                      Secure your founding membership
                    </h2>
                    <p className="text-xs md:text-sm mt-2 leading-relaxed" style={{ color: "#64748B" }}>
                      Fill in your details and we will reach out when SimplyEpic goes live.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                  {/* Full Name */}
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClass}
                      aria-label="Full Name"
                    />
                    {errors.name && (
                      <p className="text-xs mt-2" style={{ color: "#ff6b6b" }}>{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass}
                      aria-label="Email"
                    />
                    {errors.email && (
                      <p className="text-xs mt-2" style={{ color: "#ff6b6b" }}>{errors.email}</p>
                    )}
                  </div>

                  {/* Phone: Country Code + Number */}
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-24">
                      <input
                        type="text"
                        placeholder="+XX"
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        className={inputClass}
                        aria-label="Country code"
                      />
                      {errors.countryCode && (
                        <p className="text-xs mt-2" style={{ color: "#ff6b6b" }}>{errors.countryCode}</p>
                      )}
                    </div>
                    <div className="flex-1">
                      <input
                        type="tel"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClass}
                        aria-label="Phone number"
                      />
                      {errors.phone && (
                        <p className="text-xs mt-2" style={{ color: "#ff6b6b" }}>{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* City */}
                  <div>
                    <input
                      type="text"
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className={inputClass}
                      aria-label="City"
                    />
                    {errors.city && (
                      <p className="text-xs mt-2" style={{ color: "#ff6b6b" }}>{errors.city}</p>
                    )}
                  </div>

                  {/* Horizon Dropdown - Custom Premium Dropdown */}
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-3" style={{ color: "#94A3B8" }}>
                      Which horizon are you looking to conquer next?
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full text-left flex items-center justify-between px-0 py-3 border-b transition-colors duration-300"
                        style={{
                          borderBottomColor: isDropdownOpen ? "#3F9FFF" : "rgba(71, 85, 105, 0.5)",
                          color: formData.horizon ? "#ffffff" : "#64748B",
                        }}
                      >
                        <span className="text-sm">
                          {formData.horizon 
                            ? HORIZON_OPTIONS.find(o => o.value === formData.horizon)?.label 
                            : "Select your horizon"}
                        </span>
                        <motion.span
                          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ color: "#3F9FFF" }}
                        >
                          ▾
                        </motion.span>
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-2 z-50 border rounded-sm overflow-hidden"
                            style={{
                              backgroundColor: "#0a0a0a",
                              borderColor: "rgba(63,159,255,0.3)",
                              boxShadow: "0 0 24px rgba(63,159,255,0.1)",
                            }}
                          >
                            {HORIZON_OPTIONS.map((opt) => (
                              <motion.button
                                key={opt.value}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, horizon: opt.value })
                                  setIsDropdownOpen(false)
                                }}
                                whileHover={{ backgroundColor: "rgba(63,159,255,0.08)" }}
                                className="w-full text-left px-4 py-3 border-b border-slate-800 last:border-b-0 transition-colors duration-200"
                                style={{
                                  backgroundColor: formData.horizon === opt.value ? "rgba(63,159,255,0.12)" : "rgba(63,159,255,0)",
                                }}
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div>
                                    <p
                                      className="text-sm font-medium"
                                      style={{ color: formData.horizon === opt.value ? "#3F9FFF" : "#ffffff" }}
                                    >
                                      {opt.label}
                                    </p>
                                    <p className="text-xs mt-1" style={{ color: "#64748B" }}>
                                      {opt.hint}
                                    </p>
                                  </div>
                                  {formData.horizon === opt.value && (
                                    <motion.span
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="text-xs font-bold flex-shrink-0 mt-0.5"
                                      style={{ color: "#3F9FFF" }}
                                    >
                                      ✓
                                    </motion.span>
                                  )}
                                </div>
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Selected Option Hint */}
                    <AnimatePresence>
                      {selectedOption && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-xs mt-3"
                          style={{ color: "rgba(63,159,255,0.7)" }}
                        >
                          {selectedOption.hint}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    {errors.horizon && (
                      <p className="text-xs mt-2" style={{ color: "#ff6b6b" }}>{errors.horizon}</p>
                    )}
                  </div>

                  {/* WhatsApp Toggle */}
                  <label className="flex items-center gap-3 cursor-pointer select-none mt-2">
                    <button
                      type="button"
                      role="switch"
                      aria-checked={formData.whatsapp}
                      onClick={() => setFormData({ ...formData, whatsapp: !formData.whatsapp })}
                      className="relative w-10 h-5 rounded-full border transition-colors duration-300 flex-shrink-0"
                      style={{
                        backgroundColor: formData.whatsapp ? "#3F9FFF" : "transparent",
                        borderColor: formData.whatsapp ? "#3F9FFF" : "rgba(71, 85, 105, 0.5)",
                      }}
                    >
                      <span
                        className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-300"
                        style={{ transform: formData.whatsapp ? "translateX(20px)" : "translateX(0)" }}
                      />
                    </button>
                    <span className="text-xs" style={{ color: "#94A3B8" }}>
                      Send me updates on WhatsApp
                    </span>
                  </label>

                  {/* API-level error */}
                  {apiError && (
                    <p className="text-xs text-center" style={{ color: "#ff6b6b" }}>
                      {apiError}
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 text-xs font-bold tracking-widest uppercase text-white rounded-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed mt-4"
                    style={{ backgroundColor: "#3F9FFF" }}
                    onMouseEnter={(e) => {
                      if (!submitting) {
                        e.currentTarget.style.backgroundColor = "#2d8aed"
                        e.currentTarget.style.boxShadow = "0 0 24px rgba(63,159,255,0.35)"
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#3F9FFF"
                      e.currentTarget.style.boxShadow = "none"
                    }}
                  >
                    {submitting ? "Securing your spot..." : "JOIN THE INNER CIRCLE"}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center text-center gap-6 py-4"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(63,159,255,0.12)", border: "1px solid rgba(63,159,255,0.3)" }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path d="M4 11L9 16L18 6" stroke="#3F9FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-balance">
                    Welcome to the SimplyEpic Inner Circle, <span style={{ color: "#3F9FFF" }}>{formData.name.split(" ")[0]}.</span>
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                    Your spot is secure. As a founding member, you'll get 15% off your first activity, priority access to future experiences, and a chance to win free GoPro footage.
                  </p>
                </div>

                <div
                  className="w-full h-px"
                  style={{ backgroundColor: "rgba(63,159,255,0.15)" }}
                />

                <div className="flex flex-col items-center gap-3">
                  <p className="text-xs tracking-wider uppercase" style={{ color: "#94A3B8" }}>
                    In the meantime, follow our path on Instagram.
                  </p>
                  <a
                    href="https://www.instagram.com/simplyepic.adventures/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-sm border transition-all duration-300"
                    style={{
                      backgroundColor: "#000000",
                      borderColor: "rgba(63,159,255,0.3)",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#3F9FFF" }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(63,159,255,0.3)" }}
                  >
                    <Instagram size={16} aria-hidden="true" />
                    @simplyepic.adventures
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DriftIn>
    </section>
  )
}
