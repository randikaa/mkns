import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function CtaSection() {
  return (
    <section className="border-t border-border bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2
          className="text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Ready for a Cleaner Space?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
          Get in touch today for a free, no-obligation quote. Our team is ready to discuss your cleaning needs.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Request a Quote</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            asChild
          >
            <a href="tel:1800123456">
              <Phone className="mr-2 h-4 w-4" />
              1800 123 456
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
