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

function SlotMachineCounter({ targetValue }: { targetValue: number }) {
  const [displayValue, setDisplayValue] = useState(targetValue)

  useEffect(() => {
    setDisplayValue(targetValue)
  }, [targetValue])

  return (
    <div className="inline-block font-mono font-bold text-4xl md:text-5xl tracking-tight" style={{ color: "#3F9FFF" }}>
      <motion.span
        key={displayValue}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-block"
      >
        {displayValue}
      </motion.span>
    </div>
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
    w-full bg-transparent text-white text-sm py-3
    border-b border-slate-700 focus:border-[#3F9FFF] focus:outline-none
    transition-colors duration-300 placeholder:text-slate-600
  `

  return (
    <section
      id="waitlist"
      className="relative py-12 px-6 md:px-10 flex items-center justify-center overflow-hidden"
      style={{ minHeight: "90vh" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(5,5,5,0.88)" }}
        aria-hidden="true"
      />

      <DriftIn className="relative z-10 w-full max-w-md">
        {/* Glassmorphism card */}
        <div
          className="rounded-lg border p-8 md:p-12"
          style={{
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            backgroundColor: "rgba(10,10,10,0.65)",
            borderColor: "rgba(63,159,255,0.2)",
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
                <div className="text-center mb-12">
                  <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#94A3B8" }}>
                    Limited to the first
                  </p>
                  <SlotMachineCounter targetValue={TOTAL_SPOTS} />
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
                      <p className="text-xs mt-1" style={{ color: "#3F9FFF" }}>{errors.name}</p>
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
                      <p className="text-xs mt-1" style={{ color: "#3F9FFF" }}>{errors.email}</p>
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
                        <p className="text-xs mt-1" style={{ color: "#3F9FFF" }}>{errors.countryCode}</p>
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
                        <p className="text-xs mt-1" style={{ color: "#3F9FFF" }}>{errors.phone}</p>
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
                      <p className="text-xs mt-1" style={{ color: "#3F9FFF" }}>{errors.city}</p>
                    )}
                  </div>

                  {/* Horizon Dropdown */}
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#94A3B8" }}>
                      Which horizon are you looking to conquer next?
                    </label>
                    <div className="relative">
                      <select
                        value={formData.horizon}
                        onChange={(e) => setFormData({ ...formData, horizon: e.target.value })}
                        className="w-full bg-transparent text-sm py-3 pr-8 border-b appearance-none cursor-pointer focus:outline-none transition-colors duration-300"
                        style={{
                          color: formData.horizon ? "#ffffff" : "#475569",
                          borderBottomColor: formData.horizon ? "#3F9FFF" : "#1e293b",
                        }}
                        aria-label="Horizon selection"
                      >
                        <option value="" disabled>
                          Select your horizon
                        </option>
                        {HORIZON_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <span
                        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-xs"
                        style={{ color: "#3F9FFF" }}
                      >
                        ▾
                      </span>
                    </div>
                    <AnimatePresence>
                      {selectedOption && (
                        <motion.p
                          key={selectedOption.value}
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-xs mt-2"
                          style={{ color: "#94A3B8" }}
                        >
                          {selectedOption.hint}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    {errors.horizon && (
                      <p className="text-xs mt-1" style={{ color: "#ff6b6b" }}>{errors.horizon}</p>
                    )}
                  </div>

                  {/* WhatsApp Toggle */}
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <button
                      type="button"
                      role="switch"
                      aria-checked={formData.whatsapp}
                      onClick={() => setFormData({ ...formData, whatsapp: !formData.whatsapp })}
                      className="relative w-10 h-5 rounded-full border transition-colors duration-300 flex-shrink-0"
                      style={{
                        backgroundColor: formData.whatsapp ? "#3F9FFF" : "transparent",
                        borderColor: formData.whatsapp ? "#3F9FFF" : "#1e293b",
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
                    className="w-full py-4 text-xs font-bold tracking-widest uppercase text-white rounded-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
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
                    Your spot is secure. Our founding members get early-access pricing and first-preference for our inaugural journeys. The official journey begins soon.
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
                      borderColor: "#1e293b",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#3F9FFF" }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1e293b" }}
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
