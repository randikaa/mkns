"use client"

import { 
  ClipboardList, 
  Search, 
  Calendar, 
  MapPin, 
  Clock, 
  MoreVertical,
  Plus,
  CheckCircle2,
  Timer,
  ExternalLink,
  Star,
  MessageCircle,
  AlertCircle
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

const bookings = [
  {
    id: "BK-9021",
    service: "Full Office Sanitization",
    date: "Oct 24, 2023",
    time: "10:00 AM",
    status: "Confirmed",
    location: "705A Bell St, Heidelberg West",
    cleaners: ["John S.", "Emily D."],
    cost: "$240.00"
  },
  {
    id: "BK-8955",
    service: "Deep Carpet Steam Clean",
    date: "Sept 14, 2023",
    time: "02:30 PM",
    status: "Completed",
    location: "705A Bell St, Heidelberg West",
    cleaners: ["Robert W."],
    cost: "$120.00",
    rating: 5
  },
  {
    id: "BK-9050",
    service: "Window & Glass Cleaning",
    date: "Nov 02, 2023",
    time: "09:00 AM",
    status: "Pending",
    location: "705A Bell St, Heidelberg West",
    cleaners: [],
    cost: "$85.00"
  }
]

export default function ClientBookingsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">My Bookings</h1>
          <p className="text-slate-500 mt-1">Manage your upcoming assignments and review service history.</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200 uppercase tracking-widest text-[10px] font-black py-7 px-8">
          <Plus className="mr-2 h-4 w-4" /> Book New Service
        </Button>
      </div>

      <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm shadow-slate-200 border border-slate-100">
         <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input 
              placeholder="Search by Service, Date or Booking ID..." 
              className="pl-12 bg-transparent border-none focus-visible:ring-0 text-slate-700 h-10 italic font-medium"
            />
         </div>
         <Button variant="ghost" className="text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] px-6 h-10 hover:text-emerald-600">Filter History</Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {bookings.map((booking) => (
          <Card key={booking.id} className="border-none shadow-sm shadow-slate-200 group overflow-hidden">
             <div className="flex flex-col lg:flex-row">
                <div className={cn(
                  "w-full lg:w-48 p-6 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-slate-100 bg-slate-50/30 group-hover:bg-emerald-50/50 transition-colors",
                  booking.status === "Confirmed" && "border-l-4 border-l-emerald-500"
                )}>
                   <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-3">{booking.id}</p>
                   <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 ring-1 ring-slate-100">
                      <Calendar className="h-6 w-6 text-emerald-600" />
                   </div>
                   <p className="text-sm font-black text-slate-900 leading-tight mb-1 italic underline decoration-slate-200 decoration-2 underline-offset-2">{booking.date}</p>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{booking.time}</p>
                </div>

                <div className="flex-1 p-6 lg:p-8 space-y-6">
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                         <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors uppercase tracking-tight mb-1 italic">
                            {booking.service}
                         </h3>
                         <div className="flex items-center gap-4">
                            <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {booking.location}</span>
                         </div>
                      </div>
                      <Badge variant="outline" className={cn(
                        "border-none px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] rounded-md",
                        booking.status === "Confirmed" ? "bg-emerald-50 text-emerald-700" :
                        booking.status === "Completed" ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-500"
                      )}>
                        {booking.status}
                      </Badge>
                   </div>

                   <div className="flex flex-col md:flex-row items-start md:items-center gap-8 pt-6 border-t border-slate-100">
                      <div className="space-y-2">
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Team Assigned</p>
                         <div className="flex items-center gap-2">
                            {booking.cleaners.length > 0 ? (
                               <div className="flex -space-x-2">
                                  {booking.cleaners.map((c, i) => (
                                     <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600 shadow-sm" title={c}>{c.split(' ')[0][0]}</div>
                                  ))}
                               </div>
                            ) : (
                               <span className="text-xs font-bold text-slate-400 italic">Assigning team...</span>
                            )}
                         </div>
                      </div>

                      <div className="space-y-2">
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Amount</p>
                         <p className="text-sm font-black text-emerald-700 italic">{booking.cost}</p>
                      </div>

                      <div className="md:ml-auto flex items-center gap-2">
                         {booking.status === "Completed" && booking.rating && (
                            <div className="flex items-center gap-0.5 text-amber-500 mr-4">
                               {Array.from({ length: 5 }).map((_, i) => (
                                  <Star key={i} className={cn("h-3 w-3", i < booking.rating ? "fill-amber-500" : "text-slate-200")} />
                               ))}
                            </div>
                         )}
                         <Button variant="outline" className="border-slate-200 text-slate-600 font-black uppercase tracking-widest text-[10px] h-10 px-6 hover:bg-slate-50">View Details</Button>
                         <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                               <Button variant="ghost" size="icon" className="h-10 w-10 text-slate-400">
                                  <MoreVertical className="h-4 w-4" />
                               </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                               <DropdownMenuItem className="gap-2"><MessageCircle className="h-4 w-4" /> Contact Cleaner</DropdownMenuItem>
                               <DropdownMenuItem className="gap-2"><ExternalLink className="h-4 w-4" /> Receipt PDF</DropdownMenuItem>
                               <DropdownMenuSeparator />
                               <DropdownMenuItem className="text-rose-600 gap-2"><AlertCircle className="h-4 w-4" /> Report Issue</DropdownMenuItem>
                            </DropdownMenuContent>
                         </DropdownMenu>
                      </div>
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
