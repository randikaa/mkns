import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CtaSection } from "@/components/cta-section"
import {
  Building2,
  ShoppingBag,
  Utensils,
  Factory,
  Stethoscope,
  School,
  HardHat,
  CheckCircle,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | MKNS Cleaning Services",
  description:
    "Comprehensive commercial and domestic cleaning services including office cleaning, deep cleaning, facility management, pest control, and more.",
}

const services = [
  {
    id: "office",
    icon: Building2,
    title: "Office & Corporate Cleaning",
    description: "Keep your workspace spotless and professional with our comprehensive office cleaning services. For: Offices, call centers, admin buildings.",
    features: [
      "Workstations & desks",
      "Toilets & kitchens",
      "Vacuuming & mopping",
      "Rubbish removal",
      "Glass & surface sanitizing",
    ],
    image: "/modern-office-cleaning-professional.jpg",
  },
  {
    id: "retail",
    icon: ShoppingBag,
    title: "Retail Cleaning",
    description: "Maintain a welcoming environment for your customers with our specialized retail cleaning services. For: Shops, supermarkets, malls.",
    features: [
      "Floor scrubbing & polishing",
      "Glass shopfronts",
      "Change rooms",
      "Public toilets",
      "Car parks",
    ],
    image: "/clean-modern-interior.png",
  },
  {
    id: "hospitality",
    icon: Utensils,
    title: "Hospitality & Accommodation Cleaning",
    description: "Ensure the highest standards of hygiene and comfort for your guests. For: Hotels, motels, restaurants, cafés, pubs.",
    features: [
      "Dining areas & bars",
      "Commercial kitchens",
      "Grease & exhaust cleaning",
      "Guest rooms",
      "Toilets",
    ],
    image: "/commercial-kitchen-cleaning-stainless-steel.jpg",
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Industrial & Warehouse Cleaning",
    description: "Heavy-duty cleaning solutions for industrial environments. For: Factories, warehouses, workshops.",
    features: [
      "Machinery cleaning",
      "Oil & grease removal",
      "High-pressure cleaning",
      "Warehouse floors",
      "Waste management",
    ],
    image: "/commercial-waste-management-recycling.jpg",
  },
  {
    id: "medical",
    icon: Stethoscope,
    title: "Medical & Healthcare Cleaning",
    description: "Specialized infection control and sanitization for healthcare facilities. For: Hospitals, clinics, dental surgeries, aged care.",
    features: [
      "Infection control cleaning",
      "Disinfection & sanitising",
      "Biohazard waste handling",
      "Touchpoint cleaning",
    ],
    image: "/professional-deep-sanitization-cleaning.jpg",
  },
  {
    id: "education",
    icon: School,
    title: "Education Facility Cleaning",
    description: "Safe and hygienic cleaning for educational institutions. For: Schools, colleges, universities.",
    features: [
      "Classrooms & halls",
      "Toilets & cafeterias",
      "Sports areas",
      "Playgrounds",
    ],
    image: "/facility-management-building-maintenance.jpg",
  },
  {
    id: "construction",
    icon: HardHat,
    title: "Construction & Builders Cleaning",
    description: "Comprehensive cleaning to prepare new builds and renovations for handover. For: New builds & renovations.",
    features: [
      "Rough clean",
      "Detailed final clean",
      "Dust & debris removal",
      "Window & floor cleaning",
    ],
    image: "/floor-polishing-commercial-cleaning.jpg",
  },
]

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Page Header */}
        <section className="border-b border-border bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1
                className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our Services
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                From daily office cleaning to emergency response, we offer comprehensive cleaning and facility
                management services tailored to your specific needs. All services are backed by our quality guarantee.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2
                        className="text-2xl font-semibold text-foreground sm:text-3xl"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {service.title}
                      </h2>
                    </div>
                    <p className="mt-4 text-muted-foreground">{service.description}</p>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="aspect-[3/2] overflow-hidden rounded-2xl bg-muted">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
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
