"use client"

import { 
  Search, 
  Filter, 
  MoreVertical,
  Mail,
  Phone,
  Building,
  Calendar,
  DollarSign,
  Loader2
} from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import AddStaffDialog from "@/components/AddStaffDialog"
import { useStaff, type NewStaffData } from "@/hooks/use-staff"
import { useState } from "react"

export default function AdminStaffPage() {
  const { staff, loading, error, addStaff } = useStaff()
  const [searchTerm, setSearchTerm] = useState("")

  const handleStaffAdd = async (staffData: NewStaffData) => {
    const result = await addStaff(staffData)
    if (!result.success) {
      throw new Error(result.error || 'Failed to create staff member')
    }
  }

  const filteredStaff = staff.filter(member =>
    member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const formatSalary = (salary: string | null) => {
    if (!salary) return 'Not specified'
    return `$${salary}`
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Staff Management</h1>
          <p className="text-slate-500 mt-1">Manage all your staff members and their employment information.</p>
        </div>
        <AddStaffDialog onStaffAdd={handleStaffAdd} />
      </div>

      {error && (
        <div className="p-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
          Error loading staff: {error}
        </div>
      )}

      <Card className="border-none shadow-sm shadow-slate-200">
        <CardHeader className="border-b bg-slate-50/50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input 
                placeholder="Search staff by name, email, position or department..." 
                className="pl-10 bg-white border-slate-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2 bg-white">
                <Filter className="h-4 w-4" /> Filter
              </Button>
              <Button variant="outline" size="sm" className="bg-white">Export</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
              <span className="ml-2 text-slate-600">Loading staff...</span>
            </div>
          ) : filteredStaff.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500">
                {searchTerm ? 'No staff members found matching your search.' : 'No staff members found. Add your first staff member to get started.'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b bg-slate-50/50">
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Staff Info</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Contact Details</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Employment</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Hire Date</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredStaff.map((member) => (
                    <tr key={member.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors underline decoration-slate-200 decoration-2 underline-offset-4">
                            {member.firstName} {member.lastName}
                          </span>
                          <span className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                            <Building className="h-3 w-3" /> {member.department}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-xs text-slate-500 flex items-center gap-1.5">
                              <Mail className="h-3 w-3" /> {member.email}
                            </span>
                            <span className="text-xs text-slate-500 flex items-center gap-1.5">
                              <Phone className="h-3 w-3" /> {member.phone}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-slate-700">{member.position}</p>
                          {member.salary && (
                            <span className="text-xs text-slate-500 flex items-center gap-1.5">
                              <DollarSign className="h-3 w-3" /> {formatSalary(member.salary)}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={
                          member.status === "Active" ? "default" : 
                          member.status === "Pending" ? "outline" : "secondary"
                        } className={
                          member.status === "Active" ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-none px-3 py-1" :
                          member.status === "Pending" ? "bg-amber-50 text-amber-700 border-none px-3 py-1" : "bg-slate-100 text-slate-600 border-none px-3 py-1"
                        }>
                          {member.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5 text-sm text-slate-600 font-medium">
                          <Calendar className="h-3 w-3" />
                          {formatDate(member.hireDate)}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-900">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem className="cursor-pointer">View Details</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">Edit Staff</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">View Payroll</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-rose-600 cursor-pointer">Deactivate Staff</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}