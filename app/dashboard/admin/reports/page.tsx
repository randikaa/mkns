"use client"

import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Calendar,
  Download,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  PieChart,
  LineChart,
  CalendarDays
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const reportStats = [
  { title: "Monthly Revenue", value: "$42,500", trend: "+12.5%", icon: DollarSign, color: "emerald" },
  { title: "Active Clients", value: "154", trend: "+3.2%", icon: Users, color: "blue" },
  { title: "Completion Rate", value: "98.2%", trend: "+1.5%", icon: TrendingUp, color: "purple" },
  { title: "Staff Efficiency", value: "85%", trend: "-2.1%", icon: BarChart3, color: "amber" },
]

export default function AdminReportsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Business Intelligence</h1>
          <p className="text-slate-500 mt-1">Analyze financial performance and operational efficiency.</p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" className="bg-white gap-2 font-bold text-xs uppercase tracking-widest py-6">
             <CalendarDays className="h-4 w-4" /> Last 30 Days
           </Button>
           <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200 uppercase tracking-wider text-xs font-bold py-6 px-6">
             <Download className="mr-2 h-4 w-4" /> Export PDF
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportStats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm shadow-slate-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 text-${stat.color}-600`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <p className={cn(
                "text-xs mt-1 font-bold flex items-center italic",
                stat.trend.startsWith('+') ? "text-emerald-600" : "text-rose-600"
              )}>
                {stat.trend.startsWith('+') ? <ArrowUpRight className="mr-1 h-3 w-3" /> : <ArrowDownRight className="mr-1 h-3 w-3" />}
                {stat.trend} <span className="text-slate-400 ml-1 not-italic font-medium">vs last period</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart Placeholder */}
        <Card className="lg:col-span-2 border-none shadow-sm shadow-slate-200 overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg font-bold">Revenue Growth</CardTitle>
              <CardDescription className="text-xs font-medium text-slate-400 uppercase tracking-widest">Monthly financial trajectory</CardDescription>
            </div>
            <div className="flex items-center gap-2">
               <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Current Year
               </div>
               <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-50 text-slate-400 text-[10px] font-bold">
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-300" /> Previous Year
               </div>
            </div>
          </CardHeader>
          <CardContent>
             <div className="h-[300px] w-full bg-slate-50/50 rounded-xl border border-dashed border-slate-200 flex items-center justify-center group relative overflow-hidden">
                <LineChart className="h-12 w-12 text-slate-200 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-x-8 bottom-8 flex justify-between">
                   {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map(m => (
                      <span key={m} className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{m}</span>
                   ))}
                </div>
                {/* Visual Placeholder Bars */}
                <div className="absolute inset-x-12 bottom-20 top-20 flex items-end justify-between opacity-10">
                   {[40, 60, 45, 80, 55, 90, 75].map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className="w-8 bg-emerald-500 rounded-t-sm" />
                   ))}
                </div>
             </div>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card className="border-none shadow-sm shadow-slate-200 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Service Breakdown</CardTitle>
            <CardDescription className="text-xs font-medium text-slate-400 uppercase tracking-widest">Revenue by service type</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
             <div className="h-40 flex items-center justify-center">
                <div className="relative h-32 w-32 rounded-full border-[12px] border-emerald-500 flex items-center justify-center">
                   <div className="absolute inset-0 h-full w-full rounded-full border-[12px] border-blue-400 border-t-transparent border-l-transparent rotate-45" />
                   <div className="text-center">
                      <p className="text-2xl font-black text-slate-900 leading-none">62%</p>
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Growth</p>
                   </div>
                </div>
             </div>
             
             <div className="space-y-3">
                {[
                  { label: "Commercial Cleaning", value: "45%", color: "bg-emerald-500" },
                  { label: "End of Lease", value: "30%", color: "bg-blue-400" },
                  { label: "Carpet Steam Clean", value: "15%", color: "bg-purple-400" },
                  { label: "Other Services", value: "10%", color: "bg-slate-200" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${item.color}`} />
                        <span className="text-xs font-bold text-slate-600">{item.label}</span>
                     </div>
                     <span className="text-xs font-black text-slate-900">{item.value}</span>
                  </div>
                ))}
             </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm shadow-slate-200">
         <CardHeader>
            <CardTitle className="text-lg font-bold">Top Performing Staff</CardTitle>
            <CardDescription className="text-xs font-medium text-slate-400 uppercase tracking-widest">Efficiency based on job completion & ratings</CardDescription>
         </CardHeader>
         <CardContent>
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                     <tr className="border-b bg-slate-50/50">
                        <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Member</th>
                        <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Jobs Done</th>
                        <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Avg. Rating</th>
                        <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Revenue Gen.</th>
                        <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Trend</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 italic">
                     {[
                        { name: "John Smith", jobs: 42, rating: 4.9, revenue: "$8,420", trend: "up" },
                        { name: "Emily Davis", jobs: 38, rating: 4.8, revenue: "$7,150", trend: "up" },
                        { name: "Jessica Taylor", jobs: 35, rating: 5.0, revenue: "$6,800", trend: "down" },
                     ].map((staff, i) => (
                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                           <td className="px-6 py-4">
                              <span className="text-sm font-bold text-slate-900 not-italic underline decoration-slate-200 decoration-2 underline-offset-4">{staff.name}</span>
                           </td>
                           <td className="px-6 py-4 text-sm font-bold text-slate-600">{staff.jobs}</td>
                           <td className="px-6 py-4 text-sm font-bold text-amber-500">{staff.rating} ★</td>
                           <td className="px-6 py-4 text-sm font-bold text-emerald-600">{staff.revenue}</td>
                           <td className="px-6 py-4 text-right">
                              {staff.trend === "up" ? 
                                 <TrendingUp className="h-4 w-4 text-emerald-500 ml-auto" /> : 
                                 <TrendingDown className="h-4 w-4 text-rose-500 ml-auto" />
                              }
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </CardContent>
      </Card>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
