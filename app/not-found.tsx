import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FileQuestion, Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center bg-background px-4 py-24 sm:py-32">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="rounded-full bg-primary/10 p-6 animate-pulse">
              <FileQuestion className="h-16 w-16 text-primary" />
            </div>
          </div>
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-6xl" style={{ fontFamily: "var(--font-heading)" }}>
            404
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-foreground">
            Page not found
          </h2>
          <p className="mt-6 text-lg leading-7 text-muted-foreground max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or never existed in the first place.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="ghost" asChild size="lg" className="rounded-full px-8">
              <Link href="/contact" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
