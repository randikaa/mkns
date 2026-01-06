import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="max-w-xl">
            <h1
              className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Professional Commercial Cleaning & Property Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Trusted by businesses across Australia for reliable, eco-friendly cleaning solutions. From offices to
              hospitals, we deliver spotless results every time.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {["Eco-Friendly Products", "24/7 Availability", "Experienced Team", "Flexible Contracts"].map(
                (feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <img
                src="/professional-office-cleaning-team-at-work-in-moder.jpg"
                alt="Professional cleaning team at work"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-4 shadow-lg ring-1 ring-border">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">+7</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Years Experience</p>
                  <p className="text-xs text-muted-foreground">Trusted since 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
