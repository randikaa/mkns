"use client"

import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  Smartphone, 
  Key, 
  Mail, 
  Phone, 
  Camera, 
  Save, 
  LogOut,
  HelpCircle,
  Globe,
  Database
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export default function StaffSettingsPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Staff Preferences</h1>
          <p className="text-slate-500 mt-1 italic font-medium">Manage your professional digital identity and operational alerts.</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200 font-black uppercase tracking-[0.2em] text-[10px] py-7 px-10 rounded-2xl">
           <Save className="mr-2 h-4 w-4" /> Save Local Config
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         {/* Sidebar Navigation */}
         <div className="space-y-2 lg:sticky lg:top-24 h-fit">
            {[
               { icon: User, label: "Profile Identity", active: true },
               { icon: Bell, label: "Dispatch Alerts", active: false },
               { icon: Shield, label: "Privacy & Sync", active: false },
               { icon: Smartphone, label: "App Connectivity", active: false },
               { icon: Key, label: "Access Security", active: false },
               { icon: HelpCircle, label: "Resource Center", active: false },
            ].map((item, i) => (
               <Button 
                key={i} 
                variant="ghost" 
                className={cn(
                  "w-full justify-start gap-4 h-14 px-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[9px]",
                  item.active ? "bg-white text-emerald-700 shadow-md ring-1 ring-slate-100 italic" : "text-slate-400 hover:bg-white/50 hover:text-slate-600"
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
                  <CardTitle className="text-lg font-black uppercase tracking-widest text-slate-900 italic">Field Identification</CardTitle>
                  <CardDescription className="font-medium text-slate-400 italic">Your public identity as seen by colleagues and clients.</CardDescription>
               </CardHeader>
               <CardContent className="p-10 space-y-10">
                  <div className="flex flex-col md:flex-row items-center gap-10">
                     <div className="relative group/avatar">
                        <div className="h-32 w-32 rounded-[2.5rem] bg-emerald-100 flex items-center justify-center text-4xl font-black text-emerald-700 border-8 border-white shadow-xl ring-1 ring-emerald-50 italic transition-transform duration-500 hover:scale-105">
                           JS
                        </div>
                        <Button size="icon" className="absolute -bottom-2 -right-2 h-10 w-10 rounded-2xl bg-slate-900 border-4 border-white shadow-xl opacity-0 group-hover/avatar:opacity-100 transition-all duration-300">
                           <Camera className="h-4 w-4 text-white" />
                        </Button>
                     </div>
                     <div className="space-y-4 text-center md:text-left">
                        <div>
                           <h4 className="text-2xl font-black text-slate-900 tracking-tight italic">John Smith</h4>
                           <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Senior Cleaner since 2022</p>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                           <Badge className="bg-emerald-50 text-emerald-700 border-none font-black text-[9px] uppercase px-4 py-1.5 rounded-lg shadow-sm">Diamond Performance</Badge>
                           <Badge className="bg-blue-50 text-blue-700 border-none font-black text-[9px] uppercase px-4 py-1.5 rounded-lg shadow-sm">Bio-Hazard Certified</Badge>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Preferred Name</label>
                        <Input placeholder="John Smith" className="h-14 bg-slate-50 border-none shadow-inner rounded-2xl font-bold italic focus-visible:ring-emerald-500/20" />
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Staff Email</label>
                        <Input placeholder="john.s@mkns.com" className="h-14 bg-slate-50 border-none shadow-inner rounded-2xl font-bold italic" disabled />
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Dispatch Contact</label>
                        <Input placeholder="+61 400 111 222" className="h-14 bg-slate-50 border-none shadow-inner rounded-2xl font-bold italic" />
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Emergency Handle</label>
                        <Input placeholder="Anna Smith (Wife)" className="h-14 bg-slate-50 border-none shadow-inner rounded-2xl font-bold italic" />
                     </div>
                  </div>
               </CardContent>
            </Card>

            <Card className="border-none shadow-sm shadow-slate-200 overflow-hidden">
               <CardHeader className="bg-white border-b py-8 px-10">
                  <CardTitle className="text-lg font-black uppercase tracking-widest text-slate-900 italic">Operational Alerts</CardTitle>
                  <CardDescription className="font-medium text-slate-400 italic">Configure how you receive deployment instructions.</CardDescription>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="divide-y divide-slate-100">
                     {[
                        { title: "Push Notifications", desc: "Instant alerts for new job assignments and route changes.", icon: Smartphone, checked: true },
                        { title: "SMS Reminders", desc: "Text message 15 mins before every shift start.", icon: Mail, checked: true },
                        { title: "Night Mode Silence", desc: "Mute non-urgent notifications between 10 PM and 6 AM.", icon: Shield, checked: true },
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

            <div className="flex items-center justify-between p-10 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[3rem] italic">
               <div className="space-y-1">
                  <h4 className="text-lg font-black text-slate-900">Need to update official data?</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Address or Bank changes require manual HR verification.</p>
               </div>
               <Button variant="outline" className="h-12 border-slate-300 text-slate-900 bg-white font-black uppercase tracking-[0.2em] text-[10px] px-8 rounded-2xl hover:bg-slate-50 transition-colors">Open HR Ticket</Button>
            </div>
         </div>
      </div>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
