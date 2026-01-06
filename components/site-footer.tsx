import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Office Cleaning", href: "/services#office" },
    { name: "Retail Cleaning", href: "/services#retail" },
    { name: "Hospitality Cleaning", href: "/services#hospitality" },
    { name: "Industrial Cleaning", href: "/services#industrial" },
    { name: "Medical Cleaning", href: "/services#medical" },
    { name: "Education Cleaning", href: "/services#education" },
    { name: "Builders Cleaning", href: "/services#construction" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Community Services", href: "/community-services" },
    { name: "Careers", href: "/careers" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  sectors: [
    { name: "Healthcare", href: "/services#medical" },
    { name: "Education", href: "/services#education" },
    { name: "Corporate", href: "/services#office" },
    { name: "Retail", href: "/services#retail" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <img
                src="/logo.png"
                alt="MKNS Logo"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="text-xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                MKNS
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Professional commercial cleaning and property services. Delivering excellence since 2010.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  705A 294 bell street
                  <br />
                  heidelberg west 3081
                </span>
              </li>
              <li>
                <a
                  href="tel:1800123456"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  <span>1800 123 456</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@mknscleaningsolution.com.au"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  <span>contact@mknscleaningsolution.com.au</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MKNS Cleaning Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
