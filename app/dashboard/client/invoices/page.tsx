"use client"

import { 
  BarChart3, 
  Download, 
  ExternalLink, 
  CreditCard, 
  Search, 
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  TrendingUp,
  Receipt
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const invoices = [
  {
    id: "INV-2023-012",
    date: "Oct 24, 2023",
    amount: "$240.00",
    service: "Full Office Sanitization",
    status: "Paid",
    dueDate: "Nov 01, 2023",
    method: "Visa •••• 4242"
  },
  {
    id: "INV-2023-011",
    date: "Sept 14, 2023",
    amount: "$120.00",
    service: "Deep Carpet Steam Clean",
    status: "Paid",
    dueDate: "Sept 21, 2023",
    method: "Visa •••• 4242"
  },
  {
    id: "INV-2023-013",
    date: "Nov 02, 2023",
    amount: "$85.00",
    service: "Window & Glass Cleaning",
    status: "Pending",
    dueDate: "Nov 10, 2023",
    method: "-"
  }
]

export default function ClientInvoicesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Billing & Invoices</h1>
          <p className="text-slate-500 mt-1">Track your service investments and manage payment methods.</p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" className="bg-white gap-2 font-black text-[10px] uppercase tracking-widest py-6 h-auto">
              <Download className="h-4 w-4" /> Export All
           </Button>
           <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200 gap-2 font-black text-[10px] uppercase tracking-widest py-6 h-auto px-6">
              <CreditCard className="h-4 w-4" /> Manage Cards
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <Card className="border-none shadow-sm shadow-slate-200 bg-emerald-600 text-white overflow-hidden relative">
            <CardHeader className="pb-2">
               <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-emerald-100">Total Spent (YTD)</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-black italic">$3,450.00</div>
               <div className="mt-4 flex items-center gap-1.5 text-xs font-bold bg-white/10 w-fit px-3 py-1 rounded-full border border-white/10">
                  <TrendingUp className="h-3 w-3" /> +15.2% vs 2022
               </div>
            </CardContent>
            <div className="absolute -right-4 -bottom-4 opacity-10">
               <Receipt className="h-24 w-24" />
            </div>
         </Card>
         <Card className="border-none shadow-sm shadow-slate-200">
            <CardHeader className="pb-2">
               <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Next Payment Due</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-black italic text-slate-900">$85.00</div>
               <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-amber-600 flex items-center gap-1.5">
                  <Clock className="h-3 w-3" /> Due in 6 days
               </p>
            </CardContent>
         </Card>
         <Card className="border-none shadow-sm shadow-slate-200">
            <CardHeader className="pb-2">
               <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Account Status</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-black italic text-emerald-600">PREMIUM</div>
               <div className="mt-4 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  <CheckCircle2 className="h-3 w-3 text-emerald-500" /> All dues cleared
               </div>
            </CardContent>
         </Card>
      </div>

      <Card className="border-none shadow-sm shadow-slate-200 overflow-hidden">
         <CardHeader className="border-b bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4 py-6">
            <div className="relative w-full md:w-96">
               <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
               <Input 
                  placeholder="Filter by invoice ID or service..." 
                  className="pl-12 bg-white border-slate-200 rounded-xl font-medium h-12 italic"
               />
            </div>
            <div className="flex items-center gap-4">
               <Button variant="ghost" className="h-12 px-6 font-black text-[10px] uppercase tracking-widest text-slate-400 hover:text-emerald-700">All</Button>
               <Button variant="ghost" className="h-12 px-6 font-black text-[10px] uppercase tracking-widest text-emerald-700 bg-emerald-50 shadow-sm border border-emerald-100 rounded-xl">Outstanding</Button>
               <Button variant="ghost" className="h-12 px-6 font-black text-[10px] uppercase tracking-widest text-slate-400 hover:text-emerald-700">Paid</Button>
            </div>
         </CardHeader>
         <CardContent className="p-0">
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                     <tr className="border-b bg-slate-50/30">
                        <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Invoice ID</th>
                        <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Service</th>
                        <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Amount</th>
                        <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Status</th>
                        <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Method</th>
                        <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Action</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 italic">
                     {invoices.map((inv, i) => (
                        <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                           <td className="px-10 py-6">
                              <p className="text-sm font-black text-slate-900 not-italic tracking-tight">{inv.id}</p>
                              <p className="text-xs font-bold text-slate-400 mt-1">{inv.date}</p>
                           </td>
                           <td className="px-10 py-6">
                              <p className="text-sm font-bold text-slate-700 underline decoration-slate-200 decoration-2 underline-offset-4">{inv.service}</p>
                           </td>
                           <td className="px-10 py-6">
                              <p className="text-sm font-black text-slate-900">{inv.amount}</p>
                           </td>
                           <td className="px-10 py-6">
                              <Badge variant="outline" className={cn(
                                 "border-none px-4 py-1 text-[8px] font-black uppercase tracking-widest rounded-lg",
                                 inv.status === "Paid" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                              )}>
                                 {inv.status}
                              </Badge>
                           </td>
                           <td className="px-10 py-6">
                              <p className="text-xs font-bold text-slate-500 flex items-center gap-2 not-italic">
                                 {inv.method !== "-" && <CreditCard className="h-3 w-3 opacity-50" />}
                                 {inv.method}
                              </p>
                           </td>
                           <td className="px-10 py-6 text-right">
                              <Button variant="ghost" size="icon" className="h-10 w-10 text-slate-300 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-all rounded-xl">
                                 <Download className="h-4 w-4" />
                              </Button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </CardContent>
         <div className="p-8 border-t bg-slate-50/30 flex items-center justify-between">
            <p className="text-xs font-medium text-slate-400 italic">Showing the latest 3 invoices. Load more for full history.</p>
            <Button variant="link" className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 p-0 h-auto">View Load More</Button>
         </div>
      </Card>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
