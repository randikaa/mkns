"use client"

import { 
  Calendar, 
  Clock, 
  MapPin, 
  Navigation, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Timer,
  MoreVertical,
  ExternalLink,
  MessageCircle
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const staffJobs = [
  {
    id: "J-102",
    title: "Residential Deep Clean",
    time: "08:30 AM - 11:30 AM",
    location: "St Kilda, Melbourne",
    status: "Completed",
    priority: "Standard",
    client: "Sarah Johnson"
  },
  {
    id: "J-105",
    title: "Glass & Window Cleaning",
    time: "12:00 PM - 03:00 PM",
    location: "Docklands Office, Tower 2",
    status: "In Progress",
    priority: "High",
    client: "Michael Chen"
  },
  {
    id: "J-109",
    title: "Gym Sanitization",
    time: "04:00 PM - 06:30 PM",
    location: "South Melbourne Sports Hub",
    status: "Upcoming",
    priority: "Medium",
    client: "Dave Miller"
  }
]

export default function StaffSchedulePage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Deployment Schedule</h1>
          <p className="text-slate-500 mt-1 italic font-medium">Manage your assignments and report progress in real-time.</p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" className="bg-white gap-2 font-black text-[10px] uppercase tracking-widest py-6 h-auto">
              <Calendar className="h-4 w-4" /> Weekly View
           </Button>
           <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200 gap-2 font-black text-[10px] uppercase tracking-widest py-6 h-auto px-6">
              Request Leave
           </Button>
        </div>
      </div>

      <Card className="border-none shadow-sm shadow-slate-200 overflow-hidden">
         <CardHeader className="bg-slate-50 border-b py-6 px-8 flex flex-row items-center justify-between">
            <div className="flex items-center gap-4">
               <CardTitle className="text-lg font-black uppercase tracking-widest italic">Today, Oct 24</CardTitle>
               <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-900"><ChevronLeft className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-900"><ChevronRight className="h-4 w-4" /></Button>
               </div>
            </div>
            <Badge variant="outline" className="border-none bg-emerald-100 text-emerald-700 font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-lg shadow-sm">3 ASSIGNMENTS</Badge>
         </CardHeader>
         <CardContent className="p-0">
            <div className="divide-y divide-slate-100">
               {staffJobs.map((job, i) => (
                  <div key={i} className="group p-8 hover:bg-slate-50/50 transition-colors relative">
                     <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                        <div className="flex items-center gap-6 min-w-[300px]">
                           <div className={cn(
                              "h-16 w-16 rounded-2xl flex flex-col items-center justify-center font-black italic shadow-sm border-2 border-white transition-all group-hover:scale-105 duration-500",
                              job.status === "Completed" ? "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100" :
                              job.status === "In Progress" ? "bg-blue-50 text-blue-600 ring-1 ring-blue-100 animate-pulse" : "bg-white text-slate-400 ring-1 ring-slate-100"
                           )}>
                              <span className="text-[10px] uppercase tracking-widest mb-0.5">{job.time.split(' ')[0]}</span>
                              <span className="text-xl leading-none">{job.time.split(' ')[1]}</span>
                           </div>
                           <div className="space-y-1">
                              <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">{job.id}</p>
                              <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors uppercase tracking-tight italic underline decoration-slate-200 decoration-2 underline-offset-4">{job.title}</h3>
                              <p className="text-sm font-bold text-slate-500 flex items-center gap-1.5"><Navigation className="h-3.5 w-3.5" /> {job.location}</p>
                           </div>
                        </div>

                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="space-y-2">
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Client Contact</p>
                              <div className="flex items-center gap-2">
                                 <p className="text-sm font-black text-slate-700 italic">{job.client}</p>
                                 <Button variant="ghost" size="icon" className="h-8 w-8 text-emerald-600 hover:bg-emerald-50 rounded-full"><MessageCircle className="h-4 w-4" /></Button>
                              </div>
                           </div>
                           <div className="space-y-2">
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Job Metrics</p>
                              <div className="flex items-center gap-3">
                                 <Badge variant="outline" className={cn(
                                    "border-none px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded-lg",
                                    job.status === "Completed" ? "bg-emerald-100 text-emerald-700" :
                                    job.status === "In Progress" ? "bg-blue-100 text-blue-700" : "bg-slate-200 text-slate-500"
                                 )}>
                                    {job.status}
                                 </Badge>
                                 {job.priority === "High" && (
                                    <span className="text-[8px] font-black text-rose-600 uppercase tracking-widest flex items-center gap-1"><AlertCircle className="h-3 w-3" /> Urgent</span>
                                 )}
                              </div>
                           </div>
                        </div>

                        <div className="flex items-center gap-3 w-full lg:w-auto pt-6 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                           {job.status === "In Progress" ? (
                              <Button className="flex-1 lg:flex-none h-12 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-100 text-white font-black uppercase tracking-widest text-[10px] px-8 rounded-xl gap-2">
                                 <Timer className="h-4 w-4 animate-spin" /> Finish Job
                              </Button>
                           ) : job.status === "Upcoming" ? (
                              <Button className="flex-1 lg:flex-none h-12 bg-slate-900 hover:bg-slate-800 shadow-lg shadow-slate-100 text-white font-black uppercase tracking-widest text-[10px] px-8 rounded-xl">
                                 Start Shift
                              </Button>
                           ) : (
                              <Button variant="outline" className="flex-1 lg:flex-none h-12 border-slate-200 text-slate-400 font-black uppercase tracking-widest text-[10px] px-8 rounded-xl hover:bg-slate-50">
                                 View Logs
                              </Button>
                           )}
                           <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                 <Button variant="ghost" size="icon" className="h-12 w-12 text-slate-300 rounded-xl hover:bg-slate-50">
                                    <MoreVertical className="h-5 w-5" />
                                 </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                 <DropdownMenuItem className="gap-2 font-bold text-xs"><Navigation className="h-4 w-4" /> Open Navigation</DropdownMenuItem>
                                 <DropdownMenuItem className="gap-2 font-bold text-xs"><ExternalLink className="h-4 w-4" /> View Service Details</DropdownMenuItem>
                                 <DropdownMenuItem className="gap-2 font-bold text-xs text-rose-600"><AlertCircle className="h-4 w-4" /> Report Delay</DropdownMenuItem>
                              </DropdownMenuContent>
                           </DropdownMenu>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </CardContent>
      </Card>

      <Card className="border-none shadow-sm shadow-slate-200 bg-slate-900 text-white relative overflow-hidden">
         <CardContent className="p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-2 text-center md:text-left">
               <h3 className="text-2xl font-black italic tracking-tight">Need Support in the Field?</h3>
               <p className="text-slate-400 font-medium max-w-sm">Contact your supervisor instantly for equipment issues or site access problems.</p>
            </div>
            <div className="flex gap-4">
               <Button variant="outline" className="h-14 border-white/10 bg-white/5 text-white font-black uppercase tracking-[0.2em] text-[10px] px-10 rounded-2xl hover:bg-white/10 transition-all">Support Center</Button>
               <Button className="h-14 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black uppercase tracking-[0.2em] text-[10px] px-10 rounded-2xl shadow-xl shadow-emerald-500/20">Call Supervisor</Button>
            </div>
         </CardContent>
         <CheckCircle2 className="absolute -left-8 -bottom-8 h-48 w-48 text-white/5 rotate-12" />
      </Card>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
