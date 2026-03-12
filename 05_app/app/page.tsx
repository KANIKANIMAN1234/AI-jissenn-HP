import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { CampaignBanner } from "@/components/home/campaign-banner"
import { QuickLinksSection } from "@/components/home/quick-links-section"
import { StatsSection } from "@/components/home/stats-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <HeroSection />
        <CampaignBanner />
        <StatsSection />
        <QuickLinksSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
