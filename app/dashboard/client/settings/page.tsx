"use client"

import { 
  User, 
  MapPin, 
  Bell, 
  Shield, 
  CreditCard, 
  Camera, 
  Save, 
  Mail, 
  Phone,
  Home,
  MessageSquare,
  History
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export default function ClientSettingsPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Account Preferences</h1>
          <p className="text-slate-500 mt-1 italic font-medium">Customize your service experience and secure your digital hub.</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200 uppercase tracking-[0.2em] text-[10px] font-black py-7 px-10">
           <Save className="mr-2 h-4 w-4" /> Save Preferences
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         {/* Sidebar Navigation */}
         <div className="space-y-2 lg:sticky lg:top-24 h-fit">
            {[
               { icon: User, label: "Identity & Profile", active: true },
               { icon: MapPin, label: "Service Addresses", active: false },
               { icon: CreditCard, label: "Stored Payments", active: false },
               { icon: Bell, label: "Alert Config", active: false },
               { icon: Shield, label: "Access Security", active: false },
               { icon: History, label: "Login Activity", active: false },
            ].map((item, i) => (
               <Button 
                key={i} 
                variant="ghost" 
                className={cn(
                  "w-full justify-start gap-4 h-14 px-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[9px]",
                  item.active ? "bg-white text-emerald-700 shadow-md ring-1 ring-slate-100" : "text-slate-400 hover:bg-white/50 hover:text-slate-600"
                )}
               >
                  <item.icon className={cn("h-4 w-4", item.active ? "text-emerald-500" : "text-slate-300")} />
                  {item.label}
               </Button>
            ))}
         </div>

         {/* Settings Content */}
         <div className="lg:col-span-3 space-y-8">
            <Card className="border-none shadow-sm shadow-slate-200 overflow-hidden group">
               <CardHeader className="bg-white border-b py-8 px-10">
                  <CardTitle className="text-lg font-black uppercase tracking-widest text-slate-900 italic">Personal Identification</CardTitle>
                  <CardDescription className="font-medium text-slate-400">Manage how we identify you across our global network.</CardDescription>
               </CardHeader>
               <CardContent className="p-10 space-y-10">
                  <div className="flex flex-col md:flex-row items-center gap-10">
                     <div className="relative group/avatar">
                        <div className="h-32 w-32 rounded-[2.5rem] bg-emerald-100 flex items-center justify-center text-4xl font-black text-emerald-700 border-8 border-white shadow-xl ring-1 ring-emerald-50 italic transition-transform duration-500 hover:scale-105">
                           JD
                        </div>
                        <Button size="icon" className="absolute -bottom-2 -right-2 h-10 w-10 rounded-2xl bg-slate-900 border-4 border-white shadow-xl opacity-0 group-hover/avatar:opacity-100 transition-all duration-300">
                           <Camera className="h-4 w-4 text-white" />
                        </Button>
                     </div>
                     <div className="space-y-4 text-center md:text-left">
                        <div>
                           <h4 className="text-2xl font-black text-slate-900 tracking-tight italic">John Doe</h4>
                           <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Client Since Jan 2023</p>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                           <Badge className="bg-emerald-50 text-emerald-700 border-none font-black text-[9px] uppercase px-4 py-1.5 rounded-lg shadow-sm">Premium Account</Badge>
                           <Badge className="bg-blue-50 text-blue-700 border-none font-black text-[9px] uppercase px-4 py-1.5 rounded-lg shadow-sm">Identity Verified</Badge>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Complete Name</label>
                        <Input placeholder="John Doe" className="h-14 bg-slate-50 border-none shadow-inner rounded-2xl font-bold italic focus-visible:ring-emerald-500/20" />
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Secure Email</label>
                        <Input placeholder="john@example.com" className="h-14 bg-slate-50 border-none shadow-inner rounded-2xl font-bold italic" />
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Primary Mobile</label>
                        <Input placeholder="+61 412 345 678" className="h-14 bg-slate-50 border-none shadow-inner rounded-2xl font-bold italic" />
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Preferred Language</label>
                        <Input placeholder="English (Global)" className="h-14 bg-slate-50 border-none shadow-inner rounded-2xl font-bold italic" />
                     </div>
                  </div>
               </CardContent>
            </Card>

            <Card className="border-none shadow-sm shadow-slate-200 overflow-hidden">
               <CardHeader className="bg-white border-b py-8 px-10">
                  <CardTitle className="text-lg font-black uppercase tracking-widest text-slate-900 italic">Communication Channels</CardTitle>
                  <CardDescription className="font-medium text-slate-400">Decide how you'd like to receive service updates.</CardDescription>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="divide-y divide-slate-100">
                     {[
                        { title: "Push Notifications", desc: "Real-time alerts for when cleaners arrive & depart.", icon: Bell, checked: true },
                        { title: "Email Reciepts", desc: "Automated tax invoices sent after every completion.", icon: Mail, checked: true },
                        { title: "SMS Reminders", desc: "Courtesy text message 24h before any booking.", icon: MessageSquare, checked: false },
                     ].map((pref, i) => (
                        <div key={i} className="flex items-center justify-between p-8 hover:bg-slate-50 transition-colors">
                           <div className="flex items-center gap-6">
                              <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
                                 <pref.icon className="h-6 w-6" />
                              </div>
                              <div className="space-y-1">
                                 <p className="text-sm font-black text-slate-900 tracking-tight italic underline decoration-slate-200 decoration-2 underline-offset-4">{pref.title}</p>
                                 <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{pref.desc}</p>
                              </div>
                           </div>
                           <Switch className="data-[state=checked]:bg-emerald-500 h-7 w-14" checked={pref.checked} />
                        </div>
                     ))}
                  </div>
               </CardContent>
            </Card>

            <div className="flex items-center justify-between p-10 bg-rose-50/30 rounded-[3rem] border-2 border-dashed border-rose-100 italic">
               <div className="space-y-1">
                  <h4 className="text-lg font-black text-rose-900">Closing your account?</h4>
                  <p className="text-xs font-bold text-rose-600 uppercase tracking-widest">This will permanently delete your service history.</p>
               </div>
               <Button variant="outline" className="h-12 border-rose-200 text-rose-700 bg-white font-black uppercase tracking-[0.2em] text-[10px] px-8 rounded-2xl hover:bg-rose-50 transition-colors">Deactivate HUB Access</Button>
            </div>
         </div>
      </div>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
