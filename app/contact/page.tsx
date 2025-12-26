import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Phone, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | MKNS Cleaning Services",
  description:
    "Get in touch with MKNS Cleaning Services for a free quote. Contact us by phone, email, or fill out our enquiry form.",
}

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "1800 123 456",
    href: "tel:1800123456",
    description: "Mon-Fri 8am-6pm, Sat 9am-1pm",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sanjunipun179@gmail.com",
    href: "mailto:sanjunipun179@gmail.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "705A 294 bell street, heidelberg west 3081",
    href: "https://maps.google.com",
    description: "Head office location",
  },
  {
    icon: Clock,
    label: "Emergency",
    value: "24/7 Available",
    href: "tel:1800123456",
    description: "For urgent cleaning needs",
  },
]

export default function ContactPage() {
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
                Get in Touch
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Ready to experience the MKNS difference? Contact us today for a free, no-obligation quote. Our
                team is here to discuss your cleaning needs and create a customized solution.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                  Contact Information
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Reach out to us through any of the following channels. We&apos;re always happy to help.
                </p>
                <div className="mt-8 space-y-6">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-4 rounded-lg p-4 -mx-4 transition-colors hover:bg-muted/50"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                        <p className="text-foreground">{item.value}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                    Request a Quote
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you with a customized quote.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="border-t border-border">
          <div className="aspect-[21/9] w-full bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.7157246586175!2d145.0405887756916!3d-37.74981287199162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6442c0d7cd723%3A0x2fc49d7841223099!2s705a%2F294%20Bell%20St%2C%20Heidelberg%20West%20VIC%203081%2C%20Australia!5e0!3m2!1sen!2slk!4v1714154400000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MKNS Office Location"
              className="h-full w-full"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
