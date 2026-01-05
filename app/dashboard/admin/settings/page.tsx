"use client"

import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe, 
  Key,
  Mail,
  Camera,
  Save,
  Trash2,
  HelpCircle,
  Database
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">System Configuration</h1>
          <p className="text-slate-500 mt-1">Manage platform preferences, security protocols, and administrative profiles.</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200 uppercase tracking-wider text-xs font-black py-6 px-8">
           <Save className="mr-2 h-4 w-4" /> Save All Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         {/* Sidebar Navigation */}
         <div className="space-y-2 lg:sticky lg:top-24 h-fit">
            {[
               { icon: User, label: "Profile Information", active: true },
               { icon: Shield, label: "Security & Privacy", active: false },
               { icon: Bell, label: "Notification Prefs", active: false },
               { icon: Database, label: "Company Profile", active: false },
               { icon: CreditCard, label: "Billing & Plans", active: false },
               { icon: HelpCircle, label: "Support & Logs", active: false },
            ].map((item, i) => (
               <Button 
                key={i} 
                variant="ghost" 
                className={cn(
                  "w-full justify-start gap-3 h-12 px-4 rounded-xl font-bold uppercase tracking-widest text-[10px]",
                  item.active ? "bg-emerald-50 text-emerald-700 shadow-sm" : "text-slate-400 hover:bg-slate-50 hover:text-slate-600"
                )}
               >
                  <item.icon className={cn("h-4 w-4", item.active ? "text-emerald-600" : "text-slate-300")} />
                  {item.label}
               </Button>
            ))}
         </div>

         {/* Settings Content */}
         <div className="lg:col-span-3 space-y-8">
            <Card className="border-none shadow-sm shadow-slate-200 overflow-hidden">
               <CardHeader className="bg-slate-50/50 border-b">
                  <CardTitle className="text-lg font-black uppercase tracking-widest text-slate-800">Administrator Profile</CardTitle>
                  <CardDescription className="italic font-medium">Update your personal identification and public identity.</CardDescription>
               </CardHeader>
               <CardContent className="p-8 space-y-8">
                  <div className="flex items-center gap-8">
                     <div className="relative group">
                        <div className="h-24 w-24 rounded-2xl bg-emerald-100 flex items-center justify-center text-3xl font-black text-emerald-700 border-4 border-white shadow-md ring-1 ring-slate-100 italic">
                           JD
                        </div>
                        <Button size="icon" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-lg bg-slate-900 border-2 border-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                           <Camera className="h-4 w-4 text-white" />
                        </Button>
                     </div>
                     <div className="space-y-1">
                        <h4 className="text-lg font-bold text-slate-900 tracking-tight">John Doe</h4>
                        <p className="text-sm font-medium text-slate-500 italic uppercase tracking-wider">Super Administrator</p>
                        <div className="flex gap-2 mt-2">
                           <Badge className="bg-emerald-50 text-emerald-700 border-none font-black text-[8px] uppercase px-2 py-0.5">Verified</Badge>
                           <Badge className="bg-blue-50 text-blue-700 border-none font-black text-[8px] uppercase px-2 py-0.5">Primary Owner</Badge>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                        <Input placeholder="John Doe" className="h-12 bg-slate-50/50 border-slate-200 rounded-xl font-medium focus-visible:ring-emerald-500/20 focus-visible:border-emerald-500" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                        <Input placeholder="admin@mkns.com" className="h-12 bg-slate-50/50 border-slate-200 rounded-xl font-medium" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Job Title</label>
                        <Input placeholder="Operations Manager" className="h-12 bg-slate-50/50 border-slate-200 rounded-xl font-medium" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Contact Number</label>
                        <Input placeholder="+61 412 345 678" className="h-12 bg-slate-50/50 border-slate-200 rounded-xl font-medium" />
                     </div>
                  </div>
               </CardContent>
            </Card>

            <Card className="border-none shadow-sm shadow-slate-200 overflow-hidden">
               <CardHeader className="bg-slate-50/50 border-b">
                  <CardTitle className="text-lg font-black uppercase tracking-widest text-slate-800">Email Notifications</CardTitle>
                  <CardDescription className="italic font-medium">Control which system events trigger email alerts.</CardDescription>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="divide-y divide-slate-100">
                     {[
                        { title: "New Booking Requests", desc: "Instantly alert when a client requests a service.", checked: true },
                        { title: "Payment Confirmations", desc: "Daily summary of all successful transactions.", checked: true },
                        { title: "Staff Shift Updates", desc: "Notify when staff clock in or complete jobs.", checked: false },
                        { title: "System Security Alerts", desc: "Critical alerts regarding login attempts and logs.", checked: true },
                     ].map((pref, i) => (
                        <div key={i} className="flex items-center justify-between p-6 hover:bg-slate-50/50 transition-colors">
                           <div className="space-y-0.5">
                              <p className="text-sm font-bold text-slate-800 tracking-tight">{pref.title}</p>
                              <p className="text-xs text-slate-400 font-medium italic">{pref.desc}</p>
                           </div>
                           <Switch className="data-[state=checked]:bg-emerald-500 h-6 w-11 shadow-inner" checked={pref.checked} />
                        </div>
                     ))}
                  </div>
               </CardContent>
            </Card>

            <Card className="border-rose-100 shadow-sm shadow-rose-50 overflow-hidden bg-rose-50/10">
               <CardHeader className="bg-rose-50/30 border-b border-rose-100">
                  <CardTitle className="text-lg font-black uppercase tracking-widest text-rose-900">Danger Zone</CardTitle>
                  <CardDescription className="text-rose-600 italic font-medium">Irreversible actions that affect the entire workspace.</CardDescription>
               </CardHeader>
               <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                     <div className="space-y-1">
                        <p className="text-sm font-bold text-slate-900 tracking-tight">Archive Data</p>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-md italic">Permanently archive all completed jobs and invoices from the previous fiscal year.</p>
                     </div>
                     <Button variant="outline" className="border-rose-200 text-rose-600 hover:bg-rose-100 font-black uppercase tracking-widest text-[10px] h-10 px-6">Archive All</Button>
                  </div>
                  <Separator className="bg-rose-100" />
                  <div className="flex items-center justify-between">
                     <div className="space-y-1">
                        <p className="text-sm font-bold text-slate-900 tracking-tight text-rose-600">Deactivate Workspace</p>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-md italic underline decoration-rose-100 decoration-2">Shutdown all operations and disable access for all users under this license.</p>
                     </div>
                     <Button className="bg-rose-600 hover:bg-rose-700 shadow-lg shadow-rose-200 text-white font-black uppercase tracking-widest text-[10px] h-10 px-6">Terminate Account</Button>
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
