import { Building, Factory, Hospital, ShoppingBag, Baby, Dumbbell, Hotel, GraduationCap, Landmark } from "lucide-react"

const sectors = [
  { icon: Building, name: "Corporate Offices" },
  { icon: Factory, name: "Industrial & Factories" },
  { icon: Hospital, name: "Healthcare" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Baby, name: "Childcare" },
  { icon: Dumbbell, name: "Gyms & Fitness" },
  { icon: Hotel, name: "Hotels & Events" },
  { icon: GraduationCap, name: "Education" },
  { icon: Landmark, name: "Government" },
]

export function SectorsSection() {
  return (
    <section className="border-t border-border bg-muted/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized cleaning solutions tailored to the unique requirements of your industry.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-9">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="flex flex-col items-center gap-3 rounded-lg p-4 text-center transition-colors hover:bg-muted"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card ring-1 ring-border">
                <sector.icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{sector.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
