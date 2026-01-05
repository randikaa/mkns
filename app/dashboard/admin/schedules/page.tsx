"use client"

import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  MapPin, 
  Users,
  Plus,
  Filter
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const currentMonth = "October 2023"

const scheduleItems = [
  { day: 24, items: [
    { time: "10:00 AM", title: "Acme Corp Office Clean", staff: "John S.", type: "Commercial" },
    { time: "02:30 PM", title: "Westside Gym Steam", staff: "Robert W.", type: "Maintenance" }
  ]},
  { day: 25, items: [
    { time: "09:00 AM", title: "Private Residence Lease", staff: "Pending", type: "Deep Clean" }
  ]},
]

export default function AdminSchedulesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Master Schedule</h1>
          <p className="text-slate-500 mt-1">View and manage all service bookings across the calendar.</p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" className="bg-white">Today</Button>
           <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200 uppercase tracking-wider text-xs font-bold py-6 px-6">
             <Plus className="mr-2 h-4 w-4" /> New Event
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Calendar Grid */}
        <Card className="lg:col-span-3 border-none shadow-sm shadow-slate-200 overflow-hidden">
          <CardHeader className="border-b bg-slate-50/50 flex flex-row items-center justify-between py-4">
             <div className="flex items-center gap-4">
                <CardTitle className="text-lg font-bold">{currentMonth}</CardTitle>
                <div className="flex items-center gap-1">
                   <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-900"><ChevronLeft className="h-4 w-4" /></Button>
                   <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-900"><ChevronRight className="h-4 w-4" /></Button>
                </div>
             </div>
             <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="bg-white h-8 text-xs font-bold">Month</Button>
                <Button variant="ghost" size="sm" className="h-8 text-xs font-bold text-slate-400">Week</Button>
                <Button variant="ghost" size="sm" className="h-8 text-xs font-bold text-slate-400">Day</Button>
             </div>
          </CardHeader>
          <CardContent className="p-0">
             <div className="grid grid-cols-7 border-b bg-slate-50/30">
                {days.map(day => (
                  <div key={day} className="py-3 text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                    {day}
                  </div>
                ))}
             </div>
             <div className="grid grid-cols-7 border-collapse">
                {Array.from({ length: 31 }).map((_, i) => {
                  const day = i + 1
                  const items = scheduleItems.find(s => s.day === day)?.items || []
                  
                  return (
                    <div key={i} className={cn(
                      "min-h-[120px] p-2 border-r border-b border-slate-100 hover:bg-slate-50/50 transition-colors relative group",
                      day === 24 && "bg-emerald-50/20"
                    )}>
                       <span className={cn(
                         "text-xs font-bold inline-flex items-center justify-center h-6 w-6 rounded-full mb-2",
                         day === 24 ? "bg-emerald-600 text-white" : "text-slate-400"
                       )}>
                         {day}
                       </span>
                       
                       <div className="space-y-1">
                          {items.map((item, idx) => (
                             <div key={idx} className="p-1 rounded bg-white border border-slate-100 text-[10px] shadow-sm truncate">
                                <p className="font-bold text-slate-700 truncate">{item.title}</p>
                                <p className="text-slate-400 font-medium">{item.time} • {item.staff}</p>
                             </div>
                          ))}
                       </div>

                       {day === 25 && <div className="absolute inset-x-0 bottom-0 h-1 bg-amber-400" />}
                    </div>
                  )
                })}
             </div>
          </CardContent>
        </Card>

        {/* Schedule Sidebar */}
        <div className="space-y-6">
           <Card className="border-none shadow-sm shadow-slate-200">
             <CardHeader className="pb-4">
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                   <Clock className="h-4 w-4" /> Next 48 Hours
                </CardTitle>
             </CardHeader>
             <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                   {scheduleItems.flatMap(s => s.items).map((item, i) => (
                      <div key={i} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                         <div className="flex items-start gap-3">
                            <div className="h-8 w-8 rounded bg-emerald-50 flex items-center justify-center shrink-0">
                               <CalendarIcon className="h-4 w-4 text-emerald-600" />
                            </div>
                            <div className="min-w-0 flex-1">
                               <p className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors truncate">{item.title}</p>
                               <div className="flex flex-col gap-1 mt-1">
                                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5"><Clock className="h-3 w-3" /> {item.time}</span>
                                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5"><Users className="h-3 w-3" /> {item.staff}</span>
                               </div>
                            </div>
                         </div>
                      </div>
                   ))}
                </div>
                <Button variant="ghost" className="w-full text-[10px] font-black uppercase tracking-widest text-slate-400 py-4 h-auto hover:text-emerald-600 transition-colors">
                   View Full Agenda
                </Button>
             </CardContent>
           </Card>

           <Card className="bg-slate-900 border-none shadow-sm shadow-slate-200 text-white overflow-hidden relative">
              <CardContent className="p-6">
                 <div className="relative z-10">
                    <h3 className="font-bold text-lg mb-2">Staff Availability</h3>
                    <p className="text-slate-400 text-xs mb-6 font-medium leading-relaxed">4 members are currently offline. Check their reported leave before scheduling new jobs.</p>
                    <Button className="w-full bg-white text-slate-900 hover:bg-slate-50 font-bold uppercase tracking-widest text-[10px] py-4 h-auto">
                       Manage Leave
                    </Button>
                 </div>
                 <Badge className="absolute -right-4 -top-1 bg-emerald-500/20 text-emerald-400 border-none text-[8px] uppercase font-black px-6 py-2 rotate-12">System Alert</Badge>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
