"use client"

import { 
  Search, 
  MapPin, 
  Calendar,
  MoreVertical,
  Plus,
  Timer,
  Briefcase,
  Filter,
  ArrowUpRight,
  User
} from "lucide-react"
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardFooter 
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const jobs = [
  {
    id: "JOB-7829",
    client: "Acme Corp",
    service: "Full Office Sanitization",
    staff: ["John Smith", "Emily Davis"],
    date: "Today, Oct 24",
    time: "10:00 AM - 02:00 PM",
    status: "In Progress",
    location: "Melbourne CBD",
    priority: "High"
  },
  {
    id: "JOB-7830",
    client: "Westside Gym",
    service: "Steam Carpet Cleaning",
    staff: ["Robert Wilson"],
    date: "Today, Oct 24",
    time: "02:30 PM - 05:00 PM",
    status: "Upcoming",
    location: "Essendon",
    priority: "Medium"
  },
  {
    id: "JOB-7825",
    client: "Global Logistics",
    service: "Weekly Maintenance",
    staff: ["Jessica Taylor"],
    date: "Yesterday, Oct 23",
    time: "08:00 AM - 12:00 PM",
    status: "Completed",
    location: "Port Melbourne",
    priority: "Standard"
  },
  {
    id: "JOB-7831",
    client: "Private Residence",
    service: "End of Lease Cleaning",
    staff: ["Unassigned"],
    date: "Tomorrow, Oct 25",
    time: "09:00 AM - 04:00 PM",
    status: "Unassigned",
    location: "Brighton",
    priority: "High"
  }
]

export default function AdminJobsPage() {
  return (
    <div className="space-y-10 pb-20 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 flex items-center gap-3">
             <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                <Briefcase className="h-6 w-6" />
             </div>
             Service Jobs
          </h1>
          <p className="text-slate-500 font-medium text-lg max-w-2xl">
            Manage cleaning operations, track real-time status, and oversee staff deployments.
          </p>
        </div>
        <Button className="h-14 px-8 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white shadow-xl shadow-emerald-200 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95">
          <Plus className="mr-2 h-5 w-5" /> Schedule New Job
        </Button>
      </div>

      {/* Filters Bar */}
      <div className="sticky top-4 z-30">
        <div className="backdrop-blur-xl bg-white/70 border border-white/20 p-2 rounded-3xl shadow-lg shadow-slate-200/50 flex items-center gap-2 pr-2">
          <div className="relative flex-1 group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-focus-within:bg-emerald-50 group-focus-within:text-emerald-600 transition-colors">
                 <Search className="h-5 w-5" />
              </div>
              <Input 
                placeholder="Search jobs..." 
                className="pl-16 h-14 bg-transparent border-none focus-visible:ring-0 text-slate-900 font-semibold placeholder:text-slate-400 text-base rounded-2xl shadow-none"
              />
          </div>
          <div className="h-8 w-px bg-slate-200 mx-2" />
          <Button variant="ghost" className="h-12 px-6 rounded-xl font-bold text-slate-600 hover:bg-slate-100 hover:text-slate-900 text-xs uppercase tracking-widest gap-2">
             <Filter className="h-4 w-4" /> Filters
          </Button>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 gap-8">
        {jobs.map((job) => (
          <div key={job.id} className="group relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-blue-500/5 rounded-[2rem] transition-all duration-500" />
            
            <Card className="relative border-none shadow-md shadow-slate-200/60 bg-white/80 backdrop-blur-sm overflow-visible transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-emerald-900/5 rounded-[2rem]">
              <div className="flex flex-col lg:flex-row">
                
                {/* Left Section: Status & Title */}
                <div className="flex-1 p-8 space-y-6">
                   <div className="flex items-center gap-4">
                      <div className={cn(
                        "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border shadow-sm",
                        job.status === "In Progress" ? "bg-blue-50 border-blue-100 text-blue-700" :
                        job.status === "Upcoming" ? "bg-amber-50 border-amber-100 text-amber-700" :
                        job.status === "Unassigned" ? "bg-rose-50 border-rose-100 text-rose-700" : "bg-emerald-50 border-emerald-100 text-emerald-700"
                      )}>
                        <span className="flex items-center gap-2">
                           {job.status === "In Progress" && <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>}
                           {job.status}
                        </span>
                      </div>
                      <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">{job.id}</span>
                   </div>

                   <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors cursor-pointer flex items-center gap-2">
                        {job.service}
                        <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-500" />
                      </h3>
                      <p className="text-slate-500 font-medium text-sm">
                        Client: <span className="text-slate-900 font-bold">{job.client}</span>
                      </p>
                   </div>

                   <div className="flex flex-wrap gap-3">
                      {job.priority === "High" && (
                         <Badge variant="outline" className="border-rose-200 bg-rose-50 text-rose-700 text-[10px] uppercase font-bold tracking-wider px-3 py-1">High Priority</Badge>
                      )}
                      <Badge variant="outline" className="border-slate-200 bg-slate-50 text-slate-600 text-[10px] uppercase font-bold tracking-wider px-3 py-1">{job.location}</Badge>
                   </div>
                </div>

                {/* Middle Section: Time & Details */}
                <div className="lg:w-1/3 p-8 border-t lg:border-t-0 lg:border-l lg:border-r border-slate-100 flex flex-col justify-center space-y-6">
                   <div className="space-y-4">
                      <div className="flex items-start gap-4">
                         <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                            <Calendar className="h-5 w-5" />
                         </div>
                         <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</p>
                            <p className="text-slate-900 font-bold">{job.date}</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                            <Timer className="h-5 w-5" />
                         </div>
                         <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Time Window</p>
                            <p className="text-slate-900 font-bold">{job.time}</p>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Right Section: Staff & Actions */}
                <div className="lg:w-1/4 p-8 flex flex-col justify-between gap-6">
                   <div className="space-y-3">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                         <User className="h-3 w-3" /> Team
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-3">
                          {job.staff.map((s, i) => (
                              <Avatar key={i} className="h-10 w-10 border-[3px] border-white ring-1 ring-slate-100 shadow-sm">
                                <AvatarFallback className={cn(
                                   "text-[10px] font-black",
                                   s === "Unassigned" ? "bg-slate-100 text-slate-400" : "bg-emerald-100 text-emerald-700"
                                )}>
                                   {s === "Unassigned" ? "?" : s.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                          ))}
                        </div>
                        {job.staff.includes("Unassigned") && (
                           <Button size="sm" variant="ghost" className="text-[10px] font-bold text-emerald-600 hover:text-emerald-700 h-8 px-2 bg-emerald-50 hover:bg-emerald-100 rounded-lg">
                              + Assign
                           </Button>
                        )}
                      </div>
                   </div>

                   <div className="flex items-center gap-2 mt-auto">
                      <Button className="flex-1 bg-slate-900 text-white hover:bg-slate-800 font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-slate-200 rounded-xl h-11 transition-all hover:scale-105 active:scale-95">
                         View Details
                      </Button>
                      <DropdownMenu>
                         <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="h-11 w-11 rounded-xl border-slate-200 text-slate-400 hover:text-slate-900">
                               <MoreVertical className="h-4 w-4" />
                            </Button>
                         </DropdownMenuTrigger>
                         <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem>Edit Job</DropdownMenuItem>
                            <DropdownMenuItem>Reassign Staff</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-rose-600">Cancel Job</DropdownMenuItem>
                         </DropdownMenuContent>
                      </DropdownMenu>
                   </div>
                </div>

              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
