"use client"

import { 
  Users, 
  Search, 
  Plus,
  Mail,
  Phone,
  Star,
  MapPin,
  Calendar,
  MoreVertical,
  ShieldCheck
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const staff = [
  {
    id: "1",
    name: "John Smith",
    role: "Senior Cleaner",
    email: "john.s@mkns.com",
    phone: "+61 400 111 222",
    rating: 4.9,
    status: "On Shift",
    joined: "Jan 2022",
    img: "JS"
  },
  {
    id: "2",
    name: "Emily Davis",
    role: "Specialist (Carpet)",
    email: "emily.d@mkns.com",
    phone: "+61 400 333 444",
    rating: 4.8,
    status: "Available",
    joined: "Mar 2022",
    img: "ED"
  },
  {
    id: "3",
    name: "Robert Wilson",
    role: "Cleaner",
    email: "robert.w@mkns.com",
    phone: "+61 400 555 666",
    rating: 4.7,
    status: "Off Duty",
    joined: "June 2023",
    img: "RW"
  },
  {
    id: "4",
    name: "Jessica Taylor",
    role: "Supervisor",
    email: "jess.t@mkns.com",
    phone: "+61 400 777 888",
    rating: 5.0,
    status: "On Shift",
    joined: "Nov 2021",
    img: "JT"
  }
]

export default function AdminStaffPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Staff Management</h1>
          <p className="text-slate-500 mt-1">Monitor performance, manage schedules, and coordinate your field team.</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200 uppercase tracking-wider text-xs font-bold py-6">
          <Plus className="mr-2 h-4 w-4" /> Recruit New Member
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {staff.map((member) => (
          <Card key={member.id} className="border-none shadow-sm shadow-slate-200 overflow-hidden group hover:shadow-md transition-all">
            <CardHeader className="pb-4 relative">
               <div className="absolute right-4 top-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Edit Details</DropdownMenuItem>
                      <DropdownMenuItem>Assign Job</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-rose-600">Deactivate</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
               </div>
               <div className="flex flex-col items-center text-center pt-2">
                 <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xl mb-4 border-4 border-white shadow-sm ring-1 ring-emerald-50">
                    {member.img}
                 </div>
                 <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors italic underline decoration-slate-200 decoration-2 underline-offset-4">{member.name}</CardTitle>
                 <CardDescription className="font-medium text-slate-500 flex items-center gap-1.5 mt-1">
                   {member.role === "Supervisor" && <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />}
                   {member.role}
                 </CardDescription>
               </div>
            </CardHeader>
            <CardContent>
               <div className="space-y-4">
                 <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <Badge variant="outline" className={cn(
                      "border-none px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest",
                      member.status === "On Shift" ? "bg-emerald-100 text-emerald-700" :
                      member.status === "Available" ? "bg-blue-100 text-blue-700" : "bg-slate-200 text-slate-600"
                    )}>
                      {member.status}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-amber-500 font-bold text-sm">
                      <Star className="h-3.5 w-3.5 fill-amber-500" /> {member.rating}
                    </div>
                 </div>

                 <div className="space-y-2.5">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                       <Mail className="h-4 w-4 text-slate-400" />
                       <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                       <Phone className="h-4 w-4 text-slate-400" />
                       <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                       <span>Joined: {member.joined}</span>
                       <Button variant="link" size="sm" className="h-auto p-0 text-emerald-600 hover:text-emerald-700">Schedule</Button>
                    </div>
                 </div>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
