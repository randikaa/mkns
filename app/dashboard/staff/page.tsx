"use client"

import { useEffect, useMemo } from "react"
import { 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Star,
  Award,
  AlertTriangle
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEvents } from "@/hooks/use-events"

export default function StaffDashboard() {
  const { events, fetchEvents, loading } = useEvents()

  useEffect(() => {
    // Fetch events for the staff portal
    const today = new Date()
    const startOfDay = new Date(today.setHours(0, 0, 0, 0)).toISOString()
    const endOfDay = new Date(today.setHours(23, 59, 59, 999)).toISOString()
    
    fetchEvents(startOfDay, endOfDay)
  }, [fetchEvents])

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-emerald-100 text-emerald-800'
      case 'In Progress': return 'bg-blue-100 text-blue-800'
      case 'Scheduled': return 'bg-slate-100 text-slate-800'
      case 'Cancelled': return 'bg-rose-100 text-rose-800'
      default: return 'bg-slate-100 text-slate-800'
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Staff Portal</h1>
        <p className="text-slate-500 mt-1">Welcome back! Here's your schedule for today.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Today's Schedule */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-emerald-600" /> Today's Assignments
          </h2>
          
          {loading ? (
            <div className="text-center py-8 text-slate-500">Loading assignments...</div>
          ) : events.length > 0 ? (
            events.map((job, i) => (
              <Card key={i} className="border-none shadow-sm shadow-slate-200 overflow-hidden group">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-32 bg-slate-50 flex flex-col items-center justify-center p-4 border-r">
                     <p className="text-sm font-bold text-slate-900">{formatTime(job.startTime).split(' ')[0]}</p>
                     <p className="text-xs font-medium text-slate-500">{formatTime(job.startTime).split(' ')[1]}</p>
                  </div>
                  <div className="flex-1 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors uppercase tracking-tight text-sm">
                        {job.title}
                      </h3>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm text-slate-500 flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" /> {job.location || 'No location set'}
                        </p>
                        <p className="text-xs text-slate-400 flex items-center gap-1.5 italic">
                          <Clock className="h-3.5 w-3.5" /> Client: {job.client?.companyName || 'Private'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={cn(
                        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                        getStatusStyles(job.status)
                      )}>
                        {job.status}
                      </span>
                      <Button size="sm" variant="ghost" className="text-slate-400 hover:text-emerald-600">
                         Details
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <Card className="p-8 text-center text-slate-500 border-dashed">
              No assignments scheduled for today.
            </Card>
          )}
        </div>

        {/* Sidebar panels */}
        <div className="space-y-8">
           {/* Performance */}
           <Card className="border-none shadow-sm shadow-slate-200 bg-emerald-600 text-white">
             <CardHeader className="pb-2">
               <CardTitle className="text-lg flex items-center gap-2">
                 <Award className="h-5 w-5" /> Your Performance
               </CardTitle>
             </CardHeader>
             <CardContent>
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-1">
                     <p className="text-xs text-emerald-100">Jobs Completed</p>
                     <p className="text-2xl font-bold">142</p>
                   </div>
                   <div className="space-y-1">
                     <p className="text-xs text-emerald-100">Avg Rating</p>
                     <div className="flex items-center gap-1 text-2xl font-bold italic underline decoration-emerald-400">
                       <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /> 4.9
                     </div>
                   </div>
                </div>
                <div className="mt-6 pt-6 border-t border-emerald-500/50 flex items-center justify-between">
                   <p className="text-sm font-medium">Top Worker Badge</p>
                   <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                </div>
             </CardContent>
           </Card>

           {/* Announcements */}
           <Card className="border-none shadow-sm shadow-slate-200">
             <CardHeader>
               <CardTitle className="text-lg">Announcements</CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
                <div className="p-3 rounded-lg bg-amber-50 border border-amber-100 flex gap-3">
                   <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                   <div>
                     <p className="text-sm font-bold text-amber-900">New Safety Protocols</p>
                     <p className="text-xs text-amber-700 mt-0.5">Please review the updated COVID cleaning guidelines.</p>
                   </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <p className="text-sm font-bold text-slate-900">Holiday Pay Update</p>
                  <p className="text-xs text-slate-500 mt-0.5">Payroll processing for New Year holidays...</p>
                </div>
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
