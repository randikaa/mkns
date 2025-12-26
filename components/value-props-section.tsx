import { Leaf, Clock, Users, Shield } from "lucide-react"

const valueProps = [
  {
    icon: Leaf,
    title: "Eco-Friendly & Sustainable",
    description:
      "We use environmentally responsible cleaning products and practices that are safe for your staff and the planet.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Round-the-clock service including emergency cleaning. We work around your schedule to minimize disruption.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our trained professionals undergo thorough background checks and continuous training to deliver excellence.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "We stand behind our work with satisfaction guarantees and regular quality inspections.",
  },
]

export function ValuePropsSection() {
  return (
    <section className="border-y border-border bg-muted/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why Choose MKNS
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine professional expertise with sustainable practices to deliver exceptional cleaning services.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop) => (
            <div key={prop.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <prop.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{prop.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
