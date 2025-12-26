import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CtaSection } from "@/components/cta-section"
import { Briefcase, GraduationCap, Star, ShieldCheck } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers | MKNS Cleaning Services",
  description: "Join the MKNS team. Explore our current career opportunities and learn about our workplace culture.",
}

const benefits = [
  {
    icon: Star,
    title: "Growth Opportunities",
    description: "We provide clear paths for career advancement and professional development.",
  },
  {
    icon: GraduationCap,
    title: "Ongoing Training",
    description: "Benefit from comprehensive training programs and industry certifications.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    description: "We prioritize safety and provide all necessary equipment and support.",
  },
  {
    icon: Briefcase,
    title: "Competitive Pay",
    description: "Fair wages and benefits reflecting our commitment to our employees.",
  },
]

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
              Join Our Team
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
              Build your career with MKNS. We're looking for dedicated professionals who share our commitment to excellence and sustainability.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-12 text-center" style={{ fontFamily: "var(--font-heading)" }}>
              Why Work With Us?
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-6">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Current Openings
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We are always looking for cleaning professionals, supervisors, and administrative staff. If you have the passion for quality service, we'd love to hear from you.
            </p>
            <div className="p-8 rounded-2xl border border-dashed border-border bg-muted/30">
              <p className="text-lg font-medium text-foreground">Email your CV to:</p>
              <a href="mailto:sanjunipun179@gmail.com" className="text-2xl font-bold text-primary hover:underline block mt-2">
                sanjunipun179@gmail.com
              </a>
            </div>
          </div>
        </section>
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
