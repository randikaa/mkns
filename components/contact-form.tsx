"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

const services = [
  "Office & Commercial Cleaning",
  "Domestic Cleaning",
  "Deep & Covid-19 Cleaning",
  "Kitchen & Restroom Cleaning",
  "Pest Control",
  "Waste Management",
  "Facility Management",
  "Floor Maintenance",
  "Emergency Cleaning",
  "Other",
]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="mt-8 text-center py-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
          Thank You!
        </h3>
        <p className="mt-2 text-muted-foreground">
          We&apos;ve received your enquiry and will get back to you within 24 hours.
        </p>
        <Button className="mt-6 bg-transparent" variant="outline" onClick={() => setIsSubmitted(false)}>
          Submit Another Enquiry
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" name="firstName" required placeholder="John" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" name="lastName" required placeholder="Smith" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required placeholder="john@company.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" name="phone" type="tel" required placeholder="0400 123 456" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company Name</Label>
        <Input id="company" name="company" placeholder="Your Company Pty Ltd" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service Required *</Label>
        <Select name="service" required>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, "-")}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your cleaning needs, property size, and any specific requirements..."
          rows={5}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit Enquiry"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="underline hover:text-foreground">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  )
}
