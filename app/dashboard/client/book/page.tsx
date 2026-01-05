"use client"

import { 
  Sparkles, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Star,
  Plus,
  Minus
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const packages = [
  {
    name: "Classic Refresh",
    desc: "Standard maintenance cleaning for offices or homes.",
    price: "$120",
    features: ["Dusting & Wiping", "Vacuum & Mop", "Kitchen Surfaces", "Bathroom Sanitization"],
    color: "slate",
    icon: Zap
  },
  {
    name: "Premium Gold",
    desc: "Comprehensive deep cleaning with hospital-grade sanitization.",
    price: "$240",
    features: ["Everything in Classic", "Window Interiors", "Carpet Steam Clean", "High-Touch Sanitization"],
    color: "emerald",
    icon: Sparkles,
    popular: true
  },
  {
    name: "Platinum Elite",
    desc: "The ultimate cleaning experience with exterior & interior care.",
    price: "$450",
    features: ["Everything in Gold", "Pressure Washing", "Detailed Upholstery", "Fridge & Oven Interior"],
    color: "indigo",
    icon: ShieldCheck
  }
]

export default function ClientBookPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <div className="flex items-center gap-2 mb-1">
              <Badge className="bg-emerald-100 text-emerald-700 border-none font-black text-[8px] uppercase px-3 py-1">New Booking</Badge>
              <div className="h-1 w-1 rounded-full bg-slate-300" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Step 1 of 3: Selection</span>
           </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Experience Global Cleanliness</h1>
          <p className="text-slate-500 mt-1 italic font-medium underline decoration-emerald-200 decoration-2 underline-offset-4">Select the cleaning masterpiece that fits your needs.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, i) => (
          <Card key={i} className={cn(
            "border-none shadow-sm shadow-slate-200 overflow-hidden group transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative",
            pkg.popular && "ring-2 ring-emerald-500 shadow-emerald-100"
          )}>
            {pkg.popular && (
               <div className="absolute top-0 right-0">
                  <div className="bg-emerald-500 text-white text-[9px] font-black uppercase tracking-[0.3em] px-6 py-2 rotate-45 translate-x-6 -translate-y-1 shadow-lg">Most Popular</div>
               </div>
            )}
            <CardHeader className="p-8 pb-4">
               <div className={cn(
                  "h-12 w-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:scale-110 duration-500",
                  pkg.color === "emerald" ? "bg-emerald-50 text-emerald-600" :
                  pkg.color === "indigo" ? "bg-indigo-50 text-indigo-600" : "bg-slate-50 text-slate-600"
               )}>
                  <pkg.icon className="h-6 w-6" />
               </div>
               <CardTitle className="text-2xl font-bold text-slate-900 tracking-tight">{pkg.name}</CardTitle>
               <CardDescription className="text-sm font-medium text-slate-500 leading-relaxed italic">{pkg.desc}</CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-8">
               <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900 leading-none">{pkg.price}</span>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">/ session</span>
               </div>

               <div className="space-y-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Standard Inclusions:</p>
                  <ul className="space-y-3">
                     {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                           <CheckCircle2 className={cn("h-4 w-4 shrink-0 mt-0.5", pkg.color === "emerald" ? "text-emerald-500" : "text-slate-300")} />
                           <span className="text-sm font-medium text-slate-600">{feature}</span>
                        </li>
                     ))}
                  </ul>
               </div>

               <Button className={cn(
                  "w-full h-14 font-black uppercase tracking-[0.2em] text-xs shadow-lg transition-all duration-300",
                  pkg.color === "emerald" ? "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200" :
                  pkg.color === "indigo" ? "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200" : "bg-slate-900 hover:bg-slate-800 shadow-slate-200"
               )}>
                  Choose {pkg.name.split(' ')[0]} <ChevronRight className="ml-2 h-4 w-4" />
               </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-none shadow-sm shadow-slate-200 bg-slate-50/50">
         <CardContent className="p-10 text-center space-y-6">
            <div className="h-16 w-16 rounded-full bg-white shadow-md mx-auto flex items-center justify-center border-4 border-slate-50">
               <Star className="h-8 w-8 text-amber-500 fill-amber-500" />
            </div>
            <div className="space-y-2">
               <h3 className="text-xl font-bold text-slate-900 italic">Custom Quote Needed?</h3>
               <p className="text-sm text-slate-500 font-medium max-w-lg mx-auto leading-relaxed">For large industrial spaces, complex multi-site operations, or specialized bio-hazard requirements, please reach out directly for a tailored consultation.</p>
            </div>
            <Button variant="outline" className="h-12 border-slate-200 bg-white font-black uppercase tracking-[0.2em] text-[10px] px-10 hover:text-emerald-600">Contact Enterprise Sales</Button>
         </CardContent>
      </Card>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
