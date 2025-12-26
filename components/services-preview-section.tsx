import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, ShoppingBag, Utensils, Factory, Stethoscope, School, HardHat } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Office & Corporate",
    description: "Complete cleaning solutions for offices, call centers, and admin buildings.",
    href: "/services#office",
  },
  {
    icon: ShoppingBag,
    title: "Retail Cleaning",
    description: "Specialized floor care and shopfront cleaning for shops and malls.",
    href: "/services#retail",
  },
  {
    icon: Utensils,
    title: "Hospitality Cleaning",
    description: "High-standard hygiene for hotels, restaurants, and guest rooms.",
    href: "/services#hospitality",
  },
  {
    icon: Factory,
    title: "Industrial & Warehouse",
    description: "Heavy-duty machinery and warehouse floor cleaning services.",
    href: "/services#industrial",
  },
  {
    icon: Stethoscope,
    title: "Medical & Healthcare",
    description: "Certified infection control and sanitization for medical facilities.",
    href: "/services#medical",
  },
  {
    icon: School,
    title: "Education Facilities",
    description: "Safe and hygienic cleaning for schools, colleges, and playgrounds.",
    href: "/services#education",
  },
  {
    icon: HardHat,
    title: "Construction Cleaning",
    description: "Detailed final cleans for new builds and renovation projects.",
    href: "/services#construction",
  },
]

export function ServicesPreviewSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Comprehensive cleaning and property services for every industry and need.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
