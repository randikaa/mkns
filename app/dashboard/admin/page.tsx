"use client"

import { 
  Users, 
  ClipboardList, 
  TrendingUp, 
  DollarSign,
  Plus,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  const stats = [
    { title: "Total Revenue", value: "$45,231", icon: DollarSign, trend: "+12.5%", positive: true },
    { title: "Active Clients", value: "1,204", icon: Users, trend: "+3.2%", positive: true },
    { title: "Staff Members", value: "48", icon: Users, trend: "+2 new", positive: true },
    { title: "Pending Jobs", value: "24", icon: ClipboardList, trend: "-5%", positive: false },
  ]

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
        {/* Recent Activity */}
        <Card className="lg:col-span-2 border-none shadow-sm shadow-slate-200">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Job Activity</CardTitle>
              <CardDescription>Latest updates from your cleaning team.</CardDescription>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
             <div className="space-y-6">
               {[1, 2, 3, 4].map((item) => (
                 <div key={item} className="flex items-center gap-4">
                   <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                     <ClipboardList className="h-5 w-5 text-slate-500" />
                   </div>
                   <div className="flex-1 min-w-0">
                     <p className="text-sm font-semibold text-slate-900">Office Cleaning - Melbourne CBD</p>
                     <p className="text-xs text-slate-500 truncate">Requested by Victorian Health Authority • 2h ago</p>
                   </div>
                   <div className="text-right">
                     <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
                       In Progress
                     </span>
                   </div>
                 </div>
               ))}
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
            <Button className="w-full justify-start gap-2 bg-emerald-600 hover:bg-emerald-700">
              <Plus className="h-4 w-4" /> Create New Job
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <Users className="h-4 w-4" /> Add Staff Member
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
