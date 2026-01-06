"use client"

import { useState, useEffect } from "react"
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
import { AddEventDialog } from "@/components/AddEventDialog"
import { useEvents } from "@/hooks/use-events"

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export default function AdminSchedulesPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const { events, next48HourEvents, fetchEvents, fetchNext48HourEvents } = useEvents()

  useEffect(() => {
    // Fetch events for current month
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
    
    fetchEvents(startOfMonth.toISOString(), endOfMonth.toISOString())
  }, [currentDate, fetchEvents])

  const handleEventAdded = () => {
    // Refresh events after adding new event
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
    
    fetchEvents(startOfMonth.toISOString(), endOfMonth.toISOString())
    fetchNext48HourEvents()
  }

  const handleTodayClick = () => {
    const today = new Date()
    setCurrentDate(today)
    setSelectedDate(today)
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const getEventsForDate = (date: number) => {
    const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), date)
    return events.filter(event => {
      const eventDate = new Date(event.startTime)
      return eventDate.toDateString() === targetDate.toDateString()
    })
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Scheduled': return 'bg-blue-50 text-blue-700 border-blue-200'
      case 'In Progress': return 'bg-emerald-50 text-emerald-700 border-emerald-200'
      case 'Completed': return 'bg-gray-50 text-gray-700 border-gray-200'
      case 'Cancelled': return 'bg-red-50 text-red-700 border-red-200'
      default: return 'bg-gray-50 text-gray-700 border-gray-200'
    }
  }

  const currentMonth = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  const today = new Date()
  const isToday = (date: number) => {
    const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), date)
    return targetDate.toDateString() === today.toDateString()
  }

  // Get the first day of the month and calculate calendar grid
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
  const startingDayOfWeek = firstDayOfMonth.getDay()
  const daysInMonth = lastDayOfMonth.getDate()

  // Create calendar grid
  const calendarDays = []
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null)
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Master Schedule</h1>
          <p className="text-slate-500 mt-1">View and manage all service bookings across the calendar.</p>
        </div>
        <div className="flex items-center gap-2">
           <Button 
             variant="outline" 
             className="bg-white"
             onClick={handleTodayClick}
           >
             Today
           </Button>
           <AddEventDialog onEventAdded={handleEventAdded} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Calendar Grid */}
        <Card className="lg:col-span-3 border-none shadow-sm shadow-slate-200 overflow-hidden">
          <CardHeader className="border-b bg-slate-50/50 flex flex-row items-center justify-between py-4">
             <div className="flex items-center gap-4">
                <CardTitle className="text-lg font-bold">{currentMonth}</CardTitle>
                <div className="flex items-center gap-1">
                   <Button 
                     variant="ghost" 
                     size="icon" 
                     className="h-8 w-8 text-slate-400 hover:text-slate-900"
                     onClick={() => navigateMonth('prev')}
                   >
                     <ChevronLeft className="h-4 w-4" />
                   </Button>
                   <Button 
                     variant="ghost" 
                     size="icon" 
                     className="h-8 w-8 text-slate-400 hover:text-slate-900"
                     onClick={() => navigateMonth('next')}
                   >
                     <ChevronRight className="h-4 w-4" />
                   </Button>
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
                {calendarDays.map((day, index) => {
                  if (day === null) {
                    return <div key={index} className="min-h-[120px] p-2 border-r border-b border-slate-100" />
                  }

                  const dayEvents = getEventsForDate(day)
                  const isTodayDate = isToday(day)
                  
                  return (
                    <div key={index} className={cn(
                      "min-h-[120px] p-2 border-r border-b border-slate-100 hover:bg-slate-50/50 transition-colors relative group",
                      isTodayDate && "bg-emerald-50/20"
                    )}>
                       <span className={cn(
                         "text-xs font-bold inline-flex items-center justify-center h-6 w-6 rounded-full mb-2",
                         isTodayDate ? "bg-emerald-600 text-white" : "text-slate-400"
                       )}>
                         {day}
                       </span>
                       
                       <div className="space-y-1">
                          {dayEvents.slice(0, 2).map((event, idx) => (
                             <div key={idx} className="p-1 rounded bg-white border border-slate-100 text-[10px] shadow-sm">
                                <p className="font-bold text-slate-700 truncate">{event.title}</p>
                                <p className="text-slate-400 font-medium">
                                  {formatTime(event.startTime)} • {event.staff ? `${event.staff.firstName} ${event.staff.lastName}` : 'Unassigned'}
                                </p>
                                <Badge className={cn("text-[8px] px-1 py-0 h-4", getStatusColor(event.status))}>
                                  {event.status}
                                </Badge>
                             </div>
                          ))}
                          {dayEvents.length > 2 && (
                            <div className="text-[10px] text-slate-400 font-medium text-center">
                              +{dayEvents.length - 2} more
                            </div>
                          )}
                       </div>
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
                   {next48HourEvents.length > 0 ? (
                     next48HourEvents.map((event, i) => (
                        <div key={i} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                           <div className="flex items-start gap-3">
                              <div className="h-8 w-8 rounded bg-emerald-50 flex items-center justify-center shrink-0">
                                 <CalendarIcon className="h-4 w-4 text-emerald-600" />
                              </div>
                              <div className="min-w-0 flex-1">
                                 <p className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors truncate">{event.title}</p>
                                 <div className="flex flex-col gap-1 mt-1">
                                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                                      <Clock className="h-3 w-3" /> {formatTime(event.startTime)}
                                    </span>
                                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                                      <Users className="h-3 w-3" /> {event.staff ? `${event.staff.firstName} ${event.staff.lastName}` : 'Unassigned'}
                                    </span>
                                    {event.location && (
                                      <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                                        <MapPin className="h-3 w-3" /> {event.location}
                                      </span>
                                    )}
                                 </div>
                                 <Badge className={cn("text-[8px] px-2 py-1 mt-2", getStatusColor(event.status))}>
                                   {event.status}
                                 </Badge>
                              </div>
                           </div>
                        </div>
                     ))
                   ) : (
                     <div className="p-4 text-center text-slate-500 text-sm">
                       No events in the next 48 hours
                     </div>
                   )}
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
                    <p className="text-slate-400 text-xs mb-6 font-medium leading-relaxed">4 members are currently offline. Check their reported leave before scheduling new events.</p>
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
