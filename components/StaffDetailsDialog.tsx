"use client"

import { useState, useEffect } from "react"
import { 
  Users,
  Eye,
  EyeOff,
  Mail,
  Phone,
  Briefcase,
  Calendar,
  Shield,
  Loader2,
  Check,
  X,
  Building,
  DollarSign
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { type Staff } from "@/hooks/use-staff"

interface StaffDetailsDialogProps {
  member: Staff | null
  isOpen: boolean
  onClose: () => void
  onUpdate: (id: number, data: Partial<Staff>) => Promise<{ success: boolean; error?: string }>
}

export default function StaffDetailsDialog({ member, isOpen, onClose, onUpdate }: StaffDetailsDialogProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<Partial<Staff>>({})
  const [submitError, setSubmitError] = useState<string | null>(null)

  useEffect(() => {
    if (member) {
      setFormData({
        email: member.email,
        phone: member.phone,
        status: member.status,
        notes: member.notes || ""
      })
    }
  }, [member])

  if (!member) return null

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleStatusChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, status: checked ? "Active" : "Inactive" }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const result = await onUpdate(member.id, formData)
      if (result.success) {
        setIsEditing(false)
      } else {
        setSubmitError(result.error || "Failed to update staff member")
      }
    } catch (error) {
      setSubmitError("An unexpected error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2 text-2xl font-bold">
              <Users className="h-6 w-6 text-emerald-600" />
              {member.firstName} {member.lastName}
            </DialogTitle>
            <Badge variant={formData.status === "Active" ? "default" : "secondary"} className={
              formData.status === "Active" ? "bg-emerald-50 text-emerald-700 border-none" : "bg-slate-100 text-slate-600 border-none"
            }>
              {formData.status}
            </Badge>
          </div>
          <DialogDescription>
            Detailed employment information and management for {member.firstName}.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Information Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-400" />
                Contact Info
              </h3>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs text-slate-500">Email Address</Label>
                {isEditing ? (
                  <Input 
                    id="email" 
                    name="email" 
                    value={formData.email || ""} 
                    onChange={handleInputChange}
                    className="h-9"
                  />
                ) : (
                  <p className="text-sm font-medium text-slate-700">{member.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs text-slate-500">Phone Number</Label>
                {isEditing ? (
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone || ""} 
                    onChange={handleInputChange}
                    className="h-9"
                  />
                ) : (
                  <p className="text-sm font-medium text-slate-700">{member.phone}</p>
                )}
              </div>
            </div>

            {/* Employment Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-slate-400" />
                Employment Details
              </h3>

              <div className="space-y-1">
                <Label className="text-xs text-slate-500">Position & Dept</Label>
                <div className="flex flex-col gap-1 pt-1">
                  <p className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    {member.position}
                  </p>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5">
                    <Building className="h-3 w-3" /> {member.department}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label className="text-xs text-slate-500">Salary</Label>
                  <p className="text-sm font-medium text-slate-700 flex items-center gap-1">
                    <DollarSign className="h-3 w-3" /> {member.salary || "N/A"}
                  </p>
                </div>
                <div className="space-y-1">
                  <Label className="text-xs text-slate-500">Hire Date</Label>
                  <p className="text-sm font-medium text-slate-700 flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {new Date(member.hireDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Shield className="h-4 w-4 text-slate-400" />
              Security & Status
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-xs text-slate-500">Staff Portal Password</Label>
                <div className="relative group">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={member.password}
                    readOnly
                    className="h-9 bg-slate-50/50 pr-10 font-mono text-sm"
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
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg border bg-slate-50/30">
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium">Account Status</Label>
                  <p className="text-xs text-slate-500">Manage staff access</p>
                </div>
                <Switch 
                  disabled={!isEditing}
                  checked={formData.status === "Active"}
                  onCheckedChange={handleStatusChange}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes" className="text-xs text-slate-500 uppercase tracking-wider">Internal Notes</Label>
            {isEditing ? (
              <Textarea 
                id="notes" 
                name="notes" 
                value={formData.notes || ""} 
                onChange={handleInputChange}
                className="min-h-[80px]"
                placeholder="Add internal notes about this staff member..."
              />
            ) : (
              <div className="p-3 rounded-lg bg-slate-50 text-sm text-slate-600 italic">
                {member.notes || "No notes available."}
              </div>
            )}
          </div>

          {submitError && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
              {submitError}
            </div>
          )}

          <DialogFooter className="border-t pt-6">
            {!isEditing ? (
              <Button type="button" onClick={() => setIsEditing(true)} className="bg-slate-900 hover:bg-slate-800">
                Edit Staff Details
              </Button>
            ) : (
              <div className="flex gap-2 w-full justify-end">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => {
                    setIsEditing(false)
                    setFormData({
                      email: member.email,
                      phone: member.phone,
                      status: member.status,
                      notes: member.notes || ""
                    })
                  }}
                  disabled={isSubmitting}
                >
                  <X className="mr-2 h-4 w-4" /> Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-emerald-600 hover:bg-emerald-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Check className="mr-2 h-4 w-4" /> Save Changes
                    </>
                  )}
                </Button>
              </div>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
