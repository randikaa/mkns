"use client"

import { 
  Bell, 
  Megaphone, 
  Info, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight, 
  Calendar, 
  Clock, 
  User,
  Search,
  Pin,
  Heart
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const announcements = [
  {
    id: "ANN-001",
    title: "New Safety Protocols for Industrial Cleaning",
    desc: "Please review the updated chemical handling guidelines for Q4. Mandatory training session tomorrow at 9 AM.",
    date: "Today",
    time: "10:30 AM",
    type: "Urgent",
    author: "Safety Dept",
    pinned: true,
    read: false
  },
  {
    id: "ANN-002",
    title: "Holiday Bonus Structure Announced",
    desc: "We are excited to share the details of this year's performance-based holiday bonus program.",
    date: "Oct 22, 2023",
    time: "02:00 PM",
    type: "Update",
    author: "HR Office",
    pinned: false,
    read: true
  },
  {
    id: "ANN-003",
    title: "Equipment Upgrade Initiative",
    desc: "New high-performance vacuum units are now available for pickup at the main warehouse.",
    date: "Oct 20, 2023",
    time: "11:45 AM",
    type: "Logistics",
    author: "Operations",
    pinned: false,
    read: true
  },
  {
    id: "ANN-004",
    title: "Employee of the Month: John Smith!",
    desc: "Congratulations to John for maintaining a 5.0 rating for three consecutive months.",
    date: "Oct 01, 2023",
    time: "09:00 AM",
    type: "Celebration",
    author: "Management",
    pinned: false,
    read: true
  }
]

export default function StaffAnnouncementsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
             <Megaphone className="h-8 w-8 text-emerald-600" /> Dispatch Center
          </h1>
          <p className="text-slate-500 mt-1 italic font-medium">Internal communications, protocol updates, and company milestones.</p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" className="h-12 border-slate-200 bg-white font-black text-[10px] uppercase tracking-widest px-6 rounded-xl hover:text-emerald-600">Mark All Read</Button>
           <Button className="h-12 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 font-black text-[10px] uppercase tracking-widest px-6 rounded-xl shadow-sm border border-emerald-100">Notification Settings</Button>
        </div>
      </div>

      <div className="relative group/search max-w-2xl">
         <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 group-focus-within/search:text-emerald-500 transition-colors" />
         <Input 
            placeholder="Search documentation or updates..." 
            className="pl-14 h-16 bg-white border-none shadow-sm shadow-slate-200 rounded-3xl font-bold italic focus-visible:ring-emerald-500/10 placeholder:text-slate-300" 
         />
      </div>

      <div className="grid grid-cols-1 gap-6 pb-12">
        {announcements.map((ann, i) => (
          <Card key={ann.id} className={cn(
            "border-none shadow-sm shadow-slate-200 group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5",
            !ann.read && "ring-2 ring-emerald-500/20"
          )}>
            <div className="flex flex-col lg:flex-row">
               <div className={cn(
                  "w-full lg:w-48 p-8 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-slate-100 bg-slate-50/50",
                  ann.type === "Urgent" && "bg-rose-50/50"
               )}>
                  <div className={cn(
                     "h-14 w-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm border-2 border-white transition-transform group-hover:scale-110 duration-500",
                     ann.type === "Urgent" ? "bg-rose-500 text-white" :
                     ann.type === "Update" ? "bg-blue-500 text-white" :
                     ann.type === "Celebration" ? "bg-amber-100 text-amber-600" : "bg-emerald-500 text-white"
                  )}>
                     {ann.type === "Urgent" ? <AlertTriangle className="h-6 w-6" /> : 
                      ann.type === "Celebration" ? <Heart className="h-6 w-6 fill-amber-500" /> : <Info className="h-6 w-6" />}
                  </div>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">{ann.id}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest mt-1 italic">{ann.author}</p>
               </div>

               <div className="flex-1 p-8 lg:p-10 space-y-6 relative">
                  {!ann.read && (
                     <div className="absolute top-0 right-0">
                        <div className="bg-emerald-500 text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-bl-xl shadow-lg">New</div>
                     </div>
                  )}

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                     <div className="space-y-2">
                        <div className="flex items-center gap-3">
                           {ann.pinned && <Pin className="h-4 w-4 text-emerald-500 rotate-45" />}
                           <h3 className="text-2xl font-black text-slate-900 tracking-tight italic underline decoration-slate-100 decoration-4 underline-offset-8 group-hover:decoration-emerald-100 transition-colors">
                              {ann.title}
                           </h3>
                        </div>
                        <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                           <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {ann.date}</span>
                           <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {ann.time}</span>
                        </div>
                     </div>
                     <Badge className={cn(
                        "border-none px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-sm",
                        ann.type === "Urgent" ? "bg-rose-50 text-rose-700" :
                        ann.type === "Update" ? "bg-blue-50 text-blue-700" :
                        ann.type === "Celebration" ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"
                     )}>
                        {ann.type}
                     </Badge>
                  </div>

                  <p className="text-base text-slate-600 font-medium leading-relaxed max-w-4xl italic">
                     {ann.desc}
                  </p>

                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                     <Button variant="ghost" className="text-emerald-600 font-black text-[10px] uppercase tracking-widest h-auto p-0 hover:bg-transparent hover:text-emerald-700 group/link italic">
                        View Full Details <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                     </Button>
                     {ann.read && <div className="flex items-center gap-1.5 text-[9px] font-black text-slate-300 uppercase tracking-widest"><CheckCircle2 className="h-3.5 w-3.5" /> Confirmed Receipt</div>}
                  </div>
               </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
