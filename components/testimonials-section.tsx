import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "MKNS has transformed our office environment. Their attention to detail and eco-friendly approach align perfectly with our company values.",
    author: "Sarah Mitchell",
    role: "Office Manager",
    company: "TechStart Solutions",
  },
  {
    quote:
      "Reliable, professional, and thorough. We've been using their services for over 3 years and couldn't be happier with the results.",
    author: "James Chen",
    role: "Facilities Director",
    company: "Metro Healthcare",
  },
  {
    quote:
      "Their emergency response team saved us after a flooding incident. Fast, efficient, and truly professional service.",
    author: "Amanda Torres",
    role: "Property Manager",
    company: "Riverside Commercial",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by hundreds of businesses across Australia.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="relative rounded-xl border border-border bg-card p-8">
              <Quote className="h-8 w-8 text-primary/20" />
              <blockquote className="mt-4">
                <p className="text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-muted" />
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
