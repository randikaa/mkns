import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { ValuePropsSection } from "@/components/value-props-section"
import { ServicesPreviewSection } from "@/components/services-preview-section"
import { SectorsSection } from "@/components/sectors-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ValuePropsSection />
        <ServicesPreviewSection />
        <SectorsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
