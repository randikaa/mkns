import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CtaSection } from "@/components/cta-section"
import { Award, Shield, Users, Target, Eye, CheckCircle, Heart, ShieldAlert, BadgeCheck, Handshake } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | MKNS Cleaning Services",
  description:
    "Learn about MKNS Cleaning Services - our mission, values, experienced team, and commitment to sustainable cleaning practices.",
}

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "50+", label: "Team Members" },
  { value: "24/7", label: "Support Available" },
]

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description: "Consistent and dependable service you can trust, delivered on time, every time.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Meticulous attention to detail and a commitment to superior cleaning results.",
  },
  {
    icon: BadgeCheck,
    title: "Integrity",
    description: "Honesty and transparency in all our business dealings and client relationships.",
  },
  {
    icon: ShieldAlert,
    title: "Health & Safety",
    description: "Prioritizing the well-being of our staff, clients, and the environments we clean.",
  },
  {
    icon: Target,
    title: "Customer Focus",
    description: "Tailoring our solutions to meet the unique needs and expectations of every business.",
  },
  {
    icon: Heart,
    title: "Respect",
    description: "Valuing our people, our clients, and the diverse communities we serve.",
  },
]

const team = [
  {
    name: "Michael Chen",
    role: "Founder & CEO",
    bio: "With over 20 years in the cleaning industry, Michael founded MKNS with a vision for sustainable, client-focused service.",
  },
  {
    name: "Sarah Williams",
    role: "Operations Director",
    bio: "Sarah oversees our day-to-day operations, ensuring every client receives consistent, high-quality service across all locations.",
  },
  {
    name: "David Thompson",
    role: "Quality Assurance Manager",
    bio: "David leads our quality control initiatives and training programs, maintaining our industry-leading service standards.",
  },
  {
    name: "Lisa Park",
    role: "Client Relations Manager",
    bio: "Lisa works closely with our clients to understand their unique needs and ensure their complete satisfaction.",
  },
]

const certifications = [
  "ISO 9001 Quality Management",
  "ISO 14001 Environmental Management",
  "SafeWork NSW Certified",
  "Green Cleaning Certified",
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Page Header */}
        <section className="border-b border-border bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h1
                  className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  About MKNS
                </h1>
                <p className="mt-6 text-lg text-muted-foreground text-balance">
                  MKNS Cleaning Solution is a Melbourne-based commercial cleaning company dedicated to delivering
                  reliable, high-quality, and professional cleaning services. We work with businesses across a range of
                  industries, including offices, hospitality venues, retail spaces, medical facilities, and industrial
                  sites.
                </p>
                <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-3xl font-semibold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <img
                  src="/cleaning-team.png"
                  alt="MKNS cleaning team"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2
                  className="mt-6 text-2xl font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Our Mission
                </h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    Our mission is to deliver exceptional commercial cleaning services through skilled professionals,
                    meticulous attention to detail, and industry-approved cleaning practices.
                  </p>
                  <p>
                    We are committed to providing tailored solutions, maintaining the highest standards of hygiene and
                    safety, and building long-term client relationships founded on trust, consistency, and outstanding
                    service.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h2
                  className="mt-6 text-2xl font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Our Vision
                </h2>
                <p className="mt-4 text-muted-foreground">
                  To be Melbourne’s most trusted commercial cleaning partner, setting the benchmark for excellence,
                  reliability, and professionalism while creating cleaner, healthier, and more welcoming environments
                  for businesses and their communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="border-y border-border bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2
                className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Core Values
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our work and define who we are as a company.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-card ring-1 ring-border">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2
                className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Leadership Team
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the people who lead our mission to deliver exceptional cleaning services.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="mx-auto aspect-square w-32 overflow-hidden rounded-full bg-muted">
                    <img
                      src={`/professional-headshot.png?height=128&width=128&query=professional headshot ${member.name}`}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="border-t border-border bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2
                  className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Quality & Compliance
                </h2>
                <p className="mt-4 text-muted-foreground">
                  We maintain the highest industry standards through rigorous certifications and ongoing compliance
                  monitoring. Our commitment to quality is backed by internationally recognized accreditations.
                </p>
                <ul className="mt-8 space-y-4">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex aspect-square items-center justify-center rounded-xl border border-border bg-card p-6"
                  >
                    <img
                      src={`/certification-badge.png?height=100&width=100&query=certification badge ${i}`}
                      alt="Certification badge"
                      className="h-20 w-20 opacity-60"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
