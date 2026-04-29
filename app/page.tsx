import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { VibeCards } from "@/components/vibe-cards"
import { ExperienceLevels } from "@/components/experience-levels"
import { TrustPillars } from "@/components/trust-pillars"
import { WaitlistSection } from "@/components/waitlist-section"
import { FAQ } from "@/components/faq"
import { TrustBar } from "@/components/trust-bar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main style={{ backgroundColor: "#050505", color: "#ffffff" }}>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <TrustPillars />
      <VibeCards />
      <ExperienceLevels />
      <WaitlistSection />
      <FAQ />
      <TrustBar />
      <Footer />
    </main>
  )
}
