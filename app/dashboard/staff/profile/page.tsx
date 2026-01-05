"use client"

import { 
  User, 
  Award, 
  Star, 
  TrendingUp, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Briefcase,
  Target,
  Medal,
  ThumbsUp,
  ExternalLink
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function StaffProfilePage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
           <div className="h-24 w-24 rounded-3xl bg-emerald-100 flex items-center justify-center text-4xl font-black text-emerald-700 border-4 border-white shadow-xl ring-1 ring-emerald-50 italic">
              JS
           </div>
           <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3 italic">
                 John Smith <Badge className="bg-emerald-50 text-emerald-700 border-none font-black text-[9px] uppercase px-3 py-1">Senior Cleaner</Badge>
              </h1>
              <p className="text-slate-500 mt-1 font-medium flex items-center gap-2 italic">
                 <MapPin className="h-4 w-4 text-slate-400" /> Based in Melbourne South
              </p>
           </div>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="outline" className="h-14 border-slate-200 bg-white font-black uppercase tracking-[0.2em] text-[10px] px-8 rounded-2xl hover:text-emerald-600 transition-all">Download Badge</Button>
           <Button className="h-14 bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200 font-black uppercase tracking-[0.2em] text-[10px] px-8 rounded-2xl">View Public Profile</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Performance Stats */}
         <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <Card className="border-none shadow-sm shadow-slate-200">
                  <CardContent className="p-6 text-center space-y-2">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Avg Rating</p>
                     <div className="text-3xl font-black text-slate-900 flex items-center justify-center gap-2 italic">
                        <Star className="h-6 w-6 fill-amber-500 text-amber-500" /> 4.9
                     </div>
                     <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 w-fit mx-auto px-3 py-1 rounded-full">Top 5%</p>
                  </CardContent>
               </Card>
               <Card className="border-none shadow-sm shadow-slate-200">
                  <CardContent className="p-6 text-center space-y-2">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Jobs Done</p>
                     <div className="text-3xl font-black text-slate-900 italic">412</div>
                     <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Since Jan 2022</p>
                  </CardContent>
               </Card>
               <Card className="border-none shadow-sm shadow-slate-200">
                  <CardContent className="p-6 text-center space-y-2">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Punctuality</p>
                     <div className="text-3xl font-black text-slate-900 italic">98%</div>
                     <p className="text-[9px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 w-fit mx-auto px-3 py-1 rounded-full">Exemplary</p>
                  </CardContent>
               </Card>
            </div>

            <Card className="border-none shadow-sm shadow-slate-200 overflow-hidden">
               <CardHeader className="bg-white border-b py-6 px-8">
                  <CardTitle className="text-lg font-black uppercase tracking-widest text-slate-900 italic flex items-center gap-3">
                     <Target className="h-5 w-5 text-emerald-500" /> Career Milestones
                  </CardTitle>
               </CardHeader>
               <CardContent className="p-10 space-y-10">
                  <div className="space-y-6">
                     <div className="flex justify-between items-end">
                        <div className="space-y-1">
                           <p className="text-sm font-black text-slate-900 italic">Platinum Shield Progress</p>
                           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Maintain 4.9 rating for 50 more jobs</p>
                        </div>
                        <span className="text-sm font-black text-emerald-600">85%</span>
                     </div>
                     <Progress value={85} className="h-3 bg-slate-100 italic" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                     <div className="flex items-start gap-5 group">
                        <div className="h-12 w-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 shadow-sm border border-amber-100 transition-transform group-hover:rotate-12 duration-500">
                           <Medal className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                           <p className="text-sm font-black text-slate-900 italic underline decoration-amber-200 decoration-2 underline-offset-4">Top Performer Q3</p>
                           <p className="text-xs text-slate-500 font-medium">Achieved highest customer satisfaction in industrial sector.</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-5 group">
                        <div className="h-12 w-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100 transition-transform group-hover:rotate-12 duration-500">
                           <ShieldCheck className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                           <p className="text-sm font-black text-slate-900 italic underline decoration-indigo-200 decoration-2 underline-offset-4">Safety Certified</p>
                           <p className="text-xs text-slate-500 font-medium">Completed advanced bio-hazard material handling cert.</p>
                        </div>
                     </div>
                  </div>
               </CardContent>
            </Card>

            <Card className="border-none shadow-sm shadow-slate-200 group">
               <CardHeader className="py-6 px-8">
                  <CardTitle className="text-lg font-black uppercase tracking-widest text-slate-900 italic">Work History Highlights</CardTitle>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="divide-y divide-slate-100">
                     {[
                        { client: "Acme Corp", feedback: "John is extremely professional. The best clean we've had.", rating: 5, date: "Oct 20, 2023" },
                        { client: "Private Resident", feedback: "Punctual and very detailed. Highly recommended.", rating: 5, date: "Oct 18, 2023" },
                        { client: "Global Logistics", feedback: "Great effort on the carpet steam cleaning.", rating: 4.8, date: "Oct 15, 2023" },
                     ].map((item, i) => (
                        <div key={i} className="p-8 space-y-4 hover:bg-slate-50/50 transition-colors">
                           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div className="flex items-center gap-4">
                                 <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 italic font-bold">{item.client[0]}</div>
                                 <div>
                                    <p className="text-sm font-black text-slate-900 italic">{item.client}</p>
                                    <div className="flex items-center gap-1 text-amber-500">
                                       {Array.from({ length: 5 }).map((_, idx) => (
                                          <Star key={idx} className={cn("h-3 w-3", idx < Math.floor(item.rating) ? "fill-amber-500" : "text-slate-200")} />
                                       ))}
                                    </div>
                                 </div>
                              </div>
                              <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{item.date}</p>
                           </div>
                           <p className="text-sm text-slate-600 font-medium italic underline decoration-slate-100 decoration-2 underline-offset-4">"{item.feedback}"</p>
                        </div>
                     ))}
                  </div>
                  <Button variant="ghost" className="w-full text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 py-6 h-auto hover:text-emerald-700 transition-colors">Show All History</Button>
               </CardContent>
            </Card>
         </div>

         {/* Info Sidebar */}
         <div className="space-y-8">
            <Card className="border-none shadow-sm shadow-slate-200 overflow-hidden">
               <CardHeader className="bg-slate-900 text-white">
                  <CardTitle className="text-sm font-black uppercase tracking-widest italic">Identity Documentation</CardTitle>
               </CardHeader>
               <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                     {[
                        { label: "Working w/ Children", status: "Verified", icon: ShieldCheck },
                        { label: "Public Liability", status: "Active", icon: ShieldCheck },
                        { label: "Police Check", status: "Current", icon: ShieldCheck },
                     ].map((doc, i) => (
                        <div key={i} className="flex items-center justify-between">
                           <div className="flex items-center gap-3">
                              <doc.icon className="h-4 w-4 text-emerald-500" />
                              <span className="text-xs font-bold text-slate-600">{doc.label}</span>
                           </div>
                           <Badge variant="outline" className="text-[8px] font-black border-emerald-100 text-emerald-600 bg-emerald-50 px-2 py-0 border-none">{doc.status}</Badge>
                        </div>
                     ))}
                  </div>
                  <Button variant="outline" className="w-full h-12 border-slate-200 text-slate-400 font-black text-[9px] uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all">Update Documents</Button>
               </CardContent>
            </Card>

            <Card className="border-none shadow-sm shadow-slate-200 overflow-hidden">
               <CardHeader className="bg-white border-b">
                  <CardTitle className="text-sm font-black uppercase tracking-widest italic text-slate-400">Payroll Overview</CardTitle>
               </CardHeader>
               <CardContent className="p-8 space-y-8">
                  <div>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Estimated Earnings (Oct)</p>
                     <p className="text-3xl font-black text-emerald-700 italic">$4,120.50</p>
                  </div>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100 italic transition-transform hover:scale-[1.02]">
                        <div className="flex items-center gap-3">
                           <Clock className="h-4 w-4 text-slate-400" />
                           <span className="text-xs font-bold text-slate-600">Hours Tracked</span>
                        </div>
                        <span className="text-sm font-black text-slate-900">142h</span>
                     </div>
                     <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100 italic transition-transform hover:scale-[1.02]">
                        <div className="flex items-center gap-3">
                           <TrendingUp className="h-4 w-4 text-slate-400" />
                           <span className="text-xs font-bold text-slate-600">Efficiency Bonus</span>
                        </div>
                        <span className="text-sm font-black text-emerald-600">+$240</span>
                     </div>
                  </div>
                  <Button variant="link" className="w-full text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 p-0 h-auto gap-2">View Full Paystub <ExternalLink className="h-3 w-3" /></Button>
               </CardContent>
            </Card>

            <div className="p-8 bg-emerald-50/50 border-2 border-dashed border-emerald-100 rounded-[2.5rem] text-center space-y-4 italic">
               <ThumbsUp className="h-8 w-8 text-emerald-500 mx-auto" />
               <p className="text-sm font-bold text-emerald-900 leading-relaxed">You're in the Top 5% of cleaners this month! Check your rewards portal.</p>
               <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-widest text-[9px] h-12 rounded-2xl shadow-lg shadow-emerald-200">Claim Rewards</Button>
            </div>
         </div>
      </div>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
