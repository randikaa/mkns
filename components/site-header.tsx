"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const commercialCleaningLinks = [
  { title: "Office Cleaning", href: "/services#office" },
  { title: "Factory Cleaning", href: "/services#industrial" },
  { title: "School Cleaning", href: "/services#education" },
  { title: "Hospital Cleaning", href: "/services#medical" },
  { title: "Retail Cleaning", href: "/services#retail" },
  { title: "Hotel Venue Cleaning", href: "/services#hospitality" },
  { title: "Childcare Cleaning", href: "/services#education" },
  { title: "Gyms & Sport Centre Cleaning", href: "/services#retail" },
  { title: "Government Building Cleaning", href: "/services#office" },
  { title: "Council Cleaning", href: "/services#office" },
  { title: "Park Cleaning", href: "/services#industrial" },
]

const ourServicesLinks = [
  {
    title: "Office & Corporate Cleaning",
    href: "/services#office",
    description: "For: Offices, call centers, admin buildings",
  },
  {
    title: "Retail Cleaning",
    href: "/services#retail",
    description: "For: Shops, supermarkets, malls",
  },
  {
    title: "Hospitality & Accommodation",
    href: "/services#hospitality",
    description: "For: Hotels, motels, restaurants, cafés, pubs",
  },
  {
    title: "Industrial & Warehouse Cleaning",
    href: "/services#industrial",
    description: "For: Factories, warehouses, workshops",
  },
  {
    title: "Medical & Healthcare Cleaning",
    href: "/services#medical",
    description: "For: Hospitals, clinics, dental surgeries, aged care",
  },
  {
    title: "Education Facility Cleaning",
    href: "/services#education",
    description: "For: Schools, colleges, universities",
  },
  {
    title: "Construction & Builders Cleaning",
    href: "/services#construction",
    description: "For: New builds & renovations",
  },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              MKNS
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Commercial Cleaning</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {commercialCleaningLinks.map((link) => (
                      <ListItem key={link.title} title={link.title} href={link.href} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[800px]">
                    {ourServicesLinks.map((link) => (
                      <ListItem key={link.title} title={link.title} href={link.href}>
                        {link.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">About Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/community-services">Community Services</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/contact">Contact Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/careers">Careers</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </nav>

      </header>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  MKNS
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-1 py-6">
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>

                  {/* Commercial Cleaning Mobile */}
                  <div className="-mx-3">
                    <button
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                      onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === "comm" ? null : "comm")}
                    >
                      Commercial Cleaning
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", activeMobileSubmenu === "comm" && "rotate-180")}
                      />
                    </button>
                    {activeMobileSubmenu === "comm" && (
                      <div className="mt-1 space-y-1 pl-6">
                        {commercialCleaningLinks.map((link) => (
                          <Link
                            key={link.title}
                            href={link.href}
                            className="block rounded-lg py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Our Services Mobile */}
                  <div className="-mx-3">
                    <button
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                      onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === "serv" ? null : "serv")}
                    >
                      Our Services
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", activeMobileSubmenu === "serv" && "rotate-180")}
                      />
                    </button>
                    {activeMobileSubmenu === "serv" && (
                      <div className="mt-1 space-y-1 pl-6">
                        {ourServicesLinks.map((link) => (
                          <Link
                            key={link.title}
                            href={link.href}
                            className="block rounded-lg py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>

                  <Link
                    href="/community-services"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Community Services
                  </Link>

                  <Link
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>

                  <Link
                    href="/careers"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Careers
                  </Link>
                </div>
                <div className="py-6">
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Get a Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string
  title: string
  children?: React.ReactNode
  href: string
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">{children}</p>}
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
