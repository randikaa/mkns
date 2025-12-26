"use client"

import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  CreditCard,
  MessageSquare,
  Clock
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ClientDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Client Hub</h1>
          <p className="text-slate-500 mt-1">Keep track of your cleaning schedule and billing.</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200">
          <Sparkles className="mr-2 h-4 w-4" /> Book a New Cleaning
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Bookings */}
        <div className="lg:col-span-2 space-y-6">
           <h2 className="text-xl font-bold text-slate-900">Current & Upcoming</h2>
           
           <Card className="border-emerald-100 bg-emerald-50/30 overflow-hidden">
             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
               <div className="flex items-center gap-2">
                 <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                   <Clock className="h-4 w-4 text-emerald-600" />
                 </div>
                 <CardTitle className="text-lg">Next Appointment</CardTitle>
               </div>
               <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-white px-2 py-1 rounded-md border border-emerald-100 shadow-sm">
                 Confirmed
               </span>
             </CardHeader>
             <CardContent className="pt-4 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <div className="space-y-3">
                     <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Date & Time</p>
                     <p className="text-lg font-bold text-slate-900">Friday, Oct 24</p>
                     <p className="text-sm text-slate-500">Starts at 10:00 AM</p>
                   </div>
                   <div className="space-y-3">
                     <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Service Type</p>
                     <p className="text-lg font-bold text-slate-900 underline decoration-emerald-400 decoration-2">Commercial Gold</p>
                     <p className="text-sm text-slate-500">2 Professional Cleaners</p>
                   </div>
                   <div className="space-y-3">
                     <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Address</p>
                     <p className="text-lg font-bold text-slate-900">705A Bell St.</p>
                     <p className="text-sm text-slate-500">Heidelberg West</p>
                   </div>
                </div>
                <div className="mt-8 flex gap-3">
                   <Button variant="outline" size="sm" className="bg-white">Reschedule</Button>
                   <Button variant="ghost" size="sm" className="text-slate-500">Cancel Booking</Button>
                </div>
             </CardContent>
           </Card>

           <div className="space-y-4 pt-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Previous Services</h3>
              {[1, 2].map((i) => (
                <div key={i} className="group flex items-center justify-between p-4 rounded-xl border bg-white hover:border-emerald-200 hover:shadow-md transition-all cursor-pointer">
                   <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                         <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                         <p className="text-sm font-bold text-slate-900 italic underline decoration-slate-200 group-hover:decoration-emerald-200">Deep Carpet Cleaning</p>
                         <p className="text-xs text-slate-500 mt-0.5">Completed on Sept 14, 2025</p>
                      </div>
                   </div>
                   <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
           </div>
        </div>

        {/* Action Sidebar */}
        <div className="space-y-6">
           <Card className="border-none shadow-sm shadow-slate-200">
             <CardHeader>
               <CardTitle className="text-lg">Quick Actions</CardTitle>
             </CardHeader>
             <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start gap-3 h-12 hover:bg-emerald-50 hover:text-emerald-700">
                  <CreditCard className="h-5 w-5 opacity-70" /> View & Pay Invoices
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 h-12 hover:bg-emerald-50 hover:text-emerald-700">
                  <MessageSquare className="h-5 w-5 opacity-70" /> Contact Support
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 h-12 hover:bg-emerald-50 hover:text-emerald-700">
                  <Calendar className="h-5 w-5 opacity-70" /> Manage Subscription
                </Button>
             </CardContent>
           </Card>

           <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none">
             <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">Refer a Neighbor</h3>
                <p className="text-slate-400 text-sm mb-6 font-medium">Get $25 off your next booking when you refer a new client.</p>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold tracking-tight">
                  Share Your Link
                </Button>
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  )
}
