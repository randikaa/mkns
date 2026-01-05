"use client"

import { useState } from "react"
import { 
  Building,
  Eye,
  EyeOff,
  Plus
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ClientFormData {
  companyName: string
  contactName: string
  email: string
  phone: string
  address: string
  password: string
  notes: string
}

interface AddClientDialogProps {
  onClientAdd?: (clientData: ClientFormData) => Promise<void>
}

export default function AddClientDialog({ onClientAdd }: AddClientDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [formErrors, setFormErrors] = useState<Partial<ClientFormData>>({})
  const [formData, setFormData] = useState<ClientFormData>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    notes: ""
  })

  const validateForm = (): boolean => {
    const errors: Partial<ClientFormData> = {}
    
    if (!formData.companyName.trim()) {
      errors.companyName = "Company name is required"
    }
    
    if (!formData.contactName.trim()) {
      errors.contactName = "Contact name is required"
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }
    
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required"
    }
    
    if (!formData.password.trim()) {
      errors.password = "Password is required"
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long"
    }
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field when user starts typing
    if (formErrors[name as keyof ClientFormData]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const resetForm = () => {
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      notes: ""
    })
    setFormErrors({})
    setSubmitError(null)
    setShowPassword(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      // Call the callback function if provided
      if (onClientAdd) {
        await onClientAdd(formData)
      }
      
      // Reset form and close dialog
      resetForm()
      setIsOpen(false)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to create client')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    resetForm()
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200">
          <Plus className="mr-2 h-4 w-4" /> Add New Client
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Building className="h-5 w-5 text-emerald-600" />
            Add New Client
          </DialogTitle>
          <DialogDescription>
            Create a new client account with login credentials and contact information.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {submitError && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
              {submitError}
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-sm font-medium">
                Company Name *
              </Label>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Enter company name"
                className={`w-full ${formErrors.companyName ? 'border-red-500' : ''}`}
              />
              {formErrors.companyName && (
                <p className="text-xs text-red-500">{formErrors.companyName}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactName" className="text-sm font-medium">
                Contact Person *
              </Label>
              <Input
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleInputChange}
                placeholder="Enter contact name"
                className={`w-full ${formErrors.contactName ? 'border-red-500' : ''}`}
              />
              {formErrors.contactName && (
                <p className="text-xs text-red-500">{formErrors.contactName}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
                className={`w-full ${formErrors.email ? 'border-red-500' : ''}`}
              />
              {formErrors.email && (
                <p className="text-xs text-red-500">{formErrors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter phone number"
                className={`w-full ${formErrors.phone ? 'border-red-500' : ''}`}
              />
              {formErrors.phone && (
                <p className="text-xs text-red-500">{formErrors.phone}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-sm font-medium">
              Address
            </Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter business address"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">
              Client Portal Password *
            </Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter secure password"
                className={`w-full pr-10 ${formErrors.password ? 'border-red-500' : ''}`}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-slate-400" />
                ) : (
                  <Eye className="h-4 w-4 text-slate-400" />
                )}
              </Button>
            </div>
            {formErrors.password && (
              <p className="text-xs text-red-500">{formErrors.password}</p>
            )}
            <p className="text-xs text-slate-500">
              This password will be used for client portal access
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes" className="text-sm font-medium">
              Notes
            </Label>
            <Textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Add any additional notes about the client..."
              className="w-full min-h-[80px]"
            />
          </div>

          <DialogFooter className="gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50"
            >
              {isSubmitting ? "Creating..." : "Create Client"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}