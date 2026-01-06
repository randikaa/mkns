"use client"

import { useEffect, useMemo } from "react"
import { 
  Users, 
  ClipboardList, 
  TrendingUp, 
  DollarSign,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Calendar
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEvents } from "@/hooks/use-events"
import Link from "next/link"

export default function AdminDashboard() {
  const { events, fetchEvents, loading } = useEvents()

  useEffect(() => {
    // Fetch events for the dashboard
    fetchEvents()
  }, [fetchEvents])

  // Get the 5 most recent events
  const recentEvents = useMemo(() => {
    return [...events]
      .sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime())
      .slice(0, 5)
  }, [events])

  const stats = [
    { title: "Total Revenue", value: "$45,231", icon: DollarSign, trend: "+12.5%", positive: true },
    { title: "Active Clients", value: "1,204", icon: Users, trend: "+3.2%", positive: true },
    { title: "Staff Members", value: "48", icon: Users, trend: "+2 new", positive: true },
    { title: "Active Services", value: "156", icon: ClipboardList, trend: "+8%", positive: true },
  ]

  const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInMs = Math.abs(now.getTime() - date.getTime())
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60))
    const diffInDays = Math.floor(diffInHours / 24)

    if (diffInDays > 0) return `${diffInDays}d ${date > now ? 'from now' : 'ago'}`
    if (diffInHours > 0) return `${diffInHours}h ${date > now ? 'from now' : 'ago'}`
    return "Just now"
  }

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Scheduled': return 'bg-blue-50 text-blue-700'
      case 'In Progress': return 'bg-emerald-50 text-emerald-700'
      case 'Completed': return 'bg-slate-50 text-slate-700'
      case 'Cancelled': return 'bg-rose-50 text-rose-700'
      default: return 'bg-slate-50 text-slate-700'
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Admin Overview</h1>
        <p className="text-slate-500 mt-1">Manage your team and track performance across all services.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm shadow-slate-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <p className={cn(
                "text-xs mt-1 font-medium flex items-center",
                stat.positive ? "text-emerald-600" : "text-rose-600"
              )}>
                {stat.positive ? <ArrowUpRight className="mr-1 h-3 w-3" /> : <ArrowDownRight className="mr-1 h-3 w-3" />}
                {stat.trend} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity (Schedules) */}
        <Card className="lg:col-span-2 border-none shadow-sm shadow-slate-200">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates from your cleaning services.</CardDescription>
            </div>
            <Link href="/dashboard/admin/schedules">
              <Button variant="outline" size="sm">View All</Button>
            </Link>
          </CardHeader>
          <CardContent>
             <div className="space-y-6">
               {loading ? (
                 <div className="text-center py-4 text-slate-500 text-sm">Loading activity...</div>
               ) : recentEvents.length > 0 ? (
                 recentEvents.map((event) => (
                   <div key={event.id} className="flex items-center gap-4">
                     <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                       <Calendar className="h-5 w-5 text-slate-500" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="text-sm font-semibold text-slate-900 truncate">{event.title}</p>
                       <p className="text-xs text-slate-500 truncate">
                         {event.client?.companyName || event.location || 'No location'} • {formatRelativeTime(event.startTime)}
                       </p>
                     </div>
                     <div className="text-right">
                       <span className={cn(
                         "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                         getStatusStyles(event.status)
                       )}>
                         {event.status}
                       </span>
                     </div>
                   </div>
                 ))
               ) : (
                 <div className="text-center py-4 text-slate-500 text-sm">No recent activity found.</div>
               )}
             </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-none shadow-sm shadow-slate-200">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start gap-2">
              <Users className="h-4 w-4" /> Add Staff Member
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <Users className="h-4 w-4" /> Add Client
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <TrendingUp className="h-4 w-4" /> Generate Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
