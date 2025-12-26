import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CtaSection } from "@/components/cta-section"
import { Users, Heart, Globe, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community Services | MKNS Cleaning Services",
  description: "Learn about MKNS's commitment to our community and the various services we provide to support local initiatives.",
}

const communityServices = [
  {
    icon: Heart,
    title: "Local Volunteering",
    description: "Our team regularly participates in local community projects and volunteering efforts.",
  },
  {
    icon: Globe,
    title: "Sustainable Practices",
    description: "We are committed to eco-friendly cleaning to protect our local environment.",
  },
  {
    icon: Users,
    title: "Youth Support",
    description: "We provide training and employment opportunities for local youth.",
  },
  {
    icon: Shield,
    title: "Public Space Maintenance",
    description: "Supporting the upkeep of public areas for everyone to enjoy.",
  },
]

export default function CommunityServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
              Community Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
              At MKNS, we believe in giving back. Our community services are designed to support local initiatives and ensure a positive impact on the areas we serve.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {communityServices.map((service) => (
                <div key={service.title} className="rounded-xl border border-border bg-card p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-6">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
