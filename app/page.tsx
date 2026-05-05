import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
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
      <WaitlistSection />
      <FAQ />
      <TrustBar />
      <Footer />
    </main>
  )
}
